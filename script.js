const topics = [...document.querySelectorAll(".topic")];

document.querySelectorAll("[data-topic]").forEach(button => {
    button.addEventListener("click", () => {
        const selected = button.dataset.topic;

        topics.forEach(topic => {
            topic.hidden = selected !== "all" &&
                topic.dataset.type !== selected;
        });
    });
});

const scienceFacts = [
    "Earth travels around the Sun.",
    "Plants need light to grow well.",
    "Lightning is an electrical discharge.",
    "The Moon reflects sunlight.",
    "Water can exist as a solid, liquid or gas."
];

document.getElementById("factButton").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * scienceFacts.length);
    document.getElementById("fact").textContent = scienceFacts[randomIndex];
});