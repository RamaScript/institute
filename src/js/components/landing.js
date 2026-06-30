import { courses } from '../data/courses.js';

/* ─── Per-course visual identity ─────────────────────────── */
const courseThemes = {
    'c': {
        gradient: 'linear-gradient(135deg, #4f6ef7 0%, #06d6a0 100%)',
        iconBg: 'rgba(79,110,247,0.14)',
        tagColor: '#4f6ef7',
    },
    'cpp': {
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #4f6ef7 100%)',
        iconBg: 'rgba(139,92,246,0.14)',
        tagColor: '#8b5cf6',
    },
    'dsa-cpp': {
        gradient: 'linear-gradient(135deg, #06d6a0 0%, #4f6ef7 100%)',
        iconBg: 'rgba(6,214,160,0.12)',
        tagColor: '#06d6a0',
    },
};

/* ─── SVG Icons ──────────────────────────────────────────── */
const icons = {
    arrowRight: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    send: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M13.5 7.5L1.5 1.5L5 7.5L1.5 13.5L13.5 7.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
    sun: `<svg class="sun-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="10" r="4"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41"/></svg>`,
    moon: `<svg class="moon-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>`,
    check: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    star: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 8.5 4 10.5l.5-3.5L2 4.5 5.5 4 7 1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
    zap: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.5 1L3 9h4.5l-1 6L13 7H8l.5-6z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
    brain: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2.5C5.5 2.5 3.5 4.5 3.5 7c0 1.5.8 2.5.8 2.5s-.3 2 3.7 2 3.7-2 3.7-2 .8-1 .8-2.5c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6.5 5.5v4M9.5 5.5v4M8 5v5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    rocket: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5s3.5 3 3.5 7-3.5 6-3.5 6-3.5-2-3.5-6 3.5-7 3.5-7z" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="6.5" r="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M2.5 11s2 .5 4 2M13.5 11s-2 .5-4 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    user: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="3" stroke="currentColor" stroke-width="1.3"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    pin: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5c-3 0-5 2.2-5 5.5S8 14.5 8 14.5s5-4.2 5-7.5-2-5.5-5-5.5z" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="6.5" r="1.5" stroke="currentColor" stroke-width="1.3"/></svg>`,
    mail: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.5 4.5l6.5 4 6.5-4v9H1.5v-9z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M1.5 4.5l6.5 4 6.5-4" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
    messageDots: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="8" cy="10" r=".5" fill="currentColor"/><circle cx="12" cy="10" r=".5" fill="currentColor"/><circle cx="16" cy="10" r=".5" fill="currentColor"/></svg>`,
};

/* ─── Navbar ─────────────────────────────────────────────── */
function buildNavbar() {
    return `
    <nav class="lp-navbar" id="lp-navbar" role="navigation" aria-label="Main navigation">
        <div class="lp-nav-inner">
            <a href="#home" class="lp-logo" aria-label="Ramascript Home">
                <div class="lp-logo-mark">R</div>
                <span class="lp-logo-text">Ramascript</span>
            </a>

            <div class="lp-nav-links">
                <a href="#courses" class="lp-nav-link">Courses</a>
                <a href="#about"   class="lp-nav-link">About</a>
                <a href="#testimonials" class="lp-nav-link">Reviews</a>
                <a href="#contact" class="lp-nav-link">Contact</a>
            </div>

            <div class="lp-nav-actions">
                <button class="lp-theme-btn" id="lp-theme-toggle" aria-label="Toggle colour theme">
                    ${icons.sun}
                    ${icons.moon}
                </button>
                <button class="lp-hamburger" id="lp-hamburger" aria-label="Toggle menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Mobile menu lives OUTSIDE the nav so it never overlaps it -->
    <div class="lp-mobile-menu" id="lp-mobile-menu" role="navigation" aria-label="Mobile navigation">
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#testimonials">Reviews</a>
        <a href="#contact">Contact</a>
    </div>`;
}

/* ─── Hero ───────────────────────────────────────────────── */
function buildHero() {
    return `
    <header class="lp-hero" id="home">
        <!-- background canvas (orbs + grid) -->
        <div class="lp-bg-canvas" aria-hidden="true">
            <div class="lp-bg-mesh"></div>
            <div class="lp-bg-grid"></div>
            <div class="lp-orb lp-orb-1"></div>
            <div class="lp-orb lp-orb-2"></div>
            <div class="lp-orb lp-orb-3"></div>
        </div>

        <div class="lp-hero-content">
            <!-- badge -->
            <div class="lp-hero-badge">
                <span class="lp-badge-dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2l4 4-4 4-4-4 4-4z" fill="currentColor"/></svg></span>
                Now live — C Programming course
            </div>

            <!-- headline -->
            <h1 class="lp-hero-title">
                Master<br>
                <span class="grad-text">Systems</span><br>
                <span class="grad-text-2">Programming.</span>
            </h1>

            <!-- subtitle -->
            <p class="lp-hero-sub">
                Deep, practical courses in C, C++ and Data Structures & Algorithms.
                Built for engineers who want to understand computers from the ground up.
            </p>

            <!-- CTA row -->
            <div class="lp-hero-cta">
                <a href="#courses" class="lp-btn-primary" id="hero-cta-primary">
                    Explore Courses
                    ${icons.arrowRight}
                </a>
                <a href="#about" class="lp-btn-ghost" id="hero-cta-secondary">
                    Learn More
                </a>
            </div>

            <!-- social proof strip -->
            <div class="lp-hero-strip">
                <div class="lp-strip-item">
                    <span class="lp-strip-icon">${icons.zap}</span>
                    <span>First-principles learning</span>
                </div>
                <div class="lp-strip-divider" aria-hidden="true"></div>
                <div class="lp-strip-item">
                    <span class="lp-strip-icon">${icons.brain}</span>
                    <span>300+ practice problems</span>
                </div>
                <div class="lp-strip-divider" aria-hidden="true"></div>
                <div class="lp-strip-item">
                    <span class="lp-strip-icon">${icons.rocket}</span>
                    <span>Real capstone projects</span>
                </div>
            </div>
        </div>

        <!-- scroll hint -->
        <div class="lp-scroll-hint" aria-hidden="true">
            <div class="lp-scroll-mouse">
                <div class="lp-scroll-wheel"></div>
            </div>
            <span>Scroll</span>
        </div>
    </header>`;
}

/* ─── Courses ────────────────────────────────────────────── */
function buildCourses() {
    const cards = courses.map((course, i) => {
        const theme   = courseThemes[course.id] || courseThemes['c'];
        const delay   = i * 0.12;
        const isReady = course.isAvailable;

        const footer = isReady
            ? `<span class="lp-status-available">
                    Start Learning <span class="arrow">${icons.arrowRight}</span>
               </span>
               <span class="lp-course-chip">Free access</span>`
            : `<span class="lp-status-soon">Coming Soon</span>`;

        const tags = course.tags.map(t =>
            `<span class="lp-tag" style="color:${theme.tagColor};background:${theme.tagColor}18;border-color:${theme.tagColor}30">${t}</span>`
        ).join('');

        return `
        <div class="lp-course-card ${isReady ? 'clickable' : 'disabled'} lp-reveal lp-delay-${Math.min(i+1,4)}"
             style="--card-gradient:${theme.gradient}"
             onclick="${isReady ? `window.location.hash='#course/${course.id}'` : ''}"
             role="${isReady ? 'button' : 'article'}"
             tabindex="${isReady ? '0' : '-1'}"
             aria-label="${course.title}">
            <div class="lp-course-icon" style="background:${theme.iconBg};border-color:${theme.tagColor}25">
                ${course.icon}
            </div>
            <div class="lp-course-body">
                <h3 class="lp-course-name">${course.title}</h3>
                <p class="lp-course-desc">${course.description}</p>
                <div class="lp-course-tags">${tags}</div>
            </div>
            <div class="lp-course-footer">${footer}</div>
        </div>`;
    }).join('');

    return `
    <section id="courses" class="lp-section" style="position:relative;z-index:1;">
        <div class="lp-section-header">
            <span class="lp-section-eyebrow">Courses</span>
            <h2 class="lp-section-title lp-reveal">Pick your path</h2>
            <p class="lp-section-desc lp-reveal">
                Each course goes deep — not just syntax, but how the machine actually works.
            </p>
        </div>
        <div class="lp-courses-grid">${cards}</div>
    </section>`;
}

/* ─── About / Features ───────────────────────────────────── */
function buildAbout() {
    const features = [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>', color: 'blue',   title: 'First Principles',    desc: 'We build up from how CPUs, memory, and the OS actually work — not from framework abstractions.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 15l-6 6M9 11L5 7l3-3 4 4M12 12l6 6M15 9l4-4-3-3-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', color: 'violet', title: 'Hands-on Projects',   desc: 'Every chapter ends with real code. Five capstone projects that go on your resume.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 4h8v3a2 2 0 104 0V4h3v8h-3a2 2 0 10-4 0v3H6V4zM6 14h3v2a2 2 0 104 0v-2h3v7H6v-7z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>', color: 'green',  title: 'Deep Explanations',   desc: 'No hand-waving. Pointers, memory layouts, and DSA complexities explained with clarity.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L5 13h6l-1 9 8-11h-5l1-9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>', color: 'pink',   title: 'Interview Ready',     desc: 'Covering exactly what top-tier systems and backend interviews test — and why.' },
    ];

    const cards = features.map((f, i) => `
    <div class="lp-feature-card lp-reveal lp-delay-${i + 1}">
        <div class="lp-feature-icon ${f.color}">${f.icon}</div>
        <h3 class="lp-feature-title">${f.title}</h3>
        <p class="lp-feature-desc">${f.desc}</p>
    </div>`).join('');

    return `
    <section id="about" style="position:relative;z-index:1;background:rgba(255,255,255,0.015);border-top:1px solid rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.05);">
        <div class="lp-section" style="max-width:1200px;margin:0 auto;">
            <div class="lp-section-header">
                <span class="lp-section-eyebrow">About</span>
                <h2 class="lp-section-title lp-reveal">Built for engineers,<br>by engineers.</h2>
                <p class="lp-section-desc lp-reveal">
                    We believe true engineering skill comes from understanding
                    how computers actually work — not just how to stitch together frameworks.
                </p>
            </div>

            <div class="lp-features-grid">${cards}</div>

            <div class="lp-stats-row">
                <div class="lp-stat-card lp-reveal lp-delay-1">
                    <div class="lp-stat-num">15+</div>
                    <div class="lp-stat-label">Chapters per course</div>
                </div>
                <div class="lp-stat-card lp-reveal lp-delay-2">
                    <div class="lp-stat-num">300+</div>
                    <div class="lp-stat-label">Practice problems</div>
                </div>
                <div class="lp-stat-card lp-reveal lp-delay-3">
                    <div class="lp-stat-num">5</div>
                    <div class="lp-stat-label">Capstone projects</div>
                </div>
                <div class="lp-stat-card lp-reveal lp-delay-4">
                    <div class="lp-stat-num">0₹</div>
                    <div class="lp-stat-label">Cost to start</div>
                </div>
            </div>
        </div>
    </section>`;
}

/* ─── Testimonials ───────────────────────────────────────── */
function buildTestimonials() {
    const reviews = [
        { initials: 'SA', name: 'Syed Alina',      role: 'Web Developer',            stars: 5, text: "The Web Dev course gave me everything I needed to land my first internship. From HTML semantics to responsive layouts — every concept clicked. The project-based approach is incredible." },
        { initials: 'V',  name: 'Vivan',            role: 'Full-Stack Developer',     stars: 5, text: "I took C, C++, Web Dev and Logic Building — and each course built on the last perfectly. The logic building drills sharpened my problem-solving like nothing else. Highly recommend the full track." },
        { initials: 'H',  name: 'Hanshika',         role: 'Software Engineer',        stars: 5, text: "Started with C and C++ for systems programming, then moved to Web Dev and Logic Building. The first-principles approach made me a confident programmer. Worth every hour." },
        { initials: 'KV', name: 'Kirti Verma',      role: 'Frontend Engineer',        stars: 5, text: "Web Dev course was a game-changer. The way they break down CSS layout, JavaScript DOM, and responsive design — crystal clear explanations. Built my portfolio from scratch." },
        { initials: 'SS', name: 'Sanyam Sharma',    role: 'Full-Stack Developer',     stars: 5, text: "Completed C, C++, Web Dev and Logic Building with Ramascript. Each course is packed with hands-on problems and real-world context. The logic building module completely changed how I approach coding." },
        { initials: 'SK', name: 'Shashwat Kesharvani', role: 'Web Developer',         stars: 5, text: "Web Dev course gave me a rock-solid foundation. JavaScript, CSS, responsive design — everything is taught from the ground up. No magic, just clear engineering. Exactly what I needed." },
        { initials: 'P',  name: 'Prakash',          role: 'Web Developer',            stars: 5, text: "I finally understand how the web works under the hood. The Web Dev course doesn't just teach you syntax — it teaches you how everything fits together. Exceptional quality." },
        { initials: 'A',  name: 'Ashok',            role: 'Frontend Developer',       stars: 5, text: "Before this course, web development felt like memorizing recipes. After the Web Dev course, I actually understand why things work. The difference is night and day." },
        { initials: 'R',  name: 'Rochak',           role: 'JavaScript Specialist',    stars: 5, text: "The JS course is hands-down the best I've taken. Closures, prototypes, async — concepts I struggled with for years finally made sense. The way they visualize execution is genius." },
    ];

    const cards = reviews.map((r, i) => {
        const stars = Array(r.stars).fill(icons.star).join('');
        return `
        <div class="lp-testimonial-card lp-reveal lp-delay-${i + 1}">
            <div class="lp-stars" aria-label="${r.stars} stars">${stars}</div>
            <p class="lp-quote">${r.text}</p>
            <div class="lp-author">
                <div class="lp-avatar" aria-hidden="true">${r.initials}</div>
                <div>
                    <div class="lp-author-name">${r.name}</div>
                    <div class="lp-author-role">${r.role}</div>
                </div>
            </div>
        </div>`;
    }).join('');

    const moreCard = `
        <div class="lp-testimonial-card lp-more-card lp-reveal">
            <div class="lp-more-card-content">
                <span class="lp-more-icon">${icons.messageDots}</span>
                <div class="lp-more-text">
                    <strong>And many more…</strong>
                    <span>Join <strong>100+</strong> students who have transformed their skills with Ramascript.</span>
                </div>
                <a href="#courses" class="lp-btn-primary" style="font-size:0.85rem;padding:0.75rem 1.5rem;white-space:nowrap;">
                    Start Learning
                    ${icons.arrowRight}
                </a>
            </div>
        </div>`;

    return `
    <section id="testimonials" class="lp-section" style="position:relative;z-index:1;">
        <div class="lp-section-header">
            <span class="lp-section-eyebrow">Testimonials</span>
            <h2 class="lp-section-title lp-reveal">What our students say</h2>
            <p class="lp-section-desc lp-reveal">Real feedback from engineers who levelled up.</p>
        </div>
        <div class="lp-testimonials-grid">${cards}${moreCard}</div>
    </section>`;
}

/* ─── Contact ────────────────────────────────────────────── */
function buildContact() {
    return `
    <section id="contact" style="position:relative;z-index:1;background:rgba(255,255,255,0.015);border-top:1px solid rgba(255,255,255,0.05);">
        <div class="lp-section" style="max-width:1200px;margin:0 auto;">
            <div class="lp-section-header">
                <span class="lp-section-eyebrow">Contact</span>
                <h2 class="lp-section-title lp-reveal">Get in touch</h2>
                <p class="lp-section-desc lp-reveal">
                    Have a question about a course or want to suggest a topic? We'd love to hear from you.
                </p>
            </div>

            <div class="lp-contact-grid">
                <!-- info -->
                <div class="lp-contact-intro lp-reveal lp-reveal-left">
                    <p>Drop a message and we'll get back to you personally within 24 hours. No bots, no auto-replies.</p>
                    <div class="lp-contact-tiles">
                        <div class="lp-contact-tile">
                            <div class="lp-tile-icon">${icons.user}</div>
                            <div>
                                <div class="lp-tile-label">Instructor</div>
                                <div class="lp-tile-value">Ramanand Kumar</div>
                            </div>
                        </div>
                        <div class="lp-contact-tile">
                            <div class="lp-tile-icon">${icons.pin}</div>
                            <div>
                                <div class="lp-tile-label">Location</div>
                                <div class="lp-tile-value">Sector 35C, Chandigarh</div>
                            </div>
                        </div>
                        <div class="lp-contact-tile">
                            <div class="lp-tile-icon">${icons.mail}</div>
                            <div>
                                <div class="lp-tile-label">Email</div>
                                <div class="lp-tile-value">ramanand.in7@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- form -->
                <div class="lp-contact-form-wrap lp-reveal lp-reveal-right">
                    <div class="lp-reply-badge">
                        <div class="lp-reply-badge-icon">24h</div>
                        <span>We reply to every message within <strong>24 hours</strong> on your email.</span>
                    </div>

                    <form name="contact" onsubmit="lpThank(event)">
                        <div class="lp-form-row">
                            <div class="lp-form-group">
                                <label for="lp-name">Name</label>
                                <input type="text" id="lp-name" name="Name" placeholder="Your name" required>
                            </div>
                            <div class="lp-form-group">
                                <label for="lp-email">Email</label>
                                <input type="email" id="lp-email" name="Email" placeholder="you@example.com" required>
                            </div>
                        </div>
                        <div class="lp-form-group">
                            <label for="lp-subject">Subject</label>
                            <input type="text" id="lp-subject" name="Subject" placeholder="What's this about?" required>
                        </div>
                        <div class="lp-form-group">
                            <label for="lp-msg">Message</label>
                            <textarea id="lp-msg" name="Message" rows="4" placeholder="Your message…" required></textarea>
                        </div>
                        <p id="lp-form-status" class="lp-form-status" aria-live="polite"></p>
                        <button type="submit" class="lp-btn-primary lp-form-submit" id="lp-send-btn">
                            Send Message
                            ${icons.send}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>`;
}

/* ─── Footer ─────────────────────────────────────────────── */
function buildFooter() {
    return `
    <footer class="lp-footer">
        <div class="lp-footer-inner">
            <div>
                <a href="#home" class="lp-logo" style="text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;margin-bottom:.35rem;">
                    <div class="lp-logo-mark" style="width:28px;height:28px;font-size:.8rem;">R</div>
                    <span class="lp-logo-text" style="font-size:1.05rem;">Ramascript</span>
                </a>
                <div class="lp-footer-copy" style="margin-top:.25rem;">© ${new Date().getFullYear()} — All rights reserved.</div>
            </div>
            <div class="lp-footer-links">
                <a href="#courses">Courses</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="lp-footer-social">
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="GitHub">GitHub</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
        </div>
    </footer>`;
}

/* ─── Main render ────────────────────────────────────────── */
export function renderLandingPage() {
    const container = document.getElementById('landing-view');

    container.innerHTML = `
        <div class="landing-page-wrapper">
            ${buildNavbar()}
            ${buildHero()}
            ${buildCourses()}
            ${buildAbout()}
            ${buildTestimonials()}
            ${buildContact()}
            ${buildFooter()}
        </div>
    `;

    // Defer all JS enhancements
    setTimeout(() => _initLanding(), 0);
}

/* ─── Interaction Logic ──────────────────────────────────── */

// Guard: window-level listeners should only be attached once,
// even if renderLandingPage() is called multiple times (back-navigation).
let _landingInitialised = false;

function _initLanding() {

    /* Theme — apply saved preference immediately */
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeBtn = document.getElementById('lp-theme-toggle');
    if (themeBtn) {
        // Replacing the node removes any previously attached listeners on old renders
        themeBtn.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    /* Hamburger / mobile menu */
    const burger = document.getElementById('lp-hamburger');
    const mMenu  = document.getElementById('lp-mobile-menu');
    if (burger && mMenu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            mMenu.classList.toggle('active');
        });
        // Close menu when any link inside it is clicked
        mMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                burger.classList.remove('active');
                mMenu.classList.remove('active');
            });
        });
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mMenu.classList.contains('active') &&
                !mMenu.contains(e.target) &&
                !burger.contains(e.target)) {
                burger.classList.remove('active');
                mMenu.classList.remove('active');
            }
        });
    }

    /* Window-level listeners — attach only once */
    if (!_landingInitialised) {
        _landingInitialised = true;

        /* Navbar scroll glass effect */
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('lp-navbar');
            if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });

        /* Hero parallax */
        window.addEventListener('scroll', () => {
            const heroContent = document.querySelector('.lp-hero-content');
            if (!heroContent) return;
            const s = window.scrollY;
            heroContent.style.transform = `translateY(${s * 0.22}px)`;
            heroContent.style.opacity   = String(Math.max(0, 1 - s / 650));
        }, { passive: true });
    }

    /* Fire the scroll callbacks once on init so state is correct immediately */
    const navbar = document.getElementById('lp-navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);

    /* Scroll-reveal (IntersectionObserver) */
    const revealEls = document.querySelectorAll('.lp-reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }

    /* Course card spotlight glow */
    document.querySelectorAll('.lp-course-card.clickable').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - r.left}px`);
            card.style.setProperty('--my', `${e.clientY - r.top}px`);
        });

        // Keyboard accessibility
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}


