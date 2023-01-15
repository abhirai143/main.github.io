function save(){
    var FincName = document.querySelector(".input1").value;
    var name = document.querySelector(".input2").value;
    var phone = document.querySelector(".input3").value;
    var email = document.querySelector(".input4").value;


    document.querySelector(".fincname").innerHTML = FincName;
    document.querySelector(".name").innerHTML = name;
    document.querySelector(".phoneno").innerHTML = phone;
    document.querySelector(".email").innerHTML = email;

}