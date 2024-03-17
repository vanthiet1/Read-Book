import { createContext, useState } from 'react';
import { GetUserData } from '../../services/auth/GetUserData';

export const DataUser = createContext();

const DataUserLogin = ({ children }) => {
    const [userEmail, setUserEmail] = useState(null);
    const [isAdmin,setIsAdmin] = useState(null);
        const fetchData = async () => {
            try {
                const storeToken = localStorage.getItem('token');
                if (storeToken) {
                    const token = JSON.parse(storeToken);
                    const userData = await GetUserData(token);
                    setUserEmail(userData.email);
                    setIsAdmin(userData.admin)
                }
            } catch (error) {
                console.log("Error:", error);
            }
        };
            fetchData();
      const userConext ={
        userEmail,
        isAdmin
      }
    
    return (
        <div>
            <DataUser.Provider value={userConext}>
                {children}
            </DataUser.Provider>
        </div>
    );
};

export default DataUserLogin;
