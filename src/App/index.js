import { Outlet, Route, Routes } from "react-router-dom";
import MainLayout from "../common/Layouts/MainLayout/";
import { APP_ROUTES } from "../common/constants/";
import Send from "./Send";

function App() {
  return (
    <div>
      <Routes>
        <Route
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route path={APP_ROUTES.HOME} element={<Send />} />
          <Route path={APP_ROUTES.SEND} element={<Send />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
