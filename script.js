// ===========================================================
// LOGIK & FUNKTIONALITÄT
// ===========================================================

let questions = []; 
let questionIndex = 0;
let score = 0;


const allQuestions = [

  // 🎮 GAMING - SPIELE (JETZT MIT DEN NEUEN NAMEN!)
  {question: "Wer ist dieser Charakter (God of War)?", answers:["Kratos","Mario","Link","Sonic"], correct:0, img:"Resources/images/Wer%20ist%20das(herr%20pederiva).jpg", category:"spiele"},
  {question: "Wer ist das?", answers:["Bowser","Donkey Kong","Luigi","Yoshi"], correct:0, img:"Resources/images/Wer%20ist%20das(bowser).jpg", category:"spiele"},
  {question: "Wer ist das?", answers:["Papyrus","Sans","Gaster","Flowey"], correct:0, img:"Resources/images/game_Wer%20ist%20das(Papyrus).jpg", category:"spiele"},
  {question: "Welche Nintendo Konsole kam 2002 raus?", answers:["Switch","GameCube","Wii","DS"], correct:1, img:"Resources/images/Welche%20Konsole%20kam%202002%20raus.jpg", category:"spiele"},
  {question: "Meistverkauftes Spiel?", answers:["GTA V","Minecraft","Fortnite","Tetris"], correct:1, img:"Resources/images/game_Welches%20Spiel%20ist%20das%20meist%20verkauft.jpg", category:"spiele"},
  {question: "GTA 5 Stadt?", answers:["Liberty City","Los Santos","Vice City","San Fierro"], correct:1, img:"Resources/images/game_Wie%20heißt%20die%20Stadt%20von%20GTA5.jpg", category:"spiele"},
  {question: "SEGA Maskottchen?", answers:["Mario","Sonic","Crash","Rayman"], correct:1, img:"Resources/images/sega.jpg", category:"spiele"},
  {question: "Umbrella kommt vor in?", answers:["Resident Evil","Silent Hill","Outlast","Dead Space"], correct:0, img:"Resources/images/Die%20umbrella%20frage.jpg", category:"spiele"},
  {question: "Spiel mit Pilzinfektion?", answers:["The Last of Us","Days Gone","RE4","Metro"], correct:0, img:"Resources/images/Die%20pilz%20infection%20frage.jpg", category:"spiele"},
  {question: "Roter Pac-Man Geist?", answers:["Blinky","Pinky","Inky","Clyde"], correct:0, img:"Resources/images/game_Pac-man%20frage.jpg", category:"spiele"},
  {question: "Marios erster Auftritt?", answers:["Mario Bros","Donkey Kong","Zelda","Metroid"], correct:1, img:"Resources/images/game_In%20welchem%20spiel%20kam%20super%20Mario%20als%20erste%20vor.jpg", category:"spiele"},
  {question: "Fallout Währung?", answers:["Caps","Dollar","Gold","Coins"], correct:0, img:"Resources/images/game_Fallout.jpg", category:"spiele"},

  // 📺 SERIEN
  {question: "Wer ist das?", answers:["Walter White","Jesse Pinkman","Saul Goodman","Hank"], correct:0, category:"serien"}, // KEIN BILD
  {question: "Wer ist Glenn?", answers:["The Walking Dead","Lost","Breaking Bad","Dark"], correct:0, img:"Resources/images/The_Walking_Dead.jpg", category:"serien"}, 
  {question: "Serie mit tödlichen Spielen?", answers:["Squid Game","Alice in Borderland","Saw","Dark"], correct:0, img:"Resources/images/serien_Die%20squid%20game%20frage.jpg", category:"serien"}, 
  {question: "Walter Whites Fach?", answers:["Mathe","Chemie","Bio","Physik"], correct:1, img:"Resources/images/serien_Die%20Walter%20white%20fach%20frage.jpg", category:"serien"}, 
  {question: "Mädchen mit Kräften?", answers:["Eleven","Max","Nancy","Robin"], correct:0, img:"Resources/images/serien_Die%20stranger%20things%20frage.jpg", category:"serien"}, 
  {question: "Wo leben Simpsons?", answers:["Springfield","Quahog","South Park","NY"], correct:0, img:"Resources/images/serien_Die%20simpson%20frage.jpg", category:"serien"}, 
  {question: "TWD W auf Stirn?", answers:["Owen","Negan","Rick","Daryl"], correct:0, img:"Resources/images/The_Walking_Dead.jpg", category:"serien"}, 
  {question: "Blutanalyst + Killer?", answers:["Dexter Morgan","Hannibal","Joe Goldberg","Michael"], correct:0, img:"Resources/images/serien_dexter%20frage.jpg", category:"serien"}, 
  {question: "Kind namens Malcolm?", answers:["Malcolm Mittendrin","Modern Family","Friends","Office"], correct:0, img:"Resources/images/serien_melcolm%20mittendrin.jpg", category:"serien"}, 

  // 🎬 FILME
  {question: "Wer ist das?", answers:["Iron Man","Batman","Superman","Thor"], correct:0, img:"Resources/images/movie_Wer%20ist%20das(iron-man).jpg", category:"filme"},
  {question: "Wer ist Jason?", answers:["Jason Voorhees","Freddy","Michael Myers","Ghostface"], correct:0, img:"Resources/images/movie_Wer%20ist%20das(jason%20voorhees).jpg", category:"filme"},
  {question: "Hauself?", answers:["Dobby","Kreacher","Winky","Hedwig"], correct:0, img:"Resources/images/movie_Harry%20Potter.jpg", category:"filme"},
  {question: "Fight Club Regel?", answers:["Nicht reden","Kämpfen","Fliehen","Lachen"], correct:0, img:"Resources/images/movie_fight%20club%20Zitat.jpg", category:"filme"},
  {question: "Scream Regel?", answers:["Bin gleich zurück","Hallo","Lauf","Hilfe"], correct:0, img:"Resources/images/movie_was%20darf%20man%20nicht%20im%20scream%20Universum%20sagen.jpg", category:"filme"},
  {question: "Freitag der 13 Killer Teil 1?", answers:["Pamela Voorhees","Jason","Freddy","Ghostface"], correct:0, img:"Resources/images/movi_Wer%20ist%20der%20killer%20in%20Freitag%20der%2013%20Teil%201.jpg", category:"filme"},
  {question: "Simba Böser Onkel?", answers:["Scar","Mufasa","Zazu","Rafiki"], correct:0, img:"Resources/images/movie_König%20Der%20Löwen.jpg", category:"filme"},
  {question: "Stunts selbst?", answers:["Jackie Chan","Tom Cruise","The Rock","Vin Diesel"], correct:0, img:"Resources/images/movie_Welcher%20Schauspieler%20macht%20alle%20stu…jpg", category:"filme"},
  {question: "Erstes Dino Tier?", answers:["Brachiosaurus","T-Rex","Raptor","Triceratops"], correct:0, img:"Resources/images/movie_Welchen%20dino%20hat%20alan%20grand%20zuerst%20gesehen.jpg", category:"filme"}

];


