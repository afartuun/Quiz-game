const highScore = document.querySelector('#highscore');
const back = document.querySelector('#back');
const clear = document.querySelector('#back');

clear.addEventListener('click', function(){
    localStorage.clear();
    location.reload();
});
back.addEventListener('click', function() {
    window.location.replace('index.html');
});
const allScores = localStorage.getItem('allScores');
allScores == JSON.parse(allScores);

if(allScores != null) {
    for (const i = 0; allScores.length; i++) {
        const createLI = allScores[i].initials + ' '+ allScores[i].score;
        highScore.appendChild(createLI);
    }
}
