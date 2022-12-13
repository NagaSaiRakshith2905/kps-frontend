import "./App.css";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import NavBar from "./components/nav-bar/NavBar";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Title text="K-Path Simulations." />
        {/* <p>Network name</p> */}
        <button className="button btn-purple">Register</button>
      </NavBar>
      <Card>
        <Title text="- Login -" />
        <Input placeholder="Username/Email" />
        <Input placeholder="Password" />
        <p>Forgot Password</p>
        <button className="button btn-purple">Login</button>
      </Card>
    </div>
  );
}

export default App;
