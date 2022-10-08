const tb = document.querySelector(".tb")
const data = JSON.parse(localStorage.getItem("arr"))
for(var i of data){
    const tmp = `
    <tr>
        <td>${i.firstname}</td>
        <td>${i.lastname}</td>
        <td>${i.address}</td>
        <td>${i.gender}</td>
    </tr>
    `
    tb.innerHTML += tmp
}