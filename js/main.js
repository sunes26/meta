const text = document.getElementsByClassName("text");
const main_box = document.getElementsByClassName("main_box");
const choose_box = document.getElementsByClassName("choose_box");
const choose = document.getElementsByClassName("choose");
const user_choose = document.getElementsByClassName("user_choose");
const user_say = document.getElementsByClassName("user_say");
const saying = document.getElementsByClassName("saying"); //질문(선택지)
const scene = document.getElementsByClassName("scene");
const player_name = document.getElementsByClassName("players");
const user_name = document.getElementsByClassName("user_name");
const happy_ending = document.getElementById("happy_ending");
const sad_ending1 = document.getElementById("sad_ending1");
const sad_ending2 = document.getElementById("sad_ending2");
const cause = document.getElementById("cause");
const names = localStorage.getItem("name");
console.log(player_name.length);
for (var num = 0; num < player_name.length; num++) {
  player_name[num].innerHTML = names;
}

for (var num = 0; num < user_name.length; num++) {
  user_name[num].innerHTML = names;
}
// player_name.innerHTML= names;

let Status = 40;
let check = 0;
const say = [
  "하지마...",
  "어떻게든 입금할게...",
  "지들이 더 못생긴 주제에",
  "으...응...",
  "아무래도 117에 신고 해야겠어",
  "아냐...신고했다가 보복 당할거야...",
  "그래 이번 한번만 용서해줄게",
  "내가 그동안 당한게 있는데 내가 왜",
];
let i = 0;
let j = 0;
let u = 0;

document.body.addEventListener("keydown", function (event) {
  console.log("status :"+Status);
  localStorage.setItem("point",Status);

  console.log(i);
  i++;
  text[i].style.display = "block";

  let chat = document.querySelector(".main_box");
  chat.scrollTop = chat.scrollHeight;
  //첫번쨰 씬
  if (i == 11) {
    user_choose[0].style.display = "block";
  }
  //두번쨰 씬
  else if (i == 38) {
    user_choose[1].style.display = "block";
  }

  //세번쨰  1- 1 씬
  else if (i == 46) {
    i = 53;
  } else if (i == 57) {
    user_choose[2].style.display = "block";
  } else if (i == 74) {
    user_choose[3].style.display = "block";
  }

  if (i == 110) //happy
   {
    console.log("happy")
    user_choose[4].style.display = "block";
    localStorage.setItem("ending",1)
  } else if (i == 91) //sad1
  {
    console.log("sad1");
    user_choose[4].style.display = "block";
    localStorage.setItem("ending",2)
  } else if (i == 128) //sad2 
  {
    console.log("sad2");
    user_choose[4].style.display = "block";
    localStorage.setItem("ending",3)
  }

  if (i == 20 && check == 1) {
    i = i + 9;
  }

  // 첫번째 씬
  choose_box[0].addEventListener("click", function () {
    //1. 싫어요
    check = 1;
    scene[0].style.display = "block";
    saying[j].style.display = "none";
    saying[j + 1].style.display = "block";
    user_say[0].innerHTML = say[0];
    user_choose[0].style.display = "none";
    Status = Status + 10;
  });

  choose_box[1].addEventListener("click", function () {
    //2. 어떻게든 할게요
    check = 0;
    i = 21;
    scene[1].style.display = "block";
    saying[j].style.display = "none";

    saying[j + 1].style.display = "block";
    user_say[0].innerHTML = say[1];

    user_choose[0].style.display = "none";
    Status = Status + 8;
  });

  //두번째 씬

  choose_box[2].addEventListener("click", function () {
    //1. 니들이 더 못생김 ㅅㄱ
    check = 1;
    scene[2].style.display = "block";
    saying[2].style.display = "none";
    saying[3].style.display = "block";
    user_say[1].innerHTML = say[2];
    user_choose[1].style.display = "none";
    Status = Status + 15;
  });

  choose_box[3].addEventListener("click", function () {
    i = 46;
    //2. 으..응
    check = 0;
    scene[3].style.display = "block";
    saying[2].style.display = "none";

    saying[3].style.display = "block";
    user_say[1].innerHTML = say[3];

    user_choose[1].style.display = "none";
    Status = Status + 30;
  });
  //세번째씬 1-1 선택
  choose_box[4].addEventListener("click", function () {
    //1. 117 신고
    check = 1;
    scene[4].style.display = "block";
    saying[4].style.display = "none";
    saying[5].style.display = "block";
    user_say[2].innerHTML = say[4];
    user_choose[2].style.display = "none";
    Status = Status - 6;
  });

  choose_box[5].addEventListener("click", function () {
    console.log(i);
    //2. 참고 지낸다.
    i = 110;
    check = 0;
    scene[7].style.display = "block";
    saying[4].style.display = "none";
    saying[5].style.display = "block";
    user_say[2].innerHTML = say[5];

    user_choose[2].style.display = "none";
    Status = Status + 40;
  });

  //세번째씬 1-2 선택
  choose_box[6].addEventListener("click", function () {
    //1. 용서해주자
    check = 1;
    scene[5].style.display = "block";
    saying[6].style.display = "none";
    saying[7].style.display = "block";
    user_say[3].innerHTML = say[6];
    user_choose[3].style.display = "none";
    Status = Status + 40;
  });

  choose_box[7].addEventListener("click", function () {
    console.log(i);
    //2. 뭔 용서드립이야
    check = 0;
    i = 91;
    scene[6].style.display = "block";
    saying[6].style.display = "none";
    saying[7].style.display = "block";
    user_say[3].innerHTML = say[7];

    user_choose[3].style.display = "none";
    Status = Status + 6;
  });
});

