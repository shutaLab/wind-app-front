export interface CreateNoteModalProps {
  open: boolean;
  handleClose: () => void;
}

export interface CreateModalProps {
  modalOpen: boolean;
  clickModalClose: () => void;
  currentLocation: string;
}

export interface EditModalProps {
  modalOpen: boolean;
  clickModalClose: () => void;
  currentLocation: string;
}
