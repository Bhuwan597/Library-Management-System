"use client"
import React, {useState} from "react";
import {
    Button,
    Chip,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Progress,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import {FaBook, FaCalendarAlt, FaCalendarCheck, FaCheckCircle, FaEye, FaTimes, FaUserAlt} from "react-icons/fa";
import {myBooks} from "@/app/data/MyBooksData";
import Image from "next/image";


const MyBooksTable = () => {
    const [selectedBook, setSelectedBook] = useState(null);
    const currentDate = new Date();

    const openModal = (book) => {
        setSelectedBook(book);
    };

    const closeModal = () => {
        setSelectedBook(null);
    };

    const calculateEndDate = (startDate) => {
        const gapInDays = 15;
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + gapInDays);
        return endDate.toISOString().split('T')[0];
    };

    const isReturnDatePastCurrentDate = (returnDate) => {
        const returnDateObj = new Date(returnDate);
        return returnDateObj < currentDate;
    };
    const remainingDays = () => {
        const endDate = new Date(calculateEndDate(selectedBook.borrowDate));
        const timeDifference = endDate.getTime() - currentDate.getTime();
        const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
        return remainingDays >= 0 ? remainingDays : 0;
    }


    return (<>

        <Modal placement={'center'} isOpen={!!selectedBook} onOpenChange={closeModal} size="xl">
            <ModalContent className="bg-white p-8 rounded-lg shadow-lg">
                {selectedBook && (<>
                    <ModalHeader
                        className="text-center text-4xl font-extrabold mb-4 border-b pb-2 text-gray-800">
                        <div className="flex items-center">
                            <FaBook size='50' className="text-3xl mr-2 text-indigo-600"/>
                            <span>{selectedBook.title}</span>
                        </div>
                    </ModalHeader>
                    <ModalBody className="mb-4 text-gray-800">
                        <div className="mt-4 space-y-4">
                            <p className="text-lg flex items-center">
                                <FaUserAlt className="text-xl mr-2 text-gray-600"/>
                                <span className="font-semibold">Author : </span><span
                                className='ml-2'>{selectedBook.author}</span>
                            </p>
                            <p className="text-lg flex items-center">
                                <FaCalendarAlt className="text-xl mr-2 text-gray-600"/>
                                <span
                                    className="font-semibold">Borrowed Date : </span> <span
                                className='ml-2'>{selectedBook.borrowDate}</span>
                            </p>
                            <p className="text-lg flex items-center">
                                <FaCalendarCheck className="text-xl mr-2 text-green-600"/>
                                <span
                                    className="font-semibold">Return Date : </span><span
                                className='ml-2'>{calculateEndDate(selectedBook.borrowDate)}</span>
                            </p>
                            {isReturnDatePastCurrentDate(calculateEndDate(selectedBook.borrowDate)) ? (
                                <div className="text-lg text-red-600 font-semibold">
                                    <p>Your return date is overdue! 📖</p>
                                    <p>Please return the book as soon as possible.</p>
                                </div>) : (<div className="text-lg text-green-600 font-semibold">
                                <p>You still have time to enjoy the book! 📖</p>
                                <p>Make sure to return it on or before the due date.</p>
                            </div>)}
                            {!isReturnDatePastCurrentDate(
                                calculateEndDate(selectedBook.borrowDate)
                            ) && (
                                <div className="flex items-center space-x-2">
                                    <Progress
                                        value={remainingDays()}
                                        radius={"full"}
                                        size={"md"}
                                        maxValue="15"
                                        label={"Time Left"}
                                        showValueLabel={true}
                                        formatOptions={{
                                            style: "unit",
                                            unit: "day",
                                            unitDisplay: "long",
                                        }}
                                        classNames={{
                                            base: "max-w-md",
                                            track: "drop-shadow-md border border-default",
                                            indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                                            label: "tracking-wider font-medium text-default-600",
                                            value: "text-foreground/60",
                                        }}
                                    />

                                </div>
                            )}
                        </div>
                    </ModalBody>
                    <ModalFooter className="flex justify-center mt-4">
                        <Button
                            color="danger"
                            variant="solid"
                            onPress={closeModal}
                            className="px-6 py-2 bg-red-500 text-white hover:bg-red-600 transition flex items-center rounded-full"
                        >
                            <FaTimes className="text-xl mr-2"/>
                            Close
                        </Button>
                    </ModalFooter>
                </>)}
            </ModalContent>
        </Modal>

        <Table className="min-w-full bg-white border border-gray-300">
            <TableHeader className="bg-gray-100">
                <TableColumn className="py-3 px-4 text-lg font-semibold">Borrowed Books</TableColumn>
                <TableColumn className="py-3 px-4 text-lg font-semibold text-center">Status</TableColumn>
                <TableColumn className="py-3 px-4 text-lg font-semibold text-center">Actions</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No Books to Display!!!"}>
                {myBooks.map((book) => (
                    <TableRow key={book.id} className="hover:bg-gray-50 transition duration-300 ease-in-out">
                        <TableCell className="py-3 px-4">
                            <div className="flex items-center">
                                <Image src={book.image_url} height='40' width='40' alt={book.title}
                                       className="rounded mr-4"/>
                                <div>
                                    <p className="text-lg font-medium">{book.title}</p>
                                    <p className="text-gray-500">{book.author}</p>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="py-3 px-4 text-lg text-center">
                            <Chip
                                startContent={isReturnDatePastCurrentDate(calculateEndDate(book.borrowDate)) ? "" :
                                    <FaCheckCircle/>}
                                color={isReturnDatePastCurrentDate(calculateEndDate(book.borrowDate)) ? "danger" : "success"}
                                variant={'flat'}
                            >
                                {isReturnDatePastCurrentDate(calculateEndDate(book.borrowDate)) ? "Overdue" : "Active"}
                            </Chip>
                        </TableCell>
                        <TableCell className="py-3 px-4 text-center">
                            <Button
                                isIconOnly
                                className="text-blue-500 hover:text-blue-700"
                                onClick={() => openModal(book)}
                            >
                                <FaEye/>
                            </Button>
                        </TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>

    </>);
};

export default MyBooksTable;
