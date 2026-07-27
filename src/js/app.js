import { loadAllChapters, loadProjects } from './dataLoader.js';
import { renderSidebar } from './components/sidebar.js';
import { renderChapterView } from './components/chapterView.js';
import { renderLandingPage, renderCategoryPage } from './components/landing.js';
import { categories } from './data/courses.js';

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
        this.setupProjectJumpLinks();
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
            document.querySelectorAll('.project-card:not(.animate-in):not(.animate-in-scale)').forEach(el => observer.observe(el));
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
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;
            const href = link.getAttribute('href');
            if (href === '#home' || this.isCourseRoute(href) || this.isCategoryRoute(href)) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    setupProjectJumpLinks() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-scroll-to-project]');
            if (link) {
                e.preventDefault();
                const projectId = link.dataset.scrollToProject;
                const target = document.getElementById(`project-${projectId}`);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    isCategoryRoute(hash) {
        const catId = hash.replace('#', '');
        return categories.some(c => c.id === catId);
    }

    isCourseRoute(hash) {
        const path = hash.replace('#', '');
        const parts = path.split('/');
        if (parts.length === 2) {
            return categories.some(c => c.id === parts[0]) &&
                   categories.some(c => c.courseIds.includes(parts[1]));
        }
        return false;
    }

    updateActiveChapter() {
        const sections = document.querySelectorAll('.chapter-section');
        const projectCards = document.querySelectorAll('.project-card[data-project-idx]');
        const navLinks = document.querySelectorAll('.nav-link[data-id]');
        const projectLinks = document.querySelectorAll('.nav-project-link[data-project-idx]');
        let currentId = null;
        let currentProjectIdx = null;

        let inProjectSection = false;
        if (projectCards.length > 0) {
            const firstProject = projectCards[0];
            const firstRect = firstProject.getBoundingClientRect();
            if (firstRect.top <= 200) {
                inProjectSection = true;
            }
        }

        if (inProjectSection) {
            projectCards.forEach(card => {
                const rect = card.getBoundingClientRect();
                if (rect.top <= 200) {
                    currentProjectIdx = card.dataset.projectIdx;
                }
            });
        } else {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 180) {
                    currentId = section.dataset.chapterId;
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.id == currentId);
        });

        projectLinks.forEach(link => {
            link.classList.toggle('active', currentProjectIdx !== null && link.dataset.projectIdx === currentProjectIdx);
        });
    }

    async handleRouting() {
        const hash = window.location.hash;
        const path = hash.replace('#', '');
        const landingView = document.getElementById('landing-view');
        const syllabusView = document.getElementById('syllabus-view');

        // Section anchors on the landing page
        const sectionAnchors = ['#courses', '#about', '#testimonials', '#contact'];
        if (sectionAnchors.includes(hash)) {
            if (landingView.classList.contains('hidden')) {
                landingView.classList.remove('hidden');
                syllabusView.classList.add('hidden');
                this.currentCourseId = null;
                renderLandingPage();
                setTimeout(() => {
                    const el = document.querySelector(hash);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 120);
            } else {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            return;
        }

        // Home
        if (!hash || hash === '#home') {
            landingView.classList.remove('hidden');
            syllabusView.classList.add('hidden');
            this.currentCourseId = null;
            renderLandingPage();
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
            return;
        }

        // Parse route: could be "categoryId" or "categoryId/courseId"
        const parts = path.split('/');
        const categoryId = parts[0];
        const courseId = parts.length === 2 ? parts[1] : null;
        const cat = categories.find(c => c.id === categoryId);

        if (!cat) {
            // Unknown route — go home
            window.location.hash = 'home';
            return;
        }

        if (courseId && cat.courseIds.includes(courseId)) {
            // Course syllabus view
            landingView.classList.add('hidden');
            syllabusView.classList.remove('hidden');

            if (this.currentCourseId !== courseId) {
                this.currentCourseId = courseId;
                this.currentCategoryId = categoryId;
                await this.loadCourseContent(courseId, null, categoryId);
            }
        } else {
            // Category page
            landingView.classList.remove('hidden');
            syllabusView.classList.add('hidden');
            this.currentCourseId = null;
            this.currentCategoryId = categoryId;
            renderCategoryPage(categoryId);
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
        }
    }

    async loadCourseContent(courseId, scrollToChapterId = null, categoryId = null) {
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
            const activeId = scrollToChapterId || (chapters.length > 0 ? chapters[0].chapterId : null);
            renderSidebar(sidebarData, activeId, courseId, projects, categoryId);
            renderChapterView(chapters, projects, courseId);

            if (scrollToChapterId) {
                setTimeout(() => this.scrollToChapter(scrollToChapterId), 150);
            } else if (chapters.length > 0) {
                setTimeout(() => this.scrollToChapter(chapters[0].chapterId), 150);
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
