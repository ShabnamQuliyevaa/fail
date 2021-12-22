let tbl = document.getElementById("table");
let show = document.getElementById("show");
let arr = [];
let x = "X";
let o = "O";
let player1;
let player2;
let point1 = 0;
let point2 = 0;
let count = 1;


start();
function start(){

    player1 = player1 == undefined ?  prompt("Player 1 i daxil edin?", x) : player1 ; 
    player2 = player2 == undefined ?  prompt("player 2 daxil edin?" , o) : player2;

    show.innerHTML = `${player1} : ${point1} <br/> ${player2} : ${point2}`;

    Arr();
    table();
}




function table () {
let ekran ="";
for (let i=0; i<3; i++){
    ekran+= `<tr>`;
    for(let j=0; j<3; j++){
        ekran+=`<td  onclick="Click(${i},${j})" > ${arr[i][j] == undefined ? ``: arr[i][j]} </td>`;
    }
    ekran+= `</tr>`
}
tbl.innerHTML = ekran;
}


function Arr(){
    for(let i =0 ;i<3; i++){
        arr[i] = [];
    }
}


function Click(i,j){
    if(arr[i][j] == undefined){
        if(count%2==0){
            arr[i][j] = o;
        }else{
            arr[i][j] = x;
        }
        table();
        count++;
       setTimeout( function(){
        check();
       }, 400 )
    }
   
}

function check(){
    for(let i = 0; i<3; i++){
        if(arr[i][0] != undefined && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]){
       let winner = arr[i][0] == x ? `${player1} Won` :`${player2} Won`;
       alert(winner);
       arr[i][0] == x ? `${point1++}` :`${point2++}`;
       start();
        }
    }
    for(let i = 0; i<3; i++){
        if(arr[0][i] != undefined && arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]){
            let winner = arr[0][i] == x ? `${player1} Won` :`${player2} Won`;
       alert(winner);
       arr[0][i] == x ? `${point1++}` :`${point2++}`;
       start();
        }
    }

for(let i=0; i<3; i++){
    if(arr[0][0] != undefined && arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2]){
        let winner = arr[0][0] == x ? `${player1} Won` :`${player2} Won`;
       alert(winner);
       arr[0][0] == x ? `${point1++}` :`${point2++}`;
       start();
    }
}

for(let i=0; i<3; i++){
    if(arr[0][2] != undefined && arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0]){
        let winner = arr[0][2] == x ? `${player1} Won` :`${player2} Won`;
        alert(winner);
        arr[0][2] == x ? `${point1++}` :`${point2++}`;
        start();
    }
}

if (count==10){
    alert("Berabere qaldiniz");
    start();
}


}

// function result(){

// }