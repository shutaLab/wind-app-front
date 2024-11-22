import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../@/components/ui/dialog";
import {
  useShowDeparture,
  useUpdateDeparture,
} from "../queries/DepartureQuery";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../@/components/ui/form";
import { DepartureValidationShema } from "../@/components/ui/validationSchema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { DepartureType } from "../types/Departure";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "../@/components/ui/radio-group";
import { Input } from "../@/components/ui/input";
import IntraUserCombobox from "./IntraUserCombobox";
import { Button } from "../@/components/ui/button";
import { useGetUser } from "../queries/AuthQuery";
type DepartureEventModalProps = {
  open: boolean;
  handleClose: () => void;
  departureId: number;
};
const DepartureEventModal: React.FC<DepartureEventModalProps> = ({
  open,
  handleClose,
  departureId,
}) => {
  const { data: departure, isFetched } = useShowDeparture(departureId);
  const updateDeparture = useUpdateDeparture();
  const { data: user, isFetched: userIsFetched } = useGetUser();
  const [selectedDate, setSelectedDate] = useState<string | null>(
    dayjs(departure?.start).format("YYYY-MM-DD")
  );
  console.log(departure);
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Tokyo");
  const form = useForm<DepartureType>({
    resolver: zodResolver(DepartureValidationShema),
    values:
      isFetched && departure
        ? {
            date: dayjs(departure.start).format("YYYY-MM-DD"),
            start: dayjs(departure.start).format("HH:mm"),
            end: dayjs(departure.end).format("HH:mm"),
            intra_user_id: departure.intraUser?.id,
            description: departure.description || "",
          }
        : undefined,
  });

  const handleDateChange = (value: string) => {
    setSelectedDate(value);
    form.setValue("date", value);
  };

  function onsubmit(values: z.infer<typeof DepartureValidationShema>) {
    const startDateTime = dayjs
      .tz(`${selectedDate}T${values.start}`, "Asia/Tokyo")
      .format();
    const endDateTime = dayjs
      .tz(`${selectedDate}T${values.end}`, "Asia/Tokyo")
      .format();

    const departure: Omit<DepartureType, "date"> = {
      start: startDateTime,
      end: endDateTime,
      intra_user_id: values.intra_user_id,
      description: values.description,
    };
    updateDeparture.mutate({ id: departureId, values: departure });
    handleClose();
  }

  const isEditable = user?.id === departure?.user?.id;
  console.log(isEditable);
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="mb-5">出艇詳細</DialogTitle>
          <DialogDescription className="space-y-6">
            {!isFetched ? (
              <>loading</>
            ) : (
              <Form key={departureId} {...form}>
                <form
                  className="space-y-6"
                  onSubmit={form.handleSubmit(onsubmit)}
                >
                  <FormField
                    control={form.control}
                    name="date"
                    disabled={!isEditable}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormControl className="gap-0">
                          <RadioGroup
                            name="date"
                            className="flex"
                            disabled={!isEditable}
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
                                <div className="flex justify-center space-x-3 mx-auto">
                                  <p className="">今日</p>
                                  <div className="">
                                    {dayjs().format("M/D")}
                                  </div>
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
                                <div className="flex justify-center space-x-3 mx-auto">
                                  <p className="">明日</p>
                                  <div className="">
                                    {dayjs().add(1, "day").format("M/D")}
                                  </div>
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
                      disabled={!isEditable}
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
                      disabled={!isEditable}
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
                    disabled={!isEditable}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="mb-1"
                            placeholder="詳細"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    disabled={isEditable}
                    name="intra_user_id"
                    render={({ field }) => (
                      <FormItem>
                        <IntraUserCombobox
                          disabled={!isEditable}
                          value={field.value || null}
                          onChange={field.onChange}
                        />
                      </FormItem>
                    )}
                  />
                  {isEditable && (
                    <Button
                      className="w-full bg-custom-green h-10"
                      type="submit"
                    >
                      編集する
                    </Button>
                  )}
                </form>
              </Form>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DepartureEventModal;
