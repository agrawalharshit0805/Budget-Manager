import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { useGlobalreach } from '../../context/globalreach'
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
  const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalreach();

  useEffect(()=>{
    getIncomes()
  },[])

  // Sort incomes based on date in descending order
  const sortedIncome = incomes.sort((a,b) => new Date(b.date) - new Date(a.date))
  return (
    <Incomestyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <h2 className="total-income">Total Income :- <span>₹{totalIncome()}</span>  </h2>
        <br/>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <br />
          <div className="income">
            {sortedIncome.map((income) =>{
              const {_id, title, amount, date, category, description, type} = income;
              return <IncomeItem
                key={_id}
                id={_id} 
                title={title} 
                description={description} 
                amount={amount} 
                date={date} 
                type={type}
                category={category} 
                indicatorColor="var(--color-green)"
                deleteItem = {deleteIncome}            
                />
            })}
          </div>
        </div>
      </InnerLayout>
    </Incomestyled>
  )
}

const Incomestyled = styled.div`
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
      .income{
          flex: 1;
      }
  }
`

export default Income