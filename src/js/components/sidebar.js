export function renderSidebar(modules, activeModuleId) {
    const navContainer = document.getElementById('module-nav');
    if (!navContainer) return;

    // Sort just in case
    modules.sort((a, b) => a.id - b.id);

    const listHtml = modules.map(m => {
        const isActive = m.id === parseInt(activeModuleId) ? 'active' : '';
        return `
            <a href="#module=${m.id}" class="nav-link ${isActive}" data-id="${m.id}">
                Module ${m.id}: ${m.title}
            </a>
        `;
    }).join('');

    navContainer.innerHTML = listHtml;
}
