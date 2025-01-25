// Improved functionality for portfolio site

// Add event listener to the "Learn More" button
document.getElementById('learn-more-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button behavior

    // Smooth scroll to the About section
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });

    // Optionally highlight the About section for a moment
    aboutSection.style.transition = 'background-color 0.3s';
    aboutSection.style.backgroundColor = '#f0f0f0';

    setTimeout(() => {
        aboutSection.style.backgroundColor = 'white';
    }, 1000);
});

// Highlight active section in navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Add Scroll-to-Top functionality
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '⬆️';
scrollTopBtn.id = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.style.display = 'none';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '20px';
scrollTopBtn.style.right = '20px';
scrollTopBtn.style.padding = '10px 15px';
scrollTopBtn.style.fontSize = '16px';
scrollTopBtn.style.background = '#333';
scrollTopBtn.style.color = '#fff';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '5px';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.transition = 'opacity 0.3s';

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.5 });

projectCards.forEach(card => {
    card.style.transform = 'scale(0.9)';
    card.style.opacity = '0';
    card.style.transition = 'transform 0.3s, opacity 0.3s';
    observer.observe(card);
});

// Simple contact form validation
document.querySelector('#contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('#name')?.value.trim();
    const email = document.querySelector('#email')?.value.trim();
    const message = document.querySelector('#message')?.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for reaching out! I will get back to you soon.');
});

// Dark mode toggle
const toggleDarkMode = document.createElement('button');
toggleDarkMode.textContent = '🌙 Dark Mode';
toggleDarkMode.id = 'dark-mode-toggle';
document.body.appendChild(toggleDarkMode);

toggleDarkMode.style.position = 'fixed';
toggleDarkMode.style.top = '20px';
toggleDarkMode.style.right = '20px';
toggleDarkMode.style.padding = '10px 15px';
toggleDarkMode.style.background = '#333';
toggleDarkMode.style.color = '#fff';
toggleDarkMode.style.border = 'none';
toggleDarkMode.style.borderRadius = '5px';
toggleDarkMode.style.cursor = 'pointer';

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkMode.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Dark mode CSS
const darkModeStyles = `
    body.dark-mode {
        background-color: #121212;
        color: #fff;
    }
    body.dark-mode .section {
        background: #1e1e1e;
        color: #ccc;
    }
    body.dark-mode .navbar, body.dark-mode footer {
        background: #222;
    }
    body.dark-mode .btn {
        background: #575757;
    }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = darkModeStyles;
document.head.appendChild(styleSheet);
