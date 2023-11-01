const wrapper = document.querySelector('.wrapper'),
  chanceIcon = document.querySelectorAll(".choce div"),
  result = document.querySelector(".result"),
  userChoce = document.querySelector(".user_game"),
  cpuChoce = document.querySelector(".cpu_game");

console.log(chanceIcon);

chanceIcon.forEach((icon, index) => {
  icon.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");
    icon.classList.add("active");

    // icon.classList.add('active');
    // chanceIcon.forEach((icon2, index2) => {
    //     console.log(index, index2);
    //     index !== index2 && icon2.classList.remove('active');
    // })

    wrapper.classList.add('start');

    userChoce.children[0].className = cpuChoce.children[0].className =
      "fa-regular fa-hand-back-fist";

      result.textContent = "Please Wait...";

    let timer = setTimeout(() => {
      wrapper.classList.remove('start');
       const sourceImg = e.target.querySelector("i").className;
      //  console.log(sourceImg);
       userChoce.children[0].className = sourceImg;

       const arrayIcon = [
         "fa-regular fa-hand-back-fist",
         "fa-regular fa-hand",
         "fa-regular fa-hand-scissors",
       ];
       const romdonNum = Math.floor(Math.random() * 3);
       cpuChoce.children[0].className = arrayIcon[romdonNum];

       const userVlaue = ["R", "P", "S"][index];
       const cpuValue = ["R", "P", "S"][romdonNum];
       console.log(userVlaue, cpuValue);

       const outgames = {
         RR: "Draw",
         RP: "CPU",
         RS: "USER",
         PP: "Draw",
         PR: "USER",
         PS: "CPU",
         SS: "Draw",
         SR: "CPU",
         SP: "USER",
       };

       const outgameWin = outgames[userVlaue + cpuValue];
       console.log(outgameWin);
       result.textContent =
         userVlaue === cpuValue ? "Match Draw" : outgameWin + " Win!";
    }, 2500)
  });
});
