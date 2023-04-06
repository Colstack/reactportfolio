import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/landing/Landing";

const LinkRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
    </Routes>
  );
};

export default LinkRoutes;
