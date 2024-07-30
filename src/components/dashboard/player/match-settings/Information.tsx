"use client";

import React from "react";

import { Formik, Form } from "formik";
import { FaCalendarDay } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

interface iInfo {
  opposition: string;
  date: string;
  time: string;
  significance: string;
  notes: string;
  substitutes: string;
  mode: string;
  location: string;
  formation: string;
}

const Information = () => {
  return (
    <div className="w-[400px] flex flex-col gap-5">
      <h2 className="text-lg font-bold">Upcoming Information</h2>

      <Formik
        initialValues={{
          opposition: "",
          date: "",
          time: "",
          significance: "",
          notes: "",
          substitutes: "",
          mode: "",
          location: "",
          formation: "",
        }}
        validate={(values) => {
          const errors: Partial<iInfo> = {};

          if (!values.opposition) {
            errors.opposition = "Required";
          }

          if (!values.date) {
            errors.date = "Required";
          }

          if (!values.time) {
            errors.time = "Required";
          }

          if (!values.significance) {
            errors.significance = "Required";
          }

          if (!values.notes) {
            errors.notes = "Required";
          }

          if (!values.substitutes) {
            errors.substitutes = "Required";
          }

          if (!values.mode) {
            errors.mode = "Required";
          }

          if (!values.location) {
            errors.location = "Required";
          }

          if (!values.formation) {
            errors.formation = "Required";
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
              <p className="text-[14px]">Opposition Team</p>
              <input
                type="text"
                value={values.opposition}
                name="opposition"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.opposition && touched.opposition && errors.opposition}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Date and Time</p>
              <div className="w-full flex border border-border-gray h-10 rounded-lg bg-transparent">
                <div className="w-1/2 relative">
                  <input
                    type="date"
                    value={values.date}
                    name="date"
                    placeholder="DD/MM/YYYY"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="px-10 w-full h-full cursor-pointer text-black bg-transparent focus:outline-none"
                  />
                  <FaCalendarDay
                    size={"16px"}
                    className="absolute top-1/2 -translate-y-1/2 left-4 text-black-80"
                  />
                </div>

                <div className="w-1/2 relative">
                  <input
                    type="time"
                    value={values.time}
                    name="time"
                    placeholder="HH:MM"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="px-10 w-full h-full cursor-pointer text-black bg-transparent focus:outline-none"
                  />
                  <FaClock
                    size={"16px"}
                    className="absolute top-1/2 -translate-y-1/2 right-4 text-black-80"
                  />
                </div>
              </div>
              <div className="flex w-full justify-between">
                <p className="text-error text-[12px] text-start">
                  {errors.date && touched.date && errors.date}
                </p>
                <p className="text-error text-[12px] text-end">
                  {errors.time && touched.time && errors.time}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Significance</p>
              <input
                type="text"
                value={values.significance}
                name="significance"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.significance &&
                  touched.significance &&
                  errors.significance}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Notes</p>
              <input
                type="text"
                value={values.notes}
                name="notes"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.notes && touched.notes && errors.notes}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Subsitutes</p>
              <input
                type="text"
                value={values.substitutes}
                name="substitutes"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              />
              <p className="text-error text-[12px]">
                {errors.substitutes &&
                  touched.substitutes &&
                  errors.substitutes}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Mode</p>
              <select
                name="mode"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              ></select>
              <p className="text-error text-[12px]">
                {errors.mode && touched.mode && errors.mode}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Location</p>
              <select
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              ></select>

              <p className="text-error text-[12px]">
                {errors.location && touched.location && errors.location}
              </p>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[14px]">Formation</p>
              <select
                name="formation"
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-4 w-full text-black border border-border-gray h-10 rounded-lg bg-transparent"
              ></select>
              <p className="text-error text-[12px]">
                {errors.formation && touched.formation && errors.formation}
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Information;
