
<strong>JavaScript (script.js)</strong> 
javascript 
 
const birthdateInput = document.getElementById('birthdate'); 
const calculateButton = document.getElementById('calculate'); 
const resultDiv = document.getElementById('result'); 
calculateButton.addEventListener('click', () => { 
    const birthdate = new Date(birthdateInput.value); 
    const today = new Date(); 
    const age = calculateAge(birthdate, today); 
resultDiv.textContent = `Your age is ${age} years`; 

}); 
function calculateAge(birthdate, today) { 
    const age = today.getFullYear() - birthdate.getFullYear(); 
    const monthDiff = today.getMonth() - birthdate.getMonth(); 
<pre><code>if (monthDiff &lt; 0 || (monthDiff === 0 &amp;&amp; today.getDate() &lt; birthdate.getDate())) { 
    return age - 1; 
} 
 
return age; 
  
} 

 