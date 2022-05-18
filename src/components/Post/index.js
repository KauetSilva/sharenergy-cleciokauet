import './styles.css';
import formatDate from '../../utils/utils';

function Post ({index,item,setCurrentImage,setOpenSlider}) {

   const handleDetail = (index) => {
      setCurrentImage(index);
      setOpenSlider(true);
   }
   
   return (
      <li  className="article" key={item.id} onClick={() => handleDetail(index)}>
            <span>{item.title}</span>
            <span>Publicado em:     {formatDate(item.publishedAt)}</span>
            </li>
   )
}

export default Post;