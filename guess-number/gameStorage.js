//? pc ye 1-20 arasında sayı tutturduk.
let randomNumber = Math.ceil(Math.random() * 20);

console.log(randomNumber);

let message = document.querySelector(".msg");

let score = 10;

//?-----------localStorage de topScore adıyla bir degisken varsa onu  getir yoksa 0 olsun
let topScore = localStorage.getItem("topScore") || 0;
//?----browser da, DOM da top-score değerini localStoroge den okuyarak güncelle, özellikle 2. 3. oyuncular için gerekli
document.querySelector(".top-score").textContent = topScore;

//?her check butonuna basılınca yapılacaklar

document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;

  //?guess girilmeden check e basıldıysa
  if (!guess) {
    message.textContent = "Please enter a guess";

    //?guess doğruysa
  } else if (guess == randomNumber) {
    message.textContent = "Correct Guessed 🎉";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = randomNumber;

    //? topScore kontrolü yap
    if (score > topScore) {
      //?eğer yeni score localStoroge den yüksekse, kayıtlı topScore u benim score umla güncelle
      localStorage.setItem("topScore", score);

      topScore = score;

      document.querySelector(".top-score").textContent = topScore;
    }

    //?guess yanlışsa
  } else {
    //?score 1 den büyük olduğu sürece guess hakkım var
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;

      guess < randomNumber
        ? (message.textContent = "Increase 📈")
        : (message.textContent = "Decrease 📉");
    } else {
      message.textContent = "You lost";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

//?Again butonuna basılınca ayarlar başlangıç değerine kurulsun arka ekran #2d3436 olsun

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";
  randomNumber = Math.ceil(Math.random() * 20);
  console.log(randomNumber);
  score = 10;
  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  message.textContent = "New Game Starts...";
};