/* ─── Contact form handlers ──────────────────────────────── */
function _sendToGoogle(form) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxPpEHNHYnva1v3Q9_RtK6bbgz9FocgO6G2BIz2qRzwB0_AevWbXE1nvGQo4cGk9ub1/exec";
    const fd = new FormData(form);
    fd.append("ToEmail", "ramanand.in7@gmail.com");
    fd.append("Source", "Ramascript Institute");
    fetch(scriptURL, { method: "POST", body: fd })
        .then(r => r.json())
        .then(d => console.log("Success:", d))
        .catch(e => console.error("Error:", e));
}

function _showStatus(el, msg, type, ms = 4500) {
    el.textContent = msg;
    el.className   = `lp-form-status ${type}`;
    setTimeout(() => { el.textContent = ''; el.className = 'lp-form-status'; }, ms);
}

window.lpThank = function (event) {
    event.preventDefault();
    const name  = document.getElementById('lp-name');
    const email = document.getElementById('lp-email');
    const sub   = document.getElementById('lp-subject');
    const msg   = document.getElementById('lp-msg');
    const p     = document.getElementById('lp-form-status');
    const btn   = document.getElementById('lp-send-btn');

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value || !email.value || !sub.value || !msg.value) {
        _showStatus(p, 'Please fill in all fields.', 'error');
        return;
    }
    if (!emailRe.test(email.value)) {
        _showStatus(p, 'Please enter a valid email address.', 'error');
        return;
    }

    btn.disabled = true;
    btn.innerHTML = 'Sending…';

    _sendToGoogle(document.forms['contact']);
    name.value = email.value = sub.value = msg.value = '';

    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = `Send Message ${icons.send}`;
    }, 2000);

    _showStatus(p, `${icons.check} Message sent! We'll get back to you soon.`, 'success', 5000);
};
