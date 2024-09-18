"use client";

import { useAxios } from "@/src/api/base";
import { useState, useEffect } from "react";
import { useUploadImage, useUploadSpotlightImage } from "./common";
import Swal from "sweetalert2";

export interface iUpdatePlayerPayload {
  address: string;
  biography: string;
  currentTeam: string;
  dob: string;
  facebookUrl: string;
  fullName: string;
  height: string;
  igUrl: string;
  imageUrl: string | File;
  jerseyNumber: string;
  location: string;
  nationality: string;
  nin: string;
  phone: string;
  position: string;
  preferredFoot: string;
  ticTokUrl: string;
  weight: string;
  xurl: string;
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

export interface iCreatePlayerSpotlightPayload {
  mediaUrls: (string | File)[];
  text: string;
}

export interface iPlayerSpotlightResponse {
  id: number;
  text: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  userFullName: string;
  userProfilePicUrl: string;
  dateCreated: string;
  mediaUrls: {
    id: number;
    mediaUrl: string;
    createdDate: string;
  }[];
}

export interface iAddCommentPayload {
  mediaUrl: string;
  spotLightId: number;
  text: string;
}

export interface iPostActionPayload {
  like: boolean;
  spotLightPostId: number;
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
  const [payload, setPayload] = useState<Partial<iUpdatePlayerPayload> | null>(
    null
  );
  const {
    data: uploadedImage,
    upload: uploadImage,
    loading: uploadProgress,
    success: uploadSuccess,
  } = useUploadImage();

  const { requestApi } = useAxios();

  const update = async (payload: Partial<iUpdatePlayerPayload>) => {
    if (loading) return;
    setLoading(true);

    if (payload.imageUrl && typeof payload.imageUrl !== "string") {
      setPayload(payload);
      await uploadImage(payload.imageUrl as File);
    } else {
      updatePlayer(payload);
    }
  };

  const updatePlayer = async (
    payloadToBePosted: Partial<iUpdatePlayerPayload>
  ) => {
    const { status } = await requestApi(
      "/api/v1/profile/player/editProfile",
      "POST",
      payloadToBePosted
    );
    setLoading(false);
    setSuccess(status);

    if (!status) {
      Swal.fire({
        title: "Oops...",
        text: `Error updating your profile`,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    if (uploadSuccess && uploadedImage && payload) {
      const newPayload: Partial<iUpdatePlayerPayload> = {
        ...payload,
        imageUrl: uploadedImage,
      };
      setPayload(newPayload);
      updatePlayer(newPayload);
    } else {
      setLoading(false);
      setSuccess(false);
    }
  }, [uploadProgress, uploadSuccess, uploadImage, payload]);

  return {
    loading,
    success,
    update,
  };
};

export const useGetPlayerSpotlights = () => {
  const [data, setData] = useState<iPlayerSpotlightResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const get = async () => {
    if (loading) return;
    setLoading(true);
    const { data, status } = await requestApi(
      "/api/v1/spotLights/getPosts?limit=10&offset=0",
      "GET"
    );
    setLoading(false);
    setSuccess(status);
    setData(status ? (data.data.obj as iPlayerSpotlightResponse[]) : []);

    if (!status) {
      Swal.fire({
        title: "Oops...",
        text: `Error getting the latest posts`,
        icon: "error",
      });
    }
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

export const useGetCurrentPlayerSpotlights = () => {
  const [data, setData] = useState<iPlayerSpotlightResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const get = async () => {
    if (loading) return;
    setLoading(true);
    const { data, status } = await requestApi(
      "/api/v1/spotLights/getUserPosts",
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

export const usePostPlayerSpotlight = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const [payload, setPayload] = useState<iCreatePlayerSpotlightPayload | null>(
    null
  );

  const {
    loading: uploadProgress,
    success: uploadSuccess,
    upload: uploadSpotlightImage,
    data: uploadedImage,
  } = useUploadSpotlightImage();

  const upload = async (payload: iCreatePlayerSpotlightPayload) => {
    if (loading) return;
    setLoading(true);

    if (payload.mediaUrls.length !== 0) {
      setPayload(payload);
      await uploadSpotlightImage(payload.mediaUrls[0] as File);
    } else {
      await uploadSpotlight(payload);
    }
  };

  const uploadSpotlight = async (
    payloadToBePosted: iCreatePlayerSpotlightPayload
  ) => {
    const { status } = await requestApi(
      "/api/v1/spotLights/addPost",
      "POST",
      payloadToBePosted
    );
    setLoading(false);
    setSuccess(status);
  };

  useEffect(() => {
    if (uploadSuccess && uploadedImage && payload) {
      const newPayload: iCreatePlayerSpotlightPayload = {
        ...payload!,
        mediaUrls: [uploadedImage],
      };
      setPayload(newPayload);
      uploadSpotlight(newPayload);
    } else {
      setLoading(false);
      setSuccess(false);
    }
  }, [uploadProgress, uploadSuccess, uploadedImage, payload]);

  return {
    upload,
    loading,
    success,
  };
};

export const useAddPlayerSpotlightComment = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const add = async (payload: iAddCommentPayload) => {
    if (loading) return;
    setLoading(true);

    const { status } = await requestApi(
      "/api/v1/spotLights/addComment",
      "POST",
      payload
    );
    setLoading(false);
    setSuccess(status);
  };

  return {
    add,
    loading,
    success,
  };
};

export const useGetPlayerSpotlightComments = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const get = async (postId: number) => {
    if (loading) return;
    setLoading(true);
    const { data, status } = await requestApi(
      `/api/v1/spotLights/getPostComments?limit=10&offset=0&postId=${postId}`,
      "GET"
    );
    setLoading(false);
    setSuccess(status);
    setData(status ? data : []);
  };

  return {
    data,
    loading,
    success,
    get,
  };
};

export const useLikeOrUnlikePlayerSpotlightComments = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { requestApi } = useAxios();

  const action = async (payload: iPostActionPayload) => {
    if (loading) return;
    setLoading(true);

    const { status } = await requestApi(
      "/api/v1/spotLights/like/increaseOrDecreaseCount",
      "PUT",
      payload
    );
    setLoading(false);
    setSuccess(status);
  };

  return {
    action,
    loading,
    success,
  };
};
