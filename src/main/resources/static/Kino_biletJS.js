function velg() {
    let ut="Er ";
    let myndig = document.getElementById("myndig").checked;
    if(myndig) {
        ut += "myndig";
    } else {
        ut += "ikke myndig";
    }
    alert(ut);
}

<input type="checkbox" id="gender" value="male"><br/>
    <input type="checkbox" id="gender" value="female"><br/>

    <button onclick="velg()">Velg</button>
