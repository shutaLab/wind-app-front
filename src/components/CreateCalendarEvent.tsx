import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../@/components/ui/form";
import { useForm } from "react-hook-form";
import { Calendar as CalendarType } from "../types/Calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarEventValidationShema } from "../utils/validationSchema";
import { CreateNoteModalProps } from "../types/ModalProps";
import { Input } from "../@/components/ui/input";
import { Dialog, DialogContent } from "@mui/material";
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
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../@/components/ui/calendar";

const CreateCalendarEvent: React.FC<CreateNoteModalProps> = ({
  open,
  handleClose,
}) => {
  const form = useForm<CalendarType>({
    resolver: zodResolver(CalendarEventValidationShema),
  });

  function onsubmit(values: z.infer<typeof CalendarEventValidationShema>) {
    const formattedValues = {
      ...values,
      start_date: values.start_date
        ? new Date(values.start_date).toISOString()
        : null,
    };
    console.log(formattedValues);
    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth>
      <DialogContent>
        <Form {...form}>
          <h1 className=" text-center font-bold mb-4">予定を追加する</h1>
          <form className=" space-y-6" onSubmit={form.handleSubmit(onsubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="mb-5" {...field} placeholder="タイトル" />
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
                    <Input className="" {...field} placeholder="内容" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="start_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
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
                            <span>日付を選択</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
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
                          field.onChange(date ? date.toISOString() : null)
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end items-center mt-4">
              <a onClick={handleClose}>キャンセル</a>
              <Button className="ml-3 bg-custom-green" type="submit">
                投稿する
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCalendarEvent;
