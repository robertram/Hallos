export const OrderDetails = ({ eventName, ticketPrice, ticketType, discount, subtotal, total }: { eventName: string; ticketPrice: string; ticketType: string; discount: string; subtotal: string; total: string }) => (
    <table className="w-full my-4">
      <thead>
        <tr>
          <th className="text-left">Event Name</th>
          <th className="text-right">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{eventName}</td>
          <td className="text-right">{ticketPrice}</td>
        </tr>
        <tr>
          <td>Type</td>
          <td className="text-right">{ticketType}</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td className="text-right">{discount}</td>
        </tr>
        <tr>
          <td>Subtotal</td>
          <td className="text-right">{subtotal}</td>
        </tr>
        <tr>
          <td className="font-bold">Total</td>
          <td className="text-right font-bold">{total}</td>
        </tr>
      </tbody>
    </table>
  );