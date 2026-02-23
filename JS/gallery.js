const galleryEvents = [
  {
    category: "sports",
    image: "/Images/class.png",
    alt: "Inter-house athletics race",
    title: "Inter-House Athletics Meet",
    date: "February 14, 2026",
    description:
      "Students from all houses competed in sprints, relay races, long jump, and march-past drills. Families cheered as students displayed discipline, teamwork, and sportsmanship throughout the day.",
    tags: ["Sports", "School Community"],
  },
  {
    category: "sports",
    image: "/Images/class.png",
    alt: "Friendly football match",
    title: "Friendly Football: U-CEE vs Greenfield Academy",
    date: "January 28, 2026",
    description:
      "Our junior team played a tightly contested friendly that ended 2-1. The match focused on passing accuracy, tactical awareness, and match confidence ahead of inter-school tournaments.",
    tags: ["Sports", "Student Development"],
  },
  {
    category: "sports",
    image: "/Images/class.png",
    alt: "Table tennis finals",
    title: "Table Tennis Ladder Finals",
    date: "November 7, 2025",
    description:
      "Top-ranked students from each class met in the finals after a six-week ladder challenge. Quick reflexes, composure, and consistent practice made for exciting rallies.",
    tags: ["Sports", "Competition"],
  },
  {
    category: "excursion",
    image: "/Images/class.png",
    alt: "Museum excursion",
    title: "Lagos State Museum Learning Trip",
    date: "November 12, 2025",
    description:
      "Learners explored curated exhibitions on local history and heritage, then completed guided worksheets on notable artifacts connected to social studies topics.",
    tags: ["Excursion", "Social Studies"],
  },
  {
    category: "excursion",
    image: "/Images/class.png",
    alt: "Nature walk excursion",
    title: "Lekki Conservation Centre Nature Walk",
    date: "October 21, 2025",
    description:
      "Pupils observed plant species, wetland habitats, and biodiversity patterns with support from guides. Back in class, groups shared mini reports on their findings.",
    tags: ["Excursion", "Environmental Science"],
  },
  {
    category: "excursion",
    image: "/Images/class.png",
    alt: "Creative arts tour",
    title: "National Theatre Creative Arts Tour",
    date: "September 18, 2025",
    description:
      "Students toured rehearsal spaces, costume rooms, and set design sections. The experience inspired class projects in drama, speech, and visual storytelling.",
    tags: ["Excursion", "Creative Arts"],
  },
  {
    category: "educative",
    image: "/Images/class.png",
    alt: "STEM activity day",
    title: "STEM Discovery Day: Build a Mini Bridge",
    date: "February 5, 2026",
    description:
      "Teams designed and tested paper bridges to understand load balance and structural strength. The challenge promoted creativity, collaboration, and practical problem-solving.",
    tags: ["Educative", "STEM"],
  },
  {
    category: "educative",
    image: "/Images/class.png",
    alt: "Literacy week reading session",
    title: "Literacy Week Read-Aloud Marathon",
    date: "January 22, 2026",
    description:
      "Teachers, parents, and invited guests read short stories across classes. Students also presented book reviews and vocabulary journals to build reading confidence.",
    tags: ["Educative", "Literacy"],
  },
  {
    category: "educative",
    image: "/Images/class.png",
    alt: "Coding club presentation",
    title: "Coding Club Mini Showcase",
    date: "December 10, 2025",
    description:
      "Learners presented beginner projects including digital quizzes, story animations, and number games that highlighted logical thinking and communication skills.",
    tags: ["Educative", "Technology"],
  },
  {
    category: "games",
    image: "/Images/class.png",
    alt: "Board games challenge",
    title: "Board Games Friday Challenge",
    date: "January 30, 2026",
    description:
      "Students rotated through strategy stations including Ludo, Scrabble, and checkers. The session supported patience, healthy competition, and critical thinking.",
    tags: ["Games", "Campus Life"],
  },
  {
    category: "games",
    image: "/Images/class.png",
    alt: "Word game competition",
    title: "Word Masters House Game",
    date: "January 16, 2026",
    description:
      "Representatives from each house battled in timed word-building rounds and spelling relays. Students demonstrated strong vocabulary and teamwork.",
    tags: ["Games", "Language Skills"],
  },
  {
    category: "games",
    image: "/Images/class.png",
    alt: "Chess and scrabble league",
    title: "Chess and Scrabble League Finals",
    date: "November 20, 2025",
    description:
      "Finalists played under timed rules in front of classmates and staff. The league strengthened concentration, planning, and confident decision-making.",
    tags: ["Games", "Student Competition"],
  },
  {
    category: "class",
    image: "/Images/class.png",
    alt: "Nursery class color activity",
    title: "Nursery Color and Shapes Week",
    date: "February 3, 2026",
    description:
      "Younger learners explored colors, shapes, and patterns through crafts, singing, and storytelling. The week ended with a mini class exhibition for parents.",
    tags: ["Class Activities", "Early Years"],
  },
  {
    category: "class",
    image: "/Images/class.png",
    alt: "Science classroom presentation",
    title: "Primary 5 Science Poster Presentations",
    date: "January 27, 2026",
    description:
      "Students researched simple machines and presented findings with handmade posters and short talks, building scientific understanding and speaking confidence.",
    tags: ["Class Activities", "Science"],
  },
  {
    category: "class",
    image: "/Images/class.png",
    alt: "Writing workshop session",
    title: "JSS Writing Workshop and Peer Review",
    date: "December 11, 2025",
    description:
      "Middle school learners drafted essays, exchanged peer feedback, and revised final copies. The workshop focused on structure, grammar, and persuasive writing.",
    tags: ["Class Activities", "English"],
  },
  {
    category: "upcoming",
    image: "/Images/class.png",
    alt: "Entrance assessment briefing",
    title: "2026 Entrance Assessment Briefing",
    date: "March 15, 2026",
    description:
      "Prospective families will receive guidance on admission stages, assessment expectations, and key timelines for the new academic session.",
    tags: ["Upcoming", "Admissions"],
  },
  {
    category: "upcoming",
    image: "/Images/class.png",
    alt: "Parents open day",
    title: "Parents Open Day and Classroom Showcase",
    date: "March 28, 2026",
    description:
      "Parents are invited to tour classrooms, review student work, and meet teachers for one-on-one progress conversations.",
    tags: ["Upcoming", "Parent Engagement"],
  },
  {
    category: "upcoming",
    image: "/Images/class.png",
    alt: "Cultural day celebration",
    title: "End-of-Term Cultural Day Celebration",
    date: "April 11, 2026",
    description:
      "Students will present cultural displays, traditional attire, and creative performances celebrating heritage, unity, and school community values.",
    tags: ["Upcoming", "School Culture"],
  },
];

