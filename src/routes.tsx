import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Business, Individuals } from "./pages";

export const WebRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Individuals />} />
          <Route index path="/businesses" element={<Business />} />
        </Routes>
      </Router>
    </>
  );
};
