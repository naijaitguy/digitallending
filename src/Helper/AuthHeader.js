
  const token =  localStorage.getItem('userToken');

  if(token===''){  token =  localStorage.getItem('userToken');}
  
  export const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Authorization': `Bearer ${token}`
  }

 export const  reqheaders=  {
    'Content-Type': 'application/json',    
    'Access-Control-Allow-Origin':'*',

}