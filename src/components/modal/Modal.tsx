import Button from "@/components/common/Button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}


export function Modal({ children }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="primary">Open Modal</Button>
      </DialogTrigger>
      <DialogContent className="w-[479px] h-[690px] bg-gradient-to-b from-[#1C1B23] to-[#131318] border border-white/10 rounded-[12px] shadow-none p-6 text-white mx-auto">
        <DialogTitle className="sr-only"></DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  )
}
