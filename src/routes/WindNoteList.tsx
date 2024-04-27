import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Input } from "antd";
// import Button from "../components/Button";
import WindNote from "../components/WindNote";
import Footer from "../components/Footer";
import axios from "axios";
import { Note } from "../types/Note";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../@/components/ui/drawer";
import { Button } from "../@/components/ui/button";

const WindNoteList = () => {
  const getNote = async () => {
    const { data } = await axios.get<Note[]>(
      "https://serene-hollows-70259-0e810f44b7df.herokuapp.com/api/windNote"
    );
    setNotes(data);
  };

  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    getNote();
  }, []);
  return (
    <div>
      {/* <div className="flex h-10 justify-around mb-3">
        <div className="w-[60%]">
          <input
            className="w-full shadow appearance-none border rounded py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:border-black h-full"
            placeholder="検索"
          />
        </div>
        <Button className="text-white bg-custom-gray" text="ノートを追加" />
      </div>
      <div>
        <WindNote notes={notes} />
        <p>
          {notes.map((note) => (
            <p>{note.title}</p>
          ))}
        </p>
      </div> */}
      <Footer />
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default WindNoteList;
