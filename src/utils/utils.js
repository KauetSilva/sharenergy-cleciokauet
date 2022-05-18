
const formatDate = (date) => {
   const newDate = date.slice(0, 10).split('-').reverse().join('/');
   return newDate;
}

export default formatDate;