import ProfileImageOrTextAvatar from "@/src/components/reusable/ProfileImageOrTextAvatar";
import { getYearDifference } from "@/src/functions/dateFunctions";
import { iPlayerResponse } from "@/src/hooks/player";
import React, { FC } from "react";

const PlayerCard: FC<{ player: iPlayerResponse }> = ({ player }) => {
  return (
    <div className="w-full h-[8.5rem] shadow-custom rounded-[1rem] py-4 px-5 gap-4 bg-white flex justify-between items-center">
      <ProfileImageOrTextAvatar
        name={player.fullName}
        image={""}
        size="size-[6rem]"
        radius="rounded-full"
        text="text-28-33"
      />

      <div className="w-full flex flex-col gap-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-dark font-semibold text-14-16">
              {player.fullName}
            </h2>
            <h3 className="text-placeholder text-8-11">
              {player.position}, No {player.jerseyNumber}
            </h3>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-dark font-semibold text-10-12 text-opacity-[0.88]">
            AGE: {getYearDifference(new Date(), new Date(player.dob))} yrs
          </h2>
          <h3 className="text-placeholder text-8-11">
            {player.height}cm {player.weight}kg
          </h3>
        </div>

        <div
          onClick={() => {
            window.location.assign(
              `/dashboard/scout/players/view-player?email=${player.email}`
            );
          }}
          className="px-3 py-2 border rounded-full border-secondary-3 font-medium text-10-12 cursor-pointer grid place-content-center text-dark text-opacity-[0.88]"
        >
          View Profile
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
