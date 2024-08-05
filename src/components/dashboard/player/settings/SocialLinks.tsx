"use client";
import { DeleteIcon, FacebookIcon, InstagramIcon, TiktokIcon } from '@/src/icons';
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { RiArrowDropDownLine, RiDeleteBin4Line } from 'react-icons/ri';

interface SocialMediaOption {
  id: number;
  name: string;
  icon: JSX.Element;
}

const socialMediaOptions: SocialMediaOption[] = [
  { id: 1, name: 'TikTok', icon: <TiktokIcon /> },
  { id: 2, name: 'Facebook', icon: <FacebookIcon /> },
  { id: 3, name: 'Instagram', icon: <InstagramIcon /> },
];

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLinks, setSelectedLinks] = useState<SocialMediaOption[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const addLink = (option: SocialMediaOption) => {
    if (!selectedLinks.find((link) => link.id === option.id)) {
      setSelectedLinks([...selectedLinks, option]);
    }
  };

  const removeLink = (id: number) => {
    setSelectedLinks(selectedLinks.filter((link) => link.id !== id));
  };

  return (
    <div className="border rounded-lg border-border-gray px-[20px] py-4 shadow-custom font-lato w-[300px]">
      <h2 className="font-lato font-bold text-[18px] leading-[27px] text-black mb-[4px]">
        Social Links
      </h2>
      <p className="font-lato font-normal text-base text-black">
        Manage your social media links
      </p>

      <div className="relative w-full">
        <div
          className="flex items-center justify-between rounded-[10px] border bg-green-80 h-[40px] w-full pl-2 pr-4 cursor-pointer"
          onClick={toggleDropdown}
        >
          <span className='font-lato font-normal text-[14px] leading-[24px] '>Add Social Links</span>
          <RiArrowDropDownLine className='w-[20px]' />
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-[10px] border  bg-white">
            {socialMediaOptions.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => addLink(option)}
              >
                <span className="flex items-center gap-[5px]">
                  {option.icon}
                  {option.name}
                </span>
              </div>
            ))}
          </div>
        )}
        <div className="mt-2">
          {selectedLinks.map((link) => (
            <div
              key={link.id}
              className="flex items-center justify-between h-[40px] w-full pl-4 pr-4 mb-2"
            >
              <span className="flex items-center gap-[5px]">
                {link.icon}
                {link.name}
              </span>
              <RiDeleteBin4Line
                className="cursor-pointer text-red-700"
                onClick={() => removeLink(link.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <button className="flex items-center justify-center w-full h-[35px] text-black bg-white rounded-md border border-primary-2">
            <p className="font-lato font-bold text-xs text-black">Save Changes</p>
            </button>
        </div>

        <div className="mt-4">
        <button className="flex items-center justify-center w-full h-[35px] text-black bg-white rounded-md border border-primary-2">
            <p className="font-lato font-semibold text-xs text-error">Save Changes</p>
            </button>
        </div>


    </div>
  );
};

export default SocialLinks;
