const point = localStorage.getItem("point");
const point_sum = document.getElementById("point_sum");
const ending_text = document.getElementById("ending_text");
const ending = localStorage.getItem("ending");
const ending_img = document.getElementById("ending_img");
if(ending ==1){
    ending_text.innerHTML="당신은 살아남으셨습니다."
    ending_img.src = "./img/angel.png"
}
else{
    ending_text.innerHTML="당신은 자살하였습니다."
    ending_img.src = "./img/self_death.png"
}

point_sum.innerHTML=point
