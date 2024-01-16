import React from "react";
import styled from "styled-components";
import { useGlobalreach } from "../context/globalreach";

function History(){
    const {transactionHistory} = useGlobalreach();

    const history = transactionHistory().sort((a,b) => new Date(b.date) - new Date(a.date));

    return(
        <HistoryStyled>
            {history.map((item) =>{
                const {_id, title, amount, type} = item;
                return(
                    <div key = {_id} className="history-item">
                        <p style={{ color: type === 'income' ? 'red' : 'var(--color-green)' }}>{title}</p>
                        <p style={{ color: type === 'income' ? 'red' : 'var(--color-green)' }}>
                            {type === 'income' ? `-${'₹'}${amount <= 0 ? 0 : amount}` : `+${'₹'}${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;