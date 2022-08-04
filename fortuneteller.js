//use switch to get random result

const btn = document.getElementById('button');

//show result
btn.addEventListener('click', () => {
  const getResult = document.createElement('p');
  const divResult = document.getElementById('result');

  // get random pick from array
  const array = [1,1,2,2,2,3,3,3,3,3];
  const randomArray = array[Math.floor(Math.random()* array.length)];
  
  switch (randomArray) {
    case 1:
        getResult.innerHTML = 'Wonderfull!! This is Gonna be Your Day!!';
        break;
    case 2:
        getResult.innerHTML = 'Try Again Tomorrow and Good Luck';
        break;
    default:
        getResult.innerHTML = 'It Is The Worst. Be Strong.';
        break;
  }
  
  divResult.append(getResult);
});
