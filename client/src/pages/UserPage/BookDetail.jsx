import { GetDetailBookFree } from "../../services/books/BookFreeApi";

const BookDetail = () => {

    const data = GetDetailBookFree();
    console.log(data);


    return (
        <div>
            <h1>hello</h1>
            <h1>{ data.nameBook}</h1>
        </div>
    );
};

export default BookDetail;