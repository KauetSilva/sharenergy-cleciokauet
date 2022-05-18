import './styles.css';
import {FaArrowLeft,FaArrowRight} from"react-icons/fa";
import { IoIosClose } from "react-icons/io";
import formatDate from '../../utils/utils';

   
const Slider = ({currentItems,currentImage,setCurrentImage,setOpenSlider}) => {

   const length = currentItems.length

      const handlePrev = () => {
         setCurrentImage(currentImage === 0 ? length -1 : currentImage - 1);
      }

      const handleNext = () => {
         setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
      }

      if(currentItems.length <= 0 ) {
         return null;
      }


   return  (
      <section className='slider_window'>
      <FaArrowLeft className="left_arrow" onClick={handlePrev} size="50"/>
      <FaArrowRight className="right_arrow" onClick={handleNext} size="50"/>
      {currentItems.map((item,index) => (
         <div className={index === currentImage ? 'slide_active' : "slide"} key={index}>
            {index === currentImage && (
               <>
               
               <div className="card">
               < IoIosClose size="50" style={{position: 'absolute',top:'15px',right:'15px', color:'#FFF'}} onClick={() => setOpenSlider(false)}/>
                  <div className="div_title">
                  <h3>{item.title}</h3>
                  </div>
               <div className='div_info'>
                  <div className='div_left'>
                  <img   src={item.imageUrl}/>
                  <a href={item.url} target="_blank">Saiba mais</a>
                  </div>
                     <div className="div_right">
                  <p>{item.summary}{item.summary}{item.summary}{item.summary}</p>
                     <div className="div_info_date">
                     <span>Publicado em: {formatDate(item.publishedAt)}</span>
                     <span>Atualizado em: {formatDate(item.updatedAt)}</span>
                     </div>
                     </div>
                  </div>
               </div>
              
               </>
            )}
         
         </div>
            ))}
       </section>
   
    )  
   }

export default Slider;