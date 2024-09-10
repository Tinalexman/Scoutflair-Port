"use client";

import { useAxios } from "@/src/api/base";
import { useState } from "react";
import { useUploadImage } from "./common";

export interface iUpdatePlayerPayload {
  address?: string;
  biography?: string;
  currentTeam?: string;
  dob?: string;
  facebookUrl?: string;
  fullName?: string;
  height?: string;
  igUrl?: string;
  imageUrl: string | File;
  jerseyNumber?: string;
  location?: string;
  nationality?: string;
  nin?: string;
  phone?: string;
  position?: string;
  preferredFoot?: string;
  ticTokUrl?: string;
  weight?: string;
  xurl?: string;
}

export interface iPlayerResponse {
  address: string | null;
  biography: string;
  currentTeam: string;
  dob: string;
  email: string;
  facebookUrl: string | null;
  fullName: string;
  height: string;
  igUrl: string | null;
  imageUrl: string;
  jerseyNumber: string;
  licenceNumber: string;
  location: string;
  nationality: string;
  nin: string;
  phone: string;
  position: string;
  preferredFoot: string;
  ticTokUrl: string | null;
  weight: string;
  xurl: string | null;
}

export const useGetPlayer = () => {
  const [data, setData] = useState<iPlayerResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const get = async () => {
    if (loading) return;
    setLoading(true);
    const { data, status } = await requestApi(
      "/api/v1/profile/player/getProfile",
      "GET"
    );
    setLoading(false);
    setSuccess(status);
    setData(status ? data : null);
  };

  return {
    data,
    loading,
    success,
    get,
  };
};

export const useUpdatePlayer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const {
    data: uploadedImage,
    upload,
    success: uploadSuccess,
  } = useUploadImage();

  const { requestApi } = useAxios();

  const update = async (payload: iUpdatePlayerPayload) => {
    if (loading) return;
    setLoading(true);

    if (typeof payload.imageUrl !== "string") {
      await upload(payload.imageUrl as File);
      if (uploadSuccess) {
        payload.imageUrl = uploadedImage;
      } else {
        setLoading(false);
        setSuccess(false);
        return;
      }
    }

    const { data, status } = await requestApi(
      "/api/v1/profile/player/editProfile",
      "POST",
      payload
    );
    setLoading(false);
    setSuccess(status);
  };

  return {
    loading,
    success,
    update,
  };
};
