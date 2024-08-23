import React from "react";

interface iNotification {
  title: string;
  description: string;
  push: boolean;
  email: boolean;
  sms: boolean;
}

const Notifications = () => {
  const notifications: iNotification[] = Array(4).fill({
    title: "Messages",
    description: "These are notifications about in app messages",
    push: true,
    email: true,
    sms: false,
  });
  return (
    <div className="flex flex-col gap-3 w-full ">
      <div className="pl-5">
        <h2 className="text-dark text-12-14 font-semibold">
          Notification Settings
        </h2>
        <p className="text-placeholder text-10-12 font-semibold">
          We may send you important notifications about your account outside of
          your notifications settings
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-8 mt-5 px-5">
        {notifications.map((notification, i) => (
          <div key={i} className="w-full flex items-center ">
            <div className="flex flex-col font-semibold w-[55%]">
              <h2 className="text-dark text-opacity-[0.88] text-14-16 ">
                {notification.title}
              </h2>
              <p className="text-12-18 text-placeholder">
                {notification.description}
              </p>
            </div>
            <div className="flex flex-col justify-between"></div>
          </div>
        ))}
      </div>

      <hr className="w-full bg-[#E0E0E0] mt-1.5 mb-2" />
    </div>
  );
};

export default Notifications;
