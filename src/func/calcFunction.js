const countForTable = (totalCost=0, downPayment=0, interestRate=0, monthQuantity=1) => {
  let res = []
  let amountBorrowed = totalCost - downPayment
  let loanBalance = amountBorrowed
  let monthlyRate = (interestRate/12)*0.01
  let totalRate = Math.pow((1 + monthlyRate), monthQuantity)
  let totalPayment = (amountBorrowed*monthlyRate*totalRate)/(totalRate-1)

  for (let i=1; i < monthQuantity+1; i++) {
    let interestPayment = loanBalance*monthlyRate
    let mainPart = totalPayment - interestPayment
    loanBalance -= mainPart
    let equity = totalCost - loanBalance
    // num.toFixed(2)
    res = [...res, 
      {
        'month': i,
        'totalPayment': totalPayment,
        'interestPayment': interestPayment,
        // 'loanBalance': ( (loanBalance <= 0) ? 0 : loanBalance ),
        'loanBalance': loanBalance,
        'equity': equity
      }
    ]    
  }

  return res
}

// module.exports = countForTable
export default countForTable