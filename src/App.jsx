import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { StateProvider } from "./StateContext";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <StateProvider>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
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
        </SkeletonTheme>
      </StateProvider>
    </>
  );
}

export default App;
