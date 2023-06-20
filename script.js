let randomno=Math.floor(Math.random()*100)+1;
const guesses = document.querySelector('.guesses')
const lastresult = document.querySelector('.lastresult')
const loworhi = document.querySelector('.loworhi')
const guesssubmit = document.querySelector('.guesssubmit')
const guessfield = document.querySelector('.guessfield')
let guesscount=1;
let resetbutton;
guesssubmit.addEventListener('click',checkguess);
function resetGame() {
  guesscount = 1;

  const resetParas = document.querySelectorAll('.result p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetbutton.parentNode.removeChild(resetbutton);

  guessfield.disabled = false;
  guesssubmit.disabled = false;
  guessfield.value = '';
  guessfield.focus();

  lastresult.style.backgroundColor = 'white';

  randomno = Math.floor(Math.random() * 100) + 1;
}

function setGameOver(){
  guessfield.diabled = true;
  guesssubmit.disabled = true;
  resetbutton = document.createElement('button');
  resetbutton.textContent = 'Start new game';
  document.body.append(resetbutton);
  resetbutton.addEventListener('click',resetGame);
}
function checkguess(){
  let userguess = Number(guessfield.value);
  if(guesscount === 1)
  {
    guesses.textContent = `previous guesses::`
  }
  guesses.textContent += ` ${userguess}`;
  lastresult.textContent = 'Wrong!';
  lastresult.style.backgroundColor = 'red';
   if(userguess === randomno){
    lastresult.textContent = 'WOW you won the game';
    lastresult.style.backgroundColor = 'green';
    loworhi.textContent='';
    setGameOver();
  }
  else
  if(guesscount === 3) {
    guesses.textContent =` The Number is ${randomno}`
    lastresult.textContent = '!!!GAME OVER!!!';
    loworhi.textContent = '';
    setGameOver();
  }
  else 
  {
    lastresult.textContent = 'Wrong!';
    lastresult.style.backgroundColor = 'red';
    if (userguess < randomno) {
      if(userguess+20 < randomno)
      {
        loworhi.textContent = 'Last guess was too low!';
      }
      else{
      loworhi.textContent = 'Last guess was  low!';
      }
     } 
    else if (userguess > randomno) {
      if(userguess-20 > randomno)
      {
        loworhi.textContent = 'Last guess was too high!';
      }
      else{
      loworhi.textContent = 'Last guess was  high!';
      }
    }
  } 
  guesscount++;
  guessfield.value = '';
  guessfield.focus();

}
