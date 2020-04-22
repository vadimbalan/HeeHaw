document.getElementById("submit").onclick = validate;

function validate()
{
    // Create a flag variable
    let valid = true;

    // Clear all errors
    let errors = document.getElementsByClassName("err");
    for (let i = 0; i < errors.length; i++)
    {
        errors[i].style.visibility = "hidden";
    }

    // Check the number
    let num = document.getElementById("num").value;
    if (num === "" || isNaN(num) || num < 1)
    {
        let errFirst = document.getElementById("errNum");
        errFirst.style.visibility = "visible";
        valid = false;
    }

    if (valid)
    {
        heeHaw(num);
    }
    return valid;
}

function heeHaw(maxNum)
{
    let outPut = document.getElementById("output");

    let number = 1;
    while (number <= maxNum) {
        if ((number % 3) === 0 && (number % 5) === 0)
        {
            outPut.innerHTML += "<p>Hee Haw!</p>";
        } else if ((number % 3) === 0)
        {
            outPut.innerHTML += "<p>Hee!</p>";
        } else if ((number % 5) === 0)
        {
            outPut.innerHTML += "<p>Haw!</p>";
        } else {
            outPut.innerHTML += "<p>" + number + "</p>";
        }
        number++;
    }
}