function loadQuestion(){
    // Update Dev Status Anzeige
    document.getElementById('indexStatus').innerText = questionIndex;
    document.getElementById('scoreStatus').innerText = `${score} / ${questions.length}`;


    if(questions.length === 0){
        document.getElementById("question").innerText = "Bitte wähle eine Kategorie!";
        // Deaktiviere Buttons und Bild bei leerer Auswahl
        document.getElementById("a").style.display = "none";
        document.getElementById("b").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("d").style.display = "none";
        document.getElementById("question-img").src = ""; 
        document.getElementById("question-img").style.display = "none";
    }

    let q = questions[questionIndex];
    document.getElementById("question").innerText = q.question;
    document.getElementById("a").innerText = q.answers[0];
    document.getElementById("b").innerText = q.answers[1];
    document.getElementById("c").innerText = q.answers[2];
    document.getElementById("d").innerText = q.answers[3];

    // Buttons anzeigen, falls eine Frage vorhanden ist
    document.getElementById("a").style.display = "inline-block";
    document.getElementById("b").style.display = "inline-block";
    document.getElementById("c").style.display = "inline-block";
    document.getElementById("d").style.display = "inline-block";

    // Bild setzen (wenn img vorhanden ist)
    if(q.img && q.img !== "") {
        document.getElementById("question-img").src = q.img;
        document.getElementById("question-img").style.display = "block";
    } else {
        document.getElementById("question-img").style.display = "none"; // Bild ausblenden, wenn kein Pfad da ist
    }
}

