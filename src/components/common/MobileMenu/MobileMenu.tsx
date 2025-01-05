// import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export const MobileMenu = ({ children }: any) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="text-white text-2xl leading-7 cursor-pointer"
        >
          ☰
        </button>
      </SheetTrigger>
      <SheetContent className="bg-black">
        <SheetHeader>
          {/* <SheetTitle>Edit profile</SheetTitle> */}
          {/* <SheetDescription>
            {children}
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {children ? children : "No content available"}
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <button type="submit">Save changes</button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
