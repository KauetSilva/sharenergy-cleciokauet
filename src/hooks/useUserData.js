import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function useUserData() {
const [data,setData] = useState([]);

const [currentImage,setCurrentImage] = useState(0);

const [openSlider,setOpenSlider] = useState(false);

const navigate = useNavigate();

const [form,setForm] = useState({
   title:"",
   date01: "",
   date02: "",
});

 return {
navigate,
data,
setData,
form,
setForm,
openSlider,
setOpenSlider,
currentImage,
setCurrentImage
   }
}

