const currentTime = document.querySelector("#currentTime");
const timer = document.querySelector("#startTime");
const questionsDiv = document.querySelector("#questionsDiv");
const wrapper = document.querySelector("#wrapper");

const questions = [
    {
        title: 'Who was the first president of the United States?',
        choices: ['George W Bush', 'Barack Obama', 'Donald Trump', 'George Washington'],
        answer:'George Washington'
        },
        {
            title: 'How many terms can the president serve?',
            choices:['2','6','3','1'],
            answer:'2'
        },
        {
            title:'How many years are in a presidental term?',
            choices: ['4', '3', '5','1'],
            answer:'4'
        },
        {
            title:"Where is the President's headquarters?",
            choices:['Whashington D.C.', 'Indianapolis', 'Seattle', 'Chicago'],
            answer:'Washington D.C.'
        },
        {
            title:'Who takes over if the president dies?',
            choices: ['First Lady', 'Vice President', 'Secretary of Defence', 'Homeland Security'],
            answer: 'Vice President'
        }
];

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

