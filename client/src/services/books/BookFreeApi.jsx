import { useState, useEffect } from "react";
import { URL_API } from "../../util/url-api";
import axios from 'axios';
import { useParams } from "react-router-dom";

const BookFree = () => {
    const [dataBookFree, setDataBookFree] = useState([]);

    const getDataBookFree = async () => {
        try {
            const response = await axios.get(`${URL_API}/bookFree`);
            setDataBookFree(response.data);
            return response.data
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getDataBookFree();
    }, []);

    return { dataBookFree };
};

const GetDetailBookFree = () => {
    const { id } = useParams();
    const [dataBookDetailFree, setDataBookDetailFree] = useState([]);

    useEffect(() => {
        const getAnBookFree = async () => {
            try {
                const response = await axios.get(`${URL_API}/bookFree/${id}`);
                setDataBookDetailFree(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (id) {
            getAnBookFree();
        }
    }, [id]);

    return dataBookDetailFree;
};
export {
    BookFree,
    GetDetailBookFree
};
