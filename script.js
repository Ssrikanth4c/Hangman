const worldEl= document.getElementById('word');
const wordLettersEl= document.getElementById('wrong-letters');
const playAgain= document.getElementById('play-button');
const popup= document.getElementById('popup-container');
const notification= document.getElementById('notification-container');
const finalMessage= document.getElementById('final-message');

// hang figure parts while wrong letter
const figurePart= document.querySelectorAll('.hangman-part');
const words=['apple','programming', 'javascript', 'frontend','masaischool'];
//get random word
const selectedWord= words[Math.floor(Math.random()*words.length)];
const correctLetters=['a', 'p', 'p', 'l', 'e'], wrongLetters=[];

const displayWord=()=>{
    worldEl.innerHTML=
    `${selectedWord
        .split('')
        .map(letter=>`
        <span class="letter">
            ${correctLetters.includes(letter) ? letter:''}
        </span>
        `).join('')
    }`
    //replace /n with '' str
    const innerWord=worldEl.innerText.replace(/\n/g, '')
    console.log(innerWord)
    if(innerWord ===  selectedWord){
        finalMessage.innerText='You Won';
        console.log('you Own')
        popup.style.display='block';
    }
    //keydown letter press
    window.addEventListener('keydown', e=>{
        if(e.keyCode>=65 && e.keyCode<=90){
            const letter= e.key.toLowerCase();
            console.log(letter)
            if(selectedWord.includes(letter)){
                if(!correctLetters.includes(letter)){
                    correctLetters.push(letter);
                    displayWord();
                }else{
                    showNofication()
                }
            }else{
                // wrong letters
                if(!wrongLetters.includes(letter)){
                    wrongLetters.push(letter);
                    updateWrongLettersEl();
                }
            }
            console.log(correctLetters)
        }
    })
    playAgain.addEventListener('click', ()=>{
        popup.style.display='none';
        correctLetters=[]
    })
}
const updateWrongLettersEl=()=>{
    console.log('sree')
}

const showNofication=()=>{
    console.log('show')
     notification.classList.add('show');
    //  remove notification after 2 sec
    setTimeout(()=>{
        notification.classList.remove('show');
    },2000);
}
















displayWord();