export function renderSidebar(chapters, activeChapterId, courseId = 'c') {
    const navContainer = document.getElementById('module-list');
    if (!navContainer) return;

    chapters.sort((a, b) => a.id - b.id);

    const homeLink = `
        <a href="#home" class="nav-link home-link" style="margin-bottom: 1rem; color: var(--color-accent);">
            ← Back to Home
        </a>
        <div style="height: 1px; background: var(--color-border); margin-bottom: 1rem;"></div>
    `;

    const listHtml = chapters.map(c => {
        const isActive = c.id == activeChapterId ? 'active' : '';
        return `
            <a href="#course/${courseId}/chapter/${c.id}" class="nav-link ${isActive}" data-id="${c.id}" style="min-width:0">
                <span class="chapter-pill">${c.id}</span>
                <span class="chapter-title-text">${c.title}</span>
            </a>
        `;
    }).join('');

    navContainer.innerHTML = homeLink + listHtml;

    navContainer.querySelectorAll('.nav-link[data-id]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.dataset.id;
            const hash = `#course/${courseId}/chapter/${id}`;
            window.location.hash = hash;

            const section = document.querySelector(`[data-chapter-id="${id}"]`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('open');
            }
        });
    });
}
