import {View, StyleSheet } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../../constants/Styles";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        description: "A pair of shoe",
        amount: 59.99,
        date: new Date("2021-12-19") 
    },
    {
        id: "e2",
        description: "A pair of shirt",
        amount: 89.99,
        date: new Date("2022-01-01") 
    },
    {
        id: "e3",
        description: "Some Bananas",
        amount: 5.99,
        date: new Date("2021-12-01") 
    },
    {
        id: "e4",
        description: "Book",
        amount: 14.99,
        date: new Date("2021-02-19") 
    },
    {
        id: "e5",
        description: "Another Book",
        amount: 18.59,
        date: new Date("2021-02-18") 
    },
    {
        id: "e6",
        description: "A pair of shoe",
        amount: 59.99,
        date: new Date("2021-12-19") 
    },
    {
        id: "e7",
        description: "A pair of shirt",
        amount: 89.99,
        date: new Date("2022-01-01") 
    },
    {
        id: "e8",
        description: "Some Bananas",
        amount: 5.99,
        date: new Date("2021-12-01") 
    },
    {
        id: "e9",
        description: "Book",
        amount: 14.99,
        date: new Date("2021-02-19") 
    },
]

function ExpensesOutput({ expenses, expensesPeriod }) {
   return (
   <View style={styles.container}>
       <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
       <ExpensesList expenses={DUMMY_EXPENSES} />
   </View>
   )   
}

export default ExpensesOutput;  

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 0,
      backgroundColor: GlobalStyles.colors.primary700
  }
})