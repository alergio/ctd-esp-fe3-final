import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { apiUrl } from "../Components/utils/api";
import { themes } from "../Components/utils/themes";
import { actions } from "../Components/utils/actions";

export const initialState = {
  theme: themes.light,
  users: [],
  user: {},
  favs: [],
};

export const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case actions.getUsers:
      return { ...state, users: action.payload };
    case actions.getUser:
      return { ...state, user: action.payload };
    case actions.addFav:
      return { ...state, favs: [...state.favs, action.payload] };
    case actions.toggleTheme:
      return {
        ...state,
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      };
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(apiUrl).then((res) =>
      dispatch({ type: actions.getUsers, payload: res.data })
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useContextGlobal = () => useContext(ContextGlobal);
