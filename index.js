function calculate() {
    let name = prompt("enter your name")
    let stdtm = document.querySelector("#td").value;
    let stdom = document.querySelector("#od").value;
    res = (stdom/stdtm)* 100
    document.querySelector("#change").innerHTML=(" Dear " +  name  + " you have got it " +  res  + "%")
    alert("you have got it" + res + "%")
}