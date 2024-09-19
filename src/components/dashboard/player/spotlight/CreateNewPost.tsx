"use client";

import React, { useState, useEffect, useRef, FC } from "react";
import { Loader } from "@mantine/core";

import { IoMdClose } from "react-icons/io";
import { usePostPlayerSpotlight } from "@/src/hooks/player";
import { useGlobalData } from "@/src/stores/globalStore";

import { FaImage } from "react-icons/fa";

import Image from "next/image";
import { useUploadSpotlightImage } from "@/src/hooks/common";
import Swal from "sweetalert2";

const CreateNewPost: FC<{ close: () => void }> = ({ close }) => {
  const [post, setPost] = useState<string>("");
  const { upload, loading, success } = usePostPlayerSpotlight();
  const {
    loading: loadingUploadImage,
    data,
    upload: uploadImage,
    success: uploadedImage,
  } = useUploadSpotlightImage();

  const refreshPosts = useGlobalData((state) => state.refreshPosts);
  const fileRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<File[]>([]);
  const [fileImages, setFileImages] = useState<string[]>([]);

  useEffect(() => {
    if (!loading && success) {
      refreshPosts();
      close();
    }
  }, [loading, success]);

  useEffect(() => {
    if (!loadingUploadImage && uploadedImage) {
      const url = data?.data.obj.body.message;
      if (url) {
        upload({ text: post, mediaUrls: [url] });
      } else {
        Swal.fire({
          title: "Oops...",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    }
  }, [loadingUploadImage, uploadedImage]);

  //https://scoutflair.s3.eu-north-1.amazonaws.com/profilePics/3c85fc8fd-308c-4a98-933e-1559c7eddd7e

  return (
    <div className="w-full h-fit gap-5 bg-white flex flex-col p-6 items-center">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-24-28 text-dark font-semibold">Create Post</h2>
        <IoMdClose
          size={26}
          className="cursor-pointer text-dark"
          onClick={close}
        />
      </div>
      {loading || loadingUploadImage ? (
        <div className="w-full h-40 grid place-content-center">
          <Loader color="primary.6" />
        </div>
      ) : (
        <>
          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="How are you feeling today?"
            className="w-full h-32 resize-none bg-white border border-border-gray rounded-lg p-2 text-14-16 placeholder:text-placeholder text-black"
          />
          <div className="w-full flex flex-col gap-2">
            {files.length === 0 && (
              <div
                onClick={() => fileRef.current?.click()}
                className="cursor-pointer w-fit flex gap-1 text-primary-2 items-center"
              >
                <FaImage size={16} />
                <h2 className="underline font-medium text-12-16">Add Image</h2>
              </div>
            )}
            <div className="w-full ">
              {fileImages.length > 0 && (
                <div className="overflow-hidden relative w-full">
                  <Image
                    src={fileImages[0]}
                    width={100}
                    height={100}
                    className="w-full h-36 rounded object-cover brightness-50"
                    alt="post image"
                  />
                  <IoMdClose
                    size={16}
                    className="cursor-pointer text-white absolute right-2 top-1"
                    onClick={() => {
                      setFileImages([]);
                      setFiles([]);
                    }}
                  />
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              style={{ display: "none" }}
              ref={fileRef}
              onChange={(e) => {
                if (!e.target.files) return;
                setFiles([...files, ...Array.from(e.target.files)]);

                for (let i = 0; i < e.target.files.length; i++) {
                  const reader = new FileReader();
                  reader.readAsDataURL(e.target.files[i]);
                  reader.onload = () => {
                    if (typeof reader.result === "string") {
                      setFileImages([...fileImages, reader.result]);
                    }
                  };
                }
              }}
            />
          </div>
          <button
            disabled={loading}
            onClick={() => {
              if (post.length === 0) return;
              uploadImage(files[0]);
            }}
            className="w-full h-10 rounded bg-primary-2 text-white font-medium text-16-19"
          >
            Post
          </button>
        </>
      )}
    </div>
  );
};

export default CreateNewPost;
