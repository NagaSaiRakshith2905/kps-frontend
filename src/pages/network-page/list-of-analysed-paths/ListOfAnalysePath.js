import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import "./ListOfAnalysePath.css";
const ListOfAnalysePath = (props) => {
  const circuits = useSelector((state) => state.network.circuits);

  return (
    <div className="list-of-analysepath">
      <div className="main-container">
        <div className="content">
          <h2 className="heading">List of all Networks:</h2>
          <div style={{ width: "100%" }}>
            {circuits.map((circuit) => (
              <ListItem
                showAnalysedPath={props.showAnalysedPath}
                analysedPathIsShown={props.analysedPathIsShown}
                hideAnalysedPath={props.hideAnalysedPath}
                src={circuit.sourceNode}
                dst={circuit.destinationNode}
                paths={circuit.paths}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOfAnalysePath;
