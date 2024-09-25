"use client";

import { useAxios } from "@/src/api/base";
import { useState, useEffect } from "react";
import { useUploadImage, useUploadSpotlightImage } from "./common";
import Swal from "sweetalert2";

// export interface iUpdatePlayerPayload {
//   address: string;
//   biography: string;
//   currentTeam: string;
//   dob: string;
//   facebookUrl: string;
//   fullName: string;
//   height: string;
//   igUrl: string;
//   imageUrl: string | File;
//   jerseyNumber: string;
//   location: string;
//   nationality: string;
//   nin: string;
//   phone: string;
//   position: string;
//   preferredFoot: string;
//   ticTokUrl: string;
//   weight: string;
//   xurl: string;
// }

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

// export interface iCreatePlayerSpotlightPayload {
//   mediaUrls: (string | File)[];
//   text: string;
// }

// export interface iPlayerSpotlightResponse {
//   id: number;
//   text: string;
//   likeCount: number;
//   commentCount: number;
//   shareCount: number;
//   userFullName: string;
//   userProfilePicUrl: string;
//   dateCreated: string;
//   mediaUrls: {
//     id: number;
//     mediaUrl: string;
//     createdDate: string;
//   }[];
// }

// export interface iAddCommentPayload {
//   mediaUrl: string;
//   spotLightPostId: number;
//   text: string;
// }

// export interface iPostComment {
//   id: number;
//   text: string;
//   userFullName: string;
//   userImageUrl: string;
// }

// export interface iPostActionPayload {
//   like: boolean;
//   spotLightPostId: number;
// }

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

// export const useUpdatePlayer = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [success, setSuccess] = useState<boolean>(false);
//   const [payload, setPayload] = useState<Partial<iUpdatePlayerPayload> | null>(
//     null
//   );
//   const {
//     data: uploadedImage,
//     upload: uploadImage,
//     loading: uploadProgress,
//     success: uploadSuccess,
//   } = useUploadImage();

//   const { requestApi } = useAxios();

//   const update = async (payload: Partial<iUpdatePlayerPayload>) => {
//     if (loading) return;
//     setLoading(true);

//     if (payload.imageUrl && typeof payload.imageUrl !== "string") {
//       setPayload(payload);
//       await uploadImage(payload.imageUrl as File);
//     } else {
//       updatePlayer(payload);
//     }
//   };

//   const updatePlayer = async (
//     payloadToBePosted: Partial<iUpdatePlayerPayload>
//   ) => {
//     const { status } = await requestApi(
//       "/api/v1/profile/player/editProfile",
//       "POST",
//       payloadToBePosted
//     );
//     setLoading(false);
//     setSuccess(status);

//     if (!status) {
//       Swal.fire({
//         title: "Oops...",
//         text: `Error updating your profile`,
//         icon: "error",
//       });
//     }
//   };

//   useEffect(() => {
//     if (uploadSuccess && uploadedImage && payload) {
//       const newPayload: Partial<iUpdatePlayerPayload> = {
//         ...payload,
//         imageUrl: uploadedImage,
//       };
//       setPayload(newPayload);
//       updatePlayer(newPayload);
//     } else {
//       setLoading(false);
//       setSuccess(false);
//     }
//   }, [uploadProgress, uploadSuccess, uploadImage, payload]);

//   return {
//     loading,
//     success,
//     update,
//   };
// };

// export const useGetPlayerSpotlights = () => {
//   const [data, setData] = useState<iPlayerSpotlightResponse[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [success, setSuccess] = useState<boolean>(false);
//   const { requestApi } = useAxios();

//   const get = async () => {
//     if (loading) return;
//     setLoading(true);
//     const { data, status } = await requestApi(
//       "/api/v1/spotLights/getPosts?limit=100&offset=0",
//       "GET"
//     );
//     setLoading(false);
//     setSuccess(status);
//     setData(status ? (data.data.obj as iPlayerSpotlightResponse[]) : []);

//     if (!status) {
//       Swal.fire({
//         title: "Oops...",
//         text: `Error getting the latest posts`,
//         icon: "error",
//       });
//     }
//   };

//   return {
//     data,
//     loading,
//     success,
//     get,
//   };
// };

// export const useGetCurrentPlayerSpotlights = () => {
//   const [data, setData] = useState<iPlayerSpotlightResponse[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [success, setSuccess] = useState<boolean>(false);
//   const { requestApi } = useAxios();

//   const get = async () => {
//     if (loading) return;
//     setLoading(true);
//     const { data, status } = await requestApi(
//       "/api/v1/spotLights/getUserPosts?limit=100&offset=0",
//       "GET"
//     );
//     setLoading(false);
//     setSuccess(status);
//     setData(status ? (data.data.obj as iPlayerSpotlightResponse[]) : []);

//     if (!status) {
//       Swal.fire({
//         title: "Oops...",
//         text: `Error getting your posts`,
//         icon: "error",
//       });
//     }
//   };

//   return {
//     data,
//     loading,
//     success,
//     get,
//   };
// };

// export const usePostPlayerSpotlight = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [success, setSuccess] = useState<boolean>(false);
//   const { requestApi } = useAxios();

//   const upload = async (payload: iCreatePlayerSpotlightPayload) => {
//     if (loading) return;
//     setLoading(true);

//     const { status } = await requestApi(
//       "/api/v1/spotLights/addPost",
//       "POST",
//       payload
//     );
//     setLoading(false);
//     setSuccess(status);
//   };

//   return {
//     upload,
//     loading,
//     success,
//   };
// };

// export const useAddPlayerSpotlightComment = () => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [success, setSuccess] = useState<boolean>(false);
//   const { requestApi } = useAxios();

//   const add = async (payload: iAddCommentPayload) => {
//     if (loading) return;
//     setLoading(true);

//     const { status } = await requestApi(
//       "/api/v1/spotLights/addComment",
//       "POST",
//       payload
//     );
//     setLoading(false);
//     setSuccess(status);
//   };

//   return {
//     add,
//     loading,
//     success,
//   };
// };

// export const useGetPlayerSpotlightComments = (postId: number) => {
//   const [data, setData] = useState<iPostComment[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [success, setSuccess] = useState<boolean>(false);
//   const { requestApi } = useAxios();

//   const get = async () => {
//     if (loading) return;
//     setLoading(true);
//     const { data, status } = await requestApi(
//       `/api/v1/spotLights/getPostComments?limit=100&offset=0&postId=${postId}`,
//       "GET"
//     );
//     setLoading(false);
//     setSuccess(status);
//     setData(status ? (data.data.obj as iPostComment[]) : []);
//   };

//   return {
//     data,
//     loading,
//     success,
//     get,
//   };
// };

// export const useLikeOrUnlikePlayerSpotlightComments = (
//   spotLightPostId: number
// ) => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [success, setSuccess] = useState<boolean>(false);
//   const { requestApi } = useAxios();

//   const action = async (like: boolean) => {
//     if (loading) return;
//     setLoading(true);

//     const { status } = await requestApi(
//       "/api/v1/spotLights/like/increaseOrDecreaseCount",
//       "PUT",
//       { like, spotLightPostId }
//     );
//     setLoading(false);
//     setSuccess(status);
//   };

//   return {
//     action,
//     loading,
//     success,
//   };
// };
