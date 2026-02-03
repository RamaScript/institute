import { loadModuleList, getModule } from './dataLoader.js';
import { renderSidebar } from './components/sidebar.js';
import { renderModuleView } from './components/moduleView.js';
import { renderLandingPage } from './components/landing.js';

class App {
    constructor() {
        this.modules = [];
        this.isSyllabusLoaded = false;
        this.init();
    }

    async init() {
        // Initial Routing Check
        this.handleRouting();

        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRouting());

        // Mobile menu toggle logic
        this.setupMobileMenu();
    }

    setupMobileMenu() {
        const menuBtn = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        if (menuBtn && sidebar) {
            menuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });

            // Close sidebar when clicking outside on mobile
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

    async handleRouting() {
        const hash = window.location.hash;
        const landingView = document.getElementById('landing-view');
        const syllabusView = document.getElementById('syllabus-view');

        // Route: Landing Page (Empty hash or #home)
        if (!hash || hash === '#home') {
            landingView.classList.remove('hidden');
            syllabusView.classList.add('hidden');
            this.currentCourseId = null; // Reset current course
            renderLandingPage();
            return;
        }

        // Route: Course/Syllabus View (#course/candcpp/... or #course/python/...)
        if (hash.startsWith('#course/')) {
            const parts = hash.split('/');
            // hash format: #course/<courseId>/module/<moduleId> or #course/<courseId>
            // parts[0] = #course
            // parts[1] = courseId (candcpp or python)
            // parts[2] = literal "module" (optional)
            // parts[3] = moduleId (optional)

            const courseId = parts[1];
            const moduleId = (parts[2] === 'module' && parts[3]) ? parts[3] : null;

            landingView.classList.add('hidden');
            syllabusView.classList.remove('hidden');

            // Load sidebar data if course changed or not loaded
            if (this.currentCourseId !== courseId) {
                this.modules = await loadModuleList(courseId);
                this.currentCourseId = courseId;
                // Render sidebar strictly after loading new list
                renderSidebar(this.modules, moduleId, courseId);
            } else {
                // Just update active state if same course
                renderSidebar(this.modules, moduleId, courseId);
            }

            if (moduleId) {
                await this.loadAndRenderModule(moduleId, courseId);
                // Close sidebar on mobile
                const sidebar = document.getElementById('sidebar');
                if (window.innerWidth <= 768 && sidebar) {
                    sidebar.classList.remove('open');
                }
            } else {
                // Show Welcome Screen
                const contentArea = document.getElementById('content-area');
                const welcomeTitle = courseId === 'python' ? 'Python Mastery' : 'C & C++ Master Course';

                contentArea.innerHTML = `
                    <div class="welcome-screen">
                        <h2>Welcome to ${welcomeTitle}</h2>
                        <p>Select a module from the sidebar to begin your journey.</p>
                    </div>
                `;
            }
        }
    }

    async loadAndRenderModule(id, courseId) {
        try {
            const data = await getModule(id, courseId);
            renderModuleView(data);
            window.scrollTo(0, 0);
        } catch (err) {
            console.error(err);
            document.getElementById('content-area').innerHTML = `<p>Error loading module.</p>`;
        }
    }
}

// Start App
const app = new App();
