import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import Nameslist from "./components/Nameslist";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/inline";
import "./appStyles.css";
import styles from "./appStyles.moudles.css"
import Form from "./components/form"

function App() {
  return (
    <div className="App">
      <Form />
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={false} /> */}
      {/* <Nameslist /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name ="ten" heroname="yel">
        <p>this is a p tag</p>
        </Greet>
        <Greet name ="ten" heroname="yel">
        <button>action</button>
        </Greet> */}
      {/* <Greet name ="tennn" heroname="yelll"/>
      <Welcome name ="ten" heroname="yel"/>
      <Welcome name ="tenn" heroname="yelll"/> 
      <Welcome name ="tennn" heroname="yelll"/> */}
      {/* 
      <Hello /> */}
    </div>
  );
}

export default App;
