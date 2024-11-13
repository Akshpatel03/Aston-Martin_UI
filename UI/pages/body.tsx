import BlockContent from "@/components/layout/BlockContent";
import CommonCard from "@/components/layout/Card";
import ContentModule from "@/components/layout/ContentModule";
import TabBar from "@/components/layout/Tab";

import React from "react";

const body = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f4f4f2" }}>
      <TabBar></TabBar>
      {/* <CommonCard></CommonCard> */}
      {/* <ContentModule></ContentModule> */}
      <BlockContent></BlockContent>
    </div>
  );
};

export default body;
