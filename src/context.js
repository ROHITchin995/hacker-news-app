import { createContext, useContext, useReducer } from 'react'
import {
    SET_LOADING,
    SET_STORIES,
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH,
  } from './actions'
  import reducer from './reducer'

  const initialState = {
    isLoading : true,
    hits : [],
    query : 'react',
    page: 0,
    nbPages : 0
  }

const AppContext = createContext()

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}