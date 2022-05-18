import './styles.css';

function Pagination({pages,currentPage,setCurrentPage}) {
   return (
      <div className='div_pagination'>
      {Array.from(Array(pages), (item,index) => {
         return <button className={index === currentPage ? 'selected' : ' none'} key={index} value={index} onClick={(e) => setCurrentPage(Number(e.target.value)) }>{index + 1}</button>
      })}
         </div>
   )
}

export default Pagination;