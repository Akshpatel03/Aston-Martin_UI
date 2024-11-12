import CommonCard from "@/components/layout/Card";
import TabBar from "@/components/layout/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";

const body = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f2" }}>
      <TabBar></TabBar>
      <CommonCard></CommonCard>
    </div>
  );
};

export default body;
