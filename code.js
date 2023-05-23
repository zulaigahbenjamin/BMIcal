let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');

    let height_status = false
    let weight_status = false;


//height
   if(height === '' || isNaN(height) || (height <= 0)){
    document.getElementById('height_error').innerHTML = "Please Enter a Valid height";
   }else {
    document.getElementById('height_error').innerHTML = "";
    height_status = true;
   }


//weight
   if (weight === ''  || isNaN(weight) || (weight <= 0)){
    document.getElementById('weight_error').innerHTML = "Please enter a valid weight";
   }
   else {
    document.getElementById('weight_error').innerHTML = "";
    weight_status = true;
   }

   if(weight_status && height_status) {
    const bmi = (weight / ((height * height)/10000)).toFixed(2);
   
//BMI Thingie 
    if(bmi < 18.4){
        result.innerHTML = 'Underweight : ' + bmi;
    }
    else if(bmi >= 18.4 && bmi < 24.9){
        result.innerHTML = 'Normal : ' + bmi;
    }
    else {
        result.innerHTML = 'Overweight : ' + bmi;
    }

}else {
     alert('You Havent entered anything yet sis ')
    result.innerHTML = '';
}
});


