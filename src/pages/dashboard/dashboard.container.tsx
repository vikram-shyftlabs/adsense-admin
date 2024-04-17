import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import PieChart from "../../components/dashboard/PieChart.jsx";
import LineChartSetUp from "../../components/dashboard/LineChart/linechart-setup";
import TabsNavigation from "../../components/tabs-navigation/tabs-navigation.component";
import CampaignTab from "../../components/dashboard/Tabs-data/campaigns-tab";
import AdItemsTabs from "../../components/dashboard/Tabs-data/adItems-tab";
import {useGetAllPokemonQuery} from "../../redux/services/campaign/campaignSlice.js"
import { createColumnHelper } from "@tanstack/react-table";
type Pokemon = {
  name: string;
  url: string;
};

const columnHelper = createColumnHelper<Pokemon>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => <span>NAME</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("url", {
    header: () => "URL",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
];

const Dashboard: React.FC = () => {  
  const responseInfo = useGetAllPokemonQuery();
  const [data, setData] = useState([]);

  useEffect(() => {
    responseInfo.isSuccess && setData(responseInfo?.data?.results);
  }, [responseInfo]);

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