document.body.addEventListener("click", function () {
  localStorage.setItem("point",Status);
  console.log(i);
  i++;
  text[i].style.display = "block";

  let chat = document.querySelector(".main_box");
  chat.scrollTop = chat.scrollHeight;
  //첫번쨰 씬
  if (i == 11) {
    user_choose[0].style.display = "block";
  }
  //두번쨰 씬
  else if (i == 38) {
    user_choose[1].style.display = "block";
  }

  //세번쨰  1- 1 씬
  else if (i == 46) {
    i = 53;
  } else if (i == 57) {
    user_choose[2].style.display = "block";
  } else if (i == 74) {
    user_choose[3].style.display = "block";
  }

  if (i == 110) //happy
   {
    console.log("happy")
    user_choose[4].style.display = "block";
    localStorage.setItem("ending",1)
  } else if (i == 91) //sad1
  {
    console.log("sad1");
    user_choose[4].style.display = "block";
    localStorage.setItem("ending",2)
  } else if (i == 128) //sad2 
  {
    console.log("sad2");
    user_choose[4].style.display = "block";
    localStorage.setItem("ending",3)
  }

  if (i == 20 && check == 1) {
    i = i + 9;
  }

  // 첫번째 씬
  choose_box[0].addEventListener("click", function () {
    //1. 싫어요
    check = 1;
    scene[0].style.display = "block";
    saying[j].style.display = "none";
    saying[j + 1].style.display = "block";
    user_say[0].innerHTML = say[0];
    user_choose[0].style.display = "none";
    Status = Status + 10;
  });

  choose_box[1].addEventListener("click", function () {
    //2. 어떻게든 할게요
    check = 0;
    i = 21;
    scene[1].style.display = "block";
    saying[j].style.display = "none";

    saying[j + 1].style.display = "block";
    user_say[0].innerHTML = say[1];

    user_choose[0].style.display = "none";
    Status = Status + 8;
  });

  //두번째 씬

  choose_box[2].addEventListener("click", function () {
    //1. 니들이 더 못생김 ㅅㄱ
    check = 1;
    scene[2].style.display = "block";
    saying[2].style.display = "none";
    saying[3].style.display = "block";
    user_say[1].innerHTML = say[2];
    user_choose[1].style.display = "none";
    Status = Status + 15;
  });

  choose_box[3].addEventListener("click", function () {
    i = 46;
    //2. 으..응
    check = 0;
    scene[3].style.display = "block";
    saying[2].style.display = "none";

    saying[3].style.display = "block";
    user_say[1].innerHTML = say[3];

    user_choose[1].style.display = "none";
    Status = Status + 30;
  });
  //세번째씬 1-1 선택
  choose_box[4].addEventListener("click", function () {
    //1. 117 신고
    check = 1;
    scene[4].style.display = "block";
    saying[4].style.display = "none";
    saying[5].style.display = "block";
    user_say[2].innerHTML = say[4];
    user_choose[2].style.display = "none";
    Status = Status - 6;
  });

  choose_box[5].addEventListener("click", function () {
    console.log(i);
    //2. 참고 지낸다.
    i = 110;
    check = 0;
    scene[7].style.display = "block";
    saying[4].style.display = "none";
    saying[5].style.display = "block";
    user_say[2].innerHTML = say[5];

    user_choose[2].style.display = "none";
    Status = Status + 40;
  });

  //세번째씬 1-2 선택
  choose_box[6].addEventListener("click", function () {
    //1. 용서해주자
    check = 1;
    scene[5].style.display = "block";
    saying[6].style.display = "none";
    saying[7].style.display = "block";
    user_say[3].innerHTML = say[6];
    user_choose[3].style.display = "none";
    Status = Status + 40;
  });

  choose_box[7].addEventListener("click", function () {
    console.log(i);
    //2. 뭔 용서드립이야
    check = 0;
    i = 91;
    scene[6].style.display = "block";
    saying[6].style.display = "none";
    saying[7].style.display = "block";
    user_say[3].innerHTML = say[7];

    user_choose[3].style.display = "none";
    Status = Status + 6;
  });
});
