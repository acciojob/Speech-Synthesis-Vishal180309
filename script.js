// Your script here.
// Get the text input element
const textInput = document.getElementById('text-input');

// Get the voice selector element
const voiceSelector = document.getElementById('voice-selector');

// Get the speak button element
const speakButton = document.getElementById('speak-button');

// Get the stop button element
const stopButton = document.getElementById('stop-button');

// Get the rate slider element
const rateSlider = document.getElementById('rate-slider');

// Get the pitch slider element
const pitchSlider = document.getElementById('pitch-slider');

// Initialize the speech synthesis object
const speechSynthesis = window.speechSynthesis;

// Initialize the speech synthesis utterance
let utterance;

// Function to populate the voice selector
function populateVoiceSelector() {
    // Get the available voices
    const voices = speechSynthesis.getVoices();

    // Loop through the voices and add them to the voice selector
    voices.forEach((voice) => {
        const option = document.createElement('option');
        option.textContent = voice.name;
        option.value = voice.name;
        voiceSelector.appendChild(option);
    });
}

// Function to handle speak button click
function handleSpeakButtonClick() {
    // Get the text input value
    const text = textInput.value;

    // Check if the text input value is not empty
    if (text !== '') {
        // Create a new speech synthesis utterance
        utterance = new SpeechSynthesisUtterance(text);

        // Set the utterance voice
        utterance.voice = speechSynthesis.getVoices().find((voice) => voice.name === voiceSelector.value);

        // Set the utterance rate
        utterance.rate = parseFloat(rateSlider.value);

        // Set the utterance pitch
        utterance.pitch = parseFloat(pitchSlider.value);

        // Speak the utterance
        speechSynthesis.speak(utterance);
    }
}

// Function to handle stop button click
function handleStopButtonClick() {
    // Cancel the speech synthesis utterance
    speechSynthesis.cancel();
}

// Function to handle rate slider input
function handleRateSliderInput() {
    // Check if the utterance is not null
    if (utterance !== null) {
        // Update the utter
