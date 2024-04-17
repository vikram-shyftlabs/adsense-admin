import React from "react";
import Header from "../../components/header/header.component";
import PieChart from "../../components/dashboard/PieChart.jsx";
import LineChartSetUp from "../../components/dashboard/LineChart/linechart-setup";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header props={{ title: "Dashboard" }} />
      <LineChartSetUp />
      <div className="grid grid-cols-2 m-12 rounded-md">
        <div className="p-8 border-[#dcdcdc] border rounded-md">
          <h1 className="font-semibold text-xl">By Platform</h1>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
