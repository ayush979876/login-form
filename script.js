function whatsapp() {
    let ns = document.getElementById("name").value;
    // let la = document.getElementById("last").value;
    let email = document.getElementById("emai").value;
    let no = document.getElementById("no").value;
    let button = document.getElementById("button").value;
    let whatsapp = "https://wa.me/7667863504?text="
        + "First Name:" + ns + "%0a"
        + "Email id:" + email + "%0a"
        + "Mobile:" + no + "%0a"
        + "Message From User:" + button;
    window.open(whatsapp, "_blank");
}
whatsapp();