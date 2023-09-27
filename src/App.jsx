import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { StateProvider } from "./StateContext";
function App() {
  return (
    <>
      <StateProvider>
        <Router>
          <div
            className="df"
            style={{
              width: "100%",
              height: "100vh",
            }}
          >
            <Navbar />
            <Routes>
              <Route path="*" Component={Home} />
            </Routes>
          </div>
        </Router>
      </StateProvider>
    </>
  );
}

export default App;
