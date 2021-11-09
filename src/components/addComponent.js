import { useContext, useState } from 'react';
import {GlobalContext} from '../context/globalState';

function AddComponent() {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const{addTransaction} = useContext(GlobalContext);

    function SetText(e){
        setText(e.target.value);
    }

    function SetAmount(e){
        setAmount(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random() * 100000000),
            text,
            amount : +amount
        }
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    }

    return(
        <>
            <h3>Add new transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value = {text} onChange = {SetText} placeholder="Enter text... " />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" value = {amount} onChange = {SetAmount} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddComponent;