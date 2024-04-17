import "./App.css";
import { Input } from "antd";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Link to="/signUp">新規登録</Link>
      <Link className="" to="/logIn">
        <Link to="/home">homeへ</Link>
        roguinn
      </Link>
      <Link to="/calendar">カレンダー</Link>
      <Footer />
    </div>
  );
}

export default App;
