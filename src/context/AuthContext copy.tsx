import { createContext, useReducer } from "react";

const initialState = {
  state:{},
  dispatch:{}
};

const reducer = (state:any ,action:any) => {
    const { type, payload } = action;
    switch (type) {
        case "ONE":
          return {
            ...state,
            inputValue: payload,
          };
        case "TWO":
          return {
            ...state,
            inputValue: 100,
          };
        default:return state;

    }
}

    const InputValueContext = createContext(initialState)

    function InputValueProvider(props:any) {
        const [state, dispatch] = useReducer(reducer, initialState);
        const value={state,dispatch}
      
        return (
            <InputValueContext.Provider value={value}>
            {props.children}
          </InputValueContext.Provider>
        );
      }

      export { InputValueContext, InputValueProvider }