let fontendProjects = [
	{
		title: "Typing Speed Test",
		link: "https://belal33.github.io/Typing-speed-test/",
		description:
			"A simple typing speed test application that measures how fast you can type a given text.",
		skills: ["HTML", "CSS3", "JavaScript"],
	},
	{
		title: "ToDo List App",
		link: "https://belal33.github.io/ToDo/",
		description:
			"A modern ToDo list application built with HTML, CSS, and JavaScript.",
		skills: ["HTML", "CSS3", "JavaScript"],
	},
	{
		title: "Dem Landing Page",
		description: "A modern landing page built with HTML and CSS.",
		skills: ["HTML", "CSS3", "JavaScript"],
		link: "https://belal33.github.io/landing-page/",
	},
	{
		title: "leon template",
		description: "A modern landing page built with HTML and CSS.",
		skills: ["HTML", "CSS3", ],
		link: "https://belal33.github.io/leon/",
	},
	{
		title: "Casper landing page",
		link: "https://belal33.github.io/casper/",
		description: "A modern landing page built with HTML and CSS.",
		skills: ["HTML", "CSS3"],
	},

	{
		title: "Modern Landing Page",
		description: "A modern landing page built with HTML and CSS.",
		skills: ["HTML", "CSS3"],
		link: "https://belal33.github.io/templatethree/",
	},
	{
		title: "Weather App",
		description:
			"A simple weather app that fetches data from OpenWeatherMap API and displays current weather conditions.",
		link: "https://belal33.github.io/custom_weather_app/",
		skills: ["HTML", "CSS3", "JavaScript"],
	},
	{
		title: "TMDB Movie App",
		description:
			"React app that displays movie information using the TMDB API.",
		link: "https://movie-app-henna-kappa.vercel.app/",
		skills: [
			"React",
			"Bootstrap",
			"TMDB API",
			"HTML",
			"CSS3",
			"JavaScript",
			"SWR",
			"Axios",
			"Redux",
		],
	},
	// Add more frontend project slides here if needed
];

let backendProjects = [
  {
    title: 'AI Powered Text Editor',
    description: 'A robust backend API platform with authentication, data storage, and Dockerized deployment.',
    skills: ["Django", "Python", "PostgreSQL", "Docker","TypeScript","Next.js","Tailwind CSS"],
    videourl: './ai.webm',
  },

  // Add more backend project slides here if needed
];






// const frontendSlider = document.getElementById('frontend-slider');
// const backendSlider = document.getElementById('backend-slider');
function setupProjectsSlides(sliderId,projects) {
  const sliderTrack = document.querySelector(`#${sliderId} .slider-track`);
  // Create slides  projects
  projects.forEach(project => {
    const slide = document.createElement('div');
    slide.className = "project-card slider-slide";
    slide.innerHTML = `
    <h4 class="project-title">${project.title}</h4>
    <div class="project-live">
      ${
				project.link
					? `
      <iframe src="${project.link}" title="${project.title} Live Site" class="project-iframe" allowfullscreen></iframe>
      `
					: `
      <video class="project-video" autoplay loop muted poster="backend-thumb.png">
        <source src="${project.videourl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      `
			}
    </div>
    <div class="project-stack">
      ${project.skills
				.map((skill) => `<span class="tag">${skill}</span>`)
				.join("")}
    </div>
    <p class="project-description">${project.description}</p>

    `;
    sliderTrack.prepend(slide);
  });
}


// --- Native Scroll Slider for Projects ---
function setupScrollSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const track = slider.querySelector('.slider-track');
  const slides = Array.from(track.querySelectorAll('.slider-slide'));
  const prevBtn = slider.querySelector('.scroll-btns .slider-btn-prev');
  const nextBtn = slider.querySelector('.scroll-btns .slider-btn-next');
  const pagination = slider.querySelector('.slider-pagination');

  // Set up horizontal scroll and snap on the slider-container
  slider.style.overflowX = 'auto';
  slider.style.scrollSnapType = 'x mandatory';
  slider.style.scrollBehavior = 'smooth';
  track.style.display = 'flex';
  slides.forEach(slide => {
    slide.style.scrollSnapAlign = 'center';
    slide.style.flex = '0 0 100%';
    slide.style.width = '100%';
  });

  // Create pagination dots
  pagination.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (idx === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
    dot.addEventListener('click', () => {
      // Use slider (container) for scroll
      slides[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
    pagination.appendChild(dot);
  });
  const dots = Array.from(pagination.querySelectorAll('.slider-dot'));

  // Track active slide on scroll
  function updateActiveSlide() {
    let minDiff = Infinity;
    let activeIdx = 0;
    const sliderRect = slider.getBoundingClientRect();
    slides.forEach((slide, idx) => {
      const rect = slide.getBoundingClientRect();
      const diff = Math.abs(rect.left - sliderRect.left);
      if (diff < minDiff) {
        minDiff = diff;
        activeIdx = idx;
      }
    });
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === activeIdx);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIdx);
    });
  }

  // Navigation
  prevBtn.addEventListener('click', () => {
    const activeIdx = slides.findIndex(slide => slide.classList.contains('active'));
    const prevIdx = (activeIdx - 1 + slides.length) % slides.length;
    slides[prevIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });
  nextBtn.addEventListener('click', () => {
    const activeIdx = slides.findIndex(slide => slide.classList.contains('active'));
    const nextIdx = (activeIdx + 1) % slides.length;
    slides[nextIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  });

  // Scroll/resize events
  slider.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateActiveSlide);
  });
  window.addEventListener('resize', updateActiveSlide);

  // Initial state
  updateActiveSlide();
}

let certificates = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Coursera',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>`,
    link: '#'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>`,
    link: '#'
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"></polyline></svg>`,
    link: '#'
  }
];

