import React from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Bookcard = ({ imageSrc, title, author, slug }) => {
  return (
    <Card className="py-4 mx-3 h-auto ">
      <CardBody className="py-2 flex flex-col justify-center items-center overflow-hidden">
        <Image
          alt="Card background"
          className="object-fit rounded-xl h-60 min-w-full hover:scale-110 ease-in-out duration-300"
          src={imageSrc}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{title}</h4>
        <p className="text-tiny uppercase font-bold">{author}</p>
        <Button className='w-full mt-4' as={Link} href={`/books/${slug}`} color="danger" vairant='solid' endContent={<FaArrowRight />}>View</Button>
      </CardHeader>
    </Card>
  );
};

export default Bookcard;
