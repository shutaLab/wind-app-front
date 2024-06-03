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
import { DatePickerDemo } from "./DatePicker";

const CreateCalendarEvent: React.FC<CreateNoteModalProps> = ({
  open,
  handleClose,
}) => {
  const form = useForm<CalendarType>({
    resolver: zodResolver(CalendarEventValidationShema),
  });

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="xl" fullWidth>
        <DialogContent>
          <Form {...form}>
            <h1 className="mb-4 text-center font-bold">予定を追加する</h1>
            <form>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="mb-5"
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
                      <Input className="mb-5" {...field} placeholder="内容" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="mb-5" {...field} placeholder="開始日" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <div>
            <DatePickerDemo />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateCalendarEvent;
