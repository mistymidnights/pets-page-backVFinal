import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JwtContextProvider } from "./contexts/jwtContext";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PetDetail from "./pages/PetDetail";
import useLocalStorage from "use-local-storage";
import RequireAuth from "./components/RequiredAuth";
import About from "./pages/About";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <JwtContextProvider>
      <div className="App" data-theme={theme}>
        <Router>
          <Header switchTheme={switchTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/pets"
              element={
                <RequireAuth>
                  <Pets />
                </RequireAuth>
              }
            />
            <Route
              path="/pets/:id"
              element={
                <RequireAuth>
                  <PetDetail />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </JwtContextProvider>
  );
}

export default App;
