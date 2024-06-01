import Counter from "./components/Counter/Counter";
import CounterOne from "./components/CounterOne/CounterOne";
import CounterTwo from "./components/CounterTwo/CounterTwo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="counters-box">
        <Counter
          render={(ctr, inc, dec) => <CounterOne {...{ ctr, inc, dec }} />}
        />
        <Counter render={(ctr, inc) => <CounterTwo {...{ ctr, inc }} />} />
      </div>
    </div>
  );
}

export default App;
