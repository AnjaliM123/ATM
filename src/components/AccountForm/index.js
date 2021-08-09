import "./index.css";

const AccountForm = (props) => {
  const { denominationDetails, updateBalance } = props;
  const { value } = denominationDetails;
  const onUpdateBalance = () => {
    updateBalance(value);
  };

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onUpdateBalance}
      >
        {value}
      </button>
    </li>
  );
};

export default AccountForm;
