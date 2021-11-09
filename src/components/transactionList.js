import {useContext} from 'react';
import Transaction from './transaction'
import {GlobalContext} from '../context/globalState'

function TransactionList(){

    const {transactions} = useContext(GlobalContext);

    return(
         <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(
                    transaction => (
                    <Transaction key = {transaction.id} 
                    transaction =  {transaction} 
                />) )} 
      </ul>
         </>
    )
}

export default TransactionList;