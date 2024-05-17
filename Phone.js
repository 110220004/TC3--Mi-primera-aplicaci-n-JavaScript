function agregarContacto() {
    var Name = document.getElementById('Name').value;
    var Phone = document.getElementById('Phone').value;

    if (Name === "" || Phone === "") {
        alert("Please complete both fields.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = Name + ": " + Phone;

    document.getElementById('directory').appendChild(li);
}
