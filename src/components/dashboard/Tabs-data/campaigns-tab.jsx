import React from "react";
import TableGrid from "../../data-table/table.container";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SearchIcon } from "../../../assets/component-icons/icons";
import { useSearchCampaignMutation } from "../../../redux/services/campaign/campaignSlice";

const CampaignTab = ({ data, columns, setData }) => {
  const [searchCampaign] = useSearchCampaignMutation();
  
  const handleSearch = (event) => {
    searchCampaign({data:event.target.value});
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="w-80">
        <Input
          placeholder="Search for campaigns"
          prefix={<SearchIcon props={{ width: 16, height: 16 }} />}
          onChange={handleSearch}
          className="py-2"
        />
      </div>
      <TableGrid
        data={data}
        columns={columns}
        setData={setData}
        // footerButtonTitle="Sample Button"
        footerButtonAction={() => console.log("Button clicked")}
      />
    </div>
  );
};

export default CampaignTab;
