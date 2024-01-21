import { Button } from '@nextui-org/react'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const RequestBook = () => {
  return (
    <div className="flex gap-2">
    <Button color="danger" className="flex ml-auto">
      Request this book
    </Button>
    <Button
      color="default"
      className="rounded-full"
      isIconOnly
      aria-label="Add to Favourites"
    >
      <FaRegHeart />
    </Button>
  </div>
  )
}

export default RequestBook