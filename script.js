const messages = [
    "I will always love you, no matter the distance or time.",
    "You are forever in my heart, and my love for you is endless.",
    "Even if we are apart, my love for you remains eternal.",
    "In my soul, you will always have a place, and my love will never fade.",
    "My love for you is like the stars—constant, unchanging, and forever shining.",
    "You are my forever, my love will never waver or end.",
    "No matter where life takes us, I will always love you with all my heart.",
    "Love is eternal, and so is my love for you—forever and always.",
    "Even through hardship, my love for you is a constant and unbreakable force.",
    "I will always be here for you, loving you beyond this world.",
    "The hardest part was letting you go, but I will never stop loving you.",
    "The pain of losing you still cuts deep, but my love remains unwavering.",
    "Every night I wish I could turn back time, to the days when we were whole.",
    "I still remember the warmth of your smile, and the silence hurts.",
    "I gave you my heart, and now all I have left is a shattered piece of it.",
    "You left me with memories, but they no longer bring joy—only pain.",
    "It hurts knowing that you no longer feel what I feel for you.",
    "I will always love you, even if you no longer feel the same."
];

function generateMessage() {
    let randomIndex = Math.floor(Math.random() * messages.length);
    let messageElement = document.getElementById("message");

    // Reveal the message with a fade-in effect
    messageElement.innerText = messages[randomIndex];
    messageElement.classList.add("visible");
}

