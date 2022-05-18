import { useEffect, useState } from 'react';
import useData from '../../hooks/useData';
import Api from '../../services/Api';
import Pagination from '../Pagination';
import Post from '../Post';
import SelectPagination from '../SelectPagination';
import Slider from '../Slider';
import './styles.css';

function Content() {
const {data,setData,openSlider,setOpenSlider,currentImage,setCurrentImage} = useData();

const [itemsPerPage,setItemsPerPage] = useState(10);
const [currentPage,setCurrentPage] = useState(0);

const pages = Math.ceil(data.length / itemsPerPage);

const startIndex = currentPage * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentItems =  data.slice(startIndex,endIndex);

const fetchData = async () => {
   let aux = "articles?_limit=100"
   const request  = await Api.get(aux);
   const { data } = request;
   setData(data);
}

useEffect(() => {
setCurrentPage(0);
},[itemsPerPage])

useEffect(() => {
 fetchData();
},[]);

   return (
      <div className='container'>

         <SelectPagination
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        />

         <Pagination
         pages={pages}
         setCurrentPage={setCurrentPage}
         currentPage={currentPage}/>

         <ul>
        {
         currentItems.map((item,index) => (
            
         <Post 
         key={index}
         index={index}
         item={item}
         setCurrentImage={setCurrentImage}
         setOpenSlider ={setOpenSlider}
         />
         
         ))
      }
      </ul>

      { openSlider &&
         <Slider
         currentItems={currentItems}
         currentImage={currentImage}
         setCurrentImage={setCurrentImage}
         openSlider={openSlider}
         setOpenSlider={setOpenSlider}
         />

      }
         
         
         
     
    
      </div>
   )
}

export default Content;