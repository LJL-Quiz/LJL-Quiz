// ===========================================================
// GLOBAL STATE & HELPER FUNCTIONS
// ===========================================================
let questions = []; 
let questionIndex = 0;
let score = 0;
const allQuestions = [
  // ... (Ihre vollständige Liste von allQuestions bleibt hier unverändert) ...
  {question: "Wer ist dieser Charakter (God of War)?", answers:["Kratos","Mario","Link","Sonic"], correct:0, img:"/LJL-Quiz/Resources/images/Wer ist das(herr pederiva).jpg", category:"spiele"},
  {question: "Wer ist das?", answers:["Bowser","Donkey Kong","Luigi","Yoshi"], correct:0, img:"/LJL-Quiz/Resources/images/Wer ist das(bowser).jpg", category:"spiele"},
  // ... (Rest der Fragen) ...
  {question: "Erstes Dino Tier?", answers:["Brachiosaurus","T-Rex","Raptor","Triceratops"], correct:0, img:"/LJL-Quiz/Resources/images/movie_Welchen dino hat alan grand zuerst gesehen.jpg", category:"filme"}
];

// Globale Variable für die aktuelle Frage, um Antworten zu synchronisieren
let currentShuffledAnswers = []; 


/**
 * Fisher-Yates Shuffle Algorithm - Mischt ein Array an Ort und Stelle.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Sucht den neuen Index der korrekten Antwort nach dem Shuffling.
 */
function findNewCorrectIndex(originalAnswers, correctOriginalIndex) {
    const originalAnswerValue = originalAnswers[correctOriginalIndex];
    const shuffled = [...originalAnswers]; 
    shuffleArray(shuffled);
    return shuffled.findIndex(answer => answer === originalAnswerValue);
}


// ===========================================================
// QUIZ LOGIC (Unverändert, da fehlerfrei)
// ===========================================================

function selectCategory(cat){
    let filteredQuestions = allQuestions.filter(q => q.category === cat);
    shuffleArray(filteredQuestions); // Fragen zufällig mischen
    questions = filteredQuestions;
    questionIndex = 0;
    score = 0;
    document.getElementById("result").innerText = "";
    const resultElement = document.getElementById('result');
    resultElement.className = ''; 
    loadQuestion();
}

function loadQuestion(){
    let q = questions[questionIndex];
    currentShuffledAnswers = []; // Reset des Antwort-Arrays für die neue Frage

    if(questions.length === 0){
        document.getElementById("question").innerText = "Bitte wähle eine Kategorie!";
        // ... (UI Cleanup bei leerem Quiz) ...
        document.getElementById("a").style.display = "none";
        document.getElementById("b").style.display = "none";
        document.getElementById("c").style.display = "none";
        document.getElementById("d").style.display = "none";
        document.getElementById("question-img").src = ""; 
        document.getElementById("question-img").style.display = "none";
        return; 
    }

    // --- NEUER SCHRITT: Antworten mischen und global speichern ---
    const originalAnswers = q.answers;
    currentShuffledAnswers = [...originalAnswers]; // Kopie erstellen und mischen
    shuffleArray(currentShuffledAnswers); 
    // --- ENDE NEUER SCHRITT ---

    document.getElementById("question").innerText = q.question;
    
    // Setze die Antworten basierend auf der gemischten Reihenfolge (0=A, 1=B, 2=C, 3=D)
    document.getElementById("a").innerText = currentShuffledAnswers[0];
    document.getElementById("b").innerText = currentShuffledAnswers[1];
    document.getElementById("c").innerText = currentShuffledAnswers[2];
    document.getElementById("d").innerText = currentShuffledAnswers[3];

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
        document.getElementById("question-img").style.display = "none"; 
    }
}

