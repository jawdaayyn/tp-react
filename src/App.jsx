import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Pokedex from "./pages/Pokedex/Pokedex";

import { StateProvider } from "./StateContext";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "react-hot-toast";
import { RouterWrapper } from "./components/RouterWrapper";
import Collection from "./pages/Collection/Collection";
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
              <RouterWrapper>
                <Routes>
                  <Route path="*" Component={Home} />
                  <Route path="/collection" Component={Collection} />
                  <Route path="/pokedex" Component={Pokedex} />
                </Routes>
              </RouterWrapper>
            </div>
          </Router>
        </SkeletonTheme>
      </StateProvider>
    </>
  );
}

export default App;
