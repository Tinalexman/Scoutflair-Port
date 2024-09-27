"use client";

import { useAxios } from "@/src/api/base";
import { useState, useEffect } from "react";
import { useUploadImage, useUploadSpotlightImage } from "./common";
import Swal from "sweetalert2";

export interface iScoutResponse {
  quote: string;
  career: any;
  coachingEducation: string;
  coachingStyle: string;
  currentTeam: string;
  email: string;
  fullName: string;
  placeOfBirth: string;
  phone: string;
  nin: string;
  address: string;
  nationality: string;
  imageUrl: string;
  matchNotification: boolean;
  promotion: boolean;
  playerAbsence: boolean;
  emailNotifications: boolean;
}

export const useGetScout = () => {
  const [data, setData] = useState<iScoutResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const get = async () => {
    if (loading) return;
    setLoading(true);
    const { data, status } = await requestApi(
      "/api/v1/profile/scout/getScoutProfile",
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

export const useGetScoutsPlayers = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const get = async () => {
    if (loading) return;
    setLoading(true);
    const { data, status } = await requestApi(
      "/api/v1/profile/scout/getScoutPlayers",
      "GET"
    );
    setLoading(false);
    setSuccess(status);
    setData(status ? data : null);
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
