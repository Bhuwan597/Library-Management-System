import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Divider } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <Divider />
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="text-teal-600"></div>

            <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    KrantiKari Library - Paschimanchal Campus
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Library established by Akhil KrantiKari 31st Committee,
                    Paschimanchal Campus.
                  </p>
                </div>
              </div>

              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full">
                  <label htmlFor="UserEmail" className="sr-only">
                    Email
                  </label>
                  <div className="border-3 border-gray-100 p-2 flex flex-col gap-4 md:flex-row">
                    <input
                      required
                      type="email"
                      id="UserEmail"
                      placeholder="your@gmail.com"
                      className="w-full border-none outline-none focus:border-transparent focus:ring-transparent sm:text-sm px-2"
                    />

                    <button className="mt-1 w-full bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-red-400 sm:mt-0 sm:w-auto sm:shrink-0">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900">Organization</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Meet the Team
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Accounts Review
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900">Quick Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      FAQs
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Live Chat
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Accessibility
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Returns Policy
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Refund Policy
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Hiring Statistics
                    </Link>
                  </li>
                </ul>
              </div>

              <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="h-6 w-6" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="h-6 w-6" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="h-6 w-6" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Whatsapp</span>
                    <FaWhatsapp className="h-6 w-6" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="sm:flex justify-center sm:justify-between">
              <p className="text-sm text-center text-gray-500">
                &copy; 2024. Akhil KranitKari. All rights reserved.
              </p>

              <ul className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
