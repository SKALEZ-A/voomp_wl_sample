"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { slideIn } from "@/app/utils/motion";
import { styles } from "@/app/styles";
import { SectionWrapper } from "@/app/hoc";
import Image from "next/image";
import dao from "../public/ethdesign.webp";
import { addresses } from "@/app/constants/whitelist";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [address, setAddress] = useState("");

  const handleAddressChange = (event) => {
    setAddress(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsValid(isValidAddress(address));
  };

  const isValidAddress = (address) => addresses.includes(address.toLowerCase());

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row lg:flex-row flex-col gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[300px]  w-auto justify-center flex items-center"
      >
        <Image src={dao} className="w-auto h-[70%] lg:w-[90%] " alt="dao" />
      </motion.div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Whitelist Checker</h3>
        {/* <p className={styles.sectionSubText}></p> */}

        <form
          ref={formRef}
          //   onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Paste address:</span>
            <input
              type="text"
              name="name"
              onChange={handleAddressChange}
              placeholder="Wallet address "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            onclick={handleSubmit}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Submit
          </button>
        </form>

        {isValid ? (
          <p className="text-green-500">Address is whitelisted!</p>
        ) : address ? (
          <p className="text-red-500">Address is not whitelisted.</p>
        ) : null}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
