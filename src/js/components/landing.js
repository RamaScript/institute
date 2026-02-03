import { courses } from '../data/courses.js';

export function renderLandingPage() {
    const container = document.getElementById('landing-view');

    // Header / Hero Section
    const heroHtml = `
        <header class="landing-header">
            <h1 class="landing-title">Master Your Craft.</h1>
            <p class="landing-subtitle">Premium, no-nonsense syllabuses for serious developers.</p>
        </header>
    `;

    // Course Grid
    const coursesHtml = courses.map(course => {
        const statusClass = course.isAvailable ? 'available' : 'coming-soon';
        const statusText = course.isAvailable ? 'Start Learning →' : 'Coming Soon';
        // Allow click only if available
        const onClick = course.isAvailable ? `window.location.hash = '#course/${course.id}'` : '';
        const cardClass = `course-card ${course.isAvailable ? 'clickable' : 'disabled'}`;

        return `
            <div class="${cardClass}" onclick="${onClick}">
                <div class="course-icon">${course.icon}</div>
                <h3 class="course-name">${course.title}</h3>
                <p class="course-desc">${course.description}</p>
                <div class="course-tags">
                    ${course.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="course-footer">
                    <span class="course-status ${statusClass}">${statusText}</span>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="landing-container">
            ${heroHtml}
            <div class="courses-grid">
                ${coursesHtml}
            </div>
        </div>
    `;
}
