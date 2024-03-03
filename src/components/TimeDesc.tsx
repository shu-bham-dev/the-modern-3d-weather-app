import React from "react";

const TimeDesc = () => {
  const nowDate: any = new Date();
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {nowDate.toString()}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">New Delhi</p>
      </div>
    </div>
  );
};

export default TimeDesc;
