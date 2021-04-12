var variFlag = [false, false, false, false];
function checkInstructorForm() {
    var cansubmit = true;
    for (var i = 0; i < 3; i++) {
        if (variFlag[i] == false) {
            cansubmit = false;
            break;
        }
    }
    if (cansubmit) {
        document.getElementById('submitButton').removeAttribute("disabled");
    }
    else {
        document.getElementById('submitButton').setAttribute("disabled", "true");
    }
}
function onFirstNameChange(Text) {
    if (Text.length > 0 && Text.length <= 10) {
        document.getElementById("firstNameMSG").innerHTML = "Good";
        variFlag[0] = true;
        checkInstructorForm();
    }
    else {
        document.getElementById("firstNameMSG").innerHTML = "<div style='color: red'>Must not exceed 10 characters</div>";
        variFlag[0] = false;
        checkInstructorForm();
    }
}
function onLastNameChange(text) {
    if (text.length > 0 && text.length <= 15) {
        document.getElementById("lastNameMSG").innerHTML = "Good";
        variFlag[1] = true;
        checkInstructorForm();
    }
    else {
        document.getElementById("lastNameMSG").innerHTML = "<div style='color: red'>Must not exceed 15 characters</div>";
        variFlag[1] = false;
        checkInstructorForm();
    }
}
function onEmailChange(text) {
    if (text.length > 0 && text.length <= 50) {
        document.getElementById("emailMSG").innerHTML = "Good";
        variFlag[2] = true;
        checkInstructorForm();
    }
    else {
        document.getElementById("emailMSG").innerHTML = "<div style='color: red'>Must not exceed 50 characters</div>";
        variFlag[2] = false;
        checkInstructorForm();
    }
}
//# sourceMappingURL=variInstructor.js.map