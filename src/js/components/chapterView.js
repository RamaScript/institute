export function renderChapterView(chapters, projects, courseId) {
    const contentContainer = document.getElementById('content-area');

    const chaptersHtml = chapters.map(chapter => `
        <section class="chapter-section" data-chapter-id="${chapter.chapterId}" id="chapter-${chapter.chapterId}">
            <div class="chapter-header-section">
                <span class="chapter-badge">Chapter ${chapter.chapterId}</span>
                <h1 class="chapter-title-main">${chapter.chapterTitle}</h1>
            </div>
            <div class="topics-section">
                ${chapter.topics.map((topic, tIdx) => `
                    <div class="topic-card">
                        <h3 class="topic-title" data-number="${chapter.chapterId}.${tIdx + 1}">${topic.topicTitle}</h3>
                        ${topic.subtopics && topic.subtopics.length > 0 ? `
                            <ul class="subtopic-list">
                                ${topic.subtopics.map((s, sIdx) => `<li><span class="subtopic-num">${sIdx + 1}.</span> ${s}</li>`).join('')}
                            </ul>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
            ${chapter.assignment ? renderAssignment(chapter.assignment) : ''}
            <div class="chapter-divider">
                <span class="divider-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
        </section>
    `).join('');

    const projectsHtml = projects && projects.length > 0 ? `
        <section class="projects-section" id="course-projects">
            <div class="chapter-header-section">
                <span class="chapter-badge">Final Projects</span>
                <h1 class="chapter-title-main">${getCourseTitle(courseId)} Projects</h1>
                <p class="projects-intro">Build these projects after completing all chapters to solidify your skills.</p>
            </div>
            <div class="projects-grid">
                ${projects.map(p => `
                    <div class="project-card-mini">
                        <h3 class="project-card-title">${p.projectTitle}</h3>
                        <div class="project-concepts">
                            ${p.concepts.map(c => `<span class="tag">${c}</span>`).join('')}
                        </div>
                        <ul class="project-features">
                            ${p.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
        </section>
    ` : '';

    const html = `
        <div class="continuous-view">
            ${chaptersHtml}
            ${projectsHtml}
            <div class="course-footer-section">
                <p><svg width="18" height="18" viewBox="0 0 18 18" fill="none" style="vertical-align:middle;margin-right:6px"><path d="M5 14l9-9M7 16l7-7M10 11l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="4" cy="4" r=".8" fill="currentColor"/><circle cx="14" cy="14" r=".8" fill="currentColor"/><circle cx="3" cy="10" r=".8" fill="currentColor"/><circle cx="12" cy="5" r=".8" fill="currentColor"/></svg> You've completed the ${getCourseTitle(courseId)} syllabus!</p>
            </div>
        </div>
    `;

    contentContainer.innerHTML = html;
}

function renderAssignment(assignment) {
    const totalQs = assignment.totalQuestions + (assignment.patternPrinting?.totalQuestions || 0);
    return `
        <div class="assignment-section">
            <div class="assignment-header">
                <span>Assignment</span>
                <span>${totalQs} Questions</span>
            </div>
            ${assignment.theory && assignment.theory.length > 0 ? `
                <div class="subsection-title">Theory Questions (Maximum 5)</div>
                <ol class="question-list">
                    ${assignment.theory.map(q => `<li>${q}</li>`).join('')}
                </ol>
            ` : ''}
            ${assignment.practical && assignment.practical.length > 0 ? `
                <div class="subsection-title">Practical Questions</div>
                <ol class="question-list">
                    ${assignment.practical.map(q => `<li>${q}</li>`).join('')}
                </ol>
            ` : ''}
            ${assignment.functionOverloading && assignment.functionOverloading.length > 0 ? `
                <div class="subsection-title">Practical Questions: Function Overloading</div>
                <ol class="question-list">
                    ${assignment.functionOverloading.map(q => `<li>${q}</li>`).join('')}
                </ol>
            ` : ''}
            ${assignment.operatorOverloading && assignment.operatorOverloading.length > 0 ? `
                <div class="subsection-title">Practical Questions: Operator Overloading</div>
                <ol class="question-list">
                    ${assignment.operatorOverloading.map(q => `<li>${q}</li>`).join('')}
                </ol>
            ` : ''}
            ${assignment.functionOverriding && assignment.functionOverriding.length > 0 ? `
                <div class="subsection-title">Practical Questions: Function Overriding & Virtual Functions</div>
                <ol class="question-list">
                    ${assignment.functionOverriding.map(q => `<li>${q}</li>`).join('')}
                </ol>
            ` : ''}
            ${assignment.patternPrinting && assignment.patternPrinting.patterns && assignment.patternPrinting.patterns.length > 0 ? `
                <div class="subsection-title">Pattern Questions (${assignment.patternPrinting.totalQuestions})</div>
                <div class="patterns-grid">
                    ${assignment.patternPrinting.patterns.map((p, pIdx) => `
                        <div class="pattern-card">
                            <span class="pattern-name"><span class="pattern-num">${pIdx + 1}.</span> ${p.name}</span>
                            <pre class="pattern-output">${p.output.join('\n')}</pre>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

function getCourseTitle(courseId) {
    const titles = { 'c': 'C Programming', 'cpp': 'C++ Programming', 'dsa-cpp': 'DSA with C++', 'python': 'Python Programming', 'java': 'Java Programming', 'dart': 'Dart Programming', 'flutter': 'Flutter', 'basic-web-dev': 'Web Development' };
    return titles[courseId] || 'Course';
}
