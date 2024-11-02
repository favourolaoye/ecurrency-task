import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "@/public/Group.svg";

export default function Footer() {
  const Company = [
    { label: "About", ref: "/about" },
    { label: "Blog", ref: "/blog" },
    { label: "Contact", ref: "/contact" },
    { label: "Jobs", ref: "/jobs" },
  ];

  const Contacts = [
    {
      img: "/facebookIcon.png",
      alt: "facebook icon",
      ref: "https://www.facebook.com",
    },
    {
      img: "/twitterIcon.png",
      alt: "twitter icon",
      ref: "https://www.twitter.com",
    },
    {
      img: "/googleIcon.png",
      alt: "google icon",
      ref: "mailto:nacoospdf@gmail.com",
    },
    {
      img: "/linkedin.png",
      alt: "linkedIn icon",
      ref: "https://www.linkedin.com",
    },
  ];

  return (
    <div className="w-full h-full">
      <footer className="flex py-10 bg-topography bg-cover bg-blueShade text-[#ABABAB]">
        <div className="flex flex-col gap-10 max-w-6xl mx-auto p-4 md:p-8">
          <div className="flex justify-center">
            <Link href="/" className="">
              <Logo className="w-16 h-26 md:w-24" />
            </Link>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <div className="mb-8 md:mb-0 text-white">
              <h2 className="font-semibold text-base text-white mb-4">COMPANY</h2>
              <ul className="space-y-2 text-white]">
                {Company.map((nav, id) => (
                  <li key={id} className="hover:text-blue-400 w-fit">
                    <Link href={nav.ref}>{nav.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8 md:mb-0 w-full text-white">
              <h2 className="font-semibold text-base text-white mb-4">CONTACT</h2>
              <ul className="space-y-2 text-white">
                <li className="text-white font-bold"><span className="border-b-2">Phone</span></li>
                <li className="text-white w-fit">
                  <a href="tel:+2347085073128">+234 708 507 3128</a>
                </li>
                <li className="font-bold"><span className="border-b-2">Address</span></li>
                <li className="text-white">16, Ogindipe Close, Upston Close</li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0 text-white">
              <h2 className="font-semibold text-base text-white mb-4">CONSUMER ADVISORY</h2>
              <p className="text-base text-justify">
                These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
              </p>
              <p className="text-sm mt-2">
                By using our website or product, you agree to follow our{" "}
                <Link href="/">
                  <span className="text-blue-500">terms of service.</span>
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-6 w-fit text-white">
              <h2 className="font-semibold text-white text-base">GET IN TOUCH</h2>
              <ul className="flex flex-col gap-4">
                <li>Feel free to get in touch with us via email.</li>
                <li className="text-white font-bold text-2xl">
                  <a href="mailto:info.webovio@gmail.com">hello@sleepstiq.com</a>
                </li>
                <div className="flex gap-4 items-center">
                  {Contacts.map((contact, id) => (
                    <a
                      key={id}
                      href={contact.ref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={contact.img}
                        width={24}
                        height={24}
                        alt={contact.alt}
                        className="w-6 h-6"
                      />
                    </a>
                  ))}
                </div>
              </ul>
              <p className="text-sm mt-4">
                © {new Date().getFullYear()} @sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
