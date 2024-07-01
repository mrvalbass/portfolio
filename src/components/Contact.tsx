import { forwardRef } from "react";
import ContactOptions from "./ContactOptions";
import ContactForm from "./ContactForm";

function Contact(_: any, ref: any) {
  return (
    <div
      ref={ref}
      className="h-screen bg-[#495c78] p-5 flex flex-col"
      id="contact"
    >
      <h1 className="font-bold text-2xl md:text-5xl">CONTACT</h1>
      <div className="grow flex flex-col justify-center items-center gap-5">
        <ContactForm />
        <ContactOptions />
      </div>
    </div>
  );
}
export default forwardRef(Contact);
