import Status from "./Status";
import { WindowIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ContactForm from "./ContactForm";

const Hero = () => {
  return (
    <section className="wrapper xl:my-8">
      <h1 className="capitalize font-bold my-4">
        Hey! I&apos;m{" "}
        <span className="text-blue-500 text-2xl sm:text-3xl">Adib Mirza</span>
        <br />
        and a
        <span className="bg-black border border-black dark:bg-gray-800/50 w-10 h-10 sm:w-15 sm:h-15 inline-block mx-2 sm:mx-4 p-1 align-middle rounded-lg shadow-lg -rotate-3">
          <WindowIcon className="fill-transparent stroke-accent dark:stroke-gray-400" />
        </span>
        Software engineer
      </h1>
      <p className="mb-4 text-muted-foreground">
        Crafting scalable, efficient and reliable system for digital solutions.
      </p>
      <div className="flex items-center space-x-4">
        <div className="space-x-1">
          <Button asChild variant="ghost" size="icon">
            <Link href="https://www.linkedin.com/in/adibmirza" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href="https://github.com/adeebmeerza" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </Button>
        </div>

        {/* <Button variant="secondary">Contact Me</Button> */}
        <Dialog>
          <DialogTrigger>
            <Status>Available to work</Status>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-2">Hello!</DialogTitle>
              <DialogDescription>
                Let&apos;s discuss what&apos;s in your mind. <br />
                Request my resume, or we can just get connected.
              </DialogDescription>
            </DialogHeader>

            <ContactForm />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Hero;
