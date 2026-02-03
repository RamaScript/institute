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
            renderLandingPage();
            return;
        }

        // Route: Course/Syllabus View (#course/candcpp/...)
        if (hash.startsWith('#course/candcpp')) {
            landingView.classList.add('hidden');
            syllabusView.classList.remove('hidden');

            // Lazy load sidebar data if not already loaded
            if (!this.isSyllabusLoaded) {
                this.modules = await loadModuleList();
                this.isSyllabusLoaded = true;
            }

            // Extract Module ID from hash: #course/candcpp/module:1
            // or maybe just #course/candcpp (show welcome)
            // Let's support the old style #module=1 but inside the course prefix if possible
            // Or adapt to a new schema: #course/candcpp/module/1

            // For now, let's keep it compatible with the previous module links if they were #module=1
            // But we changed the card to link to #course/candcpp
            // We need to handle:
            // 1. #course/candcpp -> Show Sidebar + Welcome Screen
            // 2. #course/candcpp/module/1 -> Show Sidebar + Module 1

            // Let's try to parse:
            const moduleMatch = hash.match(/\/module\/(\d+)/);
            const moduleId = moduleMatch ? moduleMatch[1] : null;

            renderSidebar(this.modules, moduleId);

            if (moduleId) {
                await this.loadAndRenderModule(moduleId);
                // Close sidebar on mobile
                const sidebar = document.getElementById('sidebar');
                if (window.innerWidth <= 768 && sidebar) {
                    sidebar.classList.remove('open');
                }
            } else {
                // Show Welcome Screen (Default content in HTML)
                // Ensure content area is reset if coming from a module
                const contentArea = document.getElementById('content-area');
                if (!contentArea.querySelector('.welcome-screen')) {
                    contentArea.innerHTML = `
                        <div class="welcome-screen">
                            <h2>Welcome to the C & C++ Master Course</h2>
                            <p>Select a module from the sidebar to begin your journey.</p>
                        </div>
                     `;
                }
            }
        }
    }

    async loadAndRenderModule(id) {
        try {
            const data = await getModule(id);
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
