import ProfileImageOrTextAvatar from "@/src/components/reusable/ProfileImageOrTextAvatar";
import { getYearDifference } from "@/src/functions/dateFunctions";
import { iScoutPlayersResponse } from "@/src/hooks/scout";
import Link from "next/link";
import React, { FC } from "react";

const PlayerCard: FC<{ player: iScoutPlayersResponse }> = ({ player }) => {
  const names = player.fullName.split(" ");
  const firstName = names[0];
  const lastName = names[1];
  return (
    <div className="w-full h-[8.5rem] shadow-custom rounded-[1rem] py-2 px-3 gap-4 bg-white flex justify-between items-center">
      <ProfileImageOrTextAvatar
        name={player.fullName}
        image={""}
        size="size-[7.25rem]"
        radius="rounded"
        text="text-28-33"
      />

      <div className="w-[calc(100%-8.25rem)] flex flex-col gap-4 py-1">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <p className="text-14-16 text-dark text-opacity-[0.88]">
              {firstName}
            </p>
            <p className="text-16-19 text-dark font-bold">{lastName}</p>
          </div>
          <p className="text-24-28 text-dark font-bold">
            {player.jerseyNumber}
          </p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col items-center w-fit gap-0.5">
            <h2 className="text-10-12 text-opacity-[0.92] font-semibold text-dark">
              AGE
            </h2>
            <p className="text-8-9 text-dark">
              {getYearDifference(new Date(), new Date(player.dob))}
            </p>
          </div>

          <div className="flex flex-col items-center w-fit gap-0.5">
            <h2 className="text-10-12 text-opacity-[0.92] font-semibold text-dark">
              POSITION
            </h2>
            <p className="text-8-9 text-dark">{player.position}</p>
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-4">
          <Link
            href={`/dashboard/scout/evaluations/reports?id=${player.playerId}`}
            className="w-full py-2 border rounded-full border-secondary-3 grid place-content-center font-medium text-10-12 text-dark text-opacity-[0.8]"
          >
            Reports
          </Link>
          <Link
            href={`/dashboard/scout/evaluations/statistics?id=${player.playerId}`}
            className="w-full py-2 border rounded-full border-secondary-3 grid place-content-center font-medium text-10-12 text-dark text-opacity-[0.8]"
          >
            Statistics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
