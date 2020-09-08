let Magic_Eight_Ball = ["Definitely, yes.","Most likely yes.","Without a doubt, yes.","Small chance of yes.","Reply hazy, try again.","Ask again later.","Concentrate and ask again.","50/50 chance.","Doubtful","Very doubtful.","No.","Don't count on it.", "DON'T LOOK BEHIND YOU."]

let shake = Magic_Eight_Ball[Math.floor(Math.random() * Magic_Eight_Ball.length)];

function balling () {
    var balling_inner = Magic_Eight_Ball[Math.floor(Math.random() * Magic_Eight_Ball.length)];
    return balling_inner;
}


/* The length of the magic 8 ball array is being used to generate a number which corresponds to a string in the array, and Math.random is being used to pick a random number from that.

Math.floor ensures that this number is an integer. This is then turned into
a number, which pulls out a string from the Magic 8 ball array, generating
the random text. */



eight_ball.addEventListener("click", press);

function press() {
    let new_variable = document.getElementById("test_id");
    new_variable.innerText = balling();
}



















