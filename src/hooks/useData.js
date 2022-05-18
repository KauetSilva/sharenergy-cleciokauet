import { useContext } from "react";
import userContext from "../context/context";

export default function useData(){
    return useContext(userContext);    
}