import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// react-icons
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

// import images
import jclogo from "../public/img/my-logo.png";
import junnel from "../public/img/my-picture.webp";

export default function Home() {
  return (
    <div className="font-poppins">
      <Head>
        <title>Junnel Crucillo Portfolio</title>
        <meta
          name="description"
          content="A site where I show what I am about and my works"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-4">
        <section className="min-h-screen">
          <nav className="flex items-center justify-between py-8 mb-12 md:container mx-auto">
            <h1>
              <Link href="/" className="flex items-center">
                <Image
                  src={jclogo}
                  className="w-8 relative"
                  alt="My Personal Logo"
                />
                <span className="hidden md:inline-block md:ml-4 font-bold">
                  Junnel Crucillo
                </span>
              </Link>
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <Link
                  className="bg-gradient-to-r from-teal-500 to-purple-400 text-white px-4 py-2 rounded-md ml-4"
                  href="/files/my-resume.pdf"
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>

          <div className="grid md:grid-cols-2 gap-4 mx-auto md:container items-center mb-4">
            <div className="md:flex justify-center">
              <Image
                src={junnel}
                className="rounded-full mb-4 md:w-96"
                alt="Junnel Crucillo Picture"
              />
            </div>
            <div className="text-center">
              <h2 className="text-4xl py-2 text-teal-600 font-bold">
                Junnel Crucillo
              </h2>
              <h3 className="text-2xl py-2 font-medium">Web Developer</h3>
              <p className="mb-4 text-sm leading-8 text-gray-800">
                Hi there! I am a Digital Media and IT (Information Technology)
                specialized in Web Design and Development who is passionate
                about making functional and well-designed websites.
              </p>
              <p className="mb-4 text-sm leading-8 text-gray-800">
                With my passion and enthusiasm in the web development world, I
                can assure people that I always give the best of my abilities to
                create their websites.
              </p>
              <p className="mb-4 text-sm leading-8 text-gray-800">
                I am always excited to further enhance my skills and take it to
                the next level. Contact me so that I can showcase what I can do
                for you!
              </p>
              <ul className="grid grid-cols-3 justify-items-center">
                <li>
                  <Link href="https://twitter.com/">
                    <AiFillTwitterCircle className="text-7xl transition-all hover:fill-teal-500" />
                  </Link>
                </li>
                <li>
                  <Link href="www.github.com/">
                    <AiFillGithub className="text-7xl transition-all hover:fill-teal-500" />
                  </Link>
                </li>
                <li>
                  <Link href="www.instagram.com/">
                    <AiFillInstagram className="text-7xl transition-all hover:fill-teal-500" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}