/* eslint-disable */



let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


let excuse = excuseGenerator();

function excuseGenerator(){
  let numWhoRandom = Math.floor((Math.random() * 3) + 1);
  let numWhatRandom = Math.floor((Math.random() * 3) + 1);
  let numWhenRandom = Math.floor((Math.random() * 4) + 1);
  return who[numWhoRandom]+' '+what[numWhatRandom]+' my homeworks '+when[numWhenRandom];  
}
document.getElementById("excuse").innerHTML = excuse;