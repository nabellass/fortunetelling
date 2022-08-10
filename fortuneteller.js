//pick random result from array

const btn = document.getElementById('button');
const result = document.getElementById('result');

const card = ['Wonderfull!! This is Gonna be Your Day!!', 'Try Again Tomorrow and Good Luck', 'It Is The Worst. Be Strong.'];

function getRandom() {
  const array = [0,1,1,2,2,2];
  const randomArray = array[Math.floor(Math.random()* array.length)];
  
  return randomArray;
}

//show result
btn.addEventListener('click', () => {
  const index = getRandom();
  result.innerText = card[index];
});
