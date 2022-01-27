import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
      const ACCESS_TOKEN_String = localStorage.getItem('ACCESS_TOKEN');
      const ACCESS_TOKEN = JSON.parse(ACCESS_TOKEN_String)

      if(ACCESS_TOKEN){
         return ACCESS_TOKEN
      }
      return null
    };
    const [token, setToken] = useState(getToken());
    // console.log('token',token , typeof(token))
 
    const saveToken = TOKEN => {
      console.log('saveToken: TOKEN =',TOKEN)
      localStorage.setItem('ACCESS_TOKEN', JSON.stringify(TOKEN));
      TOKEN && setToken(TOKEN);
    };
  
    return {
      setToken: saveToken,
      token
    }
  }