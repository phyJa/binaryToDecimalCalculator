function getValue() {
    let value = document.getElementById("binary").value;
    document.getElementById("answer").innerHTML = parseInt(value, 2);
}