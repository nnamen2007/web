function myFunction() {
    let x = document.getElementById("number").value;
    let text;
    if ( x < 0 || x > 100 || isNaN(x)) {
        text = "invalid"
    }
    else text = "valid";
    document.getElementById("check").innerHTML = text;

}



