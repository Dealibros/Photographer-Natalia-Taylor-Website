let body = document.getElementById("body")
   
let images=document.getElementsByClassName("image");
for(let  image of images){
    image.addEventListener("mouseenter", () => {
    image.style.filter="none";
    body.style.backgroundColor= "#525252";
});
image.addEventListener("mouseout", () => {
    image.style.filter="grayscale()";
    body.style.backgroundColor= "#744958";
});
}
function submitData () {
    alert("Thank you, I will contact you as soon as possible");
    }