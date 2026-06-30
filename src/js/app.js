import { loadAllChapters, loadProjects } from './dataLoader.js';
import { renderSidebar } from './components/sidebar.js';
import { renderChapterView } from './components/chapterView.js';
import { renderLandingPage } from './components/landing.js';

class App {
    constructor() {
        this.chapters = [];
        this.projects = [];
        this.init();
    }

    async init() {
        // Apply saved theme FIRST — before any rendering — so the
        // correct theme is always visible regardless of the current route.
        this.applyTheme();

        this.setupScrollReveal();
        this.setupMobileMenu();
        this.setupScrollSpy();
        this.setupCardGlow();
        this.setupSmoothAnchors();
        this.handleRouting();
        window.addEventListener('hashchange', () => this.handleRouting());
    }

    applyTheme() {
        const saved = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', saved);
    }

    setupMobileMenu() {
        const menuBtn = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        if (menuBtn && sidebar) {
            menuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });

            document.addEventListener('click', (e) => {
                if (window.innerWidth <= 768 &&
                    sidebar.classList.contains('open') &&
                    !sidebar.contains(e.target) &&
                    !menuBtn.contains(e.target)) {
                    sidebar.classList.remove('open');
                }
            });
        }
    }

    setupScrollSpy() {
        let ticking = false;
        document.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateActiveChapter();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    setupScrollReveal() {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

        const scaleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in-scale');
                    scaleObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

        const scan = () => {
            document.querySelectorAll('.chapter-section:not(.animate-in):not(.animate-in-scale)').forEach(el => observer.observe(el));
            document.querySelectorAll('.topic-card:not(.animate-in):not(.animate-in-scale)').forEach(el => observer.observe(el));
            document.querySelectorAll('.project-card-mini:not(.animate-in):not(.animate-in-scale)').forEach(el => observer.observe(el));
            document.querySelectorAll('.stat-card:not(.animate-in):not(.animate-in-scale)').forEach(el => scaleObserver.observe(el));
            document.querySelectorAll('.testimonial-card:not(.animate-in):not(.animate-in-scale)').forEach(el => observer.observe(el));
        };

        scan();

        const mo = new MutationObserver(scan);
        const contentArea = document.getElementById('content-area');
        const landingView = document.getElementById('landing-view');
        if (contentArea) mo.observe(contentArea, { childList: true, subtree: true });
        if (landingView) mo.observe(landingView, { childList: true, subtree: true });
    }

    setupCardGlow() {
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.course-card.clickable').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', x + '%');
                card.style.setProperty('--mouse-y', y + '%');
            });
        });
    }

    setupSmoothAnchors() {
        // Smooth-scroll section anchors that are NOT routing hashes
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;
            const href = link.getAttribute('href');
            // Let routing hashes (#home, #course/…) fall through to hashchange handler
            if (href === '#home' || href.startsWith('#course/')) return;
            // For all other in-page anchors, prevent default and scroll
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Don't push these to the URL so routing isn't triggered
            }
        });
    }

    updateActiveChapter() {
        const sections = document.querySelectorAll('.chapter-section');
        const navLinks = document.querySelectorAll('.nav-link[data-id]');
        let currentId = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 180) {
                currentId = section.dataset.chapterId;
            }
        });

        navLinks.forEach(link => {
            const isActive = link.dataset.id == currentId;
            link.classList.toggle('active', isActive);
        });
    }

    async handleRouting() {
        const hash = window.location.hash;
        const landingView = document.getElementById('landing-view');
        const syllabusView = document.getElementById('syllabus-view');

        // Section anchors on the landing page — stay on landing, just scroll
        const sectionAnchors = ['#courses', '#about', '#testimonials', '#contact'];
        if (sectionAnchors.includes(hash)) {
            // Make sure the landing is visible
            if (landingView.classList.contains('hidden')) {
                landingView.classList.remove('hidden');
                syllabusView.classList.add('hidden');
                this.currentCourseId = null;
                renderLandingPage();
                setTimeout(() => {
                    this.setupCardGlow();
                    const el = document.querySelector(hash);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 120);
            } else {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            return;
        }

        if (!hash || hash === '#home') {
            landingView.classList.remove('hidden');
            syllabusView.classList.add('hidden');
            this.currentCourseId = null;
            renderLandingPage();
            setTimeout(() => {
                this.setupCardGlow();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 0);
            return;
        }

        if (hash.startsWith('#course/')) {
            const parts = hash.split('/');
            const courseId = parts[1];
            const chapterId = (parts[2] === 'chapter' && parts[3]) ? parseInt(parts[3]) : null;

            landingView.classList.add('hidden');
            syllabusView.classList.remove('hidden');

            if (this.currentCourseId !== courseId) {
                this.currentCourseId = courseId;
                await this.loadCourseContent(courseId, chapterId);
            } else if (chapterId) {
                this.scrollToChapter(chapterId);
            }
        }
    }

    async loadCourseContent(courseId, scrollToChapterId = null) {
        const contentArea = document.getElementById('content-area');

        contentArea.innerHTML = `<div class="loading-state"><div class="loader"></div><p>Loading course content...</p></div>`;

        try {
            const [chapters, projects] = await Promise.all([
                loadAllChapters(courseId),
                loadProjects(courseId)
            ]);

            this.chapters = chapters;
            this.projects = projects;

            const sidebarData = chapters.map(c => ({ id: c.chapterId, title: c.chapterTitle }));
            renderSidebar(sidebarData, null, courseId);
            renderChapterView(chapters, projects, courseId);

            if (scrollToChapterId) {
                setTimeout(() => this.scrollToChapter(scrollToChapterId), 150);
            }
        } catch (err) {
            console.error(err);
            contentArea.innerHTML = `<p class="error-message">Failed to load course content.</p>`;
        }
    }

    scrollToChapter(chapterId) {
        const section = document.querySelector(`[data-chapter-id="${chapterId}"]`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

const app = new App();
