const btn = document.getElementById("btn-click");

btn.addEventListener("click",()=>{
    const name =document.getElementById("name").value;
    const reg =document.getElementById("reg").value;
    const date =document.getElementById("date").value;
    const email =document.getElementById("email").value;
    const phno =document.getElementById("phno").value;

    console.log(name,reg,date,email,phno);
});