const postsPerPage = 4;
let currentPage = 1;
let currentCategory = "all";

const postsContainer = document.getElementById("posts");
const pagination = document.getElementById("pagination");
const tabButtons = document.querySelectorAll(".tab-btn");

function renderEventCard(event) {
  const tags = event.tags.map((tag) => `<span>${tag}</span>`).join("");

  return `
    <article class="event" data-category="${event.category}">
      <img src="${event.image}" alt="${event.alt}" />
      <div class="event-content">
        <h2>${event.title}</h2>
        <p><small>${event.date}</small></p>
        <p>${event.description}</p>
        <div class="tags">${tags}</div>
      </div>
    </article>
  `;
}

function buildPagination(totalPages) {
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = i;

    if (i === currentPage) {
      link.classList.add("active");
    }

    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      showPosts();
    });

    pagination.appendChild(link);
  }
}

function showPosts() {
  const filteredEvents = galleryEvents.filter(
    (event) =>
      currentCategory === "all" || event.category === currentCategory
  );

  const totalPages = Math.ceil(filteredEvents.length / postsPerPage) || 1;
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const currentPosts = filteredEvents.slice(start, end);

  postsContainer.innerHTML = currentPosts.map(renderEventCard).join("");
  buildPagination(totalPages);
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentCategory = button.dataset.category;
    currentPage = 1;
    showPosts();
  });
});

showPosts();
