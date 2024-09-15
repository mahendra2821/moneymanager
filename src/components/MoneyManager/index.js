
import { useState } from 'react';
import { v4 } from 'uuid';
import TransactionItem from '../TransactionItem';
import './index.css';
import MoneyDetails from '../MoneyDetails';

const transactionTypesOption = [
  { optionId: 'INCOME', displayText: 'Income' },
  { optionId: 'EXPENSES', displayText: 'Expenses' },
];

const MoneyManager = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [titleInput, setTitleInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [optionId, setOptionType] = useState(transactionTypesOption[0].optionId);

  const deleteTransaction = (id) => {
    const updatedTransaction = transactionList.filter((eachTransaction) => id !== (eachTransaction.id));
    setTransactionList(updatedTransaction);
  };

  const onAddTransaction = (event) => {
    event.preventDefault();
    const typeOption = transactionTypesOption.find((eachTransaction) => eachTransaction.optionId === optionId);
    const { displayText } = typeOption;
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    };
    setTransactionList((prevState) => [...prevState, newTransaction]);
    setTitleInput('');
    setAmountInput('');
    setOptionType(transactionTypesOption[0].optionId);
  };

  const OnChangeOptionId = (event) => {
    setOptionType(event.target.value);
  };

  const onChangeAmount = (event) => {
    setAmountInput(event.target.value);
  };

  const onChangeTitleInput = (event) => {
    setTitleInput(event.target.value);
  };

  const getExpenses = () => {
    let expensesAmount = 0;
    transactionList.forEach((eachTransaction) => {
      if (eachTransaction.type === transactionTypesOption[1].displayText) {
        expensesAmount += eachTransaction.amount;
      }
    });
    return expensesAmount;
  };

  const getIncome = () => {
    let incomeAmount = 0;
    transactionList.forEach((eachTransaction) => {
      if (eachTransaction.type === transactionTypesOption[0].displayText) {
        incomeAmount += eachTransaction.amount;
      }
    });
    return incomeAmount;
  };

  const getBalance = () => {
    const incomeAmount = getIncome();
    const expensesAmount = getExpenses();
    return incomeAmount - expensesAmount;
  };

  return (
    <div>
      <div className="app-container">
        <div className="responsive-container">
          <div className="header-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="header-content">
              Welcome back to Your <span className="money-manager-text">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={getBalance()}
            incomeAmount={getIncome()}
            expensesAmount={getExpenses()}
          />
        <div className='transaction-details'>
                            <form className='transaction-form' onSubmit={onAddTransaction}>
                                <h1 className='transaction-header'>Add Transaction</h1> 
                                <label className='input-label' htmlFor='titles' >
                                    Title
                                 </label> 
                                 <input type='text' 
                                 id="title" 
                                 value={titleInput} 
                                 onChange={onChangeTitleInput} 
                                 className='input' 
                                 placeholder='TITLE' 
                                 />
                                 <label className='input-label' htmlFor='amount' >
                                    AMOUNT
                                    </label> 
                                    <input type='text' 
                                    id = 'amount' 
                                    className=''input 
                                    value={amountInput}
                                    onChange={onChangeAmount} 
                                    placeholder='amount' 
                                    />
                                    <label className='input-label' htmlFor='select'>
                                        TYPE
                                        </label>       
                                        <select 
                                        id="select" 
                                        className='input'
                                        value={optionId}
                                        onChange={OnChangeOptionId} 
                                        >
                                            {transactionTypesOption.map(eachOptions => (
                                                <option key={eachOptions.optionId} value={eachOptions.optionId} >
                                                         {eachOptions.displayText} 
                                                </option>
                                            ))}
                                        </select>
                                        <button type="submit" className='button'>
                                            Add
                                        </button> 

                                                         </form> 
                                                         <div className='history-transactions'>
                                                            <h1 className='transaction-header'>History</h1> 
                                                            <div className='transactions-table-container'>
                                                                <ul className='transactions-table'>
                                                                    <li className='table-header'>
                                                                        <p className='table-header-cell'>Titlle</p>
                                                                        <p className='table-header-cell'>Amount </p>
                                                                        <p className='table-header-cell'>Type</p>
    
                                                                    </li> 
                                                                    {transactionList.map(eachTransaction => ( 
                                                                        <TransactionItem 
                                                                        key={eachTransaction.id} 
                                                                        transactionListDetails = {eachTransaction} 
                                                                        deleteTransaction={deleteTransaction} 
                                                                        />
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                         </div>     
                        </div>
                    </div>
                </div>

        </div>

    )
}


export default MoneyManager;
