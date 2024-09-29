"use client";

import { useAxios } from "@/src/api/base";
import { useState, useEffect } from "react";

export interface iLocalPitchResponse {
  address: string;
  createdDate: string;
  id: number;
  latitude: string;
  length: string;
  lga: string;
  longitude: string;
  name: string;
  state: string;
  surface: string;
  width: string;
}

export interface iModifyLocalPitchPayload
  extends Omit<iLocalPitchResponse, "id" | "createdDate"> {}

export const useGetLocalPitches = () => {
  const [data, setData] = useState<iLocalPitchResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const get = async () => {
    if (loading) return;
    setLoading(true);
    const { data, status } = await requestApi(
      "/api/v1/pitches/getLocalPitches?limit=1000&offset=0",
      "GET"
    );
    setLoading(false);
    setSuccess(status);
    setData(status ? data.content : []);
  };

  useEffect(() => {
    get();
  }, []);

  return {
    data,
    loading,
    success,
  };
};

export const useGetAcademies = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const get = async () => {
    if (loading) return;
    setLoading(true);
    const { data, status } = await requestApi(
      "/api/v1/pitches/namesList",
      "GET"
    );
    setLoading(false);
    setSuccess(status);
    setData(status ? data : []);
  };

  useEffect(() => {
    get();
  }, []);

  return {
    data,
    loading,
    success,
  };
};

export const useLocalPitchesCount = () => {
  const [data, setData] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const get = async () => {
    if (loading) return;
    setLoading(true);
    const { data, status } = await requestApi(
      "/api/v1/pitches/getLocalPitchesCount",
      "GET"
    );
    setLoading(false);
    setSuccess(status);
    setData(status ? data.count : 0);
  };

  useEffect(() => {
    get();
  }, []);

  return {
    data,
    loading,
    success,
  };
};

export const useCreateLocalPitch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const create = async (payload: iModifyLocalPitchPayload) => {
    if (loading) return;
    setLoading(true);
    const { status } = await requestApi(
      "/api/v1/pitches/addLocalPitches",
      "POST",
      payload
    );
    setLoading(false);
    setSuccess(status);
  };

  return {
    loading,
    success,
    create,
  };
};

export const useUpdateLocalPitch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const update = async (payload: iModifyLocalPitchPayload) => {
    if (loading) return;
    setLoading(true);
    const { status } = await requestApi(
      "/api/v1/pitches/editLocalPitches",
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
