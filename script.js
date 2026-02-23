const projects = [
  {
    title: "Mini Compilateur (C/C++)",
    desc: "Compilateur traduisant un Pascal simplifié vers assembleur x86-64 avec génération d’exécutables ELF (lexing, parsing, génération de code).",
    tags: ["C", "C++", "Compilateur", "x86-64", "ELF"],
    github: "", // mets ton lien
    demo: ""
  },
  {
    title: "Site web de location de voitures",
    desc: "Site dynamique avec espace utilisateur, gestion des réservations et base de données relationnelle.",
    tags: ["HTML", "CSS", "PHP", "SQL", "PostgreSQL"],
    github: "",
    demo: ""
  },
  {
    title: "Moteur de recherche (Java)",
    desc: "Indexation de fichiers textes et recherche par mots-clés.",
    tags: ["Java", "Indexation", "Recherche"],
    github: "",
    demo: ""
  },
  {
    title: "Applications de gestion (C++/Java + SQL)",
    desc: "Gestion de supérette (CRUD produits/stock) + évaluateur d’expressions arithmétiques (piles/files).",
    tags: ["C++", "Java", "SQL", "Structures de données"],
    github: "",
    demo: ""
  },
  {
    title: "Projets algorithmiques (C++)",
    desc: "Labyrinthes (DFS/BFS), carte routière et recherche de chemin optimal.",
    tags: ["C++", "DFS", "BFS", "Graphes"],
    github: "",
    demo: ""
  },
  {
    title: "Site web de réservation d’hôtel",
    desc: "Site responsive pour consultation et réservation de chambres, avec gestion côté serveur.",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "",
    demo: ""
  }
];

function createProjectCard(p) {
  const el = document.createElement("article");
  el.className = "panel project";
  el.innerHTML = `
    <h3>${p.title}</h3>
    <p class="muted">${p.desc}</p>
    <div class="tags">
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
    </div>
    <div class="links">
      ${p.github ? `<a class="btn" href="${p.github}" target="_blank" rel="noreferrer">GitHub</a>` : ""}
      ${p.demo ? `<a class="btn ghost" href="${p.demo}" target="_blank" rel="noreferrer">Démo</a>` : ""}
      ${(!p.github && !p.demo) ? `<span class="muted">Liens à ajouter</span>` : ""}
    </div>
  `;
  return el;
}

document.getElementById("projectsGrid")
  .append(...projects.map(createProjectCard));

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "Message prêt ✅ (pour envoyer vraiment, il faut un backend ou un service de formulaire).";
  form.reset();
});

// Mets tes liens ici (optionnel)
const linkedin = "https://www.linkedin.com/in/TON-LINK/";
const github = "https://github.com/TON-USER/";
document.getElementById("linkedinLink").href = linkedin;
document.getElementById("linkedinLink").textContent = linkedin.includes("TON-") ? "à renseigner" : "LinkedIn";
document.getElementById("githubLink").href = github;
document.getElementById("githubLink").textContent = github.includes("TON-") ? "à renseigner" : "GitHub";
