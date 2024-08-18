import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import GamePage from "./pages/Game";
import MasterPage from "./pages/Master";
import HistoryPage from "./pages/History";

function App() {
  return (
    <>
      <Router>
        <div className="app-container min-h-screen">
          <Routes>
            <Route exact path="/" element={<MasterPage />} />
            {/* <Route path="/history" element={<HistoryPage />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
