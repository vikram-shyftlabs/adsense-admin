import React, {useState} from 'react';
import { Button, Card } from 'antd';
import { FacebookOutlined ,GoogleOutlined} from '@ant-design/icons';
import Wrapper from "../../layout";
import { LoginSocialGoogle, LoginSocialFacebook } from 'reactjs-social-login';

const clientId = process.env.GOOGLE_CLIENT_ID || '201891706446-0rtnh7ickkgeve8aol9d3f6k1uthso6e.apps.googleusercontent.com'; // Replace with your Google OAuth2 Client ID


const Login = () => {
    const [provider, setProvider] = useState(null);
    const [data, setData] = useState({});

    const onLogin=({ provider, data }) => {
        console.log(data);
        setProvider(provider);
        setData(data)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style={{ width: 300 }}>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
             <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'space-evenly', alignItems: 'center' ,minHeight:'10rem'}}>
                 <LoginSocialGoogle
                     isOnlyGetToken
                     client_id={clientId}
                     onLoginStart={()=>console.log('Login start')}
                     redirect_uri={'http://localhost:3000'}
                     onResolve={onLogin}
                     onReject={err => {
                         console.log(err);
                     }}
                 >
                     <Button
                         type="primary"
                         icon={<GoogleOutlined />}
                         style={{ width: '100%' }}
                     >
                         Login with Google
                     </Button>
                 </LoginSocialGoogle>

                 <LoginSocialFacebook

                     appId={process.env.REACT_APP_FB_APP_ID || '2192834227588742'}

                     onLoginStart={()=>console.log('Login start')}
                     onResolve={onLogin}
                     onReject={err => {
                         console.log(err);
                     }}
                 >
                     <Button
                         type="primary"
                         icon={<FacebookOutlined />}
                         style={{ width: '100%' }}
                     >
                         Login with Facebook
                     </Button>
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

const LoginPage = Wrapper(Login);

export default LoginPage;
