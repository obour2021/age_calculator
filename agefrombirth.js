
function calculate(){
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();

    let maxDays = 0;
    let monthNum = 1;

    let years = document.getElementById("year").value;
    let months = document.getElementById("month").value;
    let days = document.getElementById("day").value;

    if (years == "" || years ==0 || months == "" || months ==0 || days==0 || days==""){
        return window.alert("Please Enter your Correct Date of Birth");
    }
    if (m == 1){
        maxDays = 31;
        monthNum = 1;
    } else if(m == 2){
        maxDays = 28;
        monthNum = 2;
    }else if(m == 3){
        maxDays = 31;
        monthNum = 3;
    }else if(m == 4){
        maxDays = 30;
        monthNum = 4;
    }else if(m == 5){
        maxDays = 31;
        monthNum = 5;
    }else if(m == 6){
        maxDays = 30;
        monthNum = 6;
    }else if(m == 7){
        maxDays = 31;
        monthNum = 7;
    }else if(m == 8){
        maxDays = 31;
        monthNum = 8;
    }else if(m == 9){
        maxDays = 30;
        monthNum = 9;
    }else if(m == 10){
        maxDays = 31;
        monthNum = 10;
    }else if(m == 11){
        maxDays = 31;
        monthNum = 11;
    }else if(m == 12){
        maxDays = 31;
        monthNum = 12;
    }
    let ageYears= y - years;
     if(m <= months){
         m = m = 12;
     }

    document.getElementById("age").style.display="block";
    document.getElementById("age").innerHTML="You are " + ageYears +" years old";
}   


document.getElementById("age").style.display="none";

document.getElementById("button").onclick = function() { calculate(); }; 