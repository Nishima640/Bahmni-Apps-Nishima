
function Click(minvalue,maxvalue,currentvalue)
{
  
 var maxvalue, minvalue, currentvalue;
minvalue = document.getElementById('minValue').value;
console.log("minvalue",minvalue);
console.log(minvalue);
maxvalue = document.getElementById('maxValue').value;
currentvalue = document.getElementById('currentValue').value;
   
   
   
   fetch('https://192.168.2.32/openmrs/ws/rest/v1/bahmnicore/claimcode/updateClaimCode?' + 'min=' + minvalue + '&' + 'id=' + 1 + '&' + 'max=' + maxvalue + '&' + 'current=' + currentvalue, {
    method: 'POST',
    withCredentials: !0
    }
   
  ).then((response) => response.json())
  .then((data) => {
     
})
//Then with the error genereted...
.catch((error) => {
 
});

    
}






