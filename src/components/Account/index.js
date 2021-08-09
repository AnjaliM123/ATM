import { Component } from "react";

import AccountForm from "../AccountForm";

import "./index.css";

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
];

class Account extends Component {
  state = {
    balance: 0,
    count: 0,
  };

  updateCount = (value) => {
    console.log(value);

    this.setState({ count: value });
  };
  updateBalance = () => {
    const { count } = this.state;
    const balance5 = localStorage.getItem("balance");
    const balance7 = JSON.parse(balance5);
    if (balance7 >= 500) {
      this.setState((prevState) => ({ balance: prevState.balance - count }));
    } else {
      return alert("Insufficient Balance");
    }
  };

  updateBalance1 = () => {
    const { count } = this.state;

    this.setState((prevState) => ({ balance: prevState.balance + count }));
  };
  onChangeBalance = () => {
    const { balance } = this.state;
    const balance1 = localStorage.setItem("balance", JSON.stringify(balance));
    return balance1;
  };
  getFirstCharOfName = (name) => name.slice(0, 1);

  render() {
    const name = "Marella Anjali";
    const initial = this.getFirstCharOfName(name);

    return (
      <div className="cash-withdrawal-app-container">
        <div className="cash-withdrawal-container">
          <div className="user-details-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="username">{name}</p>
          </div>
          <button
            type="button"
            className="withdraw"
            onClick={this.updateBalance}
          >
            Withdraw
          </button>
          <button
            type="button"
            className="withdraw"
            onClick={this.updateBalance1}
          >
            deposite
          </button>
          <button
            type="button"
            className="button1"
            onClick={this.onChangeBalance}
          >
            save
          </button>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map((eachDenomination) => (
              <AccountForm
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateCount}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Account;
