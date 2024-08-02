import React, { useState } from "react";
import { Button } from "../@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../@/components/ui/dialog";

export function MyPage() {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>予定を追加する</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-2">
            <Button type="submit" className="w-full">
              投稿する
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
