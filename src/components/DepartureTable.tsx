import React, { useState } from "react";
import Footer from "../components/Footer";
import Ranking from "../components/Ranking";
import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../@/components/ui/table";
import Button from "../components/Button";

const DepartureTable = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="">
      <div className="text-center">
        {/* <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="今日" value="1" />
              <Tab label="明日" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </TabContext> */}
      </div>
      <div>
        <Table>
          <TableHeader className=" bg-gray-300">
            <TableRow>
              <TableHead className="w-[100px] ">名前</TableHead>
              <TableHead className="">開始</TableHead>
              <TableHead>終了</TableHead>
              <TableHead className="">イントラ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">山田脩太</TableCell>
              <TableCell>10:00</TableCell>
              <TableCell>15:00</TableCell>
              <TableCell className="">美咲</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">山田脩太</TableCell>
              <TableCell>10:00</TableCell>
              <TableCell>15:00</TableCell>
              <TableCell className="">美咲</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DepartureTable;
