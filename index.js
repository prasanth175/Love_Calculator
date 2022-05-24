

document.querySelector(".in").addEventListener("click", function(){
    var a = document.getElementById("fname").value
    var b = document.getElementById("lname").value

    var Score = Math.floor((Math.random()*100)+1)


    document.getElementById("result").innerHTML = "your Love Score is "+ Score+"%"

if (Score >= 75 && Score <= 99){
    var text = "Your Are a Great Lover"
    
}
else if (Score == 100)
{
    text = "You Both Are Made For Each Other💕🍫"
    }
else if (Score <= 35)
{
    text = "Break Up Is Better😂"
}
else if (Score > 35 && Score < 75)
{
    text = "(Try to maintain a healthy relationship)"
}

document.getElementById("advice").innerHTML = text
})
