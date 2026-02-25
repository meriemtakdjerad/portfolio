const projects = [
  {
    title: "MonCompilateur",
    desc: "Mini compilateur en C++ traduisant un Pascal simplifie en assembleur et executable ELF.",
    tags: ["C++", "Compilateur", "x86_64"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/TON-USER/moncompilateur"
  },
  {
    title: "NetMarket",
    desc: "Application de gestion de superette avec interface JavaFX et base PostgreSQL pour produits, ventes et fournisseurs.",
    tags: ["Java", "JavaFX", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/TON-USER/netmarket"
  },
  {
    title: "Moteur de recherche Java",
    desc: "Moteur de recherche simplifie avec analyse de corpus, indexation et calcul de pertinence.",
    tags: ["Java", "Indexation", "Recherche"],
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/TON-USER/moteur-recherche-java"
  },
  {
    title: "Carte Routiere",
    desc: "Modelisation d un reseau routier avec algorithmes de graphes pour optimisation de trajets.",
    tags: ["C++", "Graphes", "Optimisation"],
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/TON-USER/carte-routiere"
  },
  {
    title: "Expression Arithmetique",
    desc: "Application C++ pour manipulation et evaluation d expressions arithmetiques avec arbres binaires.",
    tags: ["C++", "Arbres", "Notation"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/TON-USER/expression-arithmetique"
  },
  {
    title: "Hotel Reservation Site",
    desc: "Site responsive de consultation et reservation cote client/serveur.",
    tags: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/TON-USER/reservation-hotel"
  },
  {
    title: "Labyrinthe",
    desc: "Generation et resolution de labyrinthes interactifs avec recherche de chemin optimal.",
    tags: ["C", "C++", "DFS/BFS"],
    image: "https://images.unsplash.com/photo-1527467779599-34448b3fa6a7?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/TON-USER/labyrinthe"
  },
  {
    title: "Morpion MinMax",
    desc: "Jeu du morpion en console avec IA basee sur l algorithme Min-Max.",
    tags: ["C++", "IA", "Min-Max"],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/TON-USER/morpion-minmax"
  },
  {
    title: "The CERICar WEB Application",
    desc: "Application web de covoiturage developpee avec Yii (MVC, ActiveRecord) et AJAX/jQuery : recherche de trajets (avec/sans correspondance), inscription/connexion, reservation de places et proposition de voyages.",
    tags: ["Yii", "MVC", "AJAX", "jQuery", "PHP Objet", "PostgreSQL", "UML"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/TON-USER/covoiturage-yii-ajax"
  },
  {
    title: "With U (WITHYOU)",
    desc: "Plateforme collaborative de visionnage synchronise: salons virtuels, lecture YouTube synchronisee, chat temps reel, permissions et sondages. J ai travaille sur la logique front et l integration API.",
    tags: ["React", "Vite", "Tailwind CSS", "Laravel", "JWT", "Socket.io", "MySQL"],
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/TON-USER/withyou"
  }
];

function projectCard(project) {
  return `
    <article class="project-card">
      <img src="${project.image}" alt="Apercu ${project.title}" loading="lazy" />
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <div class="tag-list">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `;
}

const grid = document.getElementById("projectsGrid");
if (grid) {
  grid.innerHTML = projects.map(projectCard).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn?.addEventListener("click", () => menu.classList.toggle("open"));
document.querySelectorAll("#menu a").forEach((a) => {
  a.addEventListener("click", () => menu.classList.remove("open"));
});

const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Message pret. Pour l envoi reel, ajoute un backend ou un service de formulaire.";
  form.reset();
});

const links = {
  linkedin: "https://www.linkedin.com/in/TON-LINK/",
  github: "https://github.com/TON-USER"
};

function setLink(id, url, label) {
  const anchor = document.getElementById(id);
  if (!anchor) return;
  anchor.href = url;
  anchor.textContent = url.includes("TON-") ? label : anchor.textContent;
}

setLink("linkedinLink", links.linkedin, "in");
setLink("linkedinLink2", links.linkedin, "in");
setLink("githubLink", links.github, "GH");
setLink("githubLink2", links.github, "GH");

function setupThemeModes() {
  const root = document.documentElement;
  const darkBtn = document.getElementById("themeDark");
  const girlyBtn = document.getElementById("themeGirly");
  if (!darkBtn || !girlyBtn) return;

  const setTheme = (theme) => {
    if (theme === "girly") {
      root.setAttribute("data-theme", "girly");
      girlyBtn.classList.add("is-active");
      darkBtn.classList.remove("is-active");
    } else {
      root.removeAttribute("data-theme");
      darkBtn.classList.add("is-active");
      girlyBtn.classList.remove("is-active");
    }
    localStorage.setItem("portfolio-theme", theme);
  };

  const savedTheme = localStorage.getItem("portfolio-theme");
  setTheme(savedTheme === "girly" ? "girly" : "dark");

  darkBtn.addEventListener("click", () => setTheme("dark"));
  girlyBtn.addEventListener("click", () => setTheme("girly"));
}

function setupRevealAnimations() {
  const nodes = document.querySelectorAll(
    ".section, .skill-chip, .panel, .project-card, .timeline-item, .contact-form"
  );

  if (!nodes.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  nodes.forEach((el, index) => {
    el.classList.add("reveal");
    if (el.classList.contains("project-card") || el.classList.contains("skill-chip")) {
      el.classList.add("pop");
    }

    const delay = Math.min((index % 6) * 70, 350);
    el.style.transitionDelay = `${delay}ms`;
  });

  if (reducedMotion || !("IntersectionObserver" in window)) {
    nodes.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
  );

  nodes.forEach((el) => observer.observe(el));
}

setupRevealAnimations();
setupThemeModes();
