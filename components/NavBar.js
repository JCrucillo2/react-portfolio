import { useState } from "react";
import Link from "next/link";

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute md:static top-0 left-0 w-full bg-white transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter md:-translate-y-0`}
    >
      <div className="flex flex-col md:flex-row md:gap-4 justify-center items-center mt-12 md:mt-0">
        <Link
          className="font-bold text-2xl transition-all hover:text-teal-600 my-4"
          href="#skills"
          scroll={false}
        >
          Skills
        </Link>
        <Link
          className="font-bold text-2xl transition-all hover:text-teal-600 my-4"
          href="#projects"
          scroll={false}
        >
          Projects
        </Link>
        <Link
          className="font-bold text-2xl transition-all hover:text-teal-600 my-4"
          href="#contact"
          scroll={false}
        >
          Contact
        </Link>
        <Link
          href="/files/my-resume.pdf"
          className="bg-gradient-to-r from-teal-600 to-purple-400 px-4 py-2.5 font-bold text-white rounded-md my-4"
          target="_blank"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-11/12 flex justify-end items-center md:hidden">
        <div
          className="group z-50 relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span
            className={`h-1 w-full bg-black rounded-md group-hover:text-teal-600 cursor pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-md group-hover:text-teal-600 cursor pointer transform transition duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-md group-hover:text-teal-600 cursor pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
}
