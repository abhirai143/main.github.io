
function Calculate(){
    var inputAmount = document.querySelector(".form-control1").value;
    var inputInetrest = document.querySelector(".form-control2").value;
    var select = document.querySelector(".selecter").value;
    var select1 = document.querySelector(".selecter1").value;
    var inputDuration = document.querySelector(".form-control3").value;

    var interest = null;
    var result = null;
    let principal = parseInt(inputAmount) ;

    switch(select){
        case "peryear" :
        interest = principal * (inputInetrest / 100);
        switch(select1){
            case "year":
                interest *= inputDuration;
                result = principal + (interest);  
                break;

            case "month":
                interest *= inputDuration;
                interest /= 12;
                result = principal + interest;
                break;
        }
        break;

        case "permonth" :
            interest =principal * (inputInetrest / 100);
            switch(select1){
                case "year":
                    interest *= inputDuration;
                    interest *= 12;
                    result = principal + (interest);  
                    break;
    
                case "month":
                    interest *= inputDuration;
                    result = principal + interest;
                    break;
            }
            break;


    }

    document.getElementById("first").style.visibility="visible";


    document.querySelector(".princ-amt").innerHTML=principal;
    document.querySelector(".int-amt").innerHTML=Math.round(interest);
    document.querySelector(".total-amt").innerHTML=Math.round(result);


}






function refreshPage(){
    window.location.reload();
}