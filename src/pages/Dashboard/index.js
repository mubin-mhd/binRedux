import React from "react";
import MiniCard from "../../lib/organisms/MiniCard";
import Text from "../../lib/atoms/Text";

const Dashboard = () => {
  const cards = [
    { title: "Total Tickets", value: 100, persentase: "13.02%", from: "May" },
    { title: "Opened Tickets", value: 12, persentase: " 0.00%", from: "Feb" },
    { title: "Total Tickets", value: 23, persentase: "13.02%", from: "Des" },
    { title: "Total Tickets", value: 13, persentase: "13.02%", from: "Jul" },
  ];
  return (
    <div>
      <Text label="Dashboard" size="large" color="white" addClass="mb-10" />
      <div className="flex justify-between gap-4">
        {cards.map((item) => (
          <MiniCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
