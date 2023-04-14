var nav =  document.getElementsByTagName("nav")[0].firstElementChild.style
nav.color = "#fff"
nav.background = "red"

Array.from(document.getElementsByTagName('li')).forEach((element) => {
    element.style.background = "red";
    element.style.fontSize = "18px";
});

let result = document.getElementById("test");
if(result.hasAttribute("class")) {
    result.setAttribute("hidden","true")
} else {
    alert("no")
}
