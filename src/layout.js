import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Layout} from "antd";

const Wrapper = (WrappedComponent) => {
    const clientId=process.env.GOOGLE_CLIENT_ID || '201891706446-0rtnh7ickkgeve8aol9d3f6k1uthso6e.apps.googleusercontent.com'

    return (props) => (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Navbar/>
            <Layout>
                <WrappedComponent {...props} />
            </Layout>
        </Layout>

    );
};

export default Wrapper;
