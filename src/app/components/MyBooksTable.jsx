"use client"
import React, {useState} from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Chip,
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalHeader,
} from "@nextui-org/react";
import {FaEye} from "react-icons/fa";
import {myBooks} from "@/app/data/MyBooksData";
import Image from "next/image";
import { FaBook, FaCalendarAlt, FaCalendarCheck, FaTimes } from 'react-icons/fa';


const MyBooksTable = () => {
    const [selectedBook, setSelectedBook] = useState(null);

    const openModal = (book) => {
        setSelectedBook(book);
    };

    const closeModal = () => {
        setSelectedBook(null);
    };

    return (
        <>

            <Modal placement={'center'} isOpen={!!selectedBook} onOpenChange={closeModal}>
                <ModalContent className="bg-white w-96 p-6 rounded-lg shadow-lg">
                    {selectedBook && (
                        <>
                            <ModalHeader className="text-4xl font-bold mb-4 border-b pb-2 text-gray-800">
                                <FaBook className="mr-2" /> {selectedBook.title}
                            </ModalHeader>
                            <ModalBody className="mb-4 text-gray-700">
                                <div className="mt-4">
                                    <p className="text-lg flex items-center">
                                        <FaCalendarAlt className="mr-2" />
                                        <span className="font-semibold text-gray-800">Author:</span> {selectedBook.author}
                                    </p>
                                    <p className="text-lg flex items-center">
                                        <FaCalendarAlt className="mr-2" />
                                        <span className="font-semibold text-gray-800">Borrowed Date:</span> {selectedBook.borrowDate}
                                    </p>
                                    <p className="text-lg flex items-center">
                                        <FaCalendarCheck className="mr-2" />
                                        <span className="font-semibold text-gray-800">Return Date:</span> {selectedBook.returnDate}
                                    </p>
                                </div>
                            </ModalBody>
                            <ModalFooter className="flex justify-end">
                                <Button
                                    color="danger"
                                    variant="solid"
                                    onPress={closeModal}
                                    className="px-6 py-2 bg-red-500 text-white hover:bg-red-600 transition flex items-center"
                                >
                                    <FaTimes className="mr-2" />
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Table className="min-w-full bg-white border border-gray-300">
                <TableHeader className="bg-gray-100">
                    <TableColumn className="py-3 px-4 text-lg font-semibold">Borrowed Books</TableColumn>
                    <TableColumn className="py-3 px-4 text-lg font-semibold text-center">Status</TableColumn>
                    <TableColumn className="py-3 px-4 text-lg font-semibold text-center">Actions</TableColumn>
                </TableHeader>
                <TableBody>
                    {myBooks.map((book) => (
                        <TableRow key={book.id} className="hover:bg-gray-50 transition duration-300 ease-in-out">
                            <TableCell className="py-3 px-4">
                                <div className="flex items-center">
                                    <Image src={book.image_url} height='40' width='40' alt={book.title}
                                           className="rounded-full mr-4"/>
                                    <div>
                                        <p className="text-lg font-medium">{book.title}</p>
                                        <p className="text-gray-500">{book.author}</p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="py-3 px-4 text-lg text-center">
                                <Chip color="primary">Active</Chip>
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </>
    );
};

export default MyBooksTable;
