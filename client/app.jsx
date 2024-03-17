import Login from "./src/components/form/Login";
import Register from "./src/components/form/Register";
import { DIsplayUiForm } from "./src/contexts/UiContext";
import { useContext } from "react";
import ToastContainer from "./src/components/notification/ToastContainers";
import { Routes, Route } from 'react-router-dom'
import publicRouterUser from "./src/routes/RouterUser";
import PublicRouterAdmin from "./src/routes/RouterAdmin";
// import { DataUser } from "./src/contexts/authContext/DataUserLogin";
const App = () => {
  const { displayRegister, displayLogin, filter } = useContext(DIsplayUiForm);
  // const {isAdmin} = useContext(DataUser)
  const adminRoutes = PublicRouterAdmin();
  return (
    <>

      <div className="bg-[#121214] w-full h-dvh">
        <Routes>
          {publicRouterUser.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component />
              }
            />
          ))}
          {adminRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              element={
                <route.component />
              }
            />
          ))}
        </Routes>

        <ToastContainer />
        <div>
          {displayLogin && (<Login />)}
          {displayRegister && (<Register />)}
        </div>
        <div className={`${filter}`} />

      </div>
    </>
  );
};

export default App;