document.getElementById("head1").textContent = "Home";

let username;
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Welcome ${username}!`;
}
