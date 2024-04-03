import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import KeywordBar from "../KeywordBar/KeywordBar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";





function Home() {
    return (
        <Layout>
            <Header />
            <KeywordBar />
            <Content />
            <Footer />
        </Layout>
    );
}

export default Home;