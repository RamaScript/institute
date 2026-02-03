import { loadModuleList, getModule } from './dataLoader.js';
import { renderSidebar } from './components/sidebar.js';
import { renderModuleView } from './components/moduleView.js';

class App {
    constructor() {
        this.modules = [];
        this.init();
    }

    async init() {
        // 1. Load Data
        this.modules = await loadModuleList();

        // 2. Initial Render
        this.handleRouting();

        // 3. Setup Listeners
        window.addEventListener('hashchange', () => this.handleRouting());

        // Mobile menu toggle
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

        // Extract Module ID
        const match = hash.match(/#module=(\d+)/);
        const moduleId = match ? match[1] : null;

        // Render Sidebar (updates active state)
        renderSidebar(this.modules, moduleId);

        if (moduleId) {
            await this.loadAndRenderModule(moduleId);
            // Close sidebar on mobile after selection
            const sidebar = document.getElementById('sidebar');
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('open');
            }
        } else {
            // Default Welcome Screen - already statically in HTML, 
            // but we ensure title is reset
            if (!hash) {
                // If clean URL, maybe redirect to first module or show welcome
                // Existing HTML has welcome screen.
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
