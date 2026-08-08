import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Reveal>
      <section className="py-12">
        <div className="container-custom">

          <h2 className="mb-5 text-[24px] font-semibold">
            Contact
          </h2>

          <div className="contact-wrapper">

            <a
              href="mailto:tp.ratchapong@gmail.com"
              className="contact-item"
            >
              <FaEnvelope />
              tp.ratchapong@gmail.com
            </a>

            <a
              href="tel:0958762089"
              className="contact-item"
            >
              <FaPhoneAlt />
              095-876-2089
            </a>

          </div>

        </div>
      </section>
    </Reveal>
  );
}