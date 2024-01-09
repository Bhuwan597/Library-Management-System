import Link from 'next/link'
import React from 'react'

const NoticeCard = ({title, description, imageSrc, publishedDate, category}) => {
  return (
    <div class="mb-6 flex flex-wrap md:mx-2 shadow-xl rounded-xl">
    {/* <div class="mb-2 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
      <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
        data-te-ripple-init data-te-ripple-color="light">
        <img src={imageSrc} class="w-full" alt="Louvre" />
        <a href="#!">
          <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
          </div>
        </a>
      </div>
    </div> */}

    <div class="mb-2 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 lg:w-9/12">
    <Link href={'#'}><h5 class="mb-1 text-lg font-bold">{title}</h5></Link>
      
      <div
        class="mb-1 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
        {category}
      </div>
      <p class="mb-2 text-neutral-700 dark:text-neutral-300">
        <small>Published <u>{publishedDate}</u></small>
      </p>
      {/* <p class="text-neutral-500 dark:text-neutral-300">
       {description}
      </p> */}
    </div>
  </div>
  )
}

export default NoticeCard