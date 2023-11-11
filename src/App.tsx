import "./App.css";
import routeConfig from "./constants/routeConfig";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageLayout from "./components/pageLayout";
import React from "react";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <PageLayout>
          <Routes>
            {routeConfig.map((item, index) => (
              <Route key={index} path={item.path} element={item.component} />
            ))}
          </Routes>
        </PageLayout>
      </Router>
    </React.StrictMode>
  );
}

export default App;
