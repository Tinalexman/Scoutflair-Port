"use client";

import React, { useEffect, useRef, useState } from "react";

import { useFormik } from "formik";
import { useCreateAcademy } from "@/src/hooks/academy";
import { useUploadLogo, useUploadPicture } from "@/src/hooks/common";

const AddAcademy = () => {
  const { loading, create, success } = useCreateAcademy();
  const {
    upload,
    data,
    loading: uploadingLogo,
    success: uploadedLogo,
  } = useUploadLogo();
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileImageData, setFileImageData] = useState<string>("");

  const {
    errors,
    touched,
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: {
      address: "",
      completedCount: "",
      description: "",
      email: "",
      establishmentsType: "",
      founded: "",
      imageUrl: "",
      latitude: "",
      lga: "",
      logoUrl: "",
      longitude: "",
      lostCount: "",
      name: "",
      phone: "",
      playersCount: "",
      principal: "",
      state: "",
      website: "",
      winCount: "",
    },
    validate: (values) => {
      const errors: any = {};

      return errors;
    },
    onSubmit: (values, object) => {
      // create({
      //   address: values.address,
      //   facilities: values.facilities,
      //   latitude: values.latitude,
      //   length: values.pitchLength,
      //   lga: values.lga,
      //   longitude: values.longitude,
      //   name: values.name,
      //   state: values.state,
      //   surface: values.surface,
      //   width: values.width,
      //   year: values.year,
      //   rating: values.rating,
      // });
    },
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
            Add Academy
          </h2>
          <div className="w-full grid-cols-2 grid gap-6">
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-12-14 font-semibold text-[#333333]">
                Academy Name
              </h2>
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
              <h2 className="text-12-14 font-semibold text-[#333333]">Email</h2>
              <input
                type="email"
                name="email"
                placeholder=""
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
              />
              {errors.email && touched.email && (
                <p className="text-8-9 text-red-600">{errors.email}</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-12-14 font-semibold text-[#333333]">
                Phone Number
              </h2>
              <input
                type="tel"
                name="phone"
                placeholder=""
                value={values.phone}
                onChange={(e) => {
                  const res = e.target.value.trim();
                  if (isNaN(Number(res))) return;
                  setFieldValue("phone", res);
                }}
                onBlur={handleBlur}
                className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
              />
              {errors.longitude && touched.longitude && (
                <p className="text-8-9 text-red-600">{errors.longitude}</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-12-14 font-semibold text-[#333333]">State</h2>
              <input
                type="text"
                name="state"
                placeholder=""
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
              />
              {errors.state && touched.state && (
                <p className="text-8-9 text-red-600">{errors.state}</p>
              )}
            </div>
            <div className="w-full flex flex-col gap-1">
              <h2 className="text-12-14 font-semibold text-[#333333]">LGA</h2>
              <input
                type="text"
                name="lga"
                placeholder=""
                value={values.lga}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
              />
              {errors.lga && touched.lga && (
                <p className="text-8-9 text-red-600">{errors.lga}</p>
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
                onChange={(e) => {
                  const res = e.target.value.trim();
                  if (isNaN(Number(res))) return;
                  setFieldValue("latitude", res);
                }}
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
                onChange={(e) => {
                  const res = e.target.value.trim();
                  if (isNaN(Number(res))) return;
                  setFieldValue("longitude", res);
                }}
                onBlur={handleBlur}
                className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
              />
              {errors.longitude && touched.longitude && (
                <p className="text-8-9 text-red-600">{errors.longitude}</p>
              )}
            </div>
          </div>
          <div className="w-full grid place-content-center mt-5">
            <button
              type="submit"
              className="w-[160px] rounded-md h-10 text-white bg-primary-2"
            >
              Add Academy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAcademy;
