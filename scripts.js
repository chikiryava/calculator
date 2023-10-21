let input = document.getElementById("input")
console.log("script enabled")

function addNumbers(e) {
    input.value += e
}

function calculate(){
    if(input.value.length===0) {
        alert("Пустое выражение")
        return
    }
    try{
        input.value = math.evaluate(input.value)
    }
    catch {
        alert("Ошибка в выражении")
    }
}

function removeNumber(){
    console.log("work")
    input.value = input.value.slice(0,-1)
}