

function checker() {
    let result=document.getElementById("display").value
    let ans = document.getElementById("answer");
    let lowresult=result.toLowerCase();
    let reverseinput=lowresult.split("").reverse().join("");
    if (lowresult === "") {
        ans.innerHTML = "please Enter any String first "
        
    } 
  else if (lowresult === reverseinput) {
    ans.innerHTML = 'yes '+ result + ' is a palindrome!'
  } 
  else{
    ans.innerHTML = 'No ' + result + ` isn't a palindrome!`
  }
}
