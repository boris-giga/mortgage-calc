const Table = ({data}) => {
  console.log(data);
  return (
    <div>
    <table className="table">
        <thead>
            <tr>
                <th>Month</th>
                <th>Total payment</th>
                <th>Interest payment</th>
                <th>Loan balance</th>
                <th>Equity</th>
            </tr>
        </thead>
        <tbody>
            { data.map(item =>(
                <tr key={item.month}>
                    <td>{item.month}</td>
                    <td>{item.totalPayment.toFixed(2)}</td>
                    <td>{item.interestPayment.toFixed(2)}</td>
                    <td>{item.loanBalance.toFixed(2)}</td>
                    <td>{item.equity.toFixed(2)}</td>
                </tr>
            ))}
        </tbody>
    </table>

    </div>
  )
}

export default Table