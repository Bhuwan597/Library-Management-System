
import React from "react";
import Navbar from "@/app/components/Navbar";
import ContactForm from "@/app/components/partials/ContactForm";

const ContactPage = () => {
 
  return (
    <>
      <Navbar />
      <div className="relative flex items-top justify-center min-h-screen bg-white sm:items-center sm:pt-0">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100  sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-red-600  font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-red-400 mt-2">
                  Share thoughts on your library experience. Contact us through
                  this form about your feedbacks and issues. Your feedback helps
                  us improve services and create a better environment for
                  everyone. Thanks!
                </p>

                <div className="flex items-center mt-8 text-gray-600 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    <a
                      href="https://www.google.com/maps/place/Paschimanchal+Campus+Gate/@28.2551339,83.9743984,17z/data=!4m10!1m2!2m1!1sPaschimanchal+Campus+!3m6!1s0x39959514e2774df9:0xd972d1047ddab577!8m2!3d28.2563752!4d83.9775708!15sChRQYXNjaGltYW5jaGFsIENhbXB1c5IBF2VkdWNhdGlvbmFsX2luc3RpdHV0aW9u4AEA!16s%2Fg%2F11hyd4g2df?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pashchimanchal Campus, Lamachaur, Pokhara
                    </a>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      height: "150px",
                      width: "50%",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14057.535432847406!2d83.9585163871582!3d28.256375199999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959514e2774df9%3A0xd972d1047ddab577!2sPaschimanchal%20Campus%20Gate!5e0!3m2!1sne!2snp!4v1704768544301!5m2!1sne!2snp"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 10,
                        width: "100%",
                        height: "100%",
                        border: "0",
                      }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +44 1234567890
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 ">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    <a
                      href="mailto:ashimsth89@gmail.com"
                      className=" hover:underline"
                    >
                      ashimsth89@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
