import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DepartureValidationShema } from "../@/components/ui/validationSchema";
import { CreateNoteModalProps } from "../types/ModalProps";
import { Input } from "../@/components/ui/input";
// import { Dialog, DialogContent } from "@mui/material";
import { Button } from "../@/components/ui/button";
import { z } from "zod";
import { useCreateCalendaarEvent } from "../queries/CalenarQuery";
// import { CalendarIcon } from "lucide-react";
import { Departure } from "../types/Departure";
import dayjs from "dayjs";

const CreateDepartureModal: React.FC<CreateNoteModalProps> = ({
  open,
  handleClose,
}) => {
  const form = useForm<Departure>({
    resolver: zodResolver(DepartureValidationShema),
  });

  const createEvent = useCreateCalendaarEvent();

  function onsubmit(values: z.infer<typeof DepartureValidationShema>) {
    const formatISODate = (date: string | null) =>
      date ? new Date(date).toISOString().split(".")[0] + "Z" : "";

    const addOneDay = (date: string | null) => {
      if (!date) return "";
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + 1);
      return newDate.toISOString().split(".")[0] + "Z";
    };

    const formattedValues = {
      ...values,
      start: formatISODate(values.start),
      end: addOneDay(values.end),
    };

    console.log(formattedValues);
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
    // <Dialog open={open}>
    //   <DialogBody>
    //     <Form {...form}>
    //       <h1 className=" text-center font-bold mb-4">出艇を登録する</h1>
    //       <form className=" space-y-6" onSubmit={form.handleSubmit(onsubmit)}>
    //         <div className="flex justify-between">
    //           <FormField
    //             control={form.control}
    //             name="start"
    //             render={({ field }) => (
    //               <FormItem className="flex flex-col w-[50%]">
    //                 <Popover>
    //                   <PopoverTrigger asChild>
    //                     <FormControl>
    //                       <Button
    //                         variant={"outline"}
    //                         className={cn(
    //                           "w-full pl-3 text-left font-normal",
    //                           !field.value && "text-muted-foreground"
    //                         )}
    //                       >
    //                         {field.value ? (
    //                           format(new Date(field.value), "yyyy-MM-dd", {
    //                             locale: ja,
    //                           })
    //                         ) : (
    //                           <span>開始日付</span>
    //                         )}
    //                       </Button>
    //                     </FormControl>
    //                   </PopoverTrigger>
    //                   <PopoverContent
    //                     className="w-auto p-0 z-[9999]"
    //                     align="start"
    //                   >
    //                     <Calendar
    //                       mode="single"
    //                       selected={
    //                         field.value ? new Date(field.value) : undefined
    //                       }
    //                       onSelect={(date) =>
    //                         field.onChange(
    //                           date ? date.toISOString().split(".")[0] + "Z" : ""
    //                         )
    //                       }
    //                       initialFocus
    //                     />
    //                   </PopoverContent>
    //                 </Popover>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //           <FormField
    //             control={form.control}
    //             name="end"
    //             render={({ field }) => (
    //               <FormItem className="flex flex-col w-[50%]">
    //                 <FormControl>
    //                   <input
    //                     type="time"
    //                     className="rounded-none rounded-s-lg border text-gray-900 leading-none focus:ring-black-500 focus:border-black-500 block flex-1 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-gray-500"
    //                     onChange={handleTimeChange}
    //                   />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //         </div>
    //         <FormField
    //           control={form.control}
    //           name="description"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormControl>
    //                 <Input className="mb-1" {...field} placeholder="詳細" />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //         <div className="flex justify-end items-center mt-4">
    //           <a onClick={handleClose}>キャンセル</a>
    //           <Button className="ml-3 bg-custom-green" type="submit">
    //             投稿する
    //           </Button>
    //         </div>
    //       </form>
    //     </Form>
    //   </DialogBody>
    // </Dialog>
    <></>
  );
};

export default CreateDepartureModal;
