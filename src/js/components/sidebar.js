import { categories } from '../data/courses.js';

function escapeHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function groupByDifficulty(projects) {
    const groups = { beginner: [], intermediate: [], advanced: [], untagged: [] };
    projects.forEach(p => {
        const d = p.difficulty || null;
        if (d && groups[d]) groups[d].push(p);
        else groups.untagged.push(p);
    });
    return groups;
}

export function renderSidebar(chapters, activeChapterId, courseId = 'c', projects = [], categoryId = null) {
    const navContainer = document.getElementById('module-list');
    if (!navContainer) return;

    chapters.sort((a, b) => a.id - b.id);

    const cat = categoryId ? categories.find(c => c.id === categoryId) : null;
    const catTitle = cat ? cat.title : null;

    const backTarget = categoryId ? `#${categoryId}` : '#home';
    const backLabel = catTitle || 'Home';

    const homeLink = `
        <a href="${backTarget}" class="nav-link home-link" style="color: var(--color-accent);">
            ← ${backLabel}
        </a>
        <div style="height: 1px; background: var(--color-border); margin: 0.75rem 0;"></div>
    `;

    const listHtml = chapters.map(c => {
        const isActive = c.id == activeChapterId ? 'active' : '';
        return `
            <a href="javascript:void(0)" class="nav-link ${isActive}" data-id="${c.id}" data-course="${courseId}" style="min-width:0">
                <span class="chapter-pill">${c.id}</span>
                <span class="chapter-title-text">${c.title}</span>
            </a>
        `;
    }).join('');

    const projectsHtml = buildProjectsNav(projects);

    navContainer.innerHTML = homeLink + listHtml + projectsHtml;

    navContainer.querySelectorAll('.nav-link[data-id]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.dataset.id;
            const section = document.querySelector(`[data-chapter-id="${id}"]`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('open');
            }
        });
    });

    navContainer.querySelectorAll('.nav-project-link[data-project-idx]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const idx = link.dataset.projectIdx;
            const card = document.querySelector(`.project-card[data-project-idx="${idx}"]`);
            if (card) {
                card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('open');
            }
        });
    });
}

function buildProjectsNav(projects) {
    if (!projects || projects.length === 0) return '';

    const grouped = groupByDifficulty(projects);
    const labels = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' };
    const icons = { beginner: '🟢', intermediate: '🟡', advanced: '🔴' };

    let globalIdx = 0;
    let html = '';

    const renderLinks = (items) => items.map(p => {
        const idx = globalIdx++;
        return `
            <a href="javascript:void(0)" class="nav-link nav-project-link" data-project-idx="${idx}" style="min-width:0">
                <span class="chapter-pill project-pill">${idx + 1}</span>
                <span class="chapter-title-text">${escapeHtml(p.projectTitle)}</span>
            </a>
        `;
    }).join('');

    if (grouped.untagged.length > 0) {
        html += renderLinks(grouped.untagged);
    }

    ['beginner', 'intermediate', 'advanced'].forEach(diff => {
        const items = grouped[diff];
        if (items.length === 0) return;
        html += `
            <div class="nav-difficulty-group">
                <div class="nav-difficulty-label">
                    <span class="difficulty-icon">${icons[diff]}</span>
                    <span>${labels[diff]}</span>
                </div>
                ${renderLinks(items)}
            </div>
        `;
    });

    return `
        <div style="height: 1px; background: var(--color-border); margin: 1rem 0;"></div>
        <div class="nav-projects-root">
            <div class="nav-projects-label">
                <span class="chapter-pill" style="background:var(--color-success);color:#fff;">★</span>
                <span>Projects</span>
            </div>
            ${html}
        </div>
    `;
}
