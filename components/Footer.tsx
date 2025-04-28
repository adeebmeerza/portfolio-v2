import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Mail, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";
import { RefObject } from "react";

const Footer = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => {
  return (
    <>
      <div className="w-full h-12 bg-gradient-to-t from-primary/30 to-background dark:from-primary/30 dark:to-background" />

      <footer className="bg-slate-50 dark:bg-primary/5 border-t" ref={ref}>
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            {/* Brand section  */}
            <div>
              <div>
                <Image
                  src={"/logo.svg"}
                  alt={"Addebmeerza logo"}
                  width={30}
                  height={30}
                />
                <h3 className="font-bold text-xl mt-2 mb-3">AdeebMeerza.</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Projecting passion and precision through professional projects.
              </p>

              <div className="flex space-x-4 -ml-1">
                <Link
                  href="https://www.linkedin.com/in/adibmirza"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4" />

                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>

                <Link href="https://github.com/adeebmeerza" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                  >
                    <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />

                    <span className="sr-only">Github</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact */}
              <div className="lg:ml-auto lg:mr-16">
                <h3 className="font-semibold mb-4">Contact</h3>

                <ul className="space-y-2">
                  <li className="flex items-center text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2 text-base shrink-0" />
                    <a
                      href="mailto:adib.mirza.dev@gmail.com"
                      className="hover:text-foreground transition-colors text-sm"
                    >
                      adib.mirza.dev@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                    <span>
                      <p className="text-sm">Cyberjaya, Selangor</p>
                      <p className="text-sm">Malaysia</p>
                    </span>
                  </li>
                </ul>
              </div>

              {/* message box */}
              <div>
                <h3 className="font-semibold mb-3">Get in touch</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Let&apos;s start realizing your idea. Request my resume, or
                  just get connected.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="border-t py-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Adeebmeerza. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
