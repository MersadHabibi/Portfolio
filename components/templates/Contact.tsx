"use client";

import { sendEmailAction } from "@/actions/sendEmailAction";
import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { useState } from "react";
import toast from "react-hot-toast";
import SectionHeader from "../modules/SectionHeader";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const sendEmailHandler = async () => {
    if (!name || !email || !body) {
      return toast.error("Data invalid");
    }

    setIsLoading(true);
    const res = await sendEmailAction(name, email, body);
    setIsLoading(false);

    if (res.status === 200) {
      return toast.success("Email sended successfully");
    }

    return toast.error(res.message);
  };

  return (
    <section
      id="contact"
      className="flex flex-col gap-x-20 px-2 pb-24 pt-8 lg:flex-row lg:justify-between lg:pb-48 lg:pt-24 xl:gap-x-32 2xl:gap-x-60">
      <SectionHeader
        title="Contact Here"
        description={
          <>
            Have a project idea? <br /> just say me Hi.
          </>
        }
        className="!pt-4"
        titleClassName="mr-auto"
      />
      <div className="w-full space-y-10 sm:space-y-14 lg:pr-10">
        <div className="flex">
          <h3
            className={cn(
              "text-border w-fit shrink-0 border-l-2 border-black bg-first-color-100 px-1 text-xl font-normal shadow-md shadow-first-color-100/50 sm:text-3xl/10",
              FHandlee.className,
            )}>
            Name
          </h3>
          <input
            type="text"
            placeholder="Your name ..."
            className={cn(
              "w-full border-b border-black bg-transparent px-3 outline-none sm:px-6 sm:text-[28px]",
              FHandlee.className,
            )}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="flex">
          <h3
            className={cn(
              "text-border w-fit shrink-0 border-l-2 border-black bg-third-color-100 px-1 text-xl font-normal shadow-md shadow-third-color-100/40 sm:text-3xl/10",
              FHandlee.className,
            )}>
            Your Email
          </h3>
          <input
            type="email"
            placeholder="Your email ..."
            className={cn(
              "w-full border-b border-black bg-transparent px-3 outline-none sm:px-6 sm:text-[28px]",
              FHandlee.className,
            )}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex">
          <h3
            className={cn(
              "text-border w-fit shrink-0 border-l-2 border-black bg-second-color-100 px-1 text-xl font-normal shadow-md shadow-second-color-100/30 sm:text-3xl/10",
              FHandlee.className,
            )}>
            About Project
          </h3>
          <input
            type="text"
            placeholder="Description ..."
            className={cn(
              "w-full border-b border-black bg-transparent px-3 outline-none sm:px-6 sm:text-[28px]",
              FHandlee.className,
            )}
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </div>
        <button
          className="ml-auto block bg-first-text-color px-7 py-2.5 font-semibold text-white disabled:opacity-70 sm:px-10 sm:py-[15px] sm:text-2xl"
          onClick={sendEmailHandler}>
          {isLoading ? <div className="loader"></div> : "Send Here"}
        </button>
      </div>
    </section>
  );
}