function setupCertificates(certificates) {
  const grid = document.querySelector('.certificates-grid');
  if (!grid) return;

  certificates.forEach(cert => {
    const cardLink = document.createElement('a');
    cardLink.className = 'certificate-card';
    cardLink.href = cert.link;
    cardLink.target = '_blank';
    cardLink.rel = 'noopener noreferrer';
    cardLink.setAttribute('aria-label', `View certificate for ${cert.title} from ${cert.issuer}`);

    cardLink.innerHTML = `
      <div class="certificate-icon-container">${cert.icon}</div>
      <div class="certificate-content">
        <h4 class="certificate-title">${cert.title}</h4>
        <p class="certificate-issuer">Issued by ${cert.issuer}</p>
      </div>
      <div class="certificate-link-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></div>
    `;
    grid.appendChild(cardLink);
  });
}

function initializeEventListeners(){
  const navToggle = document.getElementById("nav-toggle");
	const navMenu = document.getElementById("nav-menu");
  navToggle.addEventListener("click", function () {
		navMenu.classList.toggle("open");
		navToggle.classList.toggle("active");
		// Animate icon (hamburger to X)
		const icon = navToggle.querySelector(".material-icons, svg");
		if (icon) {
			if (navMenu.classList.contains("open")) {
				icon.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`;
			} else {
				icon.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="7" width="16" height="2.5" rx="1.2" fill="currentColor"/>
            <rect x="4" y="14.5" width="16" height="2.5" rx="1.2" fill="currentColor"/>
          </svg>`;
			}
		}
	});
	// Optional: close menu on nav link click (mobile UX)
	navMenu.querySelectorAll(".nav-link").forEach((link) => {
		link.addEventListener("click", () => {
			if (navMenu.classList.contains("open")) {
				navMenu.classList.remove("open");
				navToggle.classList.remove("active");
				const icon = navToggle.querySelector(".material-icons, svg");
				if (icon) icon.innerHTML = "menu";
			}
		});
	});
}

document.addEventListener('DOMContentLoaded', function() {
  // Set up frontend and backend project slides
  setupProjectsSlides('frontend-slider', fontendProjects);
  setupProjectsSlides('backend-slider', backendProjects);
  setupCertificates(certificates);
  // Set up scroll sliders
  setupScrollSlider('frontend-slider');
  setupScrollSlider('backend-slider');

  // --- Enhanced nav menu button functionality ---
  initializeEventListeners();
});

