const explain = document.getElementById("explain");
const next_btn = document.getElementById("next_btn");
const start_btn = document.getElementById("start_btn");
const explain_box = document.getElementById("box");
const input_box = document.getElementById("input_box");
localStorage.setItem("point",0);
const explain_bundle = [
  "이 사이트는 사이버 불링에 대한<br>웹사이트 입니다.<br> 먼저 사이버 불링에 대해<br>소개 해드리겠습니다.",
  "사이버 불링이란<br>가상공간을 뜻하는 '사이버'와<br>집단 따돌림을 뜻하는<br> '불링(bullying)'에서 생겨난 신조어로<br>온라인상에서 특정인을 집단적으로 따돌리거나<br>집요하게 괴롭히는 행위 입니다.<br>예를 들면 집단으로 욕설을 퍼붓거나<br>단체 톡방에서 못나가게끔 하는 카톡 감옥 등이 있습니다.",
  "이제 여러분들은 사이버불링 속<br>피해자 역할을 경험하게 될 예정입니다.<br>본 사이트에는 자살충동도라는 기능이 있습니다.<br>이 기능이 일정 이상 높아지면 자살을 시도합니다.<br>자살충동도는 40부터 시작합니다.<br>페이지 이동 후 클릭 또는 아무 키나 눌러 스토리를 진행하세요."
];

window.localStorage.clear();
start_btn.addEventListener("click", function () {
  const name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  explain_box.className += "obj";
  explain_box.style.opacity = "1";
  explain_box.style.zIndex = "1000";
});

let i = 0;
explain.innerHTML = explain_bundle[i];
next_btn.addEventListener("click", function () {
  i++;

  if (i == 2) {
    next_btn.innerHTML = "시작하기";
  }
  if (i == 3) {
    location.href = "./main.html";
  } else {
    explain.innerHTML = explain_bundle[i];
  }
});