function selectCategory(cat){
    questions = allQuestions.filter(q => q.category === cat);
    questionIndex = 0;
    score = 0;
    document.getElementById("result").innerText = "";
    // Ergebnis-Styling zurücksetzen
    const resultElement = document.getElementById('result');
    resultElement.className = ''; 

    loadQuestion();
}

function checkAnswer(ans){
    const currentQuestion = questions[questionIndex];
    const resultElement = document.getElementById("result"); // Referenz auf das Ergebnis-Element

    // Feedback geben
    if(ans === currentQuestion.correct){
        score++;
        resultElement.innerText = "✅ Richtig!";
        resultElement.className = 'correct'; 
    } else {
        resultElement.innerText = `❌ Falsch! Die richtige Antwort war: ${currentQuestion.answers[currentQuestion.correct]}`;
        resultElement.className = 'incorrect'; 
    }

    // WICHTIG: Feedback nach kurzer Zeit automatisch entfernen
    setTimeout(() => {
        resultElement.innerText = "";
        resultElement.className = ''; // ENTFERNT ALLE KLASSEN (rot/grün)
        
        questionIndex++;
        if(questionIndex < questions.length){
            loadQuestion(); 
        } else {
            // Ende des Quizs
            document.body.innerHTML = `
                <h1 style="color:#58a6ff;">🥳 QUIZ BEENDET!</h1>
                <p style="font-size: 2em; margin-top: 30px;">Du hast ${score} von ${questions.length} Fragen richtig beantwortet!</p>
                <button onclick='window.location.reload()' style='font-size:1.5em; padding:20px 40px;'>Nochmal spielen</button>
            `;
        }
    }, 1800); // Pause von 1,8 Sekunden
}

// ===========================================================
// FUNKTIONALITÄT (THEME & DEV)
// ===========================================================

const body = document.getElementById('quizBody');
const themeToggleBtn = document.getElementById('themeToggle');
const devSettingsBtn = document.getElementById('devSettingsBtn');
const settingsModal = document.getElementById('settingsModal');
const themeStatusSpan = document.getElementById('themeStatus');


// 1. Dark/Light Mode Toggle
function toggleTheme() {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '☀️'; // Sonne für Light Mode
        document.getElementById('themeStatus').innerText = 'LIGHT MODE AKTIV';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '🌙'; // Mond für Dark Mode
        document.getElementById('themeStatus').innerText = 'DARK MODE AKTIV';
    }
}

// Prüft bei Start, ob der Benutzer eine Präferenz gespeichert hat
function checkTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; 
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggleBtn.innerHTML = '☀️'; 
        document.getElementById('themeStatus').innerText = 'LIGHT MODE AKTIV';
    } else {
        themeToggleBtn.innerHTML = '🌙'; 
        document.getElementById('themeStatus').innerText = 'DARK MODE AKTIV';
    }
}

// Event Listener für den Theme Toggle
themeToggleBtn.addEventListener('click', toggleTheme);

// Öffnen/Schließen des Dev Settings Menüs
devSettingsBtn.addEventListener('click', () => {
    settingsModal.style.display = settingsModal.style.display === 'block' ? 'none' : 'block';
});


// Startfunktionen
checkTheme(); 
loadQuestion();

</script>
