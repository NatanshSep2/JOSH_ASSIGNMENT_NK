document.addEventListener('DOMContentLoaded', () => {
  console.log("Page loaded.");

  // Click alert (optional)
  const clickMe = document.getElementById('clickMe');
  if (clickMe) {
    clickMe.addEventListener('click', () => alert('Button clicked!'));
  }

  // Toggle mobile menu
  window.toggleMenu = function () {
    const nav = document.getElementById('mobileNav');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  };

  // Scroll to carousel card
  function scrollToCard(index) {
    const track = document.querySelector('.carousel-track');
    const card = track.children[index];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      updateDots(index);
    }
  }

  // Update dot indicator
  function updateDots(activeIndex) {
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });
  }

  // Carousel dots setup
  const track = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('dots');
  if (track && dotsContainer) {
    const cards = track.querySelectorAll('.recommendation-card');
    const visibleCards = 6;
    const cardWidth = cards[0]?.offsetWidth + 20 || 0;
    const totalDots = Math.ceil(cards.length / visibleCards);

    dotsContainer.innerHTML = "";

    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dotsContainer.appendChild(dot);

      dot.addEventListener('click', () => {
        const scrollAmount = i * cardWidth * visibleCards;
        track.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        updateDots(i);
      });
    }

    // Auto-update dots on scroll
    track.addEventListener('scroll', () => {
      const scrollLeft = track.scrollLeft;
      const groupIndex = Math.round(scrollLeft / (cardWidth * visibleCards));
      updateDots(groupIndex);
    });
  }

  // Modal logic with scroll locking
  const modal = document.getElementById("projectModal");
  const openBtn = document.getElementById("hireMeBtn");
  const closeBtn = document.querySelector(".close");

  if (openBtn && modal) {
    openBtn.onclick = () => {
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Lock scroll
    };
  }

  if (closeBtn && modal) {
    closeBtn.onclick = () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Unlock scroll
    };
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Unlock scroll
    }
  };

  // Skill adder
  const addSkillBtn = document.getElementById("addSkillBtn");
  const skillsList = document.getElementById("skillsList");

  if (addSkillBtn && skillsList) {
    addSkillBtn.addEventListener("click", () => {
      const skill = prompt("Enter a skill:");
    });
  }
});
