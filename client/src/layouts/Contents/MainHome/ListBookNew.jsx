import BooksNew from "../BookFree";
const ListBookNew = () => {
    return (
        <>
            <div className="bg-black w-full h-auto px-10">
                <h1 className="text-white text-[27px] font-bold  w-1/2 pl-[15px]">Sách mới nhất</h1>
                <div className="relative w-full overflow-hidden ">
                    <BooksNew />
                </div>
            </div>
        </>
    );
};

export default ListBookNew;