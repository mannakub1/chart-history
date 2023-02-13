import { Route, Routes as RoutesLib } from "react-router-dom";
import Home from "../pages/Home";
import * as paths from "../constants/paths";

export const Routes = () => {
  return (
    <RoutesLib>
      <Route path={paths.home()} element={<Home />} />
    </RoutesLib>
  );
};

export default Routes;
