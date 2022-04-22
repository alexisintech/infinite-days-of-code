

document.querySelector('#button').addEventListener('click', flipBall);

function flipBall() {
    document.getElementById('front').style.display = 'none';
    document.getElementById('back').style.display = 'flex';
    document.getElementById('reset').style.display = 'inline';
    document.getElementById('ballAnswer').style.display = 'flex';
    
    let randomNumber = Math.floor(Math.random() * 8);

    let eightBall = '';

    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain';
      break;
      case 1:
        eightBall = 'It is decidely so';
      break;
      case 2:
        eightBall = 'Reply hazy. Try again.';
      break;
      case 3:
        eightBall = 'Cannot predict now';
      break;
      case 4:
        eightBall = 'Do not count on it';
      break;
      case 5:
        eightBall = 'My sources say no';
      break;
      case 6:
        eightBall = 'Outlook not so good';
      break;
      case 7:
        eightBall = 'Signs points to yes';
      break;
      case 8:
        eightBall = 'The future is unclear.';
      break;
      default:
        console.log('Not eight.');
      break;
    }

    document.getElementById('ballAnswer').innerText = eightBall;

}

document.querySelector('#reset').addEventListener('click', resetAll);

function resetAll() {
    document.getElementById('back').style.display = 'none';
    document.getElementById('ballAnswer').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('front').style.display = 'flex';
}