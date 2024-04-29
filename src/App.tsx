import "./App.css";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
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
