var FincName = null;
var name1 = null;
var phone = null;
var email = null;



function save(){
    FincName = document.querySelector(".input1").value;
    name1 = document.querySelector(".input2").value;
    phone = document.querySelector(".input3").value;
    email = document.querySelector(".input4").value;
    $(".fincname").html(FincName);
    $(".name").html(name1);
    $(".phoneno").html(phone);
    $(".email").html(email);


}

