import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const MessageFromPresident = () => {
    return (
        <>
            <div className="text-center mb-8">
                <p className="text-sm text-red-500">President&apos;s Insights</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                    Message From President
                </h2>
            </div>
            <div className="w-full bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row my-10">

                <div className="w-full md:w-2/5 h-80">
                    <img className="object-center object-cover w-full h-full"
                         src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                         alt="photo" />
                </div>
                <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                    <p className="text-xl text-white font-bold">Basu Dev Poudel</p>
                    <p className="text-base text-gray-200 font-normal">President of Akhil KrantiKari, Pashchimanchal
                        Campus</p>
                    <p className="text-base leading-relaxed text-gray-400 font-normal">Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Nihil doloribus, tempora beatae ratione ipsam amet molestiae, quis
                        quibusdam dicta suscipit id temporibus pariatur nulla placeat dignissimos atque deserunt autem
                        soluta dolor? Ad, aliquam, doloribus earum doloremque velit excepturi eligendi, a pariatur eveniet
                        maiores enim maxime sequi cum soluta. Iure, sequi qui dolor ad labore possimus quod natus.
                        Accusantium facilis quo saepe quaerat sequi magnam recusandae laborum. Nam eligendi voluptate
                        modi, dolore quos incidunt fugit, suscipit repudiandae nihil earum, aliquam temporibus qui. Vitae
                        optio pariatur cum ullam aut fugiat! Sed dolorem adipisci perspiciatis inventore quas aliquam
                        reiciendis voluptatibus nesciunt, iusto sunt?</p>
                    <div className="flex justify-start space-x-2">
                        <Link href="#" className="text-blue-500 hover:text-blue-600">
                            <FaFacebook className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-purple-500 hover:text-purple-600">
                            <FaInstagram className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-green-500 hover:text-green-600">
                            <FaWhatsapp className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="text-blue-500 hover:text-blue-600">
                            <FaLinkedin className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageFromPresident;
