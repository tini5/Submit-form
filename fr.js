const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const address = document.getElementById("address")
const form = document.getElementById("form")
const gender = document.getElementById("gender")
const save = document.getElementById("save")

form.addEventListener("submit", (e) => {
    if(firstname.value === '' || firstname.value == null) {
        e.preventDefault()
        alert("First name is requierd")
    }
    else if(lastname.value === '' || lastname.value == null){
        e.preventDefault()
        alert("Last name is requierd")
    }
    else if(address.value === '' || address.value == null){
        e.preventDefault()
        alert("Address name is requierd")
    }
    
})
class user{
    constructor(firstname, lastname, address, gender){
        this.firstname = firstname
        this.lastname = lastname
        this.address = address
        this.gender = gender
    }
}
var arr = JSON.parse(localStorage.getItem("arr")) 
save.addEventListener("click", function(){
    var check = false
    
    if(check == false){
        var obj = new user(firstname.value, lastname.value, address.value, gender.value)
        arr.push(obj)
    }
    localStorage.setItem("arr", JSON.stringify(arr))
    console.log(arr)
})


