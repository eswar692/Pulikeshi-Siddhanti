"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  User,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Check,
} from "lucide-react";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        "https://formspree.io/f/mvgaznyw",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="
            rounded-[18px]
            border-2
            border-[#d9b99f]
            bg-[#fffdf9]
            px-2
            py-12
            text-center
          "
        >
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              bg-[#493126]
              text-white
            "
          >
            <Check size={24} />
          </div>

          <h3
            className="
              mt-5
              font-serif
              text-2xl
              font-semibold
              text-[#34251d]
            "
          >
            Message Received
          </h3>

          <p
            className="
              mx-auto
              mt-2
              max-w-sm
              text-sm
              leading-6
              text-[#725c4d]
            "
          >
            Your consultation request has been received.
            We'll contact you shortly.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="
              mt-6
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-[#a65332]
            "
          >
            Submit another →
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* NAME + PHONE */}

          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              label="Your Name"
              icon={User}
            >
              <input
                required
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
                className={inputClass}
              />
            </FormField>

            <FormField
              label="Phone Number"
              icon={Phone}
            >
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Enter phone number"
                className={inputClass}
              />
            </FormField>
          </div>

          {/* EMAIL */}

          <FormField
            label="Email Address"
            optional
            icon={Mail}
          >
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Enter email address"
              className={inputClass}
            />
          </FormField>

          {/* MESSAGE */}

          <FormField
            label="Your Message"
            icon={MessageSquare}
            textarea
          >
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us briefly about your concern..."
              className={`${inputClass} min-h-[125px] resize-none py-4`}
            />
          </FormField>

          {/* PRIVACY BOX */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-[#d8bda8]
              bg-[#f6eadc]
              px-4
              py-3
            "
          >
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-[#493126]
                text-[#fffaf3]
              "
            >
              <ShieldCheck
                size={15}
                strokeWidth={2}
              />
            </div>

            <p
              className="
                text-[12px]
                leading-5
                text-[#654d3e]
              "
            >
              Your details are kept private and used only
              to respond to your consultation request.
            </p>
          </div>

          {/* SUBMIT */}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={
              loading ? undefined : { y: -2 }
            }
            whileTap={
              loading ? undefined : { scale: 0.98 }
            }
            className="
              group
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              bg-[#493126]
              p-1.5
              pl-5
              text-white
              shadow-[0_8px_24px_rgba(73,49,38,0.18)]
              transition-colors
              duration-300
              hover:bg-[#a65332]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            <span
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.12em]
              "
            >
              {loading
                ? "Sending..."
                : "Book a Session"}
            </span>

            <span
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-lg
                bg-[#fffaf3]
                text-[#493126]
              "
            >
              {loading ? (
                <span
                  className="
                    h-4
                    w-4
                    animate-spin
                    rounded-full
                    border-2
                    border-[#493126]/25
                    border-t-[#493126]
                  "
                />
              ) : (
                <ArrowRight
                  size={17}
                  strokeWidth={2.2}
                  className="
                    transition-transform
                    group-hover:translate-x-0.5
                  "
                />
              )}
            </span>
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
};

export default Form;

/* =========================================================
   INPUT DESIGN
========================================================= */

const inputClass = `
  h-[52px]
  w-full
  bg-[#ffffff]
  px-4
  text-[14px]
  font-medium
  text-[#3f2b21]

  outline-none

  placeholder:text-[#9b8577]
  placeholder:font-normal

  transition-all
  duration-200

  focus:bg-[#fffdf9]
`;

/* =========================================================
   FIELD
========================================================= */

function FormField({
  label,
  optional = false,
  icon: Icon,
  textarea = false,
  children,
}: {
  label: string;
  optional?: boolean;
  icon: React.ElementType  ;
  textarea?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      {/* LABEL */}

      <div
        className="
          mb-2
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.1em]
            text-[#493126]
          "
        >
          {label}
        </span>

        {optional && (
          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-wider
              text-[#9a7965]
            "
          >
            Optional
          </span>
        )}
      </div>

      {/* THICK BOX */}

      <div
        className={`
          group
          flex
          overflow-hidden
          rounded-xl

          border-2
          border-[#c9a78d]

          bg-white

          shadow-[0_3px_10px_rgba(73,49,38,0.05)]

          transition-all
          duration-200

          focus-within:border-[#a65332]
          focus-within:shadow-[0_0_0_3px_rgba(166,83,50,0.10)]

          hover:border-[#b47a5c]

          ${
            textarea
              ? "items-start"
              : "items-stretch"
          }
        `}
      >
        {/* ICON BOX */}

        <div
          className={`
            flex
            w-[52px]
            shrink-0
            justify-center

            border-r-2
            border-[#e1c8b5]

            bg-[#f4e5d5]

            text-[#a65332]

            transition-colors

            group-focus-within:bg-[#493126]
            group-focus-within:text-[#fffaf3]

            ${
              textarea
                ? "items-start pt-[17px]"
                : "items-center"
            }
          `}
        >
          <Icon
            size={17}
            strokeWidth={2}
          />
        </div>

        {/* INPUT */}

        <div className="min-w-0 flex-1">
          {children}
        </div>
      </div>
    </label>
  );
}