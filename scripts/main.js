// === Event Data ===
const events = [
  {
    title: "Opening Keynote: The Future of AI",
    type: "Keynote",
    date: "2025-11-20T09:00:00",
    description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
    image: "images/keynote.jpg"
  },
  {
    title: "Advanced JavaScript Workshop",
    type: "Workshop",
    date: "2025-11-20T10:30:00",
    description: "A hands-on session exploring modern ES6+ features.",
    image: "images/workshop-js.jpg"
  },
  {
    title: "Cybersecurity in the Cloud Era",
    type: "Talk",
    date: "2025-11-20T11:00:00",
    description: "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
    image: "images/cybersecurity.jpg"
  },
  {
    title: "Panel: The Future of Remote Work in Tech",
    type: "Panel",
    date: "2025-11-21T16:00:00",
    description: "Industry leaders discuss the challenges, tools, and culture of building successful remote-first teams.",
    image: "images/panel-remote.jpg"
  },
  {
    title: "Networking Mixer & Welcome Reception",
    type: "Social",
    date: "2025-11-20T17:00:00",
    description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
    image: "images/mixer.jpg"
  }
];

// === Generate Event Cards ===
const eventContainer = document.getElementById("event-container");

function displayEvents(filteredEvents) {
  eventContainer.innerHTML = "";
  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <div class="event-card-content">
        <h2>${event.title}</h2>
        <p><strong>Type:</strong> ${event.type}</p>
        <p><strong>Date:</strong> ${new Date(event.date).toLocaleString()}</p>
        <p>${event.description}</p>
      </div>
    `;
    eventContainer.appendChild(card);
  });
}

// === Filtering ===
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const type = btn.dataset.type;
    if (type === "All") {
      displayEvents(events);
    } else {
      displayEvents(events.filter(e => e.type === type));
    }
  });
});

// === Dark Mode ===
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Initial Load
displayEvents(events);
