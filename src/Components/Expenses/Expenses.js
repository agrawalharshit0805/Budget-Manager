import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { useGlobalreach } from '../../context/globalreach'
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from '../Form/ExpenseForm';

function Expenses() {
  const {expenses, getExpenses, deleteExpense, totalExpense} = useGlobalreach();

  useEffect(()=>{
    getExpenses()
  },[]);

  // Sort expenses based on date in descending order
  const sortedExpenses = expenses.sort((a,b) => new Date(b.date) - new Date(a.date))
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">Total Expense :- <span>₹{totalExpense()}</span> </h2>
        <br/>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm/>
          </div>
          <br />
          <div className="expenses">
            {sortedExpenses.map((expense) =>{
              const { _id, title, amount, date, category, description} = expense;
              return (
                <IncomeItem
                  key={_id}
                  id={_id} 
                  title={title} 
                  description={description} 
                  amount={amount} 
                  date={date} 
                  type="expense"
                  category={category} 
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />)
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span{
      font-size: 2.5rem;
        font-weight: 800;
        color: var(--color-green);
    }
  }

  .income-content{
      display: flex;
      gap: 2rem;
      .expenses{
          flex: 1;
      }
  }
`;

export default Expenses