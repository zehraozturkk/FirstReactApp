import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";


function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    })


     //EXPENSESlİST COMPONENTINA TAŞIDIK BUNLARI VE ORADA DEĞŞİKLİK YAPTIK
    // let expensesContent = <p>No expense found</p>;

    // if(filteredExpenses.length > 0 ){
    //     expensesContent = filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key = {expense.id}
    //             title = {expense.title}
    //             amount = {expense.amount}
    //             date = {expense.date}
    //         />
    //     ))
    // }

    return (
        <div>
            <Card className="expenses">
            <ExpenseFilter selected={filteredYear} 
            onChangeFilter ={filterChangeHandler}
            />
            <ExpensesChart expenses = {filteredExpenses}/>
            <ExpensesList items = {filteredExpenses} />


            {/* {filteredExpenses.length === 0 &&  <p>No expense found</p>}
            {filteredExpenses.length > 0 &&
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key = {expense.id}
                        title = {expense.title}
                        amount = {expense.amount}
                        date = {expense.date}
                    />
                ))
            } */}
            
                
            </Card>
        </div>
    )
    
    
}

export default Expenses;