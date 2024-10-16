 

//1-dificil

let jaja1 = [ 3, 4, 5];
let jaja2 = [4, 5, 6,];

function inter(jaja1, jaja2){
return jaja1.filter(elemento => jaja2.includes(elemento));}

let tlgd = inter(jaja1, jaja2);
console.log(tlgd); 

//2-dificil

let ktr = 5;
let ktj = 12;
let ktn = 8;
function med(ktr,ktj,ktn){
    return ((ktr+ktj+ktn)/3);}

let lks = med(ktr,ktj,ktn)
 console.log(lks)

 //3-dificil

 
 
 //4-dificil

let porta = [1, 2, 2, 3, 4, 4];

 function remove(porta) {
    return [new Set(porta)];
}
let kaa = remove(porta);
console.log(kaa); 
