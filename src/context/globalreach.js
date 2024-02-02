import React, { useContext, useState } from "react"
import axios from 'axios'

const BASE_URL = "https://chrono-budget-manager-backend.onrender.com/api/v1/";

const Globalreach = React.createContext()

export const Globalprovider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    // income functions
    const addIncome = async (income) =>{
        const response = await axios.post(`${BASE_URL}add-income`,income)
            .catch((err)=>{
                setError(err.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () =>{
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async(id) =>{
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    } 

    //calculate incomes
    const totalIncome = () =>{
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome+= income.amount;
        })

        return totalIncome
    }

    // expense functions
    const addExpense = async (expense) =>{
        const response = await axios.post(`${BASE_URL}add-Expense`,expense)
            .catch((err)=>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () =>{
        const response = await axios.get(`${BASE_URL}get-Expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async(id) =>{
        const res = await axios.delete(`${BASE_URL}delete-expenses/${id}`)
        getExpenses()
    } 

    //calculate total expenses
    const totalExpense = () =>{
        let totalExpense = 0;
        expenses.forEach((expense) =>{
            totalExpense+= expense.amount;
        })

        return totalExpense
    }

    const totalBalance = () =>{
        return totalIncome() - totalExpense();
    }

    const transactionHistory = () =>{
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history
    }

    return(
        <Globalreach.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            totalIncome,
            deleteIncome,
            expenses,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory
        }}>
        {children}
        </Globalreach.Provider>
    )
};

export const useGlobalreach = () => {
    return useContext(Globalreach)
}