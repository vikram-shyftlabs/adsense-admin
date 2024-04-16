import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { LoginSocialGoogle, LoginSocialFacebook } from 'reactjs-social-login';
import Header from '../../components/header/header.component';

const clientId = '939446384253-4fppn78g2l7lcakcq26qs8kqnr73u4nk.apps.googleusercontent.com'; // Replace with your Google OAuth2 Client ID


const Account = () => {
    const [provider, setProvider] = useState(null);
    const [data, setData] = useState({});

    const onLogin = ({ provider, data }) => {
        console.log(data);
        setProvider(provider);
        setData(data)
    }

    return (
        <div>
            <Header props={{ title: "Account" }} />
            <Card className='w-full items-center flex justify-center min-h-[70vh]'>
                <h1 className="text-2xl font-bold py-8 text-center">Link you Ads Account</h1>
                <div className="grid grid-cols-2 gap-4">
                    <LoginSocialGoogle
                        isOnlyGetToken
                        client_id={clientId}
                        onLoginStart={() => console.log('Login start')}
                        redirect_uri={'http://localhost:5173'}
                        onResolve={onLogin}
                        onReject={err => {
                            console.log(err);
                        }}
                        className="border border-black w-full p-0 flex justify-center items-center rounded-md hover:bg-blue-500"
                    >
                        <button
                            className="p-0 text-black w-full m-0 flex gap-5 justify-center hover:bg-blue-500 hover:text-white items-center"
                        >
                            <GoogleOutlined className="text-xl" />
                            <span>Link with Google</span>
                        </button>
                    </LoginSocialGoogle>

                    <LoginSocialFacebook

                        appId='2192834227588742'

                        onLoginStart={() => console.log('Login start')}
                        onResolve={onLogin}
                        onReject={err => {
                            console.log(err);
                        }}
                        className="border border-black w-full flex justify-center items-center py-2"

                    >
                        <button
                            className="bg-white text-black w-full flex gap-5 justify-center items-center px-4"
                        >
                            <FacebookOutlined className="text-xl" />
                            <span>Link with Facebook</span>
                        </button>
                    </LoginSocialFacebook>
                </div>
                {/*<LoginSocialFacebook*/}
                {/*    appId="YOUR_FACEBOOK_APP_ID"*/}
                {/*    onSuccess={handleFacebookLogin}*/}
                {/*    onFailure={(error) => console.error('Facebook login failed:', error)}*/}
                {/*    style={{ width: '100%' }}*/}
                {/* onReject={(v)=>console.log(v)}*/}
                {/*    onResolve={}/>*/}
            </Card>
        </div>
    );
};


export default Account;
