import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../@/components/ui/form";
import { useForm, useFormState } from "react-hook-form";
import { Calendar as CalendarType } from "../types/Calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarEventValidationShema } from "../@/components/ui/validationSchema";
import { CreateNoteModalProps } from "../types/ModalProps";
import { Input } from "../@/components/ui/input";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Button } from "../@/components/ui/button";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../@/components/popover";
import { cn } from "../@/lib/utils";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Calendar } from "../@/components/ui/calendar";
import { Checkbox } from "../@/components/ui/checkbox";
import { useCreateCalendaarEvent } from "../queries/CalenarQuery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../@/components/ui/dialog";

const CreateCalendarEvent: React.FC<CreateNoteModalProps> = ({
  open,
  handleClose,
}) => {
  const form = useForm<CalendarType>({
    resolver: zodResolver(CalendarEventValidationShema),
    mode: "onChange",
  });

  const createEvent = useCreateCalendaarEvent();

  function onsubmit(values: z.infer<typeof CalendarEventValidationShema>) {
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
    createEvent.mutate(formattedValues);
    handleClose();
  }

  const { isSubmitting, isValid } = useFormState(form);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5">予定を追加する</DialogTitle>
          <DialogDescription className="">
            <Form {...form}>
              <form
                className="space-y-6"
                onSubmit={form.handleSubmit(onsubmit)}
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="mb-1"
                          {...field}
                          placeholder="タイトル"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="mb-1" {...field} placeholder="内容" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between">
                  <FormField
                    control={form.control}
                    name="start"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-[50%]">
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(new Date(field.value), "yyyy-MM-dd", {
                                    locale: ja,
                                  })
                                ) : (
                                  <span>開始日付</span>
                                )}
                                <CalendarTodayOutlinedIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0 z-[9999]"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={
                                field.value ? new Date(field.value) : undefined
                              }
                              onSelect={(date) =>
                                field.onChange(
                                  date
                                    ? date.toISOString().split(".")[0] + "Z"
                                    : ""
                                )
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="end"
                    render={({ field }) => (
                      <FormItem className="flex flex-col w-[50%]">
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(new Date(field.value), "yyyy-MM-dd", {
                                    locale: ja,
                                  })
                                ) : (
                                  <span>終了日付</span>
                                )}
                                <CalendarTodayOutlinedIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto p-0 z-[9999]"
                            align="start"
                          >
                            <Calendar
                              mode="single"
                              selected={
                                field.value ? new Date(field.value) : undefined
                              }
                              onSelect={(date) =>
                                field.onChange(
                                  date
                                    ? date.toISOString().split(".")[0] + "Z"
                                    : ""
                                )
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="is_absent"
                  render={({ field }) => (
                    <FormItem className="rounded-md border p-2 shadow">
                      <div className="flex items-center w-full">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) =>
                              field.onChange(checked as boolean)
                            }
                          />
                        </FormControl>
                        <FormLabel className="w-full ml-3 text-left text-gray-500 ">
                          欠席連絡
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="w-full py-4"
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
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

export default CreateCalendarEvent;
