import {Link} from "react-router-dom"

function Transaction ({transaction, index}) {
    return(
            <tr>
                <td>{transaction.date}</td>
                <td>{transaction.name}</td>
                <td>
                    <Link to={`/transactions/${index}`}>{transaction.from}</Link>
                </td>
                <td>{transaction.amount}</td>
            </tr>
    )
}

export default Transaction;