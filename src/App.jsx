import "./App.css";
import { connect } from "react-redux";
import { incrementCounter, decrementedCounter } from "./actions";

function App({ value, incrementCounter, decrementedCounter }) {
  return (
    <div className="App">
      <h1>Counter with Redux</h1>
      <div>
        <button onClick={() => incrementCounter()}>+</button>
        <div>{value}</div>
        <button onClick={() => decrementedCounter()}>-</button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { value } = state;
  return { value };
};

export default connect(mapStateToProps, {
  incrementCounter,
  decrementedCounter,
})(App);
