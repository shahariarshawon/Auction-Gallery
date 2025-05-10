import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/Home";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
