// publicRouterAdmin.jsx
import { useContext } from "react";
import { DataUser } from "../contexts/authContext/DataUserLogin";
import AdminDashboardPage from "../pages/AdminPage/AdminDashboardPage";
import NotFoundPage from "../components/404-eror/NotFoundPage";

import PathAdmin from "../config/PathAdmin";

const PublicRouterAdmin = () => {
    const { isAdmin } = useContext(DataUser);

    const routes = [
        {
            path: PathAdmin.Admin,
            component: isAdmin ? AdminDashboardPage : NotFoundPage, 
            title: 'AdminDashboardPage',
        },
    ];

    return routes;
};

export default PublicRouterAdmin;
