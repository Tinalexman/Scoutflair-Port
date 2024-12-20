"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

import ProfileImageOrTextAvatar from "@/src/components/reusable/ProfileImageOrTextAvatar";
import { iUpdateScoutPayload, useUpdateScout } from "@/src/hooks/scout";
import { useCurrentUserStore, useScoutDataStore } from "@/src/stores/userStore";
import { useUploadPicture } from "@/src/hooks/common";
import { useFormik } from "formik";
import { Loader } from "@mantine/core";

const Basic = () => {
  const currentUser = useCurrentUserStore((state) => state);
  const scoutData = useScoutDataStore((state) => state);

  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileImageData, setFileImageData] = useState<string>("");

  const {
    update: updateScout,
    loading: loadingUpdateScout,
    success: updatedScout,
  } = useUpdateScout();

  const {
    upload: uploadPicture,
    data: uploadedUrl,
    loading: uploadingPicture,
    success: uploadedPicture,
  } = useUploadPicture();

  const {
    errors,
    touched,
    handleSubmit,
    handleChange,
    values,
    setSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      image: "",
      quote: "",
      address: "",
      license: "",
      team: "",
      career: "",
      coachingEducation: "",
      coachingStyle: "",
      experience: "",
    },
    validate: (values) => {
      const errors: any = {};
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

      if (!values.phone) {
        errors.phone = "Required";
      }

      if (!values.quote) {
        errors.quote = "Required";
      }

      if (!values.address) {
        errors.address = "Required";
      }

      if (!values.license) {
        errors.license = "Required";
      }
      return errors;
    },

    onSubmit: () => {
      if (file) {
        uploadPicture(file!);
      } else {
        updateScout(constructPayload());
      }
      setSubmitting(false);
    },
  });

  useEffect(() => {
    if (currentUser) {
      const { image, name } = currentUser;
      const names = name.split(" ");
      setFieldValue("firstName", names[0]);
      setFieldValue("lastName", names[1]);
      setFieldValue("image", image);
    }
  }, [currentUser]);

  useEffect(() => {
    if (scoutData) {
      const {
        email,
        phone,
        quote,
        address,
        currentTeam,
        career,
        coachingEducation,
        coachingStyle,
        license,
        experience,
      } = scoutData;
      setFieldValue("email", email);
      setFieldValue("phone", phone);
      setFieldValue("team", currentTeam);
      setFieldValue("quote", quote);
      setFieldValue("address", address);
      setFieldValue("team", currentTeam);
      setFieldValue("career", career);
      setFieldValue("license", license);
      setFieldValue("coachingEducation", coachingEducation);
      setFieldValue("coachingStyle", coachingStyle);
      setFieldValue("experience", experience);
    }
  }, [scoutData]);

  useEffect(() => {
    if (!uploadingPicture && uploadedPicture) {
      updateScout(constructPayload());
    }
  }, [uploadingPicture, uploadedPicture]);

  useEffect(() => {
    if (updatedScout && !loadingUpdateScout) {
      window.location.reload();
    }
  }, [updatedScout, loadingUpdateScout]);

  const constructPayload = () => {
    let payload: Partial<iUpdateScoutPayload> = {};
    payload.fullName = `${values.firstName} ${values.lastName}`;
    payload.phone = values.phone;
    payload.nationality = "Nigerian";

    payload.coachingEducation = values.coachingEducation;
    payload.coachingStyle = values.coachingStyle;
    payload.experience = values.experience;
    payload.licenceNumber = values.license;
    payload.quote = values.quote;
    payload.address = values.address;
    payload.currentTeam = values.team;

    return payload;
  };

  return (
    <form method="POST" onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-6 w-full ">
        <div className="space-y-3">
          <h2 className="text-dark text-12-14 font-semibold pl-5">
            Personal Information
          </h2>
          <div className="w-full flex flex-col px-5 gap-4">
            <div className="w-full grid grid-cols-[0.5fr_1.5fr_1.5fr] place-items-center gap-4">
              <h2 className="text-14-16 font-semibold text-placeholder">
                Full Name
              </h2>
              <>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={values.firstName}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
                />
                {errors.firstName && touched.firstName && (
                  <p className="text-8-9 text-red-500">{errors.firstName}</p>
                )}
              </>
              <>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={values.lastName}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
                />
                {errors.lastName && touched.lastName && (
                  <p className="text-8-9 text-red-500">{errors.lastName}</p>
                )}
              </>
            </div>

            <div className="w-full grid grid-cols-[0.5fr_1.5fr_1.5fr] gap-4 place-items-center">
              <h2 className="text-14-16 font-semibold text-placeholder">
                Contact
              </h2>
              <>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={values.email}
                  readOnly
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-neutral-300 placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
                />
              </>

              <>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={values.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
                />
                {errors.phone && touched.phone && (
                  <p className="text-8-9 text-red-500">{errors.phone}</p>
                )}
              </>
            </div>

            <div className="w-full grid grid-cols-[0.5fr_1.5fr_1.5fr] gap-4 place-items-center">
              <h2 className="text-14-16 font-semibold text-placeholder">
                Avatar
              </h2>
              <div className="w-full flex gap-3 items-center">
                {fileImageData ? (
                  <Image
                    src={fileImageData}
                    alt="user image"
                    className="rounded-full size-11 object-cover"
                    width={44}
                    height={44}
                  />
                ) : (
                  <ProfileImageOrTextAvatar
                    image={values.image}
                    name={values.firstName}
                    radius="rounded-full"
                    size="size-11"
                  />
                )}
                <div
                  onClick={() => fileRef.current?.click()}
                  className="text-primary-2 border border-primary-2 px-3 py-1 rounded-md text-10-12 cursor-pointer font-bold"
                >
                  Change
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
                        setFile(file);
                        setFileImageData(reader.result as string);
                      };
                    }
                  }}
                />
              </div>
              <>
                <input
                  type="text"
                  name="license"
                  placeholder="Enter License Number"
                  value={values.license}
                  onChange={handleChange}
                  className="w-full rounded-lg border bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
                />
                {errors.license && touched.license && (
                  <p className="text-8-9 text-red-500">{errors.license}</p>
                )}
              </>
            </div>

            <div className="w-full">
              <textarea
                name="quote"
                placeholder="Enter Quote"
                value={values.quote}
                onChange={handleChange}
                className="w-full rounded-lg border resize-none bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-20 p-2"
              />
              {errors.quote && touched.quote && (
                <p className="text-8-9 text-red-500">{errors.quote}</p>
              )}
            </div>
            <div className="w-full">
              <textarea
                name="address"
                placeholder="Enter Address"
                value={values.address}
                onChange={handleChange}
                className="w-full rounded-lg border resize-none bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-20 p-2"
              />
              {errors.address && touched.address && (
                <p className="text-8-9 text-red-500">{errors.address}</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-dark text-12-14 font-semibold pl-5">
            Team Information
          </h2>
          <div className="w-full flex flex-col px-5 gap-4">
            <input
              type="text"
              name="team"
              placeholder="Enter Current Team"
              value={values.team}
              onChange={handleChange}
              readOnly
              className="w-full rounded-lg border bg-neutral-300 placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-10 px-2"
            />
            <div>
              <textarea
                name="experience"
                placeholder="Enter Coaching Experience"
                value={values.experience}
                onChange={handleChange}
                className="w-full rounded-lg border resize-none bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-20 p-2"
              />
              {errors.experience && touched.experience && (
                <p className="text-8-9 text-red-500">{errors.experience}</p>
              )}
            </div>
            <div>
              <textarea
                name="coachingStyle"
                placeholder="Enter Coaching Style"
                value={values.coachingStyle}
                onChange={handleChange}
                className="w-full rounded-lg border resize-none bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-20 p-2"
              />
              {errors.coachingStyle && touched.coachingStyle && (
                <p className="text-8-9 text-red-500">{errors.coachingStyle}</p>
              )}
            </div>
            <div>
              <textarea
                name="coachingEducation"
                placeholder="Enter Coaching Education"
                value={values.coachingEducation}
                onChange={handleChange}
                className="w-full rounded-lg border resize-none bg-white placeholder:text-placeholder text-dark text-14-16 font-semibold placeholder:text-opacity-[0.88] border-border-gray h-20 p-2"
              />
              {errors.coachingEducation && touched.coachingEducation && (
                <p className="text-8-9 text-red-500">
                  {errors.coachingEducation}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="w-full px-6 my-10">
          <button
            type="submit"
            className="bg-primary-2 w-full h-12 text-white text-14-16 font-bold rounded-lg py-2"
          >
            {loadingUpdateScout || uploadingPicture ? (
              <Loader color="white.6" />
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Basic;
