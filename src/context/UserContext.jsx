import { createContext, useContext, useState , useEffect , useReducer } from "react";
import axios from 'axios';
import reducer from '../reducer/ProductReducer'

export const userContext = createContext();

//My first api call for all the products 

const api =" https://api.pujakaitem.com/api/products"

const initialState ={
    isLoading : false ,
    isError : false,
    products : [],
    featureProducts : [],
    isSingleLoading : false,
    singleProduct : {}
}



export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //NOw my second api call for single product

  const getSingleProduct = async () => {
     dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct});
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(api);
  }, []);

  const [showSidebar, setShowSidebar] = useState();
  return (
    <userContext.Provider value={{ showSidebar, setShowSidebar, ...state , getSingleProduct }}>
      {children}
    </userContext.Provider>
  );
};

//creation of custom hook in react js

export const useGlobalContext = () => {
  return useContext(userContext);
};
