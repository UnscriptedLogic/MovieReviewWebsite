async function myfunc() {
    var rating = 10;

    await setTimeout(function() {
        rating = 20;
    }, 0);

    console.log(rating);
}

myfunc();