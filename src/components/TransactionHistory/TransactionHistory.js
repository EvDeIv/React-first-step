function TransactionHistory({ items }) {
  return (
    <table className="table-auto divide-y divide-gray-200 my-5 border ">
      <thead className="divide-y divide-x text-white">
        <tr className="bg-blue-400">
          <th className="border pl-24 text-left">Type</th>
          <th className="border p-3">Amount</th>
          <th className="border p-3">Currency</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-x text-gray-400">
        {items.map((el) => (
          <tr key={el.id} className="border">
            <td className="border py-3 px-24">{el.type}</td>
            <td className="border py-3 px-24 text-center">{el.amount}</td>
            <td className="border py-3 px-24 text-center">{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
