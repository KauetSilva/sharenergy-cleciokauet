import './styles.css';

function SelectPagination({itemsPerPage,setItemsPerPage}) {
   return (
<div className='div_select'>
Itens por página:
         <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={60}>60</option>
         </select>
         </div>
   )
}

export default SelectPagination;