

let isFirstClick = true;


let words = frenchWords

let language = "french"


let currentWord = {};
let showingTranslation = false;

function getRandomWord() {
    const maxRank = parseInt(document.getElementById('wordRange').value);
    const filteredWords = words.filter(word => word.rank <= maxRank);
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    return filteredWords[randomIndex];
}

let iconHTML = `<span id="audioIcon"><i class="fas fa-volume-up" style="font-size: 24px; cursor: pointer;"></i></span>`

function displayWord() {
    currentWord = getRandomWord();


    if(currentWord.french){
        document.getElementById('wordDisplay').innerHTML = currentWord.french + iconHTML
    }

    if(currentWord.spanish){
        document.getElementById('wordDisplay').innerHTML = currentWord.spanish + iconHTML
    }

    if(currentWord.german){
        document.getElementById('wordDisplay').innerHTML = currentWord.german + iconHTML
    }

    document.getElementById('rankDisplay').textContent = currentWord.rank + `/${parseInt(document.getElementById('wordRange').value)}`;
    
    document.getElementById('translation').textContent = ""; // Clear the translation initially
    document.getElementById('exampleSentences').innerHTML = ""; // Clear the example sentences
    document.getElementById('exampleSentences').style.opacity = 0;
    showingTranslation = false;




    // Update the audio element
    const audioElement = document.querySelector('#wordAudio');
    const audioSource = audioElement.querySelector('source');
    const audioFilePath = `audio/${language}/words/${currentWord.rank}.mp3`;
    const audioIcon = document.querySelector('#audioIcon');

    audioSource.setAttribute('src', audioFilePath);
    audioElement.load();  // Reload the audio element to use the new source
    audioIcon.style.display = 'block';  // Show the audio button


    // Update the example audio element
    const exampleAudioElement = document.querySelector('#exampleAudio');
    const exampleAudioSource = exampleAudioElement.querySelector('source');
    const exampleAudioFilePath = `audio/${language}/examples/${currentWord.rank}.mp3`;
    const audioExampleIcon = document.querySelector('#audioExampleIcon');

    exampleAudioSource.setAttribute('src', exampleAudioFilePath);
    exampleAudioElement.load();  // Reload the audio element to use the new source
    
    if(audioExampleIcon){
        audioExampleIcon.style.display = 'block';  // Show the audio player
    }



}



document.body.addEventListener('click', function(e) {

 

    if (e.target.id === 'language-select') {

        const selectElement = document.getElementById("language-select");

        // Add an event listener to listen for changes
        selectElement.addEventListener("change", function () {
          // Get the selected value
          const selectedValue = selectElement.value;
      
          // Call your custom function with the selected value
          yourCustomFunction(selectedValue);
        });
      
        // Your custom function to handle the selected value
        function yourCustomFunction(selectedValue) {

          if(selectedValue == 'fr'){
            words = frenchWords
            language = "french"

          }

          if(selectedValue == 'es'){
            words = spanishWords
            language = "spanish"
          }

          if(selectedValue == 'de'){
            words = germanWords
            language = "german"
          }

          // You can perform any action you want with the selected value here
        }



        return;
    }


    if(isFirstClick){
        isFirstClick = false
        displayWord();
        document.querySelector('.select-container').style.display = "none";
        document.querySelector('#sliderContainer').style.display = "none";
        document.querySelector('.reset-button').style.display = "block";
        document.querySelector('#wordDisplay').style.transform = "translateY(25px)";
        localStorage.setItem('selectedLanguage', document.querySelector('#language-select').value);
        localStorage.setItem('wordRange', document.querySelector('#wordRange').value); // Save the selected language


        displayWord();
    }


    if (e.target.id === 'audioIcon' || e.target.closest('#audioIcon')) {
        const audioElement = document.getElementById('wordAudio');
        document.getElementById('exampleAudio').pause();
        document.getElementById('exampleAudio').currentTime = 0;
        audioElement.play();
        return;
    }

    if (e.target.id === 'reset-button') {
        e.preventDefault()
        location.reload()
        return;
    }

    if (e.target.id === 'exampleSentences' || e.target.closest('#exampleSentences')) {
        const exampleAudioElement = document.getElementById('exampleAudio');
        exampleAudioElement.playbackRate  = 1;
        document.getElementById('wordAudio').pause();
        document.getElementById('wordAudio').currentTime = 0;
        exampleAudioElement.play();
        return;
    }


    if (!showingTranslation) {
        document.getElementById('translation').textContent = currentWord.english;
        document.getElementById('translation').style.opacity = "0.6";
        document.getElementById('translation').style.visibility = "visible";
        
        // Display the example sentence and its translation
        document.getElementById('exampleSentences').innerHTML = `<span style="color:;">${currentWord.exampleSentence}</span><br><b></b><div style="height:10px;"></div>${currentWord.translation}<div id="exampleAudioIconSymbol"><i class="fas fa-volume-up" style="font-size: 24px; cursor: pointer;"></i></div>`;
        document.getElementById('exampleSentences').style.opacity = 0.6;
        showingTranslation = true;
    } else {
        displayWord();
    }
});

document.getElementById('wordRange').addEventListener('input', function(e) {
    e.stopPropagation(); 
    const selectedValue = e.target.value;
    document.getElementById('sliderValue').textContent = selectedValue;
    document.getElementById('sliderLabel').textContent = `Randomize from top ${selectedValue} words`;

    });


    let storedLanguage = "fr";
    let storedRange = 1000;

    storedLanguage = localStorage.getItem('selectedLanguage');  //Get saved selected language
    storedRange = localStorage.getItem('wordRange'); // Get saved selected range


    setTimeout(()=>{

        if(storedLanguage != ""){
            document.querySelector('#language-select').value = storedLanguage;  
        }

        if(storedRange != ""){
            document.querySelector('#wordRange').value = storedRange;
            document.querySelector('.sliderInitialRange').textContent = storedRange;
        }

        document.querySelector('body').style.opacity = 1;
    },100)








