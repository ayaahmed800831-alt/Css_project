

document.addEventListener("DOMContentLoaded", () => {
  const backdrop = document.querySelector(".modal-backdrop");
  const closeBtn = document.querySelector(".close-modal");
  const modalTitle = document.querySelector(".modal-title");
  const modalContent = document.querySelector(".modal-content");

  document.querySelectorAll(".read-more-btn").forEach((btn) => {
    btn.setAttribute("tabindex", "0");
    btn.addEventListener("click", () => {
      backdrop.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      const card = btn.closest(".country-card");
      const countryName = card.querySelector(".country-title").textContent.trim();
      const data = countryData[countryName];
      modalTitle.textContent = data.title;
      modalContent.innerHTML = `
        <div class="modal-section">
          <div class="modal-section-title">Capital</div>
          <div>${data.capital}</div>
        </div>
        <div class="modal-section">
          <div class="modal-section-title">Known For</div>
          <div class="modal-list">
            ${data.knownFor.map(item => `<div class="modal-list-item">${item}</div>`).join("")}
          </div>
        </div>
        <div class="modal-section">
          <div class="modal-section-title">Major Cities</div>
          <div class="modal-list">
            ${data.cities.map(city => `<div class="modal-list-item">${city}</div>`).join("")}
          </div>
        </div>
        <div class="modal-section">
          <div class="modal-section-title">Description</div>
          <div>${data.description}</div>
        </div>
      `;
    });
  });

  closeBtn.addEventListener("click", () => {
    backdrop.classList.add("hidden");
    document.body.style.overflow = "";
  });

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      backdrop.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      backdrop.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });

  document.querySelectorAll(".nav-item").forEach((navItem) => {
    navItem.setAttribute("tabindex", "0");
    navItem.addEventListener("click", () => {
      const countryName = navItem.textContent.trim();
      document.querySelectorAll(".country-card").forEach((card) => {
        if (card.querySelector(".country-title").textContent.trim() === countryName) {
          card.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });

  const herobtn = document.querySelector(".hero-btn");
  herobtn.setAttribute("tabindex", "0");
  herobtn.addEventListener("click", () => {
    document.querySelector(".countries-grid").scrollIntoView({ behavior: "smooth" });
  });

  const dropdownTrigger = document.querySelector(".dropdown-trigger");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownTrigger.setAttribute("tabindex", "0");
  dropdownTrigger.setAttribute("aria-expanded", "false");
  dropdownTrigger.addEventListener("click", () => {
    const isOpen = dropdownMenu.classList.toggle("hidden");
    dropdownTrigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
  });

  document.querySelectorAll(".dropdown-option").forEach((option) => {
    option.addEventListener("click", () => {
      const category = option.dataset.category;
      document.querySelectorAll(".facts-panel").forEach((panel) => {
        panel.classList.remove("active-panel");
      });
      document.querySelector(`[data-panel="${category}"]`).classList.add("active-panel");
      dropdownMenu.classList.add("hidden");
      dropdownTrigger.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".faq-question").forEach((question) => {
    question.setAttribute("tabindex", "0");
    question.setAttribute("aria-expanded", "false");
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isOpen = answer.style.display === "block";
      answer.style.display = isOpen ? "none" : "block";
      question.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  });

});
/* =========================

COUNTRY DATA
========================= */
const countryData = {
  Palestine: {
    title: "Palestine",
    capital: "Jerusalem",
    knownFor: [
      "Tatreez",
      "Olive Trees",
      "Historic Cities",
      "Cuisine"
    ],
    cities: [
      "Jerusalem",
      "Nablus",
      "Ramallah",
      "Gaza"
    ],
    description:
      "Palestine has deep historical and cultural significance with traditions rooted in agriculture, cuisine, literature, embroidery, and resistance culture."
  },

  Lebanon: {
    title: "Lebanon",
    capital: "Beirut",
    knownFor: [
      "Mezze",
      "Cedars",
      "Nightlife",
      "Mountains"
    ],
    cities: [
      "Beirut",
      "Tripoli",
      "Sidon",
      "Tyre"
    ],
    description:
      "Lebanon is known for Mediterranean cuisine, mountain landscapes, cedar forests, and rich artistic traditions."
  },

  Algeria: {
    title: "Algeria",
    capital: "Algiers",
    knownFor: [
      "Sahara Desert",
      "Casbah",
      "Couscous",
      "Music"
    ],
    cities: [
      "Algiers",
      "Oran",
      "Constantine",
      "Tamanrasset"
    ],
    description:
      "Algeria is the largest country in Africa and is known for desert landscapes, historic architecture, and strong musical traditions."
  },
  Tunisia: {
    title: "Tunisia",
    capital: "Tunis",
    knownFor: [
      "Carthage",
      "Coastal Tourism",
      "Medinas",
      "Markets"
    ],
    cities: [
      "Tunis",
      "Sfax",
      "Sousse",
      "Kairouan"
    ],
    description:
      "Tunisia blends Mediterranean and North African culture with ancient ruins, coastal cities, and vibrant local markets."
  },

  Oman: {
    title: "Oman",
    capital: "Muscat",
    knownFor: [
      "Wadis",
      "Mountains",
      "Historic Forts",
      "Deserts"
    ],
    cities: [
      "Muscat",
      "Salalah",
      "Nizwa",
      "Sohar"
    ],
    description:
      "Oman is known for dramatic landscapes, preserved forts, wadis, and maritime history."
  },

  Yemen: {
    title: "Yemen",
    capital: "Sana'a",
    knownFor: [
      "Tower Houses",
      "Poetry",
      "Mountain Villages",
      "Historic Cities"
    ],
    cities: [
      "Sana'a",
      "Aden",
      "Taiz",
      "Mukalla"
    ],
    description:
      "Yemen has one of the richest architectural traditions in the Arabian Peninsula with historic cities and mountain settlements."
  },

  Iran: {
    title: "Iran",
    capital: "Tehran",
    knownFor: [
      "Persian Gardens",
      "Mosques",
      "Poetry",
      "Tilework"
    ],
    cities: [
      "Tehran",
      "Isfahan",
      "Shiraz",
      "Tabriz"
    ],
    description:
      "Iran is known for Persian architecture, poetry, historical cities, gardens, and diverse geography."
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // write your logic here...
});