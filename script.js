let digitValidate = function(ele){
    console.log(ele.value);
    ele.value = ele.value.replace(/[^0-9]/g,'');//Regular expression to allow only numbers
  }
  
  let tabChange = function(val){
      let ele = document.querySelectorAll('input');
      if(ele[val-1].value != ''){
        ele[val].focus()
      }else if(ele[val-1].value == ''){
        ele[val-2].focus()
      }   
   }
  

//    if the data is empty then it will focus on the previous input field.  
//    if the data is not empty then it will focus on the next input field.
  