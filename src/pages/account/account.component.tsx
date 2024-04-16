import React, { useState } from "react";
import { Button, Card } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import Header from "../../components/header/header.component";
import {
  setGoogleToken,
  setFacebookToken,
} from "../../redux/slices/AccountLinkSlice";
import { useDispatch, useSelector } from "react-redux";

const clientId =
  "939446384253-4fppn78g2l7lcakcq26qs8kqnr73u4nk.apps.googleusercontent.com";

const Account = () => {
  const [provider, setProvider] = useState(null);
  const [data, setData] = useState({});
  const { googleToken, facebookToken } = useSelector(
    (state) => state.accountLink
  );
  const dispatch = useDispatch();

  const onGoogleSuccess = ({ provider, data }) => {
    dispatch(
      setGoogleToken({
        provider,
        data,
      })
    );
  };
  const onFacebookSuccess = ({ provider, data }) => {
    dispatch(
      setFacebookToken({
        provider,
        data,
      })
    );
  };

  console.log(googleToken, facebookToken);
  return (
    <div>
      <Header props={{ title: "Account" }} />
      <Card className="w-full items-center flex justify-center min-h-[92vh] bg-[#eee] ">
        <div className="bg-[#fefefe] shadow-lg px-32 py-24 rounded-md ">
          <h1 className="text-2xl font-bold pb-12 text-center">
            Link your Ads Account
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <LoginSocialGoogle
              isOnlyGetToken
              client_id={clientId}
              onLoginStart={() => console.log("Login start")}
              redirect_uri={"http://localhost:5173"}
              onResolve={onGoogleSuccess}
              onReject={(err) => {
                console.log(err);
              }}
              className="border border-black w-full px-6 flex gap-3 justify-center items-center rounded-md hover:border-blue-500 hover:bg-blue-500 hover:cursor-pointer hover:text-white"
            >
              <GoogleOutlined className="text-xl" />
              {googleToken ? (
                <span>Your Google Account is Linked!</span>
              ) : (
                <span>Link with Google</span>
              )}
            </LoginSocialGoogle>

            <LoginSocialFacebook
              appId="2192834227588742"
              onLoginStart={() => console.log("Login start")}
              onResolve={onFacebookSuccess}
              onReject={(err) => {
                console.log(err);
              }}
              className="border border-black w-full flex gap-3 justify-center items-center py-2 rounded-md hover:border-blue-500 hover:bg-blue-500 hover:cursor-pointer hover:text-white"
            >
              <FacebookOutlined className="text-xl" />
              {facebookToken ? (
                <span>Your Facebook Account is Linked!</span>
              ) : (
                <span>Link with Facebook</span>
              )}
            </LoginSocialFacebook>
          </div>
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
