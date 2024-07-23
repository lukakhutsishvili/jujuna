import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm("service_lpst9ps", "template_7gk5yri", form.current, {
        publicKey: "AH1Oz3GDLtzs687z0",
      })
      .then(
        () => {
          alert("Message successfully sent!");
          reset(); 
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className="xl:scale-x-[1]  scale-x-[-1] order-4"
    >
      <label
        htmlFor="phone"
        className=" xl:text-[20px] font-arialgeo text-[12px] block text-white "
      >
        ტელეფონი
      </label>
      <input
        id="phone"
        name="phone"
        {...register("phone", { required: "ტელეფონი is required" })}
        placeholder="მიუთითეთ ნომერი..."
        className={`xl:text-[14px] xl:w-[328px] h-10 w-[209px] mt-1 p-2 box-border text-[10px] outline-none bg-black text-white rounded-lg block ${
          errors.phone ? "border-2 border-red-500" : "border-none"
        }`}
      />

      <label
        htmlFor="mail"
        className="xl:text-[20px] font-arialgeo text-[12px] block text-white mt-3"
      >
        ელ.ფოსტა
      </label>
      <input
        name="mail"
        id="mail"
        {...register("mail", {
          required: "ელ.ფოსტა is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "ელ.ფოსტა is invalid",
          },
        })}
        placeholder="მიუთითეთ ელ-ფოსტა..."
        className={`xl:text-[14px] xl:w-[328px] h-10 mt-1 w-[209px] p-2 text-[10px] box-border outline-none bg-black text-white rounded-lg block ${
          errors.mail ? "border-2 border-red-600" : "border-none"
        }`}
      />

      <label
        htmlFor="text"
        className=" xl:text-[20px] font-arialgeo text-[12px] block text-white mt-3"
      >
        მესიჯი
      </label>
      <textarea
        id="text"
        name="message"
        {...register("text", { required: "მესიჯი is required" })}
        placeholder="დაწერეთ მესიჯი..."
        className={` xl:text-[14px] xl:w-[328px] h-15 mt-1 w-[209px] h-[112px] p-2 box-border text-[10px] outline-none bg-black text-white rounded-lg block ${
          errors.text ? "border-2 border-red-600" : "border-none"
        }`}
      />

      <button
        type="submit"
        className="xl:rounded-3xl xl:mt-[27px] xl:h-[49px] mt-3 ml-auto bg-[#613994] text-white rounded-2xl w-[130px] h-[32px] flex justify-center items-center"
      >
        გაგზავნა
      </button>
    </form>
  );
}

export default Form;
