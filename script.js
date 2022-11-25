function submit() {
    firstNum = parseInt(document.getElementById('firstNumber').value)
    secondNum = parseInt(document.getElementById('secondNumber').value)

    first = "first"
    second = "second"
    let data = {
         first : firstNum,
        second : secondNum
    };

    url = "http://127.0.0.1:8000/num"
    let xhr = new XMLHttpRequest()
    xhr.open("POST", url, true)
    xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhr.setRequestHeader('Content-type', 'application/ecmascript');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    };

    xhr.send(data)

    

}