import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layouts'
import History from '../../History/History';

function ViewTransactions() {
  return (
    <ViewStyled>
        <InnerLayout>
            <h1 className='head'>Transaction History</h1>
            <History/>
        </InnerLayout>
    </ViewStyled>
  )
}

const ViewStyled = styled.div`
    .head{
        padding-bottom:2rem;
    }
`

export default ViewTransactions
