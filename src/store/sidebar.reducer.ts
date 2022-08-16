import { makeStore } from "./makeStore";

const initialState = {
    isOpen: false,
    cache: {}
}

interface IAction{
    type: string,
    payload?: any
}

 const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case actions.TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case actions.LOADED_CACHE:
        return {
            ...state,
            cache: action.payload
        }
    default:
      return state;
  }
}

export const actions ={
   TOGGLE_SIDEBAR : "TOGGLE_SIDEBAR",
   LOADED_CACHE : "LOADED_CACHE" 
}

export const {Provider, useStore, useDispatch} = makeStore({reducer, name: "SidebarStore", initialState});