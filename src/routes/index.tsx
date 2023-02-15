import { Route, Routes as RoutesLib, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import * as paths from "../constants/paths";

export const Routes = () => {
  return (
    <RoutesLib>
      <Route path={paths.home()} element={<Home />} errorElement={<Home />} />
      <Route path="*" element={<Navigate to={paths.home()} replace />} />
    </RoutesLib>
  );
};

export default Routes;
