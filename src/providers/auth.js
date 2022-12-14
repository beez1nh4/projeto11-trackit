import React, { useState } from "react";
import { createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png")
  const [token, setToken] = useState("")
  const [days, setDays] = useState([])
  const [openCard, setOpenCard] = useState(false)
  const [habits, setHabits] = useState([])
  const [doneHabits, setDoneHabits] = useState([])
  const [percentage, setPercentage] = useState(0)
  return (
    <AuthContext.Provider value={
      {image, 
      setImage, 
      token, 
      setToken, 
      days, 
      setDays, 
      openCard, 
      setOpenCard,
      habits,
      setHabits,
      doneHabits,
      setDoneHabits,
      percentage,
      setPercentage
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);