import React from "react";
import Card from "../components/card/Card";
import CardBorder from "../components/card/CardBorder";
import pagenotfound from "../images/page-not-found.svg";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
    const navigate = useNavigate();
  const onErrorClickHandler=(e)=>{

    e.preventDefault();

    navigate("/home");

  }
  return (
    <div className="flex justify-content-center align-items-center">
      <CardBorder>
        <Card>
          <div className="card-item">
            <img src={pagenotfound} className="Page not found" alt="logo" />
            <button className="button btn-purple" onClick={onErrorClickHandler}>Go To Home</button>
          </div>
        </Card>
      </CardBorder>
    </div>
  );
}

export default ErrorPage;
