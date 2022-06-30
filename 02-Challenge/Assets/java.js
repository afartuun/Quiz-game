function startTimer() 
{
    var counter = 300;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert('sorry, out of time');
            clearInterval(counter);
        }
    }, 1000);
}
function start()
{
    document.getElementById('count').style='color:black;';
    startTimer();
};
// var questionsEl = document.querySelector('.wrap');
// var quizHeaderEl = document.querySelector

// quizHeaderEl.innerHTML = 'Question 1';



