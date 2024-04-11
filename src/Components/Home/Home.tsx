import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import KeywordBar from "../KeywordBar/KeywordBar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

import "./Home.scss";

function Home() {
    return (
        <div className="BodyAllProject">
        <Layout>
            <Header />
            <KeywordBar />
            <Content />
            <Footer />

        </Layout>
        </div>
    );
}

export default Home;