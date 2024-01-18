"use client";
import React from "react";
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
  useDisclosure,
  ModalHeader,
  Divider,
} from "@nextui-org/react";
import { myBooks } from "@/app/data/MyBooksData";
import { FaEye } from "react-icons/fa";

const MyBooksTable = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="solid" onPress={onClose}>
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
                  name={"The power of your subconscious mind"}
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
                <Button isIconOnly onPress={onOpen}>
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
