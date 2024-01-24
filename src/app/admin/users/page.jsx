"use client";
import React, {useState} from "react";
import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";
import {FaUserAlt, FaTrash} from "react-icons/fa";

const UserData = [
    {
        id: 1,
        username: "john_doe",
        email: "john@example.com",
        dateCreated: "2024-01-24",
    },
    {
        id: 2,
        username: "jane_doe",
        email: "jane@example.com",
        dateCreated: "2024-01-25",
    }, {
        id: 3,
        username: "jane_doe",
        email: "jane@example.com",
        dateCreated: "2024-01-25",
    }, {
        id: 4,
        username: "jane_doe",
        email: "jane@example.com",
        dateCreated: "2024-01-25",
    }, {
        id: 5,
        username: "jane_doe",
        email: "jane@example.com",
        dateCreated: "2024-01-25",
    }, {
        id: 6,
        username: "jane_doe",
        email: "jane@example.com",
        dateCreated: "2024-01-25",
    },

];

const UserTable = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const openModal = (user) => {
        setSelectedUser(user);
    };

    const closeModal = () => {
        setSelectedUser(null);
    };

    const deleteUser = () => {

        console.log(`Deleting user: ${selectedUser.username}`);
        closeModal();
    };

    return (
        <>

                <Modal
                    placement={"center"}
                    isOpen={!!selectedUser}
                    onOpenChange={closeModal}
                    size={'sm'}
                >
                    <ModalContent className="bg-white p-8 rounded-lg shadow-lg">
                        {selectedUser && (
                            <>
                                <ModalHeader
                                    className="text-center text-xl font-extrabold  border-b text-gray-800">
                                    <div className="flex items-center">
                                        <FaUserAlt size="30" className="mr-2 text-gray-700"/>
                                        <span>{selectedUser.username}</span>
                                    </div>
                                </ModalHeader>
                                <ModalBody className=" text-gray-800">
                                    <div>
                                        <p className="text-lg text-center">
                                            Do you want to delete this user?
                                        </p>
                                    </div>
                                </ModalBody>
                                <ModalFooter className="flex justify-center">
                                    <Button
                                        color="danger"
                                        variant="solid"
                                        onPress={deleteUser}
                                        className="px-6 py-2 bg-red-500 text-white hover:bg-red-600 transition flex items-center rounded-full"
                                    >
                                        <FaTrash className="text-xl animate-pulse mr-2"/>
                                        Delete User
                                    </Button>
                                    <Button
                                        onPress={closeModal}
                                        className="px-6 py-2 bg-gray-500 text-white hover:bg-gray-400 transition flex items-center rounded-full ml-2"
                                    >
                                        Cancel
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                <Table className="min-w-full bg-white border border-gray-300">
                    <TableHeader className="bg-gray-100">
                        <TableColumn className=" text-lg font-semibold text-center">
                            Users
                        </TableColumn>
                        <TableColumn className="text-lg font-semibold text-center">
                            Email
                        </TableColumn>
                        <TableColumn className="text-lg font-semibold text-center">
                            Date Created
                        </TableColumn>
                        <TableColumn className="text-lg font-semibold text-center">
                            Delete
                        </TableColumn>
                    </TableHeader>

                    <TableBody emptyContent={"No Users to Display!!!"}>
                        {UserData.map((user) => (
                            <TableRow
                                key={user.id}
                                className="hover:bg-gray-50 transition duration-300 ease-in-out"
                            >
                                <TableCell className="py-3 px-4">
                                    <div className="flex items-center">
                                        <p className={`text-sm font-medium sm:text-lg `}>
                                            {user.username}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell className=" text-sm text-center sm:text-lg">
                                    {user.email}
                                </TableCell>
                                <TableCell className=" text-sm text-center sm:text-lg">
                                    {user.dateCreated}
                                </TableCell>
                                <TableCell className="py-3 px-4 text-center sm:text-lg">
                                    <Button
                                        isIconOnly
                                        size="sm"
                                        variant="light"
                                        className={'text-red'}
                                        onClick={() => openModal(user)}
                                    >
                                        <FaTrash size={"20"} className="text-red-600"/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

        </>
    );
};

export default UserTable;
