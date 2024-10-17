import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const OAuthVerification = () => {
    const { provider } = useParams();
    const code = new URLSearchParams(window.location.search).get("code");

    const [authData, setAuthData] = useState();
    const signUp = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/oauth/${provider}?code=${code}`);
            console.log(res);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        signUp();
    }, [code]);

    return (
        <h1>로그인 진행 중...</h1>
    );
}

export default OAuthVerification;