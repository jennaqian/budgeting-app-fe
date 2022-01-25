import {useState, useEffect} from "react"
import Transaction from "./Transaction.js"
import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

function Transactions () {
    const [transactions, setTransactions] = useState([])
    // console.log(API_URL)
    useEffect(()=> {
        axios.get(API_URL + "/transactions")
        .then((res)=> {
            // console.log(res.data)
            setTransactions(res.data)
        }).catch((err) =>{
            throw err;
        })
    }, [])

    let accountTotal = transactions.map((elem)=> Number(elem.amount)).reduce((accu, currentVal) => {
        return accu + currentVal}, 0)
    return(
        <div className="transactions-background">
            {/* <div className="totalAmt-container"> */}
                <h3 className="totalAmt-container">Total: ${accountTotal}</h3>
            {/* </div> */}
            <section className="transactionsTable">
                <table className="table">

                    <thead>
                        <tr>
                            <th>Date:</th>
                            <th>From:</th>
                            <th>Type:</th>
                            <th>Amount:</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((transaction, index) => {
                            return <Transaction key={index} transaction={transaction} index={index}/>
                        })}
                    </tbody>

                </table>
            </section>
        </div>
    )
}
export default Transactions