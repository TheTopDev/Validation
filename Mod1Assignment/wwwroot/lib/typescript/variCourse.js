var variFlag = [false, false, false, false];
function checkCourseForm() {
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
function onCourseNumChange(Text) {
    if (Text.length > 0 && Text.length <= 5) {
        document.getElementById("courseNumMSG").innerHTML = "Good";
        variFlag[0] = true;
        checkCourseForm();
    }
    else {
        document.getElementById("courseNumMSG").innerHTML = "<div style='color: red'>Must not exceed 5 characters</div>";
        variFlag[0] = false;
        checkCourseForm();
    }
}
function onCourseNameChange(text) {
    if (text.length > 0 && text.length <= 10) {
        document.getElementById("courseNameMSG").innerHTML = "Good";
        variFlag[1] = true;
        checkCourseForm();
    }
    else {
        document.getElementById("courseNameMSG").innerHTML = "<div style='color: red'>Must not exceed 10 characters</div>";
        variFlag[1] = false;
        checkCourseForm();
    }
}
function onDecriptionChange(text) {
    if (text.length > 0 && text.length <= 150) {
        document.getElementById("descriptionMSG").innerHTML = "Good";
        variFlag[2] = true;
        checkCourseForm();
    }
    else {
        document.getElementById("descriptionMSG").innerHTML = "<div style='color: red'>Must not exceed 150 characters</div>";
        variFlag[2] = false;
        checkCourseForm();
    }
}
//# sourceMappingURL=variCourse.js.map