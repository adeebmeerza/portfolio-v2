import Image from "next/image";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section className="wrapper" id="about">
      <h2>About Me</h2>

      <div className="w-full md:w-5/6 lg:w-3/5 py-4 sm:py-0 sm:px-8">
        <Image
          src={"/profile-pic.jpeg"}
          alt={"Profile picture of the author"}
          width={120}
          height={120}
          className="rounded-md mb-6 shadow-md dark:shadow-gray-600 -rotate-3"
        />
        {/* <div className="mb-6">Hello! I&apos;m Adib</div> */}

        <div className="text-gray-400 my-4">
          <p>
            I&apos;m a software engineer, who works on build scalable, efficient
            and reliable system using{" "}
            <span className="text-primary">TypeScript</span> and{" "}
            <span className="text-primary">Javascript</span>. With a strong
            eagerness to learn and continously improve, I aim to deliver high
            quality, performance-driven software solutions.
          </p>
          <br />
          <p>
            I&apos;m excited to collaborate together to transform a great ideas
            into impactful products.
          </p>
        </div>

        <Button variant="secondary">
          Request my resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default About;
