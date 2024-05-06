import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import KeywordBar from "../KeywordBar/KeywordBar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import SearchBar from "../Header/SearchBar/SearchBar";


function Home() {
    return (
        <div className="BodyAllProject">
        <Layout>
            <Header />
            <SearchBar />
            <KeywordBar />
            <Content />
            <Footer />

        </Layout>
        </div>
    );
}

export default Home;