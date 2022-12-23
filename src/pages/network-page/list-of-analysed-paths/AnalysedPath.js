import React from "react";
import Card from "../../../components/card/Card";
import CardBorder from "../../../components/card/CardBorder";
import Modal from "../../../components/modal/Modal";
import Close from "../../../images/close.svg";

const AnalysedPath = (props) => {
  return (
    <div className="add-node">
      <Modal onClose={props.onClose}>
        <div
          className="close-btn flex justify-content-center align-items-center"
          onClick={props.onClose}
        >
          <img src={Close} className="Create back" alt="logo" />
          <h3>close</h3>
        </div>

        <div className="_card">
          <CardBorder>
            <Card>
              <h1 className="title">Add New Node</h1>
              <h3>{props.src + " to " + props.dst}</h3>
              <h4>{props.paths}</h4>
              <h4>Space Occupied : {props.space}</h4>
              <h4>Total Weight : {props.weight}</h4>
            </Card>
          </CardBorder>
        </div>
      </Modal>
    </div>
  );
};

export default AnalysedPath;
