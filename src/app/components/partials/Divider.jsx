import React from 'react'

const Divider = ({text}) => {
  return (
    <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-4 text-gray-400">{text}</span>
    <div class="flex-grow border-t border-gray-400"></div>
</div>
  )
}

export default Divider