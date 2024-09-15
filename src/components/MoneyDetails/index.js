import './index.css'


const MoneyDetails = ({balanceAmount, incomeAmount, expensesAmount}) => { 



    return (
        <div>
                <div className="money-details-container">
                    <div className="balance-container">
                        <img src=""
                        alt="balance"
                        className="details-img"
                        />
                        <div>
                            <p className="details-text">Your Balance</p> 
                            <p className="details-money" data-testid="balanceAmount">Rs {balanceAmount}</p>
                        </div>
                    </div>
                    <div className="income-container">
                        <img src=""
                        alt="income"
                        className="details-img" 
                        />
                    <div>
                    <p className="details-text">Your Income</p> 
                    <p className="details-money" data-textid="incomeAmount" >
                        Rs {incomeAmount}
                    </p>
                </div>
                <div>
                    <div className="expenses-container">
                        <img src=""
                        alt="expenses"
                        className="details-img" 
                        />
                        <div>
                            <p className="details-text">Your Expenses</p> 
                            <p className="details-money" data-testid="expensesAMount">
                                Rs {expensesAmount}
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
            
        

    )
}

export default MoneyDetails