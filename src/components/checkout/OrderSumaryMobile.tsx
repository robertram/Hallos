import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Button from "@/components/common/Button/Button";
import OrderSummary from "@/components/checkout/OrderSummary";
import { Ticket } from "@/types/checkout.type";
import OrderSummaryDesktop from "./OrderSummaryDesktop";

interface TicketSelection {
  [ticketId: string]: number;
}

interface OrderSummaryProps {
  tickets: Ticket[];
  selection: TicketSelection;
  setStep?: (step: number | ((prev: number) => number)) => void;
  selectedTickets: any
  firstSelectedTicket: any
  discount: any
  subtotal: any
  total: any
}

// export const OrderSummaryMobile = ({}) => {
export const OrderSummaryMobile: React.FC<OrderSummaryProps> = ({ tickets, selection, setStep, selectedTickets, firstSelectedTicket, discount, subtotal, total }) => {

  return (
    <Drawer>
      <DrawerTrigger className="w-full">
        <div className="bg-[#13131D] fixed bottom-0 left-0 w-full  px-[16px] py-[20px] rounded-t-[10px]">
          <div className="flex justify-between mb-[20px]">
            <p className="text-white text-lg font-bold opacity-60">Total</p>
            <span className="text-white font-medium">${total.toFixed(2)}</span>
          </div>
          <Button type="primary" className="w-full">
            View order summary
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-[#13131D] border-none">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          {/* <OrderSummary tickets={tickets} selection={selection} setStep={setStep} /> */}
          <OrderSummaryDesktop
            tickets={tickets}
            selection={selection}
            setStep={setStep}
            selectedTickets={selectedTickets}
            firstSelectedTicket={firstSelectedTicket}
            discount={discount}
            subtotal={subtotal}
            total={total}
          />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}