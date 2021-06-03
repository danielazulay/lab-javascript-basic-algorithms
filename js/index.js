// Iteration 1: Names and Input

let hacker1="daniel";
let hacker2="anderson";

console.log(`the driver's name is ${hacker1}`);
console.log(`the Navigator's name is ${hacker2}`);

if(hacker1.length>hacker2.length){ 
  console.log(`The driver has the longest name, it has: ${hacker1.length} characters.`);
}else if(hacker2.length>hacker1.length){
  console.log(`It seems that the navigator has the longest name, it has size: ${hacker2.length} characters.`);
} else{
console.log(`Wow, you both have equally long names,${hacker2.length} characters!.`);
} 

let nome = hacker1.toUpperCase();
let aux='';
for(i=0;i<nome.length;i++){
 aux += nome[i]+' ';
}

console.log(aux);
let aux2=''
for(i=(nome.length-1);i>=0;i--){
 aux2 += nome[i]+' ';

}

console.log(aux2);

let dic ={
  a:1,
  b:2,
  c:3,
  d:4,
  e:5,
  f:6,
  g:7,
  h:8,
  i:9,
  j:10,
  k:11,
  l:12,
  m:13,
  n:14,
  o:15,
  p:16,
  q:17,
  r:18,
  s:19,
  t:20,
  v:21,
  x:22,
  y:23,
  z:24,
  }

  let nome1='' 
for(i=0;i<hacker1.length;i++){
nome1 += hacker1[i];
}

  let nome2='' 
for(i=0;i<hacker2.length;i++){
nome2 += hacker2[i];
}

if(nome1===nome2){
console.log('What?! You both have the same name?');

}else{


for(i=0;i<hacker1.length;i++){

  if(dic[nome1[i]]===dic[nome2[i]]){
continue;

  }else  if(dic[nome1[i]]>dic[nome2[i]]){

    console.log("Yo, the navigator goes first definitely.");
    break;
  }else{
 console.log("The driver's name goes first.");
 break;
    
  }
}
}


