import "./App.css";
import { Input } from "antd";
import { Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Link to="/signUp">新規登録</Link>
      <Link className="" to="/logIn">
        roguinn
      </Link>
    </div>
  );
}

export default App;
