function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderChapterView(chapters, projects, courseId) {
  const contentContainer = document.getElementById("content-area");

  const chaptersHtml = chapters
    .map(
      (chapter) => `
        <section class="chapter-section" data-chapter-id="${chapter.chapterId}" id="chapter-${chapter.chapterId}">
            <div class="chapter-header-section">
                <span class="chapter-badge">Chapter ${chapter.chapterId}</span>
                <h1 class="chapter-title-main">${chapter.chapterTitle}</h1>
            </div>
            <div class="topics-section">
                ${chapter.topics
                  .map(
                    (topic, tIdx) => `
                    <div class="topic-card">
                        <h3 class="topic-title" data-number="${chapter.chapterId}.${tIdx + 1}">${topic.topicTitle}</h3>
                        ${
                          topic.subtopics && topic.subtopics.length > 0
                            ? `
                            <ul class="subtopic-list">
                                ${topic.subtopics.map((s, sIdx) => `<li><span class="subtopic-num">${sIdx + 1}.</span> ${escapeHtml(s)}</li>`).join("")}
                            </ul>
                        `
                            : ""
                        }
                    </div>
                `,
                  )
                  .join("")}
            </div>
            ${chapter.assignment ? renderAssignment(chapter.assignment) : ""}
            ${chapter.relatedProjects && projects ? renderRelatedProjects(chapter.relatedProjects, projects) : ""}
            <div class="chapter-divider">
                <span class="divider-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
            </div>
        </section>
    `,
    )
    .join("");

  const projectsHtml = renderProjectsSection(projects, courseId);

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

function renderRelatedProjects(ids, allProjects) {
  const linked = ids
    .map((id) => allProjects.find((p) => p.projectId === id))
    .filter(Boolean);
  if (linked.length === 0) return "";

  const items = linked
    .map((p) => {
      const globalIdx = allProjects.findIndex(
        (pr) => pr.projectId === p.projectId,
      );
      return `
            <a href="javascript:void(0)" class="practice-project-link" data-scroll-to-project="${p.projectId}">
                <span class="practice-dot"></span>
                <span class="practice-project-num">${globalIdx + 1}.</span>
                <span>${escapeHtml(p.projectTitle)}</span>
                <span class="practice-link-arrow">→</span>
            </a>
        `;
    })
    .join("");

  return `
        <div class="practice-projects-section">
            <div class="practice-projects-header">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span>Practice Projects</span>
            </div>
            <div class="practice-projects-list">${items}</div>
        </div>
    `;
}

function renderProjectsSection(projects, courseId) {
  if (!projects || projects.length === 0) return "";

  const grouped = {
    beginner: [],
    intermediate: [],
    advanced: [],
    untagged: [],
  };
  projects.forEach((p) => {
    const d = p.difficulty || null;
    if (d && grouped[d]) grouped[d].push(p);
    else grouped.untagged.push(p);
  });

  const labels = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  };

  let globalIdx = 0;
  let diffHtml = "";

  const renderCards = (items) =>
    items
      .map((p) => {
        const idx = globalIdx++;
        return renderProjectCard(p, idx);
      })
      .join("");

  if (grouped.untagged.length > 0) {
    diffHtml += `<div class="projects-grid">${renderCards(grouped.untagged)}</div>`;
  }

  ["beginner", "intermediate", "advanced"].forEach((diff) => {
    const items = grouped[diff];
    if (items.length === 0) return;
    diffHtml += `
            <div class="projects-difficulty-group" data-difficulty="${diff}">
                <div class="difficulty-header">
                    <span class="difficulty-label">${labels[diff]}</span>
                    <span class="difficulty-count">${items.length} projects</span>
                </div>
                <div class="projects-grid">
                    ${renderCards(items)}
                </div>
            </div>
        `;
  });

  return `
        <section class="projects-section" id="course-projects">
            <div class="chapter-header-section">
                <span class="chapter-badge">Projects</span>
                <h1 class="chapter-title-main">${getCourseTitle(courseId)} Projects</h1>
                <p class="projects-intro">Build these projects after completing all chapters to solidify your skills.</p>
            </div>
            ${diffHtml}
        </section>
    `;
}

