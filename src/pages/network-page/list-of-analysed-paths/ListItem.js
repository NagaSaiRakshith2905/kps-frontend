import React from "react";

const ListItem = (props) => {
  const listObject = (network, index) => {
    return (
      <li key={index} className="list-item">
        <div
          style={{
            display: "grid",
            width: "12rem",
            gridTemplateColumns: "1.75fr 0.25fr",
          }}
        >
          <p style={{ textAlign: "left" }}>
            {index === 0
              ? "User-Defined-Path"
              : index === 1
              ? "Shortest-Path"
              : " "}
          </p>
          <p>|</p>
        </div>
        <div className="flex">
          {network.nodes.map((node, i) =>
            i !== network.nodes.length - 1 ? (
              <div key={i}>
                {node.nodeName}
                {" -> "}
              </div>
            ) : (
              <div key={i}>{node.nodeName}</div>
            )
          )}
          <p>Total Weight={network.totalWeight}</p>
        </div>
        <button
          className="button btn-purple"
          onClick={(e) => console.log(network)}
        >
          View
        </button>
      </li>
    );
  };

  return (
    <div>
      <p style={{ textAlign: "center" }}>{props.src + " -> " + props.dst}</p>
      <ul className="network-list">
        {props.paths.map((path, index) => {
          return listObject(path, index);
        })}
      </ul>
    </div>
  );
};

export default ListItem;
