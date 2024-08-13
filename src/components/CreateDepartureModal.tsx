import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DepartureValidationShema } from "../@/components/ui/validationSchema";
import { CreateNoteModalProps } from "../types/ModalProps";
import { Input } from "../@/components/ui/input";
import { Button } from "../@/components/ui/button";
import { z } from "zod";
import { useCreateCalendaarEvent } from "../queries/CalenarQuery";
import { Departure } from "../types/Departure";
import dayjs from "dayjs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../@/components/ui/form";
import Select from "react-select/dist/declarations/src/Select";
import Combobox from "./IntraUserCombobox";
import IntraUserCombobox from "./IntraUserCombobox";
const CreateDepartureModal: React.FC<CreateNoteModalProps> = ({
  open,
  handleClose,
}) => {
  const form = useForm<Departure>({
    resolver: zodResolver(DepartureValidationShema),
  });

  const createEvent = useCreateCalendaarEvent();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  function onsubmit(values: z.infer<typeof DepartureValidationShema>) {
    // const formatTime = (time: string | null) => {
    //   const isoTime =
    // };
    handleClose();
  }

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTime = event.target.value;
    const currentDate = dayjs().format("YYYY-MM-DD");
    const dateTimeString = `${currentDate}T${selectedTime}:00`;
    const iso8601String = dayjs(dateTimeString).add(9, "hour").toISOString(); // 9時間追加してからISO 8601形式に変換
    console.log(iso8601String);
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5 font-bold">出艇を登録する</DialogTitle>
          <DialogDescription className="space-y-6">
            <ul className="flex justify-center ">
              <li className="w-[50%]">
                <input
                  type="radio"
                  id="today"
                  name="date"
                  className="hidden peer"
                  defaultChecked
                />
                <label
                  htmlFor="today"
                  className="inline-flex items-center justify-between w-full p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 peer-checked:border-custom-green peer-checked:text-custom-green"
                >
                  <div className="flex">
                    <p className="">今日</p>
                    <div className="">8/6(火)</div>
                  </div>
                </label>
              </li>
              <li className="w-[50%]">
                <input
                  type="radio"
                  id="tomorrow"
                  name="date"
                  className=" hidden peer"
                />
                <label
                  htmlFor="tomorrow"
                  className="inline-flex items-center justify-between w-full p-3  bg-white border border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 peer-checked:border-custom-green peer-checked:text-custom-green"
                >
                  <div className="flex">
                    <p className="">明日</p>
                    <div className="">8/7(火)</div>
                  </div>
                </label>
              </li>
            </ul>
            <Form {...form}>
              <form
                className=" space-y-6"
                onSubmit={form.handleSubmit(onsubmit)}
              >
                <div className="flex justify-center">
                  <FormField
                    control={form.control}
                    name="start"
                    render={({ field }) => (
                      <FormItem className="w-[50%]">
                        <FormControl>
                          <Input className="mb-1" {...field} type="time" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="end"
                    render={({ field }) => (
                      <FormItem className="w-[50%]">
                        <FormControl>
                          <Input className="mb-1" {...field} type="time" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="mb-1" placeholder="詳細" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <IntraUserCombobox />

                <Button className="w-full bg-custom-green h-10" type="submit">
                  投稿する
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDepartureModal;
