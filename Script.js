const numberText = document.getElementById("number")
count = 0
numberText.innerText = count
function plus(){
    count++
numberText.innerText = count

}
function minus(){
    count--
numberText.innerText = count

}
function reset(){
    count = 0
numberText.innerText = count

}
