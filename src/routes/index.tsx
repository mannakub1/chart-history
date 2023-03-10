import { Route, Routes as RoutesLib } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import * as paths from "../constants/paths";

export const Routes = () => {
  return (
    <RoutesLib>
      <Route
        path={paths.homeSaving()}
        element={<Home />}
        errorElement={<Home />}
      />
      <Route
        path={paths.homeCorp()}
        element={<Home />}
        errorElement={<Home />}
      />
      <Route path="*" element={<NotFound />} />
    </RoutesLib>
  );
};

export default Routes;
