import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../@/components/ui/dialog";
import { AlertDialogHeader } from "../@/components/ui/alert-dialog";
import { CreateNoteModalProps } from "../types/ModalProps";

const DepartureEventModal: React.FC<CreateNoteModalProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="mb-5">出艇詳細</DialogTitle>
          <DialogDescription>
            <div>
              <p>イントラする</p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DepartureEventModal;
