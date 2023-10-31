import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, routeNames } from "@routes/routes";
import Header from "@components/Header/Header";

function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        {publicRoutes.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.id}
            />
          );
        })}
        {/* <Route path="*" element={<Navigate to={routeNames.LOGIN} />} /> */}
      </Routes>
    </>
  );
}

export default AppRouter;
