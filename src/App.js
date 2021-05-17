
import './App.css';
import Header from "./components/header";
import Balance from "./components/balance";
import IncomeExpense from "./components/incomeExpenses";
import TransactionList from './components/transactionList';
import AddComponent from './components/addComponent';

import {GlobalProvider} from './context/globalState'

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className = "container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddComponent />
      </div>
    </GlobalProvider>
  );
}

export default App;
