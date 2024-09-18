"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Form, Formik, useFormik } from "formik";
import {
  useCurrentUserStore,
  usePlayerDataStore,
} from "@/src/stores/userStore";
import { usePlayerBasicSettingsHook } from "@/src/stores/settings";

export interface iEditProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image?: File | string;
}

const Basic: FC<{ onValidate: (val: iEditProfile) => void }> = ({
  onValidate,
}) => {
  const name = useCurrentUserStore((state) => state.name);
  const email = usePlayerDataStore((state) => state.email);
  const phone = usePlayerDataStore((state) => state.phone);
  const image = useCurrentUserStore((state) => state.image);
  const names = name ? name.split(" ") : ["", ""];
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileImageData, setFileImageData] = useState<string>("");

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    setSubmitting,
    setFieldValue,
    submitForm,
  } = useFormik({
    initialValues: {
      firstName: names[0],
      lastName: names[1],
      email: email,
      phone: phone,
      image: "",
    },
    validate: (values) => {
      const errors: Partial<iEditProfile> = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length < 3) {
        errors.firstName = "Must be 3 characters or more";
      }

      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (values.lastName.length < 3) {
        errors.lastName = "Must be 3 characters or more";
      }

      const isEmpty = Object.keys(errors).length === 0;
      if (!isEmpty) {
        usePlayerBasicSettingsHook.setState({
          submit: false,
          basic: false,
        });
      }

      console.log("Invoked in validation", shouldSubmit);
      return errors;
    },

    onSubmit: (values) => {
      console.log("Invoked in form", shouldSubmit);
      usePlayerBasicSettingsHook.setState({ basic: true });
      onValidate(values);
    },
  });

  const shouldSubmit = usePlayerBasicSettingsHook((state) => state.submit);

  useEffect(() => {
    if (name) {
      const newNames = name.split(" ");
      setFieldValue("firstName", newNames[0] || "");
      setFieldValue("lastName", newNames[1] || "");
      setFieldValue("image", image || "");
      setFieldValue("email", email || "");
      setFieldValue("phone", phone || "");
    }
  }, [name, image, phone, email, setFieldValue]);

  useEffect(() => {
    if (shouldSubmit) {
      submitForm();
    }
  }, [shouldSubmit]);

  return (
    <div className="flex flex-col gap-3 w-full ">
      <h2 className="text-dark text-12-14 font-semibold pl-5">
        Basic Information
      </h2>
      <form onSubmit={handleSubmit} className="w-full" method="POST">
        <div className="w-full grid grid-cols-[1fr_1.5fr_1.5fr] gap-4 px-5">
          <div className="h-10 flex items-center">
            <h2 className="text-14-16 font-semibold text-placeholder">
              Full Name
            </h2>
          </div>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={values.firstName}
            onChange={handleChange}
            className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={values.lastName}
            onChange={handleChange}
            className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
          />
          <div className="h-10 flex items-center">
            <h2 className="text-14-16 font-semibold text-placeholder">
              Contact
            </h2>
          </div>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            readOnly={true}
            onChange={handleChange}
            className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Phone Number"
            value={values.phone}
            onChange={handleChange}
            className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
          />
          <div className="h-10 flex items-center">
            <h2 className="text-14-16 font-semibold text-placeholder">
              Avatar
            </h2>
          </div>
          <div className="w-full flex gap-3 items-center">
            {fileImageData ? (
              <Image
                src={fileImageData}
                alt="user image"
                className="rounded-full size-11 object-cover"
                width={44}
                height={44}
              />
            ) : values.image ? (
              <Image
                src={values.image}
                alt="user image"
                className="rounded-full size-11 object-cover"
                width={44}
                height={44}
              />
            ) : (
              <div className="rounded-full size-11 text-white text-16-19 font-bold bg-primary-2 grid place-content-center">
                {name.substring(0, 1)}
              </div>
            )}
            <div
              onClick={() => fileRef.current?.click()}
              className="text-primary-2 border border-primary-2 px-3 py-1 rounded-md text-10-12 cursor-pointer font-bold"
            >
              Upload
            </div>
            <div
              onClick={() => {
                setFieldValue("image", "");
                setFileImageData("");
              }}
              className="text-error border border-error px-3 py-1 rounded-md text-10-12 cursor-pointer font-bold"
            >
              Remove
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileRef}
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = () => {
                    setFieldValue("image", file);
                    setFileImageData(reader.result as string);
                  };
                }
              }}
            />
          </div>
        </div>
      </form>

      <hr className="w-full bg-[#E0E0E0] mt-1.5 mb-2" />
    </div>
  );
};

export default Basic;
