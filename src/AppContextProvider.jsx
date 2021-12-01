import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = (props) => {
  const [globalState, setGlobalState] = React.useReducer(props.reducer, props.initialState);
  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
