import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default function TransactionEditForm() {
  let { index } = useParams();
  const [transaction, setTransaction] = useState({
    name: "",
    date: "",
    amount: 0,
    from: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(API_URL + `/transactions/${index}`, transaction)
      .then((res) => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of transaction"
          required
        />

        <label htmlFor="date"></label>
        <input
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="Date of transaction"
          required
        />

        <label htmlFor="amount"></label>
        <input
          type="number"
          id="amount"
          value={transaction.amount}
          onChange={handleTextChange}
          placeholder="Amount of transaction"
          required
        />

        <label htmlFor="from"></label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="From"
          required
        />

        <input type="submit" />
      </form>
    </div>
  );
}
