import React, { useEffect, useState } from "react";
import { createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png")
  return (
    <AuthContext.Provider value={{image, setImage}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);