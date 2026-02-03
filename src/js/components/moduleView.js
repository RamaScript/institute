export function renderModuleView(moduleData) {
    const contentContainer = document.getElementById('content-area');
    const pageTitle = document.getElementById('page-title');

    if (pageTitle) pageTitle.textContent = `Module ${moduleData.moduleId}`;

    const html = `
        <div class="module-view animate-fade-in">
            <!-- Header -->
            <div class="module-header">
                <h1 class="module-title">${moduleData.moduleTitle}</h1>
                <p class="module-goal">${moduleData.moduleGoal}</p>
                
                ${moduleData.outcomes && moduleData.outcomes.length > 0 ? `
                    <div class="module-meta">
                        <span class="meta-title">Learning Outcomes</span>
                        <ul class="meta-list">
                            ${moduleData.outcomes.map(o => `<li>${o}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>

            <!-- Chapters -->
            <div class="chapters-section">
                ${moduleData.chapters.map(renderChapter).join('')}
            </div>

            <!-- Project -->
            ${moduleData.moduleProject ? renderProject(moduleData.moduleProject) : ''}
        </div>
    `;

    contentContainer.innerHTML = html;

    // Re-attach event listeners for accordions
    attachAccordionListeners();
}

function renderChapter(chapter) {
    return `
        <div class="chapter-card">
            <div class="chapter-header" onclick="this.parentElement.classList.toggle('open')">
                <span class="chapter-title">Chapter ${chapter.chapterId}: ${chapter.chapterTitle}</span>
                <svg class="toggle-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>
            <div class="chapter-content">
                <!-- Topics -->
                ${chapter.topics.length > 0 ? `
                    <span class="section-label">Topics Covered</span>
                    <ul class="topic-list">
                        ${chapter.topics.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                ` : ''}

                <!-- Assignment -->
                ${chapter.assignment ? renderAssignment(chapter.assignment, chapter.chapterId) : ''}
            </div>
        </div>
    `;
}

function renderAssignment(assignment, chapterId) {
    return `
        <div class="assignment-section">
            <div class="assignment-header">
                <span>Assignment (Chapter ${chapterId})</span>
                <span>${assignment.totalQuestions} Questions</span>
            </div>
            
            ${assignment.theory && assignment.theory.length > 0 ? `
                <div class="subsection-title">Part A: Theory</div>
                <ol class="question-list">
                    ${assignment.theory.map(q => `<li>${q}</li>`).join('')}
                </ol>
            ` : ''}

            ${assignment.practical && assignment.practical.length > 0 ? `
                <div class="subsection-title">Part B: Practical</div>
                <ol class="question-list">
                    ${assignment.practical.map(q => `<li>${q}</li>`).join('')}
                </ol>
            ` : ''}
        </div>
    `;
}

function renderProject(project) {
    return `
        <div class="project-card">
            <h2 class="project-title">🧪 Final Project: ${project.title}</h2>
            
            <div class="project-desc">${project.description}</div>

            ${project.rules && project.rules.length > 0 ? `
                <div class="project-rules">
                    <span class="section-label" style="color: #93c5fd;">Rules & Constraints</span>
                    <ul class="meta-list" style="color:white; list-style-position: inside;">
                        ${project.rules.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
        </div>
    `;
}

function attachAccordionListeners() {
    // Logic handled inline in onclick for simplicity, 
    // but could be done here for cleaner separation if needed.
}
