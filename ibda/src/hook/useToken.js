import React, { createContext, useState } from "react";
import { getStoeredAuthToken, removeStoredAuthToken, storeAuthToken } from "../utils/authToken.js";
export const TokenContext = createContext({
    setToken: (TOKEN) => {},
    token: "",
});

const TokenContextProvider = ({ children }) => {
    const getToken = () => {
        const authToken = getStoeredAuthToken();
        // const authToken_String = getStoeredAuthToken();
        // const authToken = JSON.parse(authToken_String);

        if (authToken) {
            return authToken;
        }
        return null;
    };
    const [token, setToken] = useState(getToken());

    const saveToken = (TOKEN) => {
        storeAuthToken(TOKEN);
        TOKEN && setToken(TOKEN);
    };

    return <TokenContext.Provider value={{ token, setToken: saveToken }}>{children}</TokenContext.Provider>;
};

export default TokenContextProvider;
