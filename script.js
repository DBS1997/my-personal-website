const songs = [
    {   title: "Haunting", 
        artist: "Halsey",
        energyLevel: "moody",
        finishLevel: "polished",
        weight: "ethereal",
        dramaLevel: "dramatic"},
    {   
        title: "Tell Me How You Like Your Coffee",
        artist: "Peach Face",
        energyLevel: "moody",
        finishLevel: "polished",
        weight: "ethereal",
        dramaLevel: "fun"},
    {   
        title: "Sideways",
        artist: "Citizen Cope",
        energyLevel: "moody",
        finishLevel: "polished",
        weight: "heavy",
        dramaLevel: "dramatic"},
    {
        title: "Hangover Blues",
        artist: "Amethyst Kiah",
        energyLevel: "moody",
        finishLevel: "polished",
        weight: "heavy",
        dramaLevel: "fun"},
    {
        title: "Round Here",
        artist: "Counting Crows",
        energyLevel: "moody",
        finishLevel: "organic",
        weight: "ethereal",
        dramaLevel: "dramatic"},
    {
        title: "Mr. Bojangles",
        artist: "Jerry Jeff Walker",
        energyLevel: "moody",
        finishLevel: "organic",
        weight: "ethereal",
        dramaLevel: "fun"},
    {
        title: "Love Sick",
        artist: "Bob Dylan",
        energyLevel: "moody",
        finishLevel: "organic",
        weight: "heavy",
        dramaLevel: "dramatic"},
    {
        title: "Alabaster",
        artist: "The Wood Brothers",
        energyLevel: "moody",
        finishLevel: "organic",
        weight: "heavy",
        dramaLevel: "fun"},
    {
        title: "Green and Gold",
        artist: "Lianne La Havas",
        energyLevel: "energetic",
        finishLevel: "polished",
        weight: "ethereal",
        dramaLevel: "dramatic"},
    {
        title: "Two Birds",
        artist: "Regina Spektor",
        energyLevel: "energetic",
        finishLevel: "polished",
        weight: "ethereal",
        dramaLevel: "fun"},
    {
        title: "Radioactive",
        artist: "Imagine Dragons",
        energyLevel: "energetic",
        finishLevel: "polished",
        weight: "heavy",
        dramaLevel: "dramatic"},
    {
        title: "Bad Guy",
        artist: "Billie Eilish",
        energyLevel: "energetic",
        finishLevel: "polished",
        weight: "heavy",
        dramaLevel: "fun"},
    {
        title: "Tennessee River Runs Low",
        artist: "The Secret Sisters",
        energyLevel: "energetic",
        finishLevel: "organic",
        weight: "ethereal",
        dramaLevel: "dramatic"},
    {
        title: "Don't walk me home",
        artist: "Sarah Niemietz",
        energyLevel: "energetic",
        finishLevel: "organic",
        weight: "ethereal",
        dramaLevel: "fun"},
    {
        title: "Cumberland Gap",
        artist: "Jason Isbell",
        energyLevel: "energetic",
        finishLevel: "organic",
        weight: "heavy",
        dramaLevel: "dramatic"},
    {
        title: "Orange Colored Sky",
        artist: "Nat King Cole",
        energyLevel: "energetic",
        finishLevel: "organic",
        weight: "heavy",
        dramaLevel: "fun"},
    ]

function disable(id){
    let disabled = document.getElementById(id)
    disabled.className = "disabled"
}
const moodyInput = document.getElementById("moodyButton")
const energyInput = document.getElementById("energeticButton")

moodyInput.addEventListener('click', function(){
    listenerEnergyLevel="moody"
    disable("energeticButton")
})

energyInput.addEventListener('click', function(){
    listenerEnergyLevel="energetic"
    disable("moodyButton")
})

const polishedInput = document.getElementById("polishedButton")
const organicInput = document.getElementById("organicButton")

polishedInput.addEventListener('click', function(){
    listenerFinishLevel="polished"
    disable("organicButton")
})

organicInput.addEventListener('click', function(){
    listenerFinishLevel="organic"
    disable("polishedButton")
})

const heavyInput = document.getElementById("heavyButton")
const etherealInput = document.getElementById("etherealButton")

heavyInput.addEventListener('click', function(){
    listenerWeight="heavy"
    disable("etherealButton")
})

etherealInput.addEventListener('click', function(){
    listenerWeight="ethereal"
    disable("heavyButton")
})

const dramaticInput = document.getElementById("dramaticButton")
const funInput = document.getElementById("funButton")

dramaticInput.addEventListener('click', function(){
    listenerDramaLevel="dramatic"
    disable("funButton")
})

funInput.addEventListener('click', function(){
    listenerDramaLevel="fun"
    disable("dramaticButton")
})

const finalInput = document.getElementById("finalButton")
finalInput.addEventListener('click', function(){
for (const element of songs){
    if (listenerEnergyLevel===element.energyLevel){
        if(listenerFinishLevel===element.finishLevel){
            if (listenerWeight===element.weight){
                if (listenerDramaLevel===element.dramaLevel){
                    alert(`I recommend ${element.title} by ${element.artist}! (reload the page for another recommendation)`)
    }}}}}

})