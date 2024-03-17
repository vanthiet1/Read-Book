import Header from "../../layouts/Header";
import Section from "../../layouts/Section";
import ListBookFree from "../../layouts/Contents/MainHome/ListBookFree";
import ListBookNew from "../../layouts/Contents/MainHome/ListBookNew";

const Home = () => {

    return (
        <>
            <div className="relative ">
                <Header
                    page1="Sách điện tử"
                    page2="Sách nói"
                    page3="Sách hiệu sổi"
                    page4="Sách tóm tắt"
                    page5="Postcat"
                    page6="Xem thêm"
                />
                <Section />
                <ListBookFree />
                <ListBookNew />
            </div>
        </>
    );
};

export default Home;