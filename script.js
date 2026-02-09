const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 150); // stagger delay
      }
    });
  },
  {
    threshold: 0.2,
  }
);

projectCards.forEach((card) => {
  observer.observe(card);
});

const contactSection = document.querySelector("#contact");

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

contactObserver.observe(contactSection);
function showSuccess() {
  setTimeout(() => {
    alert("✅ Message sent successfully!");
  }, 300);
}

const card = document.getElementById("profile3d");

card.addEventListener("mousemove", (e) => {
  card.style.animation = "none";

  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 10;
  const rotateY = (x - centerX) / 10;

  card.querySelector(".profile-pic").style.transform =
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

  card.querySelector(".profile-light").style.opacity = "1";
});

card.addEventListener("mouseleave", () => {
  card.style.animation = "floatIdle 6s ease-in-out infinite";

  card.querySelector(".profile-pic").style.transform =
    "rotateX(0deg) rotateY(0deg) scale(1)";
  card.querySelector(".profile-light").style.opacity = "0";
});

const aboutImg = document.getElementById("aboutImg");

if (aboutImg) {
  aboutImg.addEventListener("click", () => {
    aboutImg.classList.toggle("color");
  });
}
const softSkills = document.querySelectorAll(".soft-skills span");

const softObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        softSkills.forEach((skill, index) => {
          setTimeout(() => {
            skill.classList.add("show");
          }, index * 120);
        });
        softObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 }
);

if (softSkills.length) {
  softObserver.observe(softSkills[0].parentElement);
}
