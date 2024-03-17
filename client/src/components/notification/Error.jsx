import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Error = ({ message }) => {
    useEffect(() => {
        toast.error(message, { autoClose: 1000 });
    }, [message]);

    return null;
};

export default Error