function checkAnswer(ans){
    const currentQuestion = questions[questionIndex];
    // Der korrekte Antworttext ist der Text des Elements im Original-Array
    const correctAnswerText = currentQuestion.answers[currentQuestion.correct];
    
    // Der angeklickte Wert ist der Text des Buttons, den der Nutzer gedrückt hat (aus dem gemischten Array)
    const selectedAnswerText = currentShuffledAnswers[ans]; 

    const resultElement = document.getElementById("result"); // Referenz auf das Ergebnis-Element

    // Logikprüfung: Ist der ausgewählte Text gleich dem korrekten Antworttext?
    if(selectedAnswerText === correctAnswerText){
        score++;
        resultElement.innerText = "✅ Richtig!";
        resultElement.className = 'correct'; 
    } else {
        resultElement.innerText = `❌ Falsch! Die richtige Antwort war: ${correctAnswerText}`;
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
// FUNKTIONALITÄT (THEME & DEV) - ERWEITERT MIT DEBUGGING
// ===========================================================

const body = document.getElementById('quizBody');
const themeToggleBtn = document.getElementById('themeToggle');
const devSettingsBtn = document.getElementById('devSettingsBtn');
const settingsModal = document.getElementById('settingsModal');
const themeStatusSpan = document.getElementById('themeStatus');

// NEUE GLOBAL VARIABLE FÜR SICHERHEIT (Passwort)
const DEBUG_PASSWORD = "adminquiz"; 


function toggleTheme() {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '☀️'; 
        document.getElementById('themeStatus').innerText = 'LIGHT MODE AKTIV';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '🌙'; 
        document.getElementById('themeStatus').innerText = 'DARK MODE AKTIV';
    }
}

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

// NEUE FUNKTION: Zeigt das Debug-Panel an, wenn Passwort korrekt ist.
function showDebugPanel() {
    const passwordInput = document.getElementById('debugPassword');
    const debugButton = document.getElementById('showDebugBtn');
    const debugPanel = document.getElementById('debugPanelContent');

    if (passwordInput.value === DEBUG_PASSWORD) {
        // 1. Bilder-Übersicht erstellen
        let imageListHTML = '<h3>🖼️ Bildübersicht im Quellcode:</h3><ul>';
        allQuestions.forEach((q, index) => {
            const imgName = q.img && q.img !== "" ? q.img : "KEIN BILD";
            imageListHTML += `<li><strong>Q${index + 1}:</strong> ${q.question} &rarr; Pfad: ${imgName}</li>`;
        });
        imageListHTML += '</ul>';


        // 2. Aktuellen Zustand des Quizs anzeigen (Sehr detailliert)
        let stateDump = `<h3>⚙️ Interner Quiz-Zustand (${questions[questionIndex]?.category || 'N/A'})</h3>`;
        stateDump += `<p>Aktuelle Frage Index: ${questionIndex}</p>`;
        stateDump += `<p>Gesamtpunktzahl (aktuell): ${score}</p>`;
        stateDump += `<h4>Frage-Details:</h4>`;

        if(questions[questionIndex]){
            const q = questions[questionIndex];
            stateDump += `<p><strong>FRAGE:</strong> ${q.question}</p>`;
            
            // Anzeigen der gemischten Antworten und des korrekten Wertes (für Debugging)
            let answersHTML = '<ul>';
            currentShuffledAnswers.forEach((answerText, index) => {
                const isCorrectAnswer = answerText === q.answers[q.correct]; // Prüft den Text gegen das Original-Korrekte
                const status = isCorrectAnswer ? '<span style="color: green;">(✅ KORREKT)</span>' : '';
                answersHTML += `<li>${String.fromCharCode(65 + index)}: ${answerText} ${status}</li>`;
            });
            answersHTML += '</ul>';

             stateDump += answersHTML;
        } else {
             stateDump += '<p>Keine Fragen geladen.</p>';
        }


        debugPanel.innerHTML = imageListHTML + stateDump;
    } else {
         document.getElementById('debugPanelContent').innerHTML = "<p style='color: red;'>❌ Falsches Passwort.</p>";
    }

}

// Event Listener für den Theme Toggle (Unverändert)
themeToggleBtn.addEventListener('click', toggleTheme);

// Öffnen/Schließen des Dev Settings Menüs (Erweitert)
devSettingsBtn.addEventListener('click', () => {
    settingsModal.style.display = settingsModal.style.display === 'block' ? 'none' : 'block';
});

// NEUER EVENT LISTENER: Debug-Panel anzeigen, wenn auf den Button geklickt wird
document.getElementById('showDebugBtn').addEventListener('click', showDebugPanel);


// Startfunktionen
checkTheme(); 
loadQuestion();
