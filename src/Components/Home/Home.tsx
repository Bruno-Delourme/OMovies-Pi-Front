import Layout from "../Layout/Layout";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import React from "react";

function Home() {
    return (
        <Layout>
            <Header />
            <Content />
            <Footer />
        </Layout>
    );
}

export default Home;