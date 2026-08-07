"use client";

import { sendEmailAction } from "@/actions/sendEmailAction";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiSend, FiMail, FiMapPin } from "react-icons/fi";
import SectionHeading from "../modules/SectionHeading";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const sendEmailHandler = async () => {
    if (!name || !email || !body) {
      return toast.error("Please fill in all fields");
    }

    setIsLoading(true);
    const res = await sendEmailAction(name, email, body);
    setIsLoading(false);

    if (res.status === 200) {
      setName("");
      setEmail("");
      setBody("");
      return toast.success("Message sent successfully");
    }

    return toast.error(res.message);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              index="05"
              eyebrow="GET IN TOUCH"
              title={
                <>
                  Let&apos;s build
                  <br />
                  <span className="text-gradient">something great</span>
                </>
              }
              description="Have a project in mind or just want to say hi? My inbox is always open."
            />

            <div className="mt-10 space-y-4">
              <a
                href="mailto:mersadhabibi.work@gmail.com"
                className="flex items-center gap-4 rounded-2xl glass glass-hover p-5">
                <span className="grid size-11 place-items-center rounded-xl bg-accent/15 text-accent-soft">
                  <FiMail className="text-xl" />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm font-medium text-white">
                    mersadhabibi.work@gmail.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl glass p-5">
                <span className="grid size-11 place-items-center rounded-xl bg-cyan-neon/15 text-cyan-neon">
                  <FiMapPin className="text-xl" />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium text-white">
                    Available worldwide · Remote
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl glass p-8">
            <div className="space-y-6">
              <Field label="Your name">
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="contact-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Field>
              <Field label="Email address">
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="contact-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
              <Field label="About your project">
                <textarea
                  rows={4}
                  placeholder="Tell me about what you're building..."
                  className="contact-input resize-none"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </Field>
              <button
                onClick={sendEmailHandler}
                disabled={isLoading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-glow py-4 font-semibold text-white shadow-glow transition-all hover:shadow-glow-lg disabled:opacity-60">
                {isLoading ? (
                  <div className="loader" />
                ) : (
                  <>
                    Send message
                    <FiSend className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-gray-400">
        {label}
      </span>
      {children}
    </label>
  );
}
