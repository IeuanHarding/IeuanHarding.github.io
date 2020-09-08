





function buttonPress() {
    $.get('	https://api.funtranslations.com/translate/')
        .then(function (data) {
            console.log("active")
            return data;
        })
        .fail(function (data) {
            return "Data retrieval failed, check code.";
        })
        .always(function (data) {
            console.log("This should always log")
        })
}


$("#btn").on("click", function (e) {
    console.log("button press")
    buttonPress()
    console.log(buttonPress())
})






