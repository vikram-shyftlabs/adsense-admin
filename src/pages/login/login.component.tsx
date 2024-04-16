/* eslint-disable @typescript-eslint/no-explicit-any */
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const thirdPartyLoginHandler = ({ response, provider, error }: any) => {
    // console.log(" response>>", response)
    // console.log(" provider>>", provider)
    // console.log(" error>>", error)
    console.log(response, provider, error, "response, provider, error");
    // dispatch(login({ user: response, provider, error }));
  };

  const responseFacebook = (response: {
    status: string | undefined;
    error: any;
  }) => {
    // console.log('response >>>', response);
    if (
      response.status === "unknown" ||
      response.status === undefined ||
      response.error
    )
      return thirdPartyLoginHandler({
        error: true,
        provider: "facebook",
        response: {},
      });

    thirdPartyLoginHandler({ error: false, provider: "facebook", response });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account with Social Logins
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <FacebookLogin
            appId="2192834227588742"
            fields="name,email,picture"
            callback={responseFacebook}
            textButton="Login with Facebook"
          />
          {/* clientId="905703355143-hbpbqk2bmpnjocs9j3h4r4537qmru1ma.apps.googleusercontent.com" */}
          <GoogleLogin
            onSuccess={(credentialResponse: any) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member? &nbsp;
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
