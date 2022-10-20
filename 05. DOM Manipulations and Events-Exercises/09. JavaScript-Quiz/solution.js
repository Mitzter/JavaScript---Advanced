function solve() {
  let correctAnswers = 0;
  let clicks = 0;
  const sections = Array.from(document.getElementsByTagName("section"));
  const questions = Array.from(document.getElementsByClassName("question"));
  const answers = Array.from(document.getElementsByClassName("answer-wrap"));
  const result = document.getElementsByTagName("h1")[1];
  const resultInner = document.getElementById("results")
  
  for(let answer of answers){
    answer.addEventListener("click", proceed);
  }
  
  function proceed(ev){
    clicks++;
    
    if(clicks === 1){
      sections[0].style.display = 'none';
      sections[1].style.display = 'block';
      if(ev.target.parentNode === answers[0]){
        correctAnswers++;
      }
    } else if (clicks === 2){
      sections[1].style.display = 'none';
      sections[2].style.display = 'block';
      if(ev.target.parentNode === answers[3]){
        correctAnswers++;
      }
    } else {
      sections[2].style.display = 'none';
      
      if(ev.target.parentNode === answers[4]){
        correctAnswers++;
        resultInner.style.display = 'block';
        if(correctAnswers === 3){
          result.textContent = "You are recognized as a top JavaScript fan!";
        } else {
          result.textContent = `You have ${correctAnswers} right answers`;
        }
      }
    }
  }
}
