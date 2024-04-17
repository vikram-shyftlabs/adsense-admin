import React, { useState } from "react";
import Header from "../../components/header/header.component";
import PieChart from "../../components/dashboard/PieChart.jsx";
import LineChartSetUp from "../../components/dashboard/LineChart/linechart-setup";
import TabsNavigation from "../../components/tabs-navigation/tabs-navigation.component";
import CampaignTab from "../../components/dashboard/Tabs-data/campaigns-tab";
import AdItemsTabs from "../../components/dashboard/Tabs-data/adItems-tab";

import { createColumnHelper } from "@tanstack/react-table";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
    footer: (info) => info.column.id,
  }),
];

const Dashboard: React.FC = () => {
  const [data, setData] = useState(() => [...defaultData]);
  const tabItems = [
    {
      label: "Campaigns",
      key: "campaigns",
      children: <CampaignTab data={data} columns={columns} setData={setData}/>,
    },
    {
      label: "Ad Items",
      key: "adItems",
      children: <AdItemsTabs data={data} columns={columns} setData={setData}/>,
    },
  ];
  return (
    <div>
      <Header props={{ title: "Dashboard" }} />
      <div className="grid grid-cols-2 m-12 gap-10 rounded-md">
        <div className="p-8 border-[#dcdcdc] border rounded-md">
          <h1 className="font-semibold text-xl">Performance</h1>
          <LineChartSetUp />
        </div>
        <div className="p-8 border-[#dcdcdc] border rounded-md">
          <h1 className="font-semibold text-xl">By Platform</h1>
          <PieChart />
        </div>
      </div>
      <div className="m-12">
        <TabsNavigation items={tabItems} />
      </div>
    </div>
  );
};

export default Dashboard;
