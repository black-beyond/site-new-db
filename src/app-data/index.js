import { useEffect, useReducer, createContext } from 'react';
import { initialState, stateReducer } from './reducer';
import requestPageData from './requestPageData';
/*** Global State Context ***/
// import this & useContext into components to provide access to app data
export const PageData = createContext();
/*** State wrapper component ***/
export const PageDataProvider = ({ children }) => {
  // init empty global state
  const [state, dispatch] = useReducer(stateReducer, initialState);
  // fetch app data & populate state with it
  useEffect(() => { requestPageData(dispatch) }, []);
  // return page data context wrapper
  return (
    <PageData.Provider value={({ state, dispatch })}>
      {children}
    </PageData.Provider>
  );
}