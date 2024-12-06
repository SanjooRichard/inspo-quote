import { Route, Routes } from "react-router-dom";
import { LandingPage, PageNotFound, AllQuotes } from "./pages";
import "./App.css";

function App() {
  return (
    <div id="grad" style={{ height: "100vh", width: "100vw" }}>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route index path="/all-quotes" element={<AllQuotes />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
