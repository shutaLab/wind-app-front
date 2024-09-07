import React, { useState } from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import DepartureTable from "../components/DepartureTable";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../@/components/ui/drawer";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../@/components/ui/table";
import NoteHeader from "../components/NoteHeader";
import CreateDepartureModal from "../components/CreateDepartureModal";
import {
  IntraApproveClaim,
  createDepartureEvent,
  // noti,
} from "../api/departureApi";
import { notification } from "../api/authApi";

const Departure = () => {
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };
  const onClose = () => {
    setDrawerOpen(false);
  };

  const clickModalOpen = () => {
    setOpen(true);
  };

  const clickModalClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <NoteHeader />
      <DepartureTable />
      <div className="px-3 mt-3 mb-5">
        <Button
          className="w-full bg-custom-green text-white"
          text="出艇する"
          onClick={clickModalOpen}
        />
        <Drawer>
          <DrawerTrigger className="w-full">
            <Button
              className="w-full bg-custom-gray mt-3 text-white"
              text="チャートを見る"
              onClick={showDrawer}
            />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerDescription>
                <div>
                  <Tabs defaultValue="today">
                    <TabsList className="w-full">
                      <TabsTrigger value="today" className="w-[50%]">
                        今日
                      </TabsTrigger>
                      <TabsTrigger value="tomorrow" className="w-[50%]">
                        明日
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="today">
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
                            <TableCell className="font-medium">
                              山田脩太
                            </TableCell>
                            <TableCell>10:00</TableCell>
                            <TableCell>15:00</TableCell>
                            <TableCell className="">美咲</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TabsContent>
                    <TabsContent value="tomorrow">
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
                            <TableCell className="font-medium">
                              副島朝水
                            </TableCell>
                            <TableCell>10:00</TableCell>
                            <TableCell>15:00</TableCell>
                            <TableCell className="">美咲</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              副島朝水
                            </TableCell>
                            <TableCell>10:00</TableCell>
                            <TableCell>15:00</TableCell>
                            <TableCell className="">美咲</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              副島朝水
                            </TableCell>
                            <TableCell>10:00</TableCell>
                            <TableCell>15:00</TableCell>
                            <TableCell className="">美咲</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              副島朝水
                            </TableCell>
                            <TableCell>10:00</TableCell>
                            <TableCell>15:00</TableCell>
                            <TableCell className="">美咲</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              副島朝水
                            </TableCell>
                            <TableCell>10:00</TableCell>
                            <TableCell>15:00</TableCell>
                            <TableCell className="">美咲</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              副島朝水
                            </TableCell>
                            <TableCell>10:00</TableCell>
                            <TableCell>15:00</TableCell>
                            <TableCell className="">美咲</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              副島朝水
                            </TableCell>
                            <TableCell>10:00</TableCell>
                            <TableCell>15:00</TableCell>
                            <TableCell className="">美咲</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              副島朝水
                            </TableCell>
                            <TableCell>10:00</TableCell>
                            <TableCell>15:00</TableCell>
                            <TableCell className="">美咲</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TabsContent>
                  </Tabs>
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button
                  className="w-full bg-custom-gray mt-3 text-white"
                  text="キャンセル"
                  onClick={onClose}
                />
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="mb-20">
        {/* <Button
          className="bg-slate-500 text-white"
          onClick={handle}
          text="出艇"
        />
        <Button
          className="bg-slate-500 text-white"
          onClick={handlecClaim}
          text="イントラする"
        /> */}
      </div>
      <div className="mt-15">
        <Footer />
      </div>
      <CreateDepartureModal open={open} handleClose={clickModalClose} />
    </div>
  );
};

export default Departure;
