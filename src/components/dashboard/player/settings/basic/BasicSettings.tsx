"use client";

import React, { useEffect } from "react";
import Basic from "./Basic";
import Notifications from "./Notifications";
import Languages from "./Languages";
import Accounts from "./Accounts";
import DeleteAccount from "./DeleteAccount";

import { Loader } from "@mantine/core";
import { useFormik } from "formik";
import { useUpdatePlayer, iUpdatePlayerPayload } from "@/src/hooks/player";

import { useUploadPicture } from "@/src/hooks/common";
import {
  useCurrentUserStore,
  usePlayerDataStore,
} from "@/src/stores/userStore";

interface iEditBasicSettingsPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string | File;
}

const BasicSettings = () => {
  const currentUser = useCurrentUserStore((state) => state);
  const playerData = usePlayerDataStore((state) => state);

  const {
    update: updatePlayer,
    loading: loadingUpdatePlayer,
    success: updatedPlayer,
  } = useUpdatePlayer();

  const {
    upload: uploadPicture,
    data: uploadedUrl,
    loading: uploadingPicture,
    success: uploadedPicture,
  } = useUploadPicture();

  const {
    handleSubmit,
    handleChange,
    values,
    setSubmitting,
    setFieldValue,
    submitForm,
  } = useFormik<iEditBasicSettingsPayload>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      image: "",
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

      return errors;
    },

    onSubmit: (values) => {
      if (values.image) {
        uploadPicture(values.image as File);
      } else {
        updatePlayer(constructPayload());
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
    if (playerData) {
      const { email, phone } = playerData;
      setFieldValue("email", email);
      setFieldValue("phone", phone);
    }
  }, [playerData]);

  useEffect(() => {
    if (!uploadingPicture && uploadedPicture) {
      updatePlayer(constructPayload());
    }
  }, [uploadingPicture, uploadedPicture]);

  useEffect(() => {
    if (updatedPlayer && !loadingUpdatePlayer) {
      window.location.reload();
    }
  }, [updatedPlayer, loadingUpdatePlayer]);

  const constructPayload = () => {
    let payload: Partial<iUpdatePlayerPayload> = {};
    payload.fullName = `${values.firstName} ${values.lastName}`;
    if (values.phone) payload.phone = values.phone;
    return payload;
  };

  return (
    <div className="w-full shadow-custom rounded bg-white flex flex-col justify-between items-center">
      <div className="w-full flex flex-col shadow-custom-1 h-16 px-5 justify-center">
        <h2 className="text-dark font-bold text-16-19">Basic Settings</h2>
        <h2 className="text-placeholder text-12-14">
          Manage your essential settings
        </h2>
      </div>

      <form method="POST" className="flex flex-col w-full mt-10 gap-5">
        <Basic
          values={values}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
        />
        <Notifications />
        <div className="w-full flex flex-col">
          <div className="w-full grid grid-cols-2 px-5">
            <Languages />
            <Accounts />
          </div>
          <hr className="w-full bg-[#E0E0E0] mt-1.5 mb-2" />
        </div>
        <div className="flex flex-col w-full">
          <DeleteAccount />
          <hr className="w-full bg-[#E0E0E0] mt-1.5 mb-2" />
        </div>
      </form>

      <button
        onClick={submitForm}
        className="bg-primary-2 text-white text-14-16 font-bold rounded-lg py-2 px-16 mt-12 mb-14"
      >
        {loadingUpdatePlayer || uploadingPicture ? (
          <Loader color="white.6" />
        ) : (
          "Save Changes"
        )}
      </button>
    </div>
  );
};

export default BasicSettings;
