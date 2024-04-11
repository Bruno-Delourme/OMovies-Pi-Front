import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import KeywordBar from "../KeywordBar/KeywordBar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";






function Home() {
    return (
        <Layout>
            <div className="block-Header-KeywordBar">
            <Header />
            <KeywordBar />
            </div>
            <div className="block-Body-Footer">
            <Content />
            <Footer />
            </div>

        </Layout>
    );
}

export default Home;