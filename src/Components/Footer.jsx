import MailTo from "./MailTo";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <div className=" h-fit ml-0 mr-0 bg-black/50 backdrop-blur-sm" id="footer">
      <div className="flex justify-around w-full flex-col sm:flex-row gap-4 pl-5 pr-5 lg:pl-10 lg:pr-10 xl:pl-28 xl:pr-28">
        <div className="basis-1/3 text-neutral-200">
          <h1 className="pt-10 pb-10 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase flex  justify-center sm:justify-start">
            venue
          </h1>
          <div className="flex flex-col gap-8 pt-3 items-center sm:items-start sm:text-left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5603.423119488341!2d88.38228609294792!3d22.608739187232796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d503e06cb7b%3A0xf01fd00a505fde18!2sMohit%20Moitra%20Mancha!5e0!3m2!1sen!2sin!4v1688751883858!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-2">
                <GrLocation className="text-2xl invert" />
                <div className="flex flex-col text-left">
                  <p className="flex flex-wrap">
                    Raja Manindra Rd, Tala, Paikpara,
                  </p>
                  <p className="flex flex-wrap">
                    (near Belgachia Metro st.), Kolkata, 700037
                  </p>
                  <p className="flex flex-wrap">West Bengal, India</p>
                </div>
                {/* <MailTo
                  label="bits2bytes.bittechno@gmail.com"
                  mailto="mailto:bits2bytes.bittechno@gmail.com"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-spacing-1 border-white/20 mt-4 mb-4 sm:border-none sm:m-0"></div>
        <div className="basis-1/3 text-neutral-200">
          <h1 className="sm:pt-10 pb-10 text-4xl md:text-5xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase flex justify-center sm:justify-end sm:text-right">
            contact us
          </h1>
          <div className="flex flex-col gap-3 sm:items-end sm:text-right">
            <p>
              Prof. Kuntala Das (Convenor)
              <MailTo
                label="kuntala.das@bitcollege.in"
                mailto="mailto:kuntala.das@bitcollege.in"
              />
            </p>
            <p>
              Dr. Madhusudhan Debnath (Coordinator)
              <MailTo
                label="debnathmphys123@gmail.com"
                mailto="mailto:debnathmphys123@gmail.com"
              />
            </p>
            <p>
              Shreyan Dey (GS) :{" "}
              <a className="text-fuchsia-500" href="tel:90739 99922">
                90739 99922
              </a>
            </p>
            <p>
              Pratim Sen Sharma (CS) :{" "}
              <a className="text-fuchsia-500" href="tel:74395 06293">
                74395 06293
              </a>
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/bits2bytes.bit?mibextid=ZbWKwL"
                target="_blank"
              >
                <FiFacebook className="text-3xl" />
              </a>
              <a
                href="https://instagram.com/bits2bytes_2k23?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
              >
                <FiInstagram className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black/30 py-2 text-neutral-400 tracking-wide mt-6">
        <h1 className="text-sm p-1">
          {" "}
          Made with &#10084; by{" "}
          <a
            href="https://www.linkedin.com/in/tanmoy-choudhury/"
            target="_blank"
            className="hover:text-orange-400 transition-all duration-300"
          >
            Tanmoy Choudhury
          </a>
          {/* ,{" "}
          <a
            href="https://www.linkedin.com/in/sruti-das-b4898926a/"
            target="_blank"
            className="hover:text-orange-400 transition-all duration-300"
          >
            
          </a> */}
        </h1>
      </div>
    </div>
  );
};

export default Footer;