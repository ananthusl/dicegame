

function dicegame1(){
    var randomvalue1;
    randomvalue1=Math.floor(Math.random()*6)+1;
    if (randomvalue1===1){
      document.getElementsByClassName('img1')[0].setAttribute('src','dice1.png');

    }
    else if(randomvalue1===2){
      document.getElementsByClassName('img1')[0].setAttribute('src','dice2.png');

    }
    else if(randomvalue1===3){
      document.getElementsByClassName('img1')[0].setAttribute('src','dice3.png');

    }
    else if(randomvalue1===4){
      document.getElementsByClassName('img1')[0].setAttribute('src','dice4.png');

    }
    else if(randomvalue1===5){
      document.getElementsByClassName('img1')[0].setAttribute('src','dice5.png');

    }
    else{
      document.getElementsByClassName('img1')[0].setAttribute('src','dice6.png');

    }
    dicegame2(randomvalue1);
  }

function dicegame2(randomvalue1){
    var randomvalue2;
    randomvalue2=Math.floor(Math.random()*6)+1;
    if (randomvalue2===1){
      document.getElementsByClassName('img2')[0].setAttribute('src','dice1.png');
    }
    else if(randomvalue2===2){
      document.getElementsByClassName('img2')[0].setAttribute('src','dice2.png');
    }
    else if(randomvalue2===3){
      document.getElementsByClassName('img2')[0].setAttribute('src','dice3.png');
    }
    else if(randomvalue2===4){
      document.getElementsByClassName('img2')[0].setAttribute('src','dice4.png');
    }
    else if(randomvalue2===5){
      document.getElementsByClassName('img2')[0].setAttribute('src','dice5.png');
    }
    else{
      document.getElementsByClassName('img2')[0].setAttribute('src','dice6.png');
    }
    result(randomvalue1,randomvalue2);
  }
function result(randomvalue1,randomvalue2){
    if (randomvalue1>randomvalue2){
      document.querySelector('h1').innerHTML='Player 1 wins';
    }
    else if (randomvalue2>randomvalue1){
      document.querySelector('h1').innerHTML='Player 2 wins';
    }
    else{
      document.querySelector('h1').innerHTML='Match is draw';
    }
  }