function renderProjectCard(project, idx) {
  const difficulty = project.difficulty || null;
  const cardClass = difficulty ? `project-card--${difficulty}` : "";
  return `
        <div class="project-card ${cardClass}" data-project-idx="${idx}" id="project-${project.projectId}">
            <div class="project-card-top">
                <span class="project-card-num">${idx + 1}</span>
                ${difficulty ? `<span class="project-card-difficulty">${difficulty}</span>` : ""}
            </div>
            <h3 class="project-card-title">${escapeHtml(project.projectTitle)}</h3>
            <ul class="project-features">
                ${(project.features || []).map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
            </ul>
        </div>
    `;
}

function renderAssignment(assignment) {
  const totalQs =
    assignment.totalQuestions +
    (assignment.patternPrinting?.totalQuestions || 0);
  return `
        <div class="assignment-section">
            <div class="assignment-header">
                <span>Assignment</span>
                <span>${totalQs} Questions</span>
            </div>
            ${
              assignment.theory && assignment.theory.length > 0
                ? `
                <div class="subsection-title">Theory Questions (Maximum 5)</div>
                <ol class="question-list">
                    ${assignment.theory.map((q) => `<li>${escapeHtml(q)}</li>`).join("")}
                </ol>
            `
                : ""
            }
            ${
              assignment.practical && assignment.practical.length > 0
                ? `
                <div class="subsection-title">Practical Questions</div>
                <ol class="question-list">
                    ${assignment.practical.map((q) => `<li>${escapeHtml(q)}</li>`).join("")}
                </ol>
            `
                : ""
            }
            ${
              assignment.functionOverloading &&
              assignment.functionOverloading.length > 0
                ? `
                <div class="subsection-title">Practical Questions: Function Overloading</div>
                <ol class="question-list">
                    ${assignment.functionOverloading.map((q) => `<li>${escapeHtml(q)}</li>`).join("")}
                </ol>
            `
                : ""
            }
            ${
              assignment.operatorOverloading &&
              assignment.operatorOverloading.length > 0
                ? `
                <div class="subsection-title">Practical Questions: Operator Overloading</div>
                <ol class="question-list">
                    ${assignment.operatorOverloading.map((q) => `<li>${escapeHtml(q)}</li>`).join("")}
                </ol>
            `
                : ""
            }
            ${
              assignment.functionOverriding &&
              assignment.functionOverriding.length > 0
                ? `
                <div class="subsection-title">Practical Questions: Function Overriding & Virtual Functions</div>
                <ol class="question-list">
                    ${assignment.functionOverriding.map((q) => `<li>${escapeHtml(q)}</li>`).join("")}
                </ol>
            `
                : ""
            }
            ${
              assignment.patternPrinting &&
              assignment.patternPrinting.patterns &&
              assignment.patternPrinting.patterns.length > 0
                ? `
                <div class="subsection-title">Pattern Questions (${assignment.patternPrinting.totalQuestions})</div>
                <div class="patterns-grid">
                    ${assignment.patternPrinting.patterns
                      .map(
                        (p, pIdx) => `
                        <div class="pattern-card">
                            <span class="pattern-name"><span class="pattern-num">${pIdx + 1}.</span> ${p.name}</span>
                            <pre class="pattern-output">${p.output.join("\n")}</pre>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            `
                : ""
            }
        </div>
    `;
}

function getCourseTitle(courseId) {
  const titles = {
    c: "C Programming",
    cpp: "C++ Programming",
    "dsa-cpp": "DSA with C++",
    python: "Python Programming",
    java: "Java Programming",
    dart: "Dart Programming",
    flutter: "Flutter",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
  };
  return titles[courseId] || "Course";
}
