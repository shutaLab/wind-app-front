import { Dialog, DialogActions, DialogContent } from "@mui/material";
import React from "react";
import { CreateHeaderModalProps } from "../types/ModalProps";
import CreateQuestion from "./CreateQuestion";
import { Button } from "../@/components/ui/button";
import CreateNote from "./CreateNote";
import CreateCalendarEvent from "./CreateCalendarEvent";

const CreateModal: React.FC<CreateHeaderModalProps> = ({
  modalOpen,
  clickModalClose,
  currentLocation,
}) => {
  const renderContent = () => {
    switch (currentLocation) {
      case "/windNote":
        return (
          <CreateNote
            currentLocation={currentLocation}
            modalOpen={modalOpen}
            clickModalClose={clickModalClose}
          />
        );
      case "/question":
        return (
          <CreateQuestion
            currentLocation={currentLocation}
            modalOpen={modalOpen}
            clickModalClose={clickModalClose}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Dialog
        open={modalOpen}
        onClose={clickModalClose}
        maxWidth="xl"
        fullWidth
      >
        <DialogContent>{renderContent()}</DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateModal;
