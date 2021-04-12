var variFlag = [false, false, false, false];
function checkStudentForm() {
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
function onFNameChange(Text) {
    if (Text.length > 0 && Text.length <= 10) {
        document.getElementById("FNameMSG").innerHTML = "Good";
        variFlag[0] = true;
        checkStudentForm();
    }
    else {
        document.getElementById("FNameMSG").innerHTML = "<div style='color: red'>Must not exceed 10 characters</div>";
        variFlag[0] = false;
        checkStudentForm();
    }
}
function onLNameChange(text) {
    if (text.length > 0 && text.length <= 15) {
        document.getElementById("LNameMSG").innerHTML = "Good";
        variFlag[1] = true;
        checkStudentForm();
    }
    else {
        document.getElementById("LNameMSG").innerHTML = "<div style='color: red'>Must not exceed 15 characters</div>";
        variFlag[1] = false;
        checkStudentForm();
    }
}
function onStudentEmailChange(text) {
    if (text.length > 0 && text.length <= 50) {
        document.getElementById("studentEmailMSG").innerHTML = "Good";
        variFlag[2] = true;
        checkStudentForm();
    }
    else {
        document.getElementById("stumailMSG").innerHTML = "<div style='color: red'>Must not exceed 50 characters</div>";
        variFlag[2] = false;
        checkStudentForm();
    }
}
function onPhNumChange(text) {
    if (text.length > 0 && text.length <= 15) {
        document.getElementById("phoneMSG").innerHTML = "Good";
        variFlag[3] = true;
        checkStudentForm();
    }
    else {
        document.getElementById("phoneMSG").innerHTML = "<div style='color: red'>Must not exceed 15 characters</div>";
        variFlag[3] = false;
        checkStudentForm();
    }
}
//# sourceMappingURL=variStudent.js.map