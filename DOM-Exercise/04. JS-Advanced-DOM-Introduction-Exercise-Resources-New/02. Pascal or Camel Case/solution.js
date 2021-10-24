/** *
function solve() {
  const input = document.getElementById("text").value;
  const currentCase = document.getElementById("naming-convention").value;
  const resultContainer = document.getElementById("result");

  const splittet = input.split(" ");

  let resultString = "";
  if(currentCase == "Camel Case"){
    resultString += splittet[0][0].toLowerCase() + splittet[0].slice(1, splittet[0].length).toLowerCase();
    for (let i = 1; i < splittet.length; i++) {
      resultString += splittet[i][0].toUpperCase() + splittet[i].slice(1, splittet[i].length).toLowerCase();
      
    }
  }else if(currentCase == "Pascal Case"){
    for(let  i= 0; i < splittet.length; i++){
      resultString += splittet[i][0].toUpperCase() + splittet[i].slice(1, splittet[i].length).toLowerCase();
    }
  }else{
    resultContainer.textContent = "Error!";
    return;
  }

  resultContainer.textContent = resultString;
}
/** */


function solve(){
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  let splittet = input.split(" ");
  let resultString = "";
  if(currentCase == "Camel Case"){
    resultString += splittet[0][0].toLowerCase() + splittet[0].slice(1,splittet[0].length).toLowerCase();
    for(let i = 1; i<splittet.length;i++){
      resultString += splittet[i][0].toUpperCase() + splittet[i].slice(1,splittet[i].length).toLowerCase();
    }
  }else if(currentCase == "Pascal Case"){
    for(let i = 0; i<splittet.length;i++){
      resultString += splittet[i][0].toUpperCase() + splittet[i].slice(1,splittet[i].length).toLowerCase();
    }
  }else{
    result.textContent = "Error!";
    return;
  }

  result.textContent = resultString;
}