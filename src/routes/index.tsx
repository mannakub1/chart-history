import { Route, Routes as RoutesLib, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import * as paths from "../constants/paths";

export const Routes = () => {
  return (
    <RoutesLib>
      <Route path={paths.home()} element={<Home />} errorElement={<Home />} />
      <Route
        path="/not-found"
        element={<NotFound />}
        errorElement={<NotFound />}
      />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </RoutesLib>
  );
};

export default Routes;
