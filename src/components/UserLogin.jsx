import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function UserLogin() {
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userDetails, setUserDetails] = useState({ UserName: '', Password: '' });

    function handleUserName(e) {
        setUserDetails({ ...userDetails, UserName: e.target.value });
    }

    function handlePassword(e) {
        setUserDetails({ ...userDetails, Password: e.target.value });
    }

    function handleLogin() {
        setCookie("username", userDetails.UserName, {
            path: "/",
            maxAge: 60 * 60 * 24
        });
        alert("Login Success..");
    }

    function handleSignout() {
        removeCookie("username", { path: "/" });
        alert("Signed out Successfully..");
    }

    useEffect(() => {
        if (!cookies.username) {
            alert("Please Login");
        }
    }, [cookies.username]);

    return (
        <div className="container-fluid">
            <h2>User Login</h2>

            <dl>
                <dt>User Name</dt>
                <dd>
                    <input
                        type="text"
                        value={userDetails.UserName}
                        onChange={handleUserName}
                    />
                </dd>

                <dt>Password</dt>
                <dd>
                    <input
                        type="password"
                        value={userDetails.Password}
                        onChange={handlePassword}
                    />
                </dd>
            </dl>

            <button onClick={handleLogin}>Login</button>

            <hr />

            {cookies.username && (
                <div>
                    <h3>
                        Home
                        <button onClick={handleSignout} className="btn btn-link">
                            Signout
                        </button>
                    </h3>
                    Hello! {cookies.username}
                </div>
            )}
        </div>
    );
}
