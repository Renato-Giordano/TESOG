let mapa = [['*', "*", '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'], //0
            ['*', '_', '_', '_', '_', 'D', '_', '_', '_', '@', '_', '_', '_', '_', '*'], //1
            ['*', '_', '_', '_', '_', '*', '_', '_', '_', '_', '_', '_', '_', '_', '*'], //2 
            ['*', '_', '_', '_', '_', '*', '*', '*', '*', '*', '*', '_', '_', '_', '*'], //3
            ['*', '*', '*', '*', '_', '*', '_', '_', '_', '_', '_', '_', '_', '_', '*'], //4
            ['*', '_', '_', '_', '_', '*', '_', '_', '_', '_', '*', '*', '*', '*', '*'], //5
            ['*', '_', '_', '_', '_', '*', '_', '_', '_', '_', '_', '_', '_', '_', '*'], //6
            ['*', '_', '_', '_', '_', '*', '*', '*', '*', '*', '*', '_', '_', '_', '*'], //7
            ['*', '_', '_', '_', '_', '*', '_', '_', '_', '_', '*', '_', '_', '_', '*'], //8
            ['*', '_', '_', '_', '_', '*', '_', '_', '_', '_', '_', '_', '_', '_', '*'], //9
            ['*', '_', '*', '*', '*', '*', '_', '_', '_', '_', '*', '*', '*', '*', '*'], //10
            ['*', '_', '_', '_', '_', '*', '_', '_', '_', '_', '*', '_', '_', '_', '*'], //11
            ['*', '_', '@', '_', '_', '*', '_', '_', '_', '_', '_', '_', '_', '_', '*'], //12
            ['*', '_', '_', '_', '_', '*', '_', '_', '_', '_', '*', '_', '_', '_', 'D'], //13
            ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*']]; //14
          //  0    1    2    3    4     5   6    7    8    9   10   11   12   13    15
 let x = 1;
 let y = 1;

let chave1 = true;
let chave2 = true;
/*y = linha e x= coluna*/
/* primeira chave linha=12 coluna =2*/ 
/* segunda chave linha=1 coluna =9*/ 
/* primeria porta linha=7 coluna=6*/
/* segunda porta  linha=7 coluna=9*/
/* terceira porta  linha=13 coluna=14*/
function desenharMapa() {
let texto = "";
if (!chave1) {
  mapa[1][5]='='
}else {
  mapa[12][2]='@'
}if (!chave2) {
  mapa[13][14]='='
}else{
  mapa[1][9]='@'
}
mapa[y][x] = '&';
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 15; j++) {
    if (mapa[i][j] === '_') {
      texto += `<span style="color: transparent">_ </span>`;
    } else {
      texto += `${mapa[i][j]} `;
    }
  }
  texto += `\n`;
}


document.getElementById('mapa').innerHTML = texto;
}


desenharMapa();
document.addEventListener('keydown', (evento) => {
  
  console.log(y)
  console.log(x)

  mapa[y][x] = '_';
   
switch (evento.key) {
  case 'w':
    if ( mapa[y-1][x] !== '*' && mapa[y-1][x] !== 'D' ) y -= 1;
    break;
  case 's':
    if ( mapa[y+1][x] !== '*' && mapa[y+1][x] !== 'D' ) y += 1;
    break;
  case 'a':
    if ( mapa[y][x-1] !== '*' && mapa[y][x-1] !== 'D' ) x -= 1;
    break;
  case 'd':
    if ( mapa[y][x+1] !== '*' && mapa[y][x+1] !== 'D' ) x += 1;
    break;
  case 'i': 
    if (y==12 && x==2) {
      chave1 = false
    }else if (y==1 && x==9) {
      chave2 = false
    }
    break;
}
desenharMapa();
});
document.addEventListener('keydown', (evento) => {


  if (y == 13 && x == 14) {
    mapa[13][14] = '=';
    desenharMapa();

    alert('Você concluiu a primeira fase!')
    window.location.href = 'fase2.html';
  }


});