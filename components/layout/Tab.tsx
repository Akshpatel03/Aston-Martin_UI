import React from "react";
import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
const TabBar = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              className="fontColor"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab className="fontColor" label="DBX" value="1" />
              <Tab label="VANTAGE" value="2" />
              <Tab label="DB12" value="3" />
              <Tab label="DBS" value="4" />
              <Tab label="VALHALLA" value="5" />
              <Tab label="VALKYRIE" value="6" />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
};

export default TabBar;
