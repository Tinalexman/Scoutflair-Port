"use client";

import React from "react";

import { Formik, Form } from "formik";
import { Loader } from "@mantine/core";

interface iBioData {
  clubName: string;
  address: string;
  gps: string;
  email: string;
  phone: string;
  coach: string;
  total: number;
  country: string;
  state: string;
}

const AddBioData = () => {
  return (
    <div className="w-[500px] p-5 bg-white border rounded-md border-border-gray shadow-custom-2 flex flex-col gap-5 text-black">
      <h2 className="text-lg font-bold">Bio Data</h2>

      <Formik
        initialValues={{
          clubName: "",
          address: "",
          gps: "",
          email: "",
          phone: "",
          coach: "",
          total: 0,
          country: "",
          state: "",
        }}
        validate={(values) => {
          const errors: Partial<iBioData> = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
        }}
        validateOnMount={true}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isInitialValid,
          isValid,
        }) => (
          <Form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-2"
            method="POST"
          >
            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Football Club Name</p>
              <input
                type="text"
                value={values.clubName}
                name="clubName"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.clubName && touched.clubName && errors.clubName}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Address</p>
              <input
                type="text"
                value={values.address}
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.address && touched.address && errors.address}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">GPS Coordinates</p>
              <input
                type="text"
                value={values.gps}
                name="gps"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.gps && touched.gps && errors.gps}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Email Address</p>
              <input
                type="email"
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.email && touched.email && errors.email}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Phone Number</p>
              <input
                type="tel"
                value={values.phone}
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.phone && touched.phone && errors.phone}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Coach</p>
              <input
                type="text"
                value={values.coach}
                name="coach"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.coach && touched.coach && errors.coach}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Total Matches</p>
              <input
                type="number"
                value={values.total}
                name="total"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.total && touched.total && errors.total}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Country</p>
              <select
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              >
                <option value="united states">United States</option>
              </select>
              {/* <input
                type="text"
                value={values.country}
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              /> */}
              <p className="text-error text-[12px]">
                {errors.country && touched.country && errors.country}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">State</p>
              <input
                type="text"
                value={values.state}
                name="state"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.state && touched.state && errors.state}
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBioData;
