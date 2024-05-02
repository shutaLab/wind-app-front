import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import React from "react";
import AutoAdjustTextarea from "./AutoTextArea";
import { DateSelect } from "./DateSelect";
import Button from "./Button";
import { ModalProps } from "../types/ModalProps";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Note } from "../types/Note";
import { createNoteValidationShema } from "../utils/validationSchema";

const CreateNoteModal: React.FC<ModalProps> = ({ open, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Note>({
    mode: "onChange",
    resolver: zodResolver(createNoteValidationShema),
  });

  const onsubmit = (data: Note) => {
    console.log(data);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <Dialog
          maxWidth="xl"
          fullWidth
          sx={{ zIndex: 1 }}
          open={open}
          onClose={handleClose}
        >
          <DialogContent>
            <DialogContentText>
              <div>
                <input
                  className="border boerder-gray-400 w-full "
                  placeholder="タイトル"
                  id="title"
                  {...register("title")}
                />
                <p className=" text-red-700">
                  {errors.title?.message as React.ReactNode}
                </p>
              </div>
              <div>
                <AutoAdjustTextarea
                  className="my-4"
                  placeholder="内容"
                  id="content"
                  {...register("content")}
                />
                <p className=" text-red-700">
                  {errors.content?.message as React.ReactNode}
                </p>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} text="キャンセル" />
            <Button
              className="bg-custom-green text-white"
              onClick={handleClose}
              text="追加"
            />
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default CreateNoteModal;
