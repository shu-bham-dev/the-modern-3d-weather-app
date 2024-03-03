import React from "react";

export interface ITopLocation {
  id: number;
  title: string;
}

const Header = () => {
  const topLocation: ITopLocation[] = [
    {
      id: 1,
      title: "New Delhi",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "New York",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {topLocation.map((location: ITopLocation) => {
        return (
          <button key={location.id} className="text-white text-lg font-medium">
            {location.title}
          </button>
        );
      })}
    </div>
  );
};

export default Header;
