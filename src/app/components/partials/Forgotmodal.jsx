import React, { Children } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Forgotmodal = ({text}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Link href={'#'} className="font-semibold text-red-600 hover:text-red-500" onPress={onOpen}>{text}</Link>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Reset Password</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <FaEnvelope className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="danger">
                  Send reset email
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Forgotmodal;
