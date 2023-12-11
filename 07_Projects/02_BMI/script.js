
const form = document.querySelector('form');
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height=parseInt(document.getElementById('height').value)
  const weight =parseInt(document.getElementById('weight').value)
  const results =document.querySelector('#results')

  //checks
  if(height ==='' || height< 0 || isNaN(height)){
    results.innerHTML=`enter valid height ${height}`;
  }else if(weight ==='' || weight< 0 || isNaN(weight)){
    results.innerHTML=`enter valid weight ${weight}`;
  }else{
   const bmi= (weight/((height*height)/1000)).toFixed(2)
   results.innerHTML =`<span>${bmi}</span>`
  }
});
