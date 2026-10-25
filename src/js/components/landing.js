import { categories, courses } from '../data/courses.js';

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
    'python': {
        gradient: 'linear-gradient(135deg, #f7b731 0%, #306998 100%)',
        iconBg: 'rgba(247,183,49,0.14)',
        tagColor: '#f7b731',
    },
    'java': {
        gradient: 'linear-gradient(135deg, #e76f00 0%, #5382a1 100%)',
        iconBg: 'rgba(231,111,0,0.14)',
        tagColor: '#e76f00',
    },
    'dart': {
        gradient: 'linear-gradient(135deg, #00589e 0%, #41c9ff 100%)',
        iconBg: 'rgba(0,88,158,0.14)',
        tagColor: '#00589e',
    },
    'flutter': {
        gradient: 'linear-gradient(135deg, #02569b 0%, #4fc3f7 100%)',
        iconBg: 'rgba(2,86,155,0.14)',
        tagColor: '#02569b',
    },
    'css': {
        gradient: 'linear-gradient(135deg, #264de4 0%, #2965f1 50%, #4fc3f7 100%)',
        iconBg: 'rgba(38,77,228,0.14)',
        tagColor: '#264de4',
    },
    'html': {
        gradient: 'linear-gradient(135deg, #e44d26 0%, #f16529 100%)',
        iconBg: 'rgba(228,77,38,0.14)',
        tagColor: '#e44d26',
    },
    'javascript': {
        gradient: 'linear-gradient(135deg, #f7df1e 0%, #e8d44d 100%)',
        iconBg: 'rgba(247,223,30,0.14)',
        tagColor: '#b8a900',
    },
    'appliedai': {
        gradient: 'linear-gradient(135deg, #7c3aed 0%, #4361ee 50%, #06b6d4 100%)',
        iconBg: 'rgba(124, 58, 237, 0.14)',
        tagColor: '#7c3aed',
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
                <img src="src/img/logo.png" alt="Ramascript" class="lp-logo-mark" width="32" height="32">
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


            <!-- headline -->
            <h1 class="lp-hero-title">
                Engineering & Applied AI<br>
                <span class="grad-text">from First Principles</span>
            </h1>

            <!-- subtitle -->
            <p class="lp-hero-sub">
                Deep, practical courses in Applied AI Engineering, Systems Programming, and Full-Stack Development.
                From LLMs, RAG, and AI Agents to C, C++, Python, and DSA.
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
                    <span class="lp-strip-icon">${icons.brain}</span>
                    <span>Applied AI & Autonomous Agents</span>
                </div>
                <div class="lp-strip-divider" aria-hidden="true"></div>
                <div class="lp-strip-item">
                    <span class="lp-strip-icon">${icons.zap}</span>
                    <span>First-principles systems</span>
                </div>
                <div class="lp-strip-divider" aria-hidden="true"></div>
                <div class="lp-strip-item">
                    <span class="lp-strip-icon">${icons.rocket}</span>
                    <span>Production capstone projects</span>
                </div>
            </div>
        </div>


    </header>`;
}

/* ─── Categories ───────────────────────────────────────── */
function buildCategories() {
    const cards = categories.map((cat, i) => {
        const courseCount = cat.courseIds.length;
        const courseLogos = cat.courseIds.map(id => {
            const c = courses.find(co => co.id === id);
            return c ? `<img src="${c.logo}" alt="${c.title}" class="lp-category-course-logo" title="${c.title}">` : '';
        }).join('');

        return `
        <div class="lp-category-card lp-reveal lp-delay-${Math.min(i+1,4)}"
             style="--card-gradient:${cat.gradient}"
             onclick="window.location.hash='${cat.id}'"
             role="button" tabindex="0" aria-label="${cat.title}">
            <div class="lp-category-icon" style="background:${cat.iconBg};border-color:${cat.tagColor}25">
                <img src="${cat.logo}" alt="${cat.title}" class="lp-category-logo">
            </div>
            <div class="lp-category-body">
                <h3 class="lp-category-name">${cat.title}</h3>
                <p class="lp-category-desc">${cat.description}</p>
                <div class="lp-category-logos">${courseLogos}</div>
                <div class="lp-category-meta">
                    <span class="lp-category-count">${courseCount} course${courseCount > 1 ? 's' : ''}</span>
                    <span class="lp-category-explore">Explore <span class="arrow">${icons.arrowRight}</span></span>
                </div>
            </div>
        </div>`;
    }).join('');

    return `
    <section id="courses" class="lp-section" style="position:relative;z-index:1;">
        <div class="lp-section-header">
            <span class="lp-section-eyebrow">Courses</span>
            <h2 class="lp-section-title lp-reveal">Pick your path</h2>
            <p class="lp-section-desc lp-reveal">
                Choose a category to explore our deep, practical courses.
            </p>
        </div>
        <div class="lp-categories-grid">${cards}</div>
    </section>`;
}

/* ─── Category Detail Page ──────────────────────────────── */
export function renderCategoryPage(categoryId) {
    const container = document.getElementById('landing-view');
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) { window.location.hash = 'home'; return; }

    const catCourses = cat.courseIds.map(id => courses.find(c => c.id === id)).filter(Boolean);

    const cards = catCourses.map((course, i) => {
        const theme = courseThemes[course.id] || courseThemes['c'];
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
             onclick="${isReady ? `window.location.hash='${categoryId}/${course.id}'` : ''}"
             role="${isReady ? 'button' : 'article'}"
             tabindex="${isReady ? '0' : '-1'}"
             aria-label="${course.title}">
            <div class="lp-course-icon" style="background:${theme.iconBg};border-color:${theme.tagColor}25">
                <img src="${course.logo}" alt="${course.title}" class="lp-course-logo">
            </div>
            <div class="lp-course-body">
                <h3 class="lp-course-name">${course.title}</h3>
                <p class="lp-course-desc">${course.description}</p>
                <div class="lp-course-tags">${tags}</div>
            </div>
            <div class="lp-course-footer">${footer}</div>
        </div>`;
    }).join('');

    container.innerHTML = `
        <div class="landing-page-wrapper">
            ${buildNavbar()}
            <section class="lp-hero" style="min-height:auto;padding:8rem 2rem 3rem;">
                <div class="lp-bg-canvas" aria-hidden="true">
                    <div class="lp-bg-mesh"></div>
                    <div class="lp-bg-grid"></div>
                    <div class="lp-orb lp-orb-1"></div>
                    <div class="lp-orb lp-orb-2"></div>
                </div>
                <div class="lp-hero-content" style="max-width:800px;">
                    <a href="#home" class="lp-hero-badge" style="cursor:pointer;text-decoration:none;">
                        <span class="lp-badge-dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2l4 4-4 4-4-4 4-4z" fill="currentColor"/></svg></span>
                        Back to Home
                    </a>
                    <h1 class="lp-hero-title" style="font-size:clamp(2rem,5vw,3.5rem);">
                        <span class="grad-text">${cat.title}</span>
                    </h1>
                    <p class="lp-hero-sub">${cat.description}</p>
                </div>
            </section>
            <section class="lp-section" style="position:relative;z-index:1;">
                <div class="lp-section-header">
                    <span class="lp-section-eyebrow">${cat.title}</span>
                    <h2 class="lp-section-title lp-reveal">Choose a course</h2>
                </div>
                <div class="lp-courses-grid">${cards}</div>
            </section>
            ${buildFooter()}
        </div>
    `;

    setTimeout(() => _initCategoryPage(), 0);
}

