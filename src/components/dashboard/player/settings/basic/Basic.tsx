"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Form, Formik } from "formik";
import {
  useCurrentUserStore,
  usePlayerDataStore,
} from "@/src/stores/userStore";

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
  const image = usePlayerDataStore((state) => state.image);
  const names = name ? name.split(" ") : ["", ""];
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [fileImageData, setFileImageData] = useState<string>("");

  return (
    <div className="flex flex-col gap-3 w-full ">
      <h2 className="text-dark text-12-14 font-semibold pl-5">
        Basic Information
      </h2>
      <Formik
        initialValues={{
          firstName: names[0],
          lastName: names[1],
          email: "",
          phone: "",
          image: "",
        }}
        validate={(values) => {
          const errors: Partial<iEditProfile> = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          onValidate(values);
        }}
        validateOnMount={true}
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => {
          useEffect(() => {
            if (name) {
              const newNames = name.split(" ");
              setFieldValue("firstName", newNames[0] || "");
              setFieldValue("lastName", newNames[1] || "");
              setFieldValue("image", image || "");
            }
          }, [name, image, setFieldValue]);

          return (
            <Form onSubmit={handleSubmit} className="w-full" method="POST">
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
                  className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 pl-4"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 pl-4"
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
                  className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 pl-4"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={values.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 pl-4"
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
                    <div className="rounded-full size-11 bg-primary-2 grid place-content-center">
                      {}
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
            </Form>
          );
        }}
      </Formik>

      <hr className="w-full bg-[#E0E0E0] mt-1.5 mb-2" />
    </div>
  );
};

export default Basic;
