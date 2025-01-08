import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default App;

