export function renderSidebar(modules, activeModuleId, courseId = 'candcpp') {
    const navContainer = document.getElementById('module-list');
    if (!navContainer) return;

    // Sort just in case
    modules.sort((a, b) => a.id - b.id);

    const homeLink = `
        <a href="#home" class="nav-link home-link" style="margin-bottom: 1rem; color: var(--color-accent);">
            ← Back to Home
        </a>
        <div style="height: 1px; background: var(--color-border); margin-bottom: 1rem;"></div>
    `;

    const listHtml = modules.map(m => {
        const isActive = m.id == activeModuleId ? 'active' : '';
        return `
            <a href="#course/${courseId}/module/${m.id}" class="nav-link ${isActive}" data-id="${m.id}">
                Module ${m.id}: ${m.title}
            </a>
        `;
    }).join('');

    navContainer.innerHTML = homeLink + listHtml;
}
