import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import "./index.css";

const Profile = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Redirect to="/" />;
  }

  const getBalance = () => {
    let balance3 = localStorage.getItem("balance");
    const parseBalance1 = JSON.parse(balance3);
    if (parseBalance1 === null) {
      return [];
    } else {
      return parseBalance1;
    }
  };
  const name = "Marella Anjali";
  return (
    <div className="main-container3">
      <div className="card-container3">
        <div className="user-details-container1">
          <div className="initial-container1">
            <p className="initial">{name[0]}</p>
          </div>
          <h1 className="heading1">{name}</h1>
        </div>
        <p className="heading1">Balance:{getBalance()}</p>
      </div>
    </div>
  );
};
export default Profile;
