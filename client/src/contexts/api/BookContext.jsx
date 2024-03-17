import { createContext } from "react";
import { BookFree } from "../../services/books/BookFreeApi";
export const ApiBookFree = createContext();
const BookContext = ({children}) => {
    const dataBookFree = BookFree();
    const data = dataBookFree.dataBookFree;
    return (
        <div>
            <ApiBookFree.Provider value={{data}}>
                {children}
            </ApiBookFree.Provider>
        </div>
    );
};

export default BookContext;