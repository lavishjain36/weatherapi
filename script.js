async function fun(){
    try{
        //Get the input from the user
       
        let code=document.getElementById("num").value; 
        if(code.length>6||code.length<6){
            alert("Please enter a 6 digit code");
            
        }
        //clear the output field before displaying the result
        // document.getElementById("district").innerHTML="";
        // document.getElementById("state").innerHTML="";
        // document.getElementById("country").innerHTML="";

        //Get the data from the API
        let response=await fetch(`https://api.postalpincode.in/pincode/${code}`);
        let data=await response.json();
        //Display the data in the output field
        // console.log(data[0].PostOffice[0].State);
        // console.log(data[0].PostOffice[0].District);
        // console.log(data[0].PostOffice[0].Name);
        if(data[0].PostOffice[0]==null){
            alert("Please enter a valid code");
        }else{
            document.getElementById("state").value=data[0].PostOffice[0].State;
            document.getElementById("district").value=data[0].PostOffice[0].District;
            document.getElementById("area").value=data[0].PostOffice[0].Name;
        }

        document.getElementById("num").value="";
    }catch(e){
        alert("Please enter a valid code");
       
    }
}