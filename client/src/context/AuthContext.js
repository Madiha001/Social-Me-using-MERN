import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducers";
const INITIAL_STATE = {
    user: {
      _id  :"621fa864656c7aa6d0c6282f",
      username: "madiha111",
      email:"madi111@gmail.com",
      profilePicture:"person/1.jpeg",
      coverPicture:"",
      followers: [],
      following: [],
      isAdmin:false,
      desc: "",
      relatioship: 1,
      from: "",
      city:"",

    },
    isFetching: false,
    error: false,
  };

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={{user: state.user,isFetching: state.isFetching,error: state.error,dispatch,}}>
          {children}
        </AuthContext.Provider>
    );
};
