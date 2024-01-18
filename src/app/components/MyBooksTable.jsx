"use client"
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalHeader,
} from "@nextui-org/react";
import { FaEye } from "react-icons/fa";
import { myBooks } from "@/app/data/MyBooksData";

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
      <Modal isOpen={!!selectedBook} onOpenChange={closeModal}>
        <ModalContent>
          {selectedBook && (
            <>
              <ModalHeader>{selectedBook.title}</ModalHeader>
              <ModalBody>
                <p>{selectedBook.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="solid" onPress={closeModal}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Table>
        <TableHeader>
          <TableColumn>Book</TableColumn>
          <TableColumn>Date</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {myBooks.map((book) => (
            <TableRow key={book.id}>
              <TableCell>
                <User
                  name={book.title}
                  description={book.author}
                  avatarProps={{
                    src: "./thinkandgrowrich.jpg",
                    radius: "none",
                  }}
                />
              </TableCell>
              <TableCell>
                {book.publication_date} - {book.publication_date}
              </TableCell>
              <TableCell>
                <Chip color="primary">Active</Chip>
              </TableCell>
              <TableCell>
                <Button isIconOnly onClick={() => openModal(book)}>
                  <FaEye />
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
