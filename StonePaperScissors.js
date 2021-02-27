const options = ['👊', '🤚', '✌️'];

startGame();

function startGame() {
  const userOption = Number(getUserResponse());
  const machineOption = getRandomInt(0, options.length);
  alert(`🧔: ${options[userOption]}       VS       🤖: ${options[machineOption]}`);
  
  if(userOption !== machineOption){
    if (userOption === 0 && machineOption === 2 || // stone vs scissors
      userOption === 1 && machineOption === 0 || // paper vs stone
      userOption === 2 && machineOption === 1) { // scissors vs paper
      alert(`💪 un gran paso para la humanidad.`);
    } else{
      alert(`🦾 punto para las máquinas.`);
    } 
  }else{
    alert(`🔥 empate.`);
  }
  const restart = confirm('¿Otra partida?');
  if(restart){
    startGame();
  }
}

function getUserResponse() {
  let title = 'Inserte un numero [0-2]:';
  for (let i = 0; i < options.length; i++) {
    title += `\n${i}: ${options[i]}`;
  }
  const userOption = prompt(title, 0);
  return userOption;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}