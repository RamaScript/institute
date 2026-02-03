import { courses } from '../data/courses.js';

export function renderLandingPage() {
    const container = document.getElementById('landing-view');

    // Navbar
    const navbarHtml = `
        <nav class="main-navbar">
            <div class="nav-container">
                <a href="#home" class="nav-logo">Ramascript</a>
                <div class="nav-links">
                    <a href="#courses">Courses</a>
                    <a href="#about">About</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#contact">Contact</a>
                </div>
                <button class="mobile-nav-toggle" id="landing-menu-toggle">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
            <div class="mobile-nav-menu" id="landing-mobile-menu">
                <a href="#courses">Courses</a>
                <a href="#about">About</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    `;

    // Hero Section
    const heroHtml = `
        <header class="landing-header" id="home">
            <h1 class="landing-title">Master Your Craft with<br><span class="brand-highlight">Ramascript</span></h1>
            <p class="landing-subtitle">Premium coding education. No fluff. Just deep, systems-level mastery.</p>
            <div class="hero-cta">
                <a href="#courses" class="btn-primary">Explore Courses</a>
                <a href="#about" class="btn-secondary">Our Mission</a>
            </div>
        </header>
    `;

    // Course Grid
    const coursesHtml = courses.map(course => {
        const statusClass = course.isAvailable ? 'available' : 'coming-soon';
        const statusText = course.isAvailable ? 'Start Learning →' : 'Coming Soon';
        const onClick = course.isAvailable ? `window.location.hash = '#course/${course.id}'` : '';
        const cardClass = `course-card ${course.isAvailable ? 'clickable' : 'disabled'}`;

        return `
            <div class="${cardClass}" onclick="${onClick}">
                <div class="course-icon">${course.icon}</div>
                <h3 class="course-name">${course.title}</h3>
                <p class="course-desc">${course.description}</p>
                <div class="course-tags">
                    ${course.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="course-footer">
                    <span class="course-status ${statusClass}">${statusText}</span>
                </div>
            </div>
        `;
    }).join('');

    // About Section
    const aboutHtml = `
        <section id="about" class="section-container">
            <h2 class="section-title">About Ramascript</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>At Ramascript, we believe that true engineering skills are forged in the depths of systems programming. We don't just teach you syntax; we teach you how computers "think".</p>
                    <p>Founded by passionate engineers, our mission is to bridge the gap between academic theory and real-world high-performance software development.</p>
                </div>
                <div class="about-stats">
                    <div class="stat-card">
                        <span class="stat-number">5K+</span>
                        <span class="stat-label">Students</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">50+</span>
                        <span class="stat-label">Modules</span>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Testimonials Section (Dummy Data)
    const testimonialsHtml = `
        <section id="testimonials" class="section-container alt-bg">
            <h2 class="section-title">Student Stories</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <p class="quote">"I never understood pointers until I took the C module here. The visualization and depth are unmatched."</p>
                    <div class="author">
                        <div class="avatar">JS</div>
                        <div class="info">
                            <span class="name">John Smith</span>
                            <span class="role">Backend Engineer</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="quote">"Ramascript's C++ course helped me crack my dream job interview. The OOP design patterns implementation was gold."</p>
                    <div class="author">
                        <div class="avatar">AL</div>
                        <div class="info">
                            <span class="name">Anita Lee</span>
                            <span class="role">Systems Architect</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="quote">"Finally, a course that treats you like an adult. No baby steps, just pure engineering concepts explained clearly."</p>
                    <div class="author">
                        <div class="avatar">MK</div>
                        <div class="info">
                            <span class="name">Mike K.</span>
                            <span class="role">Student</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Contact Section
    const contactHtml = `
        <section id="contact" class="section-container">
            <h2 class="section-title">Get in Touch</h2>
            <div class="contact-wrapper">
                <form class="contact-form" onsubmit="event.preventDefault(); alert('Message sent! (Demo)');">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="your@email.com" required>
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea rows="5" placeholder="How can we help you?" required></textarea>
                    </div>
                    <button type="submit" class="btn-primary full-width">Send Message</button>
                </form>
            </div>
        </section>
    `;

    const footerHtml = `
        <footer class="main-footer">
            <div class="footer-content">
                <p>&copy; ${new Date().getFullYear()} Ramascript. All rights reserved.</p>
                <div class="social-links">
                    <a href="#">Twitter</a>
                    <a href="#">GitHub</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
    `;

    container.innerHTML = `
        <div class="landing-page-wrapper">
            ${navbarHtml}
            ${heroHtml}
            <section id="courses" class="section-container">
                <h2 class="section-title">Our Courses</h2>
                <div class="courses-grid">
                    ${coursesHtml}
                </div>
            </section>
            ${aboutHtml}
            ${testimonialsHtml}
            ${contactHtml}
            ${footerHtml}
        </div>
    `;

    // Mobile Menu Logic
    setTimeout(() => {
        const toggle = document.getElementById('landing-menu-toggle');
        const menu = document.getElementById('landing-mobile-menu');
        if (toggle && menu) {
            // Remove old listeners if any to prevent duplicates (though typical usage is one-shot render)
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);

            newToggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
            // Close on link click
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => menu.classList.remove('active'));
            });
        }
    }, 0);
}
