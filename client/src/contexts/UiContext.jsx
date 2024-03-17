import { createContext, useState } from "react";

export const DIsplayUiForm = createContext();
const DisplayContext = ({ children }) => {
    const [displayLogin, setDisplayLogin] = useState(false);
    const [displayRegister, setDisplayRegister] = useState(false);
    const [filter, setFilter] = useState(null);

    const handleDisplayLogin = () => {
        setTimeout(() => {
            setDisplayLogin((prevLogin) => !prevLogin);
        }, 100)
        setDisplayRegister(false)
        setFilter('filter')
    }
    const handleDisplayRegister = () => {
        setTimeout(() => {
            setDisplayRegister((prveRegister) => !prveRegister);
        }, 100)

        setDisplayLogin(false);
        setFilter('filter')

    }

    const dataDisplay = {
        displayRegister,
        displayLogin,
        filter,
        setFilter,

        handleDisplayRegister,
        handleDisplayLogin,

    }
    return (
        <div>
            <DIsplayUiForm.Provider value={dataDisplay}>
                {children}
            </DIsplayUiForm.Provider>
        </div>
    );
};

export default DisplayContext;