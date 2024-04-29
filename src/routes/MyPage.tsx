import React, { useState } from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Ranking from "../components/Ranking";
import { Avatar, Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
const StyledTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: "#FF9800", // 選択された状態の文字色をオレンジ色に変更
  },
}));
const MyPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="px-3">
      <div>
        <header className="text-right mb-3">
          <MenuIcon fontSize="large" className="text-gray-500 " />
        </header>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold	 text-2xl">山田脩太</p>
            <p>yamdashuta@gmail.com</p>
          </div>
          <div>
            <Avatar sx={{ width: "64px", height: "64px" }} />
          </div>
        </div>
        <div>
          <p>東京海洋大学3年</p>
          <p>31-50</p>
        </div>
        <div className="flex justify-around mt-3">
          <Button
            className="border border-gray-300 text-black font-bold w-[45%]"
            text="プロフィールを編集"
          />
          <Button
            className="border border-gray-300 text-black font-bold w-[45%]"
            text="脩太に寄付する"
          />
        </div>
        <div className="text-center">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                textColor="primary"
                centered
                onChange={handleChange}
                aria-label="lab API tabs example"
                TabIndicatorProps={{
                  style: { backgroundColor: "black" },
                }}
              >
                <Tab label="投稿したノート" value="1" />
                <Tab label="出艇回数" value="2" />
                <Tab label="ランキング" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