function _initCategoryPage() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeBtn = document.getElementById('lp-theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    const burger = document.getElementById('lp-hamburger');
    const mMenu = document.getElementById('lp-mobile-menu');
    if (burger && mMenu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            mMenu.classList.toggle('active');
        });
        mMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                burger.classList.remove('active');
                mMenu.classList.remove('active');
            });
        });
    }

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

    document.querySelectorAll('.lp-course-card.clickable').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - r.left}px`);
            card.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

/* ─── About / Features ───────────────────────────────────── */
function buildAbout() {
    const features = [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2a4 4 0 014 4c0 1.9-1.3 3.5-3.1 3.9l1.6 4.1h2a3 3 0 013 3v2H4.5v-2a3 3 0 013-3h2l1.6-4.1A4.01 4.01 0 018 6a4 4 0 014-4z" stroke="currentColor" stroke-width="1.5"/></svg>', color: 'amber', title: 'Applied AI & Agents',   desc: 'Build with real LLM APIs, vector databases, RAG pipelines, function calling, MCP, and autonomous agent loops.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>', color: 'blue',   title: 'First Principles',    desc: 'Understand how CPUs, memory, tokenizers, and neural weights execute under the hood without magic.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 15l-6 6M9 11L5 7l3-3 4 4M12 12l6 6M15 9l4-4-3-3-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', color: 'violet', title: 'Production Capstones', desc: 'Deploy real-world systems: memory allocators, concurrent servers, and autonomous multi-agent pipelines.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L5 13h6l-1 9 8-11h-5l1-9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>', color: 'pink',   title: 'Modern & Interview Ready', desc: 'Covering core systems, algorithms, and AI engineering patterns evaluated at top engineering teams.' },
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
        { initials: 'A',  name: 'Aditya',           role: 'Web Developer',            stars: 5, text: "From HTML semantics to responsive layouts and JS — every concept clicked. The project-based approach is exceptional." },
        { initials: 'R',  name: 'Rohan',            role: 'Full-Stack Developer',     stars: 5, text: "Took C, C++ and Web Dev. The first-principles drills sharpened my problem-solving like nothing else." },
        { initials: 'P',  name: 'Priyanshi',        role: 'Software Engineer',        stars: 5, text: "Clear, deep explanations of memory, systems, and algorithms. Made me truly confident in technical interviews." },
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
                    <p>Have questions about courses or want guidance? Send a message.</p>
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
                                <div class="lp-tile-value">Chennai, TN</div>
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
                    <img src="src/img/logo.png" alt="Ramascript" class="lp-logo-mark" style="width:28px;height:28px;border-radius:6px;">
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
            ${buildCategories()}
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
