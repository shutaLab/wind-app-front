import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DepartureValidationShema } from "../@/components/ui/validationSchema";
import { CreateNoteModalProps } from "../types/ModalProps";
import { Input } from "../@/components/ui/input";
import { Button } from "../@/components/ui/button";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
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
import IntraUserCombobox from "./IntraUserCombobox";
import { RadioGroup, RadioGroupItem } from "../@/components/ui/radio-group";
import { z } from "zod";
import { useCreateDepartureEvent } from "../queries/DepartureQuery";
import { DepartureType } from "../types/Departure";

const CreateDepartureModal: React.FC<CreateNoteModalProps> = ({
  open,
  handleClose,
}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Tokyo");

  const createDeparture = useCreateDepartureEvent();
  const form = useForm<DepartureType>({
    resolver: zodResolver(DepartureValidationShema),
  });

  const handleDateChange = (value: string) => {
    setSelectedDate(value);
    form.setValue("date", value);
  };

  function onsubmit(values: z.infer<typeof DepartureValidationShema>) {
    console.log(values);
    const startDateTime = dayjs.tz(`${selectedDate}T${values.start}`, "Asia/Tokyo").format();
    const endDateTime = dayjs.tz(`${selectedDate}T${values.end}`, "Asia/Tokyo").format();

    const departure: Omit<DepartureType, "date"> = {
      start: startDateTime,
      end: endDateTime,
      intra_user_id: values.intra_user_id,
      description: values.description,
    };
    createDeparture.mutate(departure);
    handleClose();
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5 font-bold">出艇を登録する</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onsubmit)}
              >
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormControl className="gap-0">
                        <RadioGroup
                          name="date"
                          className="flex"
                          onValueChange={(value) => {
                            field.onChange(value);
                            handleDateChange(value);
                          }}
                          value={selectedDate || ""}
                        >
                          <FormItem className="flex items-center space-y-0 w-[50%]">
                            <FormControl>
                              <RadioGroupItem
                                id="today"
                                className="peer hidden"
                                value={dayjs().format("YYYY-MM-DD")}
                              />
                            </FormControl>
                            <label
                              htmlFor="today"
                              className={`inline-flex items-center justify-between w-full p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 ${
                                selectedDate === dayjs().format("YYYY-MM-DD")
                                  ? "border-custom-green text-custom-green"
                                  : ""
                              }`}
                            >
                              <div className="flex mx-auto">
                                <p className="">今日</p>
                                <div className="">8/8(水)</div>
                              </div>
                            </label>
                          </FormItem>
                          <FormItem className="flex items-center space-y-0 w-[50%]">
                            <FormControl>
                              <RadioGroupItem
                                id="tomorrow"
                                className="peer hidden"
                                value={dayjs()
                                  .add(1, "day")
                                  .format("YYYY-MM-DD")}
                              />
                            </FormControl>
                            <label
                              htmlFor="tomorrow"
                              className={`inline-flex items-center justify-between w-full p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:text-gray-600 hover:bg-gray-100 ${
                                selectedDate ===
                                dayjs().add(1, "day").format("YYYY-MM-DD")
                                  ? "border-custom-green text-custom-green"
                                  : ""
                              }`}
                            >
                              <div className="flex mx-auto">
                                <p className="">明日</p>
                                <div className="">8/9(木)</div>
                              </div>
                            </label>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                <FormField
                  control={form.control}
                  name="intra_user_id"
                  render={({ field }) => (
                    <FormItem>
                      <IntraUserCombobox
                        value={field.value || null}
                        onChange={field.onChange}
                      />
                    </FormItem>
                  )}
                />

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
