import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import { useGlobalreach } from '../../context/globalreach'
import Chart from '../Chart/Chart';
import TopTransactions from '../TopTransactions/TopTransactions';

function Dashboard() {
  const{totalIncome, totalExpense , totalBalance, getIncomes, getExpenses} = useGlobalreach();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
      <h1 className="total-balance">Total Balance :- <span>₹{totalBalance()}</span></h1>
          <div className="charts">
            <div className="chart-item">
              <h2 className="total-income">Total Income: ₹{totalIncome()}</h2>
                <Chart chartType="income" />
                <TopTransactions type={"income"}/>
            </div>
            <div className="chart-item">
                <h2 className="total-expense">Total Expense: ₹{totalExpense()}</h2>
                <Chart chartType="expense" />
                <TopTransactions type={"expense"}/>
            </div>
          </div>
    </InnerLayout>
</DashboardStyled>
  )
}

const DashboardStyled = styled.div`
    .total-balance {
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

    .total-income{
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
    }
    .total-expense {
        font-size: 2rem;
        font-weight: bold;
    }

    .charts {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        margin-bottom: 2rem;        
    }

    .chart-item {
        flex: 1;
        background: #CBF1F5;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;

        h2 {
            font-size: 2rem;
            margin-bottom: 3rem;
            text-align: center;
        }
    }
`;

export default Dashboard;
