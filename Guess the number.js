//selecting input box,paragraph
var guessnumber=document.getElementById("guessnumber")
var score=document.getElementById("score")
var result=document.getElementById("result")
var randomNumber = Math.floor(Math.random()*10)+1
var totalscore=10
function check()
{
    var enterednumber = guessnumber.value
    if(randomNumber==enterednumber)
    {
        console.log("Right")
        result.textContent="Right"
        alert("YOU WON...")
    }
    else{
        totalscore=totalscore-1
        score.textContent="score:"+totalscore
        result.textContent="Wrong"
    }
}