import useData from '../../hooks/useData';
import Api from '../../services/Api';
import './styles.css';

function Header () {
const { form,setForm,data,setData} = useData();  

   const handleInput = (e) => {
      setForm({...form, [e.target.name]: e.target.value});
      }
      
       const handleFilter= async (evt) => {
       evt.preventDefault();
       let aux = "articles?_limit=100"
       let aux1 = null;
      
         if (form.title) {
            aux1= `&title_contains=${form.title}`
         }
         
         if(form.date01 && form.date02) {
            if(form.title) {
               aux1 += `&publishedAt_gte=${form.date01}&publishedAt_lte=${form.date02}`;
            } else {
               aux1 = `&publishedAt_gte=${form.date01}&publishedAt_lte=${form.date02}`;
            }          
         }
         if (aux1 ===  null ) {
            return;
         }
          try {
          let request = await Api.get(aux + aux1);
          const { data } = request;
          setForm({
          title:"",
          date01:"",
          date02:"",
          });
          setData(data);
         
          } catch(error) {
             }
         }
      return (
      <div className="header">
         <h1>SpaceFlight</h1>
      <form>
      <div className="form_items">
      <input 
      name='title'
      placeholder='Digite o título'
      value={form.title}
      type="text"
      onChange={handleInput}
      />
      
      <div className="items">
      <label>De:</label>
      <input
      name="date01"
      type="date"
      value={form.date01}
      onChange={handleInput}
      />
      <label>até:</label>
      <input
      name="date02"
      type="date"
      value={form.date02}
      onChange={handleInput}
      />
      </div>
      
      <button type='button' className='button_confirm_search' 
      onClick={handleFilter}
      >Pesquisar</button>
      </div>
      </form>

      </div>
   
   )
}

export default Header;