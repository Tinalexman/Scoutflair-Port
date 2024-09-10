"use client";

import { useAxios } from "@/src/api/base";
import { useState } from "react";

export const useUploadImage = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const upload = async (payload: File) => {
    if (loading) return;
    setLoading(true);
    const { data, status } = await requestApi(
      "/scoutflair/v1/file/picture/upload",
      "POST",
      payload,
      {
        "Content-Type": "multipart-formdata",
      }
    );
    setLoading(false);
    setSuccess(status);
    setData(data);
  };

  return {
    loading,
    success,
    data,
    upload,
  };
};
