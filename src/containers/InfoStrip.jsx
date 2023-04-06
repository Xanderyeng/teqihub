import React from "react";
import { IonIcon } from "@ionic/react";
import { callOutline, mailOutline } from "ionicons/icons";
import { q } from "../assets/Index";

export const InfoStrip = ({ icon, info, subInfo }) => {
  return (
    <div className='flex flex-row flex-no-wrap items-center gap-8 hover:cursor-pointer border-0 border'>
      <div className='rounded-full flex flex-row p-4 bg-contactBg2 shadow-card'>
        {/* {icon} */}
        <IonIcon icon={icon} className='text-[2.4em] text-icons' />
      </div>
      <span className='text-white'>
        <p className='font-medium text-[1.8rem]'>{info}</p>
        <p className='font-light text-[1.4rem] capitalize text-white'>
          {subInfo}
        </p>
      </span>
    </div>
  );
};

// export default InfoStrip
