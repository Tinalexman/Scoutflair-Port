"use client";

import React, { useEffect, useState, useRef } from "react";

import { useFormik } from "formik";
import { useCreateLocalPitch } from "@/src/hooks/pitch";

const AddPitch = () => {
  const { loading, create, success } = useCreateLocalPitch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const { errors, touched, values, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        name: "",
        address: "",
        longitude: "",
        latitude: "",
        facilities: "",
        year: "",
      },
      validate: (values) => {},
      onSubmit: (values, object) => {},
    });

  useEffect(() => {
    if (!loading && success) {
      window.location.replace("/dashboard/scout/pitches");
    }
  }, [loading, success]);

  return (
    <div className="w-full p-6">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="w-full p-6 flex flex-col gap-6 bg-white shadow-custom rounded-[1rem]">
          <h2 className="text-16-19 text-primary-2 font-semibold">
            Add Local Pitch
          </h2>
          <div className="w-full grid-cols-2 grid gap-6">
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-12-14 font-semibold text-[#333333]">Name</h2>
              <input
                type="text"
                name="name"
                placeholder=""
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
              />
              {errors.name && touched.name && (
                <p className="text-8-9 text-red-600">{errors.name}</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-12-14 font-semibold text-[#333333]">
                Address
              </h2>
              <input
                type="text"
                name="address"
                placeholder=""
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
              />
              {errors.address && touched.address && (
                <p className="text-8-9 text-red-600">{errors.address}</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-12-14 font-semibold text-[#333333]">
                Latitude
              </h2>
              <input
                type="text"
                name="latitude"
                placeholder=""
                value={values.latitude}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
              />
              {errors.latitude && touched.latitude && (
                <p className="text-8-9 text-red-600">{errors.latitude}</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-12-14 font-semibold text-[#333333]">
                Longitude
              </h2>
              <input
                type="text"
                name="longitude"
                placeholder=""
                value={values.longitude}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
              />
              {errors.longitude && touched.longitude && (
                <p className="text-8-9 text-red-600">{errors.longitude}</p>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPitch;
