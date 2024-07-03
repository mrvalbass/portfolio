import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState<React.ReactNode>("SUBMIT");

  const router = useRouter();

  return (
    <form
      action="https://formsubmit.co/23e92fc3f9892d8d8f7566834e813c88 "
      method="POST"
      className="w-3/4 max-w-[1000px] mt-2"
    >
      <fieldset className="border-4 rounded border-[#CBB083] bg-black/70 h-[75vh] px-4 py-8 flex flex-col justify-between gap-8">
        <label className="text-xl font-bold flex flex-col gap-1" htmlFor="name">
          NAME
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-black bg-[#bdbdbd] text-base font-normal rounded p-1 placeholder:text-gray-600"
            required
          />
        </label>
        <label
          className="text-xl font-bold flex flex-col gap-1"
          htmlFor="email"
        >
          EMAIL
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="text-black bg-[#bdbdbd] text-base font-normal rounded p-1 placeholder:text-gray-600"
            required
          />
        </label>
        <label
          className="flex flex-col gap-1 grow max-h-[35vh] text-xl font-bold"
          htmlFor="message"
        >
          MESSAGE
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can I help ?"
            className="grow text-black bg-[#bdbdbd] text-base font-normal rounded p-1 placeholder:text-gray-600"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          onClick={() => {
            if (name && email && message) {
              setTimeout(() => {
                router.replace("/");
              }, 2000);
              setSubmit(
                <span className="loading loading-ring loading-lg"></span>
              );
            }
          }}
          className="flex justify-center items-center w-[200px] h-[75px] border-4 border-[#CBB083] rounded font-['Rubik_Mono_One'] text-xl self-center p-2 cursor-pointer duration-200 hover:bg-[#CBB083] hover:text-black/70 active:scale-75"
        >
          {submit}
        </button>
        {/* Form Settings for formsubmit.co */}
        <input
          type="hidden"
          name="_next"
          value="https://www.valentinguillot.fr"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Your message has been received and will be treated as soon as possible. Thanks for reaching out."
        />
      </fieldset>
    </form>
  );
}
