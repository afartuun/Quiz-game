//declaring variables
const score = 0;
const questionIndex = 0;
const currentTime = document.querySelector('#currentTime');
const timer = document.querySelector('#startTime');
const questionsDiv = document.querySelector('#questionsDiv');
const wrapper =  document.querySelector('#wrapper');


//Questions to be asked
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
const secondsLeft = 76;
const holdInterval = 0;
const penalty = 10;
const ulCreate = document.createElement("ul");

//DID NOT DO TIMER YET!!!
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval == 0) {
        holdInterval == setInterval(function () {
            let secondsLeft = 76;
            secondsLeft --;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                finished();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

function render(questionIndex) {
    questionsDiv.innerHTML ='';
    ulCreate.innerHTML ='';
    for( let i = 0; i < questions.length; i++); {
        const userQuestions = questions[questionIndex].title;
        const user_choices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestions;
    }
    const user_choices = questions[questionIndex].choices;
    user_choices.forEach(function (newItem) {
        const item = document.createElement('li');
        item.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(item);
        item.addEventListener('click', (compare));
    })
}

function compare(event) {
    let questionIndex = 0;
    const element = event.target;

    if(element.matches('li')) {
        
        const createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'createDiv');
        if (element.textContent == questions[questionIndex].answer) {
            let score = 0;
            score++;
            createDiv.textContent = 'Corret! The answer is: ' + questions[questionIndex].answer;
        }else {
            secondsLeft == secondsLeft - penalty;
            createDiv.textContent = 'Incorrect! The correct answer is: ' + questions[questionIndex].answer;
        }
    }
    questionIndex++;
    
    if (questionIndex  >= questions.length) {
        finished();
        createDiv.textContent = "You've reached the end of the quiz!"+ ' '+ "Your score was "+ score + '/'+ questions.length + '!';
    }else {
        render(questionIndex);
    }
    let createDiv = document.createElement('div');
    questionsDiv.appendChild(createDiv);
}

function finished() {
    questionsDiv.innerHTML = '';
    currentTime.innerHTML = '';

    const createH1 = document.createElement('h1');
    createH1.setAttribute('id', 'createH1');
    createH1.textContent = "You're Done!";
    questionsDiv.appendChild(createH1);

    const createP = document.createElement('p');
    createP.setAttribute('id', 'createP');
    questionsDiv.appendChild(createP);

    if (secondsLeft >= 0) {
        const timeLeft = secondsLeft;
        const createP2 = document.createElement('p');
        clearInterval(holdInterval);
        createP.textContent = 'Your final score is: ' + timeLeft;
        questionsDiv.appendChild(createP2);
    }
    const createSticker = document.createElement('input');
    createSticker = setAttribute('type', 'text');
    createSticker = setAttribute('id', 'initials');
    createSticker.textContent = '';
    questionsDiv.appendChild(createSticker);

    const makeSubmit = document.createElement('button');
    makeSubmit.setAttribute('type', 'submit');
    makeSubmit.setAttribute('id', 'Submit');
    createSubmit.textContent = 'Submit';
    questionsDiv.appendChild(makeSubmit);

    makeSubmit.addEventListener("click", function () {
        const initials = createInput.value;

        if (initials === null) {

            console.log("No value was entered!");

        } else {const finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            const allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace('');
        }
    });

}







