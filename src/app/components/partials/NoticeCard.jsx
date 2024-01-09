import Link from 'next/link'
import React from 'react'

const NoticeCard = ({title, description, publishedDate, category}) => {
  return (
    <div className="mb-6 flex flex-wrap md:mx-2 shadow-xl rounded-xl">


    <div className="mb-2 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 lg:w-9/12">
    <Link href={'#'}><h5 className="mb-1 text-lg font-bold">{title}</h5></Link>

      <div
        className="mb-1 flex items-center justify-center text-sm font-medium text-danger  md:justify-start">
        {category}
      </div>
      <p className="mb-2 text-neutral-700 ">
        <small>Published <u>{publishedDate}</u></small>
      </p>
       <p className="text-neutral-500">
       {description}
      </p>
    </div>
  </div>
  )
}

export default NoticeCard