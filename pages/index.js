import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// react-icons
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillHtml5,
} from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoWordpress,
  IoLogoFirebase,
} from "react-icons/io5";
import { FaPhp, FaGitAlt } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { SiAdobexd } from "react-icons/si";

// import images
import jclogo from "../public/img/my-logo.png";
import junnel from "../public/img/my-picture.webp";
import BsProject from "../public/img/bootstrap-page.webp";
import NextJStripe from "../public/img/next-js-stripe-intg.webp";
import ReactDashboard from "../public/img/react-dashboard.webp";
import NavBar from "../components/NavBar";

import TypewriterComponent from "typewriter-effect";

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

      <main className="bg-white">
        <section className="min-h-screen">
          <div className=" mb-8 px-4 py-5 md:py-0 sticky top-0 z-50 bg-white">
            <div className="md:container mx-auto flex justify-between items-center">
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

              <NavBar />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mx-auto md:container items-center mb-12 px-4">
            <div className="md:flex justify-center">
              <Image
                src={junnel}
                className="rounded-full mb-4 w-96 mx-auto"
                alt="Junnel Crucillo Picture"
              />
            </div>
            <div className="text-center">
              <h2 className="text-4xl py-2 text-teal-600 font-bold">
                <TypewriterComponent
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Junnel Crucillo")
                      .pauseFor(2500)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <h3 className="text-2xl py-2 font-medium uppercase">
                Web Developer
              </h3>
              <p className="mb-4 text-sm leading-8 text-gray-600">
                Hi there! I am a Digital Media and IT (Information Technology)
                specialized in Web Design and Development who is passionate
                about making functional and well-designed websites.
              </p>
              <p className="mb-4 text-sm leading-8 text-gray-600">
                With my passion and enthusiasm in the web development world, I
                can assure people that I always give the best of my abilities to
                create their websites.
              </p>
              <p className="mb-4 text-sm leading-8 text-gray-600">
                I am always excited to further enhance my skills and take it to
                the next level. Contact me so that I can showcase what I can do
                for you!
              </p>
              <ul className="grid grid-cols-3 justify-items-center">
                <li>
                  <Link
                    href="https://twitter.com/JunnelC_WebDev"
                    target="_blank"
                  >
                    <AiFillTwitterCircle className="text-7xl transition-all hover:fill-teal-500" />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/JCrucillo2" target="_blank">
                    <AiFillGithub className="text-7xl transition-all hover:fill-teal-500" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/junnelc_webdev/"
                    target="_blank"
                  >
                    <AiFillInstagram className="text-7xl transition-all hover:fill-teal-500" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:container mx-auto px-4" id="skills">
            <h2 className="uppercase font-bold text-4xl text-teal-600 text-center underline">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center py-9">
              <div className="flex items-center flex-col">
                <AiFillHtml5 className="text-8xl transition-all hover:fill-teal-500" />
                <p className="text-sm font-bold">HTML5</p>
              </div>
              <div className="flex items-center flex-col">
                <DiCss3 className="text-8xl transition-all hover:fill-teal-500" />
                <p className="text-sm font-bold">CSS3</p>
              </div>
              <div className="flex items-center flex-col">
                <IoLogoJavascript className="text-8xl transition-all hover:fill-teal-500" />
                <p className="text-sm font-bold">JavaScript</p>
              </div>
              <div className="flex items-center flex-col">
                <FaGitAlt className="text-8xl transition-all hover:fill-teal-500" />
                <p className="text-sm font-bold">Git</p>
              </div>
              <div className="flex items-center flex-col">
                <IoLogoReact className="text-8xl transition-all hover:fill-teal-500" />
                <p className="text-sm font-bold">React</p>
              </div>
              <div className="flex items-center flex-col">
                <IoLogoWordpress className="text-8xl transition-all hover:fill-teal-500" />
                <p className="text-sm font-bold">WordPress</p>
              </div>
              <div className="flex items-center flex-col">
                <IoLogoFirebase className="text-8xl transition-all hover:fill-teal-500" />
                <p className="text-sm font-bold">Firebase</p>
              </div>
              <div className="flex items-center flex-col">
                <FaPhp className="text-8xl transition-all hover:fill-teal-500" />
                <p className="text-sm font-bold">PHP</p>
              </div>
              <div className="flex items-center flex-col">
                <SiAdobexd className="text-8xl transition-all hover:fill-teal-500" />
                <p className="text-sm font-bold">Adobe XD</p>
              </div>
              <div className="flex items-center flex-col">
                <DiResponsive className="text-8xl transition-all hover:fill-teal-500" />
                <p className="text-sm font-bold">Responsive Design</p>
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-teal-600 to-purple-400"
            id="projects"
          >
            <div className="md:container mx-auto px-4 text-white">
              <h2 className="uppercase font-bold text-4xl pt-9 text-center underline">
                Projects
              </h2>
              <div className="py-9">
                <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                  <div
                    className="aos-init aos-animate"
                    data-aos="zoom-in-left"
                    data-aos-duration="600"
                  >
                    <Image
                      src={BsProject}
                      alt="Bootstrap project"
                      className="w-fit rounded-md"
                    />
                  </div>
                  <div
                    className="aos-init aos-animate"
                    data-aos="zoom-in-down"
                    data-aos-duration="600"
                  >
                    <h3 className="text-3xl font-bold my-4">
                      Bootstrap Project
                    </h3>
                    <p className=" text-gray-800">
                      A project website designed using a CSS framework called
                      Bootstrap. With this framework, I learned how to design a
                      website using custom classes to create a responsive and
                      well-designed website.
                    </p>
                    <p className="my-4">
                      <span className="font-bold">Tools used:</span> HTML,
                      Bootstrap 4
                    </p>
                    <div className="uppercase flex items-center gap-4">
                      <Link
                        href="https://bootstrap-final.netlify.app/"
                        className="bg-black font-bold text-white p-2.5 rounded-md transition-all hover:bg-white hover:text-black"
                        target="_blank"
                      >
                        Live Site
                      </Link>
                      <Link
                        href="https://github.com/JCrucillo2/a03-Assignment-4"
                        className="bg-black font-bold text-white p-2.5 rounded-md transition-all hover:bg-white hover:text-black"
                        target="_blank"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
                  <div
                    className="lg:order-last aos-init aos-animate"
                    data-aos="zoom-in-right"
                    data-aos-duration="600"
                  >
                    <Image
                      src={ReactDashboard}
                      alt="React Dashboard Project"
                      className="w-fit rounded-md"
                    />
                  </div>
                  <div
                    className="aos-init aos-animate"
                    data-aos="zoom-in-down"
                    data-aos-duration="600"
                  >
                    <h3 className="text-3xl font-bold my-4">React Dashboard</h3>
                    <p className=" text-gray-800">
                      React dashboard is my very first project I did with React
                      and I loved it ever since. This site features a functional
                      login page that protects anything inside it even if
                      manually redirecting to the main dashboard. It also
                      includes integrating Firebase Database to perform various
                      tasks such as reading, creating, editing, and deleting
                      data. I learned how to use async/await and Firebase api
                      while working on this project.
                    </p>
                    <p className="my-4">
                      <span className="font-bold">Tools used:</span> React,
                      Firebase, styled-components, react-icons
                    </p>
                    <div className="uppercase flex items-center gap-4">
                      <Link
                        href="https://jcfigures-react.netlify.app/"
                        className="bg-black font-bold text-white p-2.5 rounded-md transition-all hover:bg-white hover:text-black"
                        target="_blank"
                      >
                        Live Site
                      </Link>
                      <Link
                        href="https://github.com/JCrucillo2/jcfigures-react"
                        className="bg-black font-bold text-white p-2.5 rounded-md transition-all hover:bg-white hover:text-black"
                        target="_blank"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div
                    className="aos-init aos-animate"
                    data-aos="zoom-in-left"
                    data-aos-duration="600"
                  >
                    <Image
                      src={NextJStripe}
                      alt="NextJS Project with Stripe"
                      className="w-fit rounded-md"
                    />
                  </div>
                  <div
                    className="aos-init aos-animate"
                    data-aos="zoom-in-down"
                    data-aos-duration="600"
                  >
                    <h3 className="text-3xl font-bold my-4">
                      NextJS w/ StripeJS Integration
                    </h3>
                    <p className=" text-gray-800">
                      In this project, We used a react framework called Next.js
                      to create a storefront. Together, along with what I
                      learned from using Firebase, I was able to create a
                      dynamic storefront that I can control which products I
                      want to sell. We also integrated StripeJS as a payment
                      method so that users are able to checkout items with a
                      clean UI. Everything in here is designed with Tailwind
                      CSS.
                    </p>
                    <p className="my-4">
                      <span className="font-bold">Tools used:</span> NextJS,
                      StripeJS, Firebase, Tailwind
                    </p>
                    <div className="uppercase flex items-center gap-4">
                      <Link
                        href="https://jcfigures-next.vercel.app/"
                        className="bg-black font-bold text-white p-2.5 rounded-md transition-all hover:bg-white hover:text-black"
                        target="_blank"
                      >
                        Live Site
                      </Link>
                      <Link
                        href="https://github.com/JCrucillo2/jcfigures-next"
                        className="bg-black font-bold text-white p-2.5 rounded-md transition-all hover:bg-white hover:text-black"
                        target="_blank"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 mx-auto md:container px-4" id="contact">
            <h2 className="uppercase font-bold text-4xl text-center text-teal-600 py-4 underline">
              Contact Me
            </h2>
            <div className="grid md:grid-cols-2 md:gap-4 md:items-center">
              <div className="text-center">
                <p className="mb-4 text-gray-600">
                  If you have any questions about me or any of my projects,
                  please don't hesitate to message me!
                </p>
                <p className="mb-4 text-gray-600">
                  I am always open to talk more about my current experience and
                  I am willing to learn so much more!
                </p>
                <p className="mb-4 text-gray-600">
                  Email me at:
                  <Link
                    href="mailto:junnelcrucillo729@outlook.com"
                    className="font-bold inline-block w-full text-teal-600"
                  >
                    junnelcrucillo729@outlook.com
                  </Link>
                </p>
              </div>
              <div>
                <form
                  action="https://formsubmit.co/2f5263555334d0701a11bb333a3faea9"
                  method="POST"
                  className=""
                >
                  <input type="hidden" name="_subject" value="New Email!" />
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2.5 font-bold">
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-input rounded-md w-full"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <input
                    type="hidden"
                    name="_next"
                    value="https://junnel-portfolio.vercel.app/form/thank-you"
                  />
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-2.5 font-bold">
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input rounded-md w-full"
                      placeholder="johndoe@xyz.com"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block mb-2.5 font-bold">
                      Message:
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      className="form-textarea w-full rounded-md"
                      placeholder="Your message here!"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-center bg-teal-600 text-white px-4 py-3 rounded-md transition-all hover:bg-black uppercase font-bold w-full"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
