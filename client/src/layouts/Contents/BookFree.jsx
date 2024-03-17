import { useContext } from "react";
import { ApiBookFree } from "../../contexts/api/BookContext";
import InforBookUi from '../../components/Ui-Books/InforBookUi'
import Sliders from "../../components/slider-books/Slider";
import BookUi from "../../components/Ui-Books/BookUi";

const Books = () => {
    const { data } = useContext(ApiBookFree);
    return (
        <>
            <div className="relative w-[100%] h-[auto] cursor-pointer px-3" >
                <Sliders
                    slidesToShow={5}
                    autoplaySpeed={5000}
                    className="overflow-hidden ">
                    {data && data.map((bookFree, index) => (
                        <div className="relative  group " key={index}>
                            <BookUi
                                imgBook={bookFree.imgBook}
                                labelBook={bookFree.labelBook}
                                nameBook={bookFree.nameBook}
                            />
                            <div className="absolute ease-in duration-300 top-[-1px] left-[-6px] opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-[10]">
                                <InforBookUi
                                  bookId={bookFree._id}
                                    imgBook={bookFree.imgBook}
                                    nameBook={bookFree.nameBook}
                                    author={bookFree.author}
                                    labelBook={bookFree.labelBook}
                                    descriptionBook={bookFree.descriptionBook}
                                />
                            </div>
                        </div>
                    ))}
                </Sliders>

            </div>
        </>
    );


};

export default Books;
