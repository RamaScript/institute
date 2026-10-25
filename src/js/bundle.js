/* =====================================================
   RAMASCRIPT INSTITUTE — bundled JS
   ===================================================== */

"use strict";



/* --- data/courses.js --- */

const categories = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description:
      "Master applied AI engineering — LLMs, Prompt Engineering, RAG architectures, Autonomous Agents, MCP & Voice AI.",
    gradient: "linear-gradient(135deg, #FF6A00 0%, #FFB000 100%)",
    iconBg: "rgba(255, 106, 0, 0.14)",
    tagColor: "#FF6A00",
    logo: "src/img/tech-logo/ai.svg",
    courseIds: ["appliedai"],
  },
  {
    id: "programming",
    title: "Programming Languages",
    description:
      "Master core languages — from systems programming with C/C++ to scripting with Python and enterprise Java.",
    gradient: "linear-gradient(135deg, #4f6ef7 0%, #8b5cf6 100%)",
    iconBg: "rgba(79,110,247,0.14)",
    tagColor: "#4f6ef7",
    logo: "src/img/tech-logo/programming.png",
    courseIds: ["c", "cpp", "python", "java", "dart", "javascript"],
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description:
      "Master DSA with C++ — from arrays to graphs, with hands-on problem solving for interviews.",
    gradient: "linear-gradient(135deg, #06d6a0 0%, #4f6ef7 100%)",
    iconBg: "rgba(6,214,160,0.12)",
    tagColor: "#06d6a0",
    logo: "src/img/tech-logo/DSA.png",
    courseIds: ["dsa-cpp"],
  },
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Build modern websites from scratch — HTML structure, CSS styling, and interactive JavaScript.",
    gradient: "linear-gradient(135deg, #e44d26 0%, #264de4 100%)",
    iconBg: "rgba(228,77,38,0.14)",
    tagColor: "#e44d26",
    logo: "src/img/tech-logo/web.png",
    courseIds: ["html", "css", "javascript"],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Build beautiful cross-platform mobile apps with Flutter — widgets, state management, and deployment.",
    gradient: "linear-gradient(135deg, #02569b 0%, #4fc3f7 100%)",
    iconBg: "rgba(2,86,155,0.14)",
    tagColor: "#02569b",
    logo: "src/img/tech-logo/mobile.png",
    courseIds: ["flutter", "dart", "java"],
  },
];

const courses = [
    {
        id: 'c',
        title: 'C Programming',
        description: 'Master the fundamentals of C programming — from variables and pointers to file handling and dynamic memory.',
        tags: ['System', 'Procedural'],
        logo: 'src/img/tech-logo/c.png',
        isAvailable: true
    },
    {
        id: 'cpp',
        title: 'C++ Programming',
        description: 'Deep dive into object-oriented programming with C++ — classes, inheritance, polymorphism, and STL.',
        tags: ['OOP', 'System'],
        logo: 'src/img/tech-logo/cpp.png',
        isAvailable: true
    },
    {
        id: 'dsa-cpp',
        title: 'DSA with C++',
        description: 'Master data structures and algorithms with C++ — from arrays to graphs, with hands-on problem solving.',
        tags: ['CS Fundamentals', 'Interview Prep'],
        logo: 'src/img/tech-logo/DSA.png',
        isAvailable: true
    },
    {
        id: 'python',
        title: 'Python Programming',
        description: 'Learn Python from the ground up — syntax, data structures, OOP, modules, and real-world scripting.',
        tags: ['Scripting', 'General Purpose'],
        logo: 'src/img/tech-logo/python.png',
        isAvailable: true
    },
    {
        id: 'java',
        title: 'Java Programming',
        description: 'Comprehensive Java course — JVM, OOP, collections, multithreading, and building robust applications.',
        tags: ['OOP', 'Enterprise'],
        logo: 'src/img/tech-logo/java.png',
        isAvailable: true
    },
    {
        id: 'dart',
        title: 'Dart Programming',
        description: 'Master Dart programming — types, collections, async, and the foundation for Flutter development.',
        tags: ['UI', 'Cross-Platform'],
        logo: 'src/img/tech-logo/dart.svg',
        isAvailable: true
    },
    {
        id: 'flutter',
        title: 'Flutter Mobile App Development',
        description: 'Build beautiful cross-platform mobile apps with Flutter — widgets, state management, and deployment.',
        tags: ['UI', 'Cross-Platform'],
        logo: 'src/img/tech-logo/flutter.svg',
        isAvailable: true
    },
    {
        id: 'css',
        title: 'CSS Mastery: Styling the Modern Web',
        description: 'Master CSS from selectors and box model to Flexbox, Grid, animations, and responsive design.',
        tags: ['Frontend', 'Design'],
        logo: 'src/img/tech-logo/css3.png',
        isAvailable: true
    },
    {
        id: 'html',
        title: 'HTML: Structure the Web',
        description: 'Learn HTML from basic tags to semantic elements, forms, accessibility, and building real-world page structures.',
        tags: ['Frontend', 'Markup'],
        logo: 'src/img/tech-logo/html5.png',
        isAvailable: true
    },
    {
        id: 'javascript',
        title: 'JavaScript Programming',
        description: 'Master JavaScript — variables, functions, DOM, async programming, ES6+, and building interactive web apps.',
        tags: ['Frontend', 'Logic'],
        logo: 'src/img/tech-logo/javascript.png',
        isAvailable: true
    },
    {
        id: 'appliedai',
        title: 'Applied AI Engineering',
        description: 'Master LLMs, RAG, agentic workflows, function calling, MCP, and voice AI with first-principles engineering.',
        tags: ['LLMs & RAG', 'Agentic AI'],
        logo: 'src/img/tech-logo/ai.svg',
        isAvailable: true
    }
];



/* --- dataLoader.js --- */

const DATA_DIR = 'src/data/';

const courseCache = {};

async function loadCourseData(courseId = 'c') {
    if (courseCache[courseId]) return courseCache[courseId];

    // Fast memory return from preloaded COURSES_DATA (essential for file:// protocol, instant for offline)
    if (typeof window !== 'undefined' && window.COURSES_DATA && window.COURSES_DATA[courseId]) {
        courseCache[courseId] = window.COURSES_DATA[courseId];
        return courseCache[courseId];
    }

    const url = `${DATA_DIR}${courseId}.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load course data for ${courseId}`);
        const data = await response.json();
        courseCache[courseId] = data;
        return data;
    } catch (error) {
        if (typeof window !== 'undefined' && window.COURSES_DATA && window.COURSES_DATA[courseId]) {
            courseCache[courseId] = window.COURSES_DATA[courseId];
            return courseCache[courseId];
        }
        console.error(`Error loading course ${courseId}:`, error);
        throw error;
    }
}

async function loadChapterList(courseId = 'c') {
    const data = await loadCourseData(courseId);
    return (data.chapters || []).map(c => ({ id: c.chapterId, title: c.chapterTitle }));
}

async function loadAllChapters(courseId = 'c') {
    const data = await loadCourseData(courseId);
    return data.chapters || [];
}

async function loadProjects(courseId = 'c') {
    const data = await loadCourseData(courseId);
    return data.projects || [];
}



/* --- components/sidebar.js --- */

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

function renderSidebar(chapters, activeChapterId, courseId = 'c', projects = [], categoryId = null) {
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



/* --- components/chapterView.js --- */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderChapterView(chapters, projects, courseId) {
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
                          topic.description
                            ? `<p class="topic-description">${escapeHtml(topic.description)}</p>`
                            : ""
                        }
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
    appliedai: "Applied AI Engineering",
  };
  return titles[courseId] || "Course";
}



/* --- components/landing.js --- */

/* ─── Per-course visual identity ─────────────────────────── */
const courseThemes = {
    'c': {
        gradient: 'linear-gradient(135deg, #4f6ef7 0%, #06d6a0 100%)',
        iconBg: 'rgba(79,110,247,0.14)',
        tagColor: '#4f6ef7',
    },
    'cpp': {
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #4f6ef7 100%)',
        iconBg: 'rgba(139,92,246,0.14)',
        tagColor: '#8b5cf6',
    },
    'dsa-cpp': {
        gradient: 'linear-gradient(135deg, #06d6a0 0%, #4f6ef7 100%)',
        iconBg: 'rgba(6,214,160,0.12)',
        tagColor: '#06d6a0',
    },
    'python': {
        gradient: 'linear-gradient(135deg, #f7b731 0%, #306998 100%)',
        iconBg: 'rgba(247,183,49,0.14)',
        tagColor: '#f7b731',
    },
    'java': {
        gradient: 'linear-gradient(135deg, #e76f00 0%, #5382a1 100%)',
        iconBg: 'rgba(231,111,0,0.14)',
        tagColor: '#e76f00',
    },
    'dart': {
        gradient: 'linear-gradient(135deg, #00589e 0%, #41c9ff 100%)',
        iconBg: 'rgba(0,88,158,0.14)',
        tagColor: '#00589e',
    },
    'flutter': {
        gradient: 'linear-gradient(135deg, #02569b 0%, #4fc3f7 100%)',
        iconBg: 'rgba(2,86,155,0.14)',
        tagColor: '#02569b',
    },
    'css': {
        gradient: 'linear-gradient(135deg, #264de4 0%, #2965f1 50%, #4fc3f7 100%)',
        iconBg: 'rgba(38,77,228,0.14)',
        tagColor: '#264de4',
    },
    'html': {
        gradient: 'linear-gradient(135deg, #e44d26 0%, #f16529 100%)',
        iconBg: 'rgba(228,77,38,0.14)',
        tagColor: '#e44d26',
    },
    'javascript': {
        gradient: 'linear-gradient(135deg, #f7df1e 0%, #e8d44d 100%)',
        iconBg: 'rgba(247,223,30,0.14)',
        tagColor: '#b8a900',
    },
    'appliedai': {
        gradient: 'linear-gradient(135deg, #7c3aed 0%, #4361ee 50%, #06b6d4 100%)',
        iconBg: 'rgba(124, 58, 237, 0.14)',
        tagColor: '#7c3aed',
    },
};

/* ─── SVG Icons ──────────────────────────────────────────── */
const icons = {
    arrowRight: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    send: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M13.5 7.5L1.5 1.5L5 7.5L1.5 13.5L13.5 7.5Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
    sun: `<svg class="sun-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="10" r="4"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41"/></svg>`,
    moon: `<svg class="moon-icon" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>`,
    check: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    star: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 8.5 4 10.5l.5-3.5L2 4.5 5.5 4 7 1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
    zap: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.5 1L3 9h4.5l-1 6L13 7H8l.5-6z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
    brain: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2.5C5.5 2.5 3.5 4.5 3.5 7c0 1.5.8 2.5.8 2.5s-.3 2 3.7 2 3.7-2 3.7-2 .8-1 .8-2.5c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6.5 5.5v4M9.5 5.5v4M8 5v5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    rocket: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5s3.5 3 3.5 7-3.5 6-3.5 6-3.5-2-3.5-6 3.5-7 3.5-7z" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="6.5" r="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M2.5 11s2 .5 4 2M13.5 11s-2 .5-4 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    user: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="3" stroke="currentColor" stroke-width="1.3"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    pin: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5c-3 0-5 2.2-5 5.5S8 14.5 8 14.5s5-4.2 5-7.5-2-5.5-5-5.5z" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="6.5" r="1.5" stroke="currentColor" stroke-width="1.3"/></svg>`,
    mail: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.5 4.5l6.5 4 6.5-4v9H1.5v-9z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M1.5 4.5l6.5 4 6.5-4" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
    messageDots: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="8" cy="10" r=".5" fill="currentColor"/><circle cx="12" cy="10" r=".5" fill="currentColor"/><circle cx="16" cy="10" r=".5" fill="currentColor"/></svg>`,
};

/* ─── Navbar ─────────────────────────────────────────────── */
function buildNavbar() {
    return `
    <nav class="lp-navbar" id="lp-navbar" role="navigation" aria-label="Main navigation">
        <div class="lp-nav-inner">
            <a href="#home" class="lp-logo" aria-label="Ramascript Home">
                <img src="src/img/logo.png" alt="Ramascript" class="lp-logo-mark" width="32" height="32">
                <span class="lp-logo-text">Ramascript</span>
            </a>

            <div class="lp-nav-links">
                <a href="#courses" class="lp-nav-link">Courses</a>
                <a href="#about"   class="lp-nav-link">About</a>
                <a href="#testimonials" class="lp-nav-link">Reviews</a>
                <a href="#contact" class="lp-nav-link">Contact</a>
            </div>

            <div class="lp-nav-actions">
                <button class="lp-theme-btn" id="lp-theme-toggle" aria-label="Toggle colour theme">
                    ${icons.sun}
                    ${icons.moon}
                </button>
                <button class="lp-hamburger" id="lp-hamburger" aria-label="Toggle menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Mobile menu lives OUTSIDE the nav so it never overlaps it -->
    <div class="lp-mobile-menu" id="lp-mobile-menu" role="navigation" aria-label="Mobile navigation">
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#testimonials">Reviews</a>
        <a href="#contact">Contact</a>
    </div>`;
}

/* ─── Hero ───────────────────────────────────────────────── */
function buildHero() {
    return `
    <header class="lp-hero" id="home">
        <!-- background canvas (orbs + grid) -->
        <div class="lp-bg-canvas" aria-hidden="true">
            <div class="lp-bg-mesh"></div>
            <div class="lp-bg-grid"></div>
            <div class="lp-orb lp-orb-1"></div>
            <div class="lp-orb lp-orb-2"></div>
            <div class="lp-orb lp-orb-3"></div>
        </div>

        <div class="lp-hero-content">


            <!-- headline -->
            <h1 class="lp-hero-title">
                Engineering & Applied AI<br>
                <span class="grad-text">from First Principles</span>
            </h1>

            <!-- subtitle -->
            <p class="lp-hero-sub">
                Deep, practical courses in Applied AI Engineering, Systems Programming, and Full-Stack Development.
                From LLMs, RAG, and AI Agents to C, C++, Python, and DSA.
            </p>

            <!-- CTA row -->
            <div class="lp-hero-cta">
                <a href="#courses" class="lp-btn-primary" id="hero-cta-primary">
                    Explore Courses
                    ${icons.arrowRight}
                </a>
                <a href="#about" class="lp-btn-ghost" id="hero-cta-secondary">
                    Learn More
                </a>
            </div>

            <!-- social proof strip -->
            <div class="lp-hero-strip">
                <div class="lp-strip-item">
                    <span class="lp-strip-icon">${icons.brain}</span>
                    <span>Applied AI & Autonomous Agents</span>
                </div>
                <div class="lp-strip-divider" aria-hidden="true"></div>
                <div class="lp-strip-item">
                    <span class="lp-strip-icon">${icons.zap}</span>
                    <span>First-principles systems</span>
                </div>
                <div class="lp-strip-divider" aria-hidden="true"></div>
                <div class="lp-strip-item">
                    <span class="lp-strip-icon">${icons.rocket}</span>
                    <span>Production capstone projects</span>
                </div>
            </div>
        </div>


    </header>`;
}

/* ─── Categories ───────────────────────────────────────── */
function buildCategories() {
    const cards = categories.map((cat, i) => {
        const courseCount = cat.courseIds.length;
        const courseLogos = cat.courseIds.map(id => {
            const c = courses.find(co => co.id === id);
            return c ? `<img src="${c.logo}" alt="${c.title}" class="lp-category-course-logo" title="${c.title}">` : '';
        }).join('');

        return `
        <div class="lp-category-card lp-reveal lp-delay-${Math.min(i+1,4)}"
             style="--card-gradient:${cat.gradient}"
             onclick="window.location.hash='${cat.id}'"
             role="button" tabindex="0" aria-label="${cat.title}">
            <div class="lp-category-icon" style="background:${cat.iconBg};border-color:${cat.tagColor}25">
                <img src="${cat.logo}" alt="${cat.title}" class="lp-category-logo">
            </div>
            <div class="lp-category-body">
                <h3 class="lp-category-name">${cat.title}</h3>
                <p class="lp-category-desc">${cat.description}</p>
                <div class="lp-category-logos">${courseLogos}</div>
                <div class="lp-category-meta">
                    <span class="lp-category-count">${courseCount} course${courseCount > 1 ? 's' : ''}</span>
                    <span class="lp-category-explore">Explore <span class="arrow">${icons.arrowRight}</span></span>
                </div>
            </div>
        </div>`;
    }).join('');

    return `
    <section id="courses" class="lp-section" style="position:relative;z-index:1;">
        <div class="lp-section-header">
            <span class="lp-section-eyebrow">Courses</span>
            <h2 class="lp-section-title lp-reveal">Pick your path</h2>
            <p class="lp-section-desc lp-reveal">
                Choose a category to explore our deep, practical courses.
            </p>
        </div>
        <div class="lp-categories-grid">${cards}</div>
    </section>`;
}

/* ─── Category Detail Page ──────────────────────────────── */
function renderCategoryPage(categoryId) {
    const container = document.getElementById('landing-view');
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) { window.location.hash = 'home'; return; }

    const catCourses = cat.courseIds.map(id => courses.find(c => c.id === id)).filter(Boolean);

    const cards = catCourses.map((course, i) => {
        const theme = courseThemes[course.id] || courseThemes['c'];
        const isReady = course.isAvailable;

        const footer = isReady
            ? `<span class="lp-status-available">
                    Start Learning <span class="arrow">${icons.arrowRight}</span>
               </span>
               <span class="lp-course-chip">Free access</span>`
            : `<span class="lp-status-soon">Coming Soon</span>`;

        const tags = course.tags.map(t =>
            `<span class="lp-tag" style="color:${theme.tagColor};background:${theme.tagColor}18;border-color:${theme.tagColor}30">${t}</span>`
        ).join('');

        return `
        <div class="lp-course-card ${isReady ? 'clickable' : 'disabled'} lp-reveal lp-delay-${Math.min(i+1,4)}"
             style="--card-gradient:${theme.gradient}"
             onclick="${isReady ? `window.location.hash='${categoryId}/${course.id}'` : ''}"
             role="${isReady ? 'button' : 'article'}"
             tabindex="${isReady ? '0' : '-1'}"
             aria-label="${course.title}">
            <div class="lp-course-icon" style="background:${theme.iconBg};border-color:${theme.tagColor}25">
                <img src="${course.logo}" alt="${course.title}" class="lp-course-logo">
            </div>
            <div class="lp-course-body">
                <h3 class="lp-course-name">${course.title}</h3>
                <p class="lp-course-desc">${course.description}</p>
                <div class="lp-course-tags">${tags}</div>
            </div>
            <div class="lp-course-footer">${footer}</div>
        </div>`;
    }).join('');

    container.innerHTML = `
        <div class="landing-page-wrapper">
            ${buildNavbar()}
            <section class="lp-hero" style="min-height:auto;padding:8rem 2rem 3rem;">
                <div class="lp-bg-canvas" aria-hidden="true">
                    <div class="lp-bg-mesh"></div>
                    <div class="lp-bg-grid"></div>
                    <div class="lp-orb lp-orb-1"></div>
                    <div class="lp-orb lp-orb-2"></div>
                </div>
                <div class="lp-hero-content" style="max-width:800px;">
                    <a href="#home" class="lp-hero-badge" style="cursor:pointer;text-decoration:none;">
                        <span class="lp-badge-dot"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2l4 4-4 4-4-4 4-4z" fill="currentColor"/></svg></span>
                        Back to Home
                    </a>
                    <h1 class="lp-hero-title" style="font-size:clamp(2rem,5vw,3.5rem);">
                        <span class="grad-text">${cat.title}</span>
                    </h1>
                    <p class="lp-hero-sub">${cat.description}</p>
                </div>
            </section>
            <section class="lp-section" style="position:relative;z-index:1;">
                <div class="lp-section-header">
                    <span class="lp-section-eyebrow">${cat.title}</span>
                    <h2 class="lp-section-title lp-reveal">Choose a course</h2>
                </div>
                <div class="lp-courses-grid">${cards}</div>
            </section>
            ${buildFooter()}
        </div>
    `;

    setTimeout(() => _initCategoryPage(), 0);
}

function _initCategoryPage() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeBtn = document.getElementById('lp-theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    const burger = document.getElementById('lp-hamburger');
    const mMenu = document.getElementById('lp-mobile-menu');
    if (burger && mMenu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            mMenu.classList.toggle('active');
        });
        mMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                burger.classList.remove('active');
                mMenu.classList.remove('active');
            });
        });
    }

    const revealEls = document.querySelectorAll('.lp-reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }

    document.querySelectorAll('.lp-course-card.clickable').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - r.left}px`);
            card.style.setProperty('--my', `${e.clientY - r.top}px`);
        });
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

/* ─── About / Features ───────────────────────────────────── */
function buildAbout() {
    const features = [
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2a4 4 0 014 4c0 1.9-1.3 3.5-3.1 3.9l1.6 4.1h2a3 3 0 013 3v2H4.5v-2a3 3 0 013-3h2l1.6-4.1A4.01 4.01 0 018 6a4 4 0 014-4z" stroke="currentColor" stroke-width="1.5"/></svg>', color: 'amber', title: 'Applied AI & Agents',   desc: 'Build with real LLM APIs, vector databases, RAG pipelines, function calling, MCP, and autonomous agent loops.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>', color: 'blue',   title: 'First Principles',    desc: 'Understand how CPUs, memory, tokenizers, and neural weights execute under the hood without magic.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 15l-6 6M9 11L5 7l3-3 4 4M12 12l6 6M15 9l4-4-3-3-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>', color: 'violet', title: 'Production Capstones', desc: 'Deploy real-world systems: memory allocators, concurrent servers, and autonomous multi-agent pipelines.' },
        { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L5 13h6l-1 9 8-11h-5l1-9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>', color: 'pink',   title: 'Modern & Interview Ready', desc: 'Covering core systems, algorithms, and AI engineering patterns evaluated at top engineering teams.' },
    ];

    const cards = features.map((f, i) => `
    <div class="lp-feature-card lp-reveal lp-delay-${i + 1}">
        <div class="lp-feature-icon ${f.color}">${f.icon}</div>
        <h3 class="lp-feature-title">${f.title}</h3>
        <p class="lp-feature-desc">${f.desc}</p>
    </div>`).join('');

    return `
    <section id="about" style="position:relative;z-index:1;background:rgba(255,255,255,0.015);border-top:1px solid rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.05);">
        <div class="lp-section" style="max-width:1200px;margin:0 auto;">
            <div class="lp-section-header">
                <span class="lp-section-eyebrow">About</span>
                <h2 class="lp-section-title lp-reveal">Built for engineers,<br>by engineers.</h2>
                <p class="lp-section-desc lp-reveal">
                    We believe true engineering skill comes from understanding
                    how computers actually work — not just how to stitch together frameworks.
                </p>
            </div>

            <div class="lp-features-grid">${cards}</div>

            <div class="lp-stats-row">
                <div class="lp-stat-card lp-reveal lp-delay-1">
                    <div class="lp-stat-num">15+</div>
                    <div class="lp-stat-label">Chapters per course</div>
                </div>
                <div class="lp-stat-card lp-reveal lp-delay-2">
                    <div class="lp-stat-num">300+</div>
                    <div class="lp-stat-label">Practice problems</div>
                </div>
                <div class="lp-stat-card lp-reveal lp-delay-3">
                    <div class="lp-stat-num">5</div>
                    <div class="lp-stat-label">Capstone projects</div>
                </div>
                <div class="lp-stat-card lp-reveal lp-delay-4">
                    <div class="lp-stat-num">0₹</div>
                    <div class="lp-stat-label">Cost to start</div>
                </div>
            </div>
        </div>
    </section>`;
}

/* ─── Testimonials ───────────────────────────────────────── */
function buildTestimonials() {
    const reviews = [
        { initials: 'A',  name: 'Aditya',           role: 'Web Developer',            stars: 5, text: "From HTML semantics to responsive layouts and JS — every concept clicked. The project-based approach is exceptional." },
        { initials: 'R',  name: 'Rohan',            role: 'Full-Stack Developer',     stars: 5, text: "Took C, C++ and Web Dev. The first-principles drills sharpened my problem-solving like nothing else." },
        { initials: 'P',  name: 'Priyanshi',        role: 'Software Engineer',        stars: 5, text: "Clear, deep explanations of memory, systems, and algorithms. Made me truly confident in technical interviews." },
    ];

    const cards = reviews.map((r, i) => {
        const stars = Array(r.stars).fill(icons.star).join('');
        return `
        <div class="lp-testimonial-card lp-reveal lp-delay-${i + 1}">
            <div class="lp-stars" aria-label="${r.stars} stars">${stars}</div>
            <p class="lp-quote">${r.text}</p>
            <div class="lp-author">
                <div class="lp-avatar" aria-hidden="true">${r.initials}</div>
                <div>
                    <div class="lp-author-name">${r.name}</div>
                    <div class="lp-author-role">${r.role}</div>
                </div>
            </div>
        </div>`;
    }).join('');

    const moreCard = `
        <div class="lp-testimonial-card lp-more-card lp-reveal">
            <div class="lp-more-card-content">
                <span class="lp-more-icon">${icons.messageDots}</span>
                <div class="lp-more-text">
                    <strong>And many more…</strong>
                    <span>Join <strong>100+</strong> students who have transformed their skills with Ramascript.</span>
                </div>
                <a href="#courses" class="lp-btn-primary" style="font-size:0.85rem;padding:0.75rem 1.5rem;white-space:nowrap;">
                    Start Learning
                    ${icons.arrowRight}
                </a>
            </div>
        </div>`;

    return `
    <section id="testimonials" class="lp-section" style="position:relative;z-index:1;">
        <div class="lp-section-header">
            <span class="lp-section-eyebrow">Testimonials</span>
            <h2 class="lp-section-title lp-reveal">What our students say</h2>
            <p class="lp-section-desc lp-reveal">Real feedback from engineers who levelled up.</p>
        </div>
        <div class="lp-testimonials-grid">${cards}${moreCard}</div>
    </section>`;
}

/* ─── Contact ────────────────────────────────────────────── */
function buildContact() {
    return `
    <section id="contact" style="position:relative;z-index:1;background:rgba(255,255,255,0.015);border-top:1px solid rgba(255,255,255,0.05);">
        <div class="lp-section" style="max-width:1200px;margin:0 auto;">
            <div class="lp-section-header">
                <span class="lp-section-eyebrow">Contact</span>
                <h2 class="lp-section-title lp-reveal">Get in touch</h2>
                <p class="lp-section-desc lp-reveal">
                    Have a question about a course or want to suggest a topic? We'd love to hear from you.
                </p>
            </div>

            <div class="lp-contact-grid">
                <!-- info -->
                <div class="lp-contact-intro lp-reveal lp-reveal-left">
                    <p>Have questions about courses or want guidance? Send a message.</p>
                    <div class="lp-contact-tiles">
                        <div class="lp-contact-tile">
                            <div class="lp-tile-icon">${icons.user}</div>
                            <div>
                                <div class="lp-tile-label">Instructor</div>
                                <div class="lp-tile-value">Ramanand Kumar</div>
                            </div>
                        </div>
                        <div class="lp-contact-tile">
                            <div class="lp-tile-icon">${icons.pin}</div>
                            <div>
                                <div class="lp-tile-label">Location</div>
                                <div class="lp-tile-value">Chennai, TN</div>
                            </div>
                        </div>
                        <div class="lp-contact-tile">
                            <div class="lp-tile-icon">${icons.mail}</div>
                            <div>
                                <div class="lp-tile-label">Email</div>
                                <div class="lp-tile-value">ramanand.in7@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- form -->
                <div class="lp-contact-form-wrap lp-reveal lp-reveal-right">

                    <form name="contact" onsubmit="lpThank(event)">
                        <div class="lp-form-row">
                            <div class="lp-form-group">
                                <label for="lp-name">Name</label>
                                <input type="text" id="lp-name" name="Name" placeholder="Your name" required>
                            </div>
                            <div class="lp-form-group">
                                <label for="lp-email">Email</label>
                                <input type="email" id="lp-email" name="Email" placeholder="you@example.com" required>
                            </div>
                        </div>
                        <div class="lp-form-group">
                            <label for="lp-subject">Subject</label>
                            <input type="text" id="lp-subject" name="Subject" placeholder="What's this about?" required>
                        </div>
                        <div class="lp-form-group">
                            <label for="lp-msg">Message</label>
                            <textarea id="lp-msg" name="Message" rows="4" placeholder="Your message…" required></textarea>
                        </div>
                        <p id="lp-form-status" class="lp-form-status" aria-live="polite"></p>
                        <button type="submit" class="lp-btn-primary lp-form-submit" id="lp-send-btn">
                            Send Message
                            ${icons.send}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>`;
}

/* ─── Footer ─────────────────────────────────────────────── */
function buildFooter() {
    return `
    <footer class="lp-footer">
        <div class="lp-footer-inner">
            <div>
                <a href="#home" class="lp-logo" style="text-decoration:none;display:inline-flex;align-items:center;gap:.5rem;margin-bottom:.35rem;">
                    <img src="src/img/logo.png" alt="Ramascript" class="lp-logo-mark" style="width:28px;height:28px;border-radius:6px;">
                    <span class="lp-logo-text" style="font-size:1.05rem;">Ramascript</span>
                </a>
                <div class="lp-footer-copy" style="margin-top:.25rem;">© ${new Date().getFullYear()} — All rights reserved.</div>
            </div>
            <div class="lp-footer-links">
                <a href="#courses">Courses</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
            <div class="lp-footer-social">
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="GitHub">GitHub</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
        </div>
    </footer>`;
}

/* ─── Main render ────────────────────────────────────────── */
function renderLandingPage() {
    const container = document.getElementById('landing-view');

    container.innerHTML = `
        <div class="landing-page-wrapper">
            ${buildNavbar()}
            ${buildHero()}
            ${buildCategories()}
            ${buildAbout()}
            ${buildTestimonials()}
            ${buildContact()}
            ${buildFooter()}
        </div>
    `;

    // Defer all JS enhancements
    setTimeout(() => _initLanding(), 0);
}

/* ─── Interaction Logic ──────────────────────────────────── */

// Guard: window-level listeners should only be attached once,
// even if renderLandingPage() is called multiple times (back-navigation).
let _landingInitialised = false;

function _initLanding() {

    /* Theme — apply saved preference immediately */
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeBtn = document.getElementById('lp-theme-toggle');
    if (themeBtn) {
        // Replacing the node removes any previously attached listeners on old renders
        themeBtn.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    /* Hamburger / mobile menu */
    const burger = document.getElementById('lp-hamburger');
    const mMenu  = document.getElementById('lp-mobile-menu');
    if (burger && mMenu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            mMenu.classList.toggle('active');
        });
        // Close menu when any link inside it is clicked
        mMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                burger.classList.remove('active');
                mMenu.classList.remove('active');
            });
        });
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mMenu.classList.contains('active') &&
                !mMenu.contains(e.target) &&
                !burger.contains(e.target)) {
                burger.classList.remove('active');
                mMenu.classList.remove('active');
            }
        });
    }

    /* Window-level listeners — attach only once */
    if (!_landingInitialised) {
        _landingInitialised = true;

        /* Navbar scroll glass effect */
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('lp-navbar');
            if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });

        /* Hero parallax */
        window.addEventListener('scroll', () => {
            const heroContent = document.querySelector('.lp-hero-content');
            if (!heroContent) return;
            const s = window.scrollY;
            heroContent.style.transform = `translateY(${s * 0.22}px)`;
            heroContent.style.opacity   = String(Math.max(0, 1 - s / 650));
        }, { passive: true });
    }

    /* Fire the scroll callbacks once on init so state is correct immediately */
    const navbar = document.getElementById('lp-navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);

    /* Scroll-reveal (IntersectionObserver) */
    const revealEls = document.querySelectorAll('.lp-reveal');
    if ('IntersectionObserver' in window && revealEls.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('visible'));
    }

    /* Course card spotlight glow */
    document.querySelectorAll('.lp-course-card.clickable').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            card.style.setProperty('--mx', `${e.clientX - r.left}px`);
            card.style.setProperty('--my', `${e.clientY - r.top}px`);
        });

        // Keyboard accessibility
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}


/* ─── Contact form handlers ──────────────────────────────── */
function _sendToGoogle(form) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxPpEHNHYnva1v3Q9_RtK6bbgz9FocgO6G2BIz2qRzwB0_AevWbXE1nvGQo4cGk9ub1/exec";
    const fd = new FormData(form);
    fd.append("ToEmail", "ramanand.in7@gmail.com");
    fd.append("Source", "Ramascript Institute");
    fetch(scriptURL, { method: "POST", body: fd })
        .then(r => r.json())
        .then(d => console.log("Success:", d))
        .catch(e => console.error("Error:", e));
}

function _showStatus(el, msg, type, ms = 4500) {
    el.textContent = msg;
    el.className   = `lp-form-status ${type}`;
    setTimeout(() => { el.textContent = ''; el.className = 'lp-form-status'; }, ms);
}

window.lpThank = function (event) {
    event.preventDefault();
    const name  = document.getElementById('lp-name');
    const email = document.getElementById('lp-email');
    const sub   = document.getElementById('lp-subject');
    const msg   = document.getElementById('lp-msg');
    const p     = document.getElementById('lp-form-status');
    const btn   = document.getElementById('lp-send-btn');

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value || !email.value || !sub.value || !msg.value) {
        _showStatus(p, 'Please fill in all fields.', 'error');
        return;
    }
    if (!emailRe.test(email.value)) {
        _showStatus(p, 'Please enter a valid email address.', 'error');
        return;
    }

    btn.disabled = true;
    btn.innerHTML = 'Sending…';

    _sendToGoogle(document.forms['contact']);
    name.value = email.value = sub.value = msg.value = '';

    setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = `Send Message ${icons.send}`;
    }, 2000);

    _showStatus(p, `${icons.check} Message sent! We'll get back to you soon.`, 'success', 5000);
};



/* --- app.js --- */

class App {
    constructor() {
        this.chapters = [];
        this.projects = [];
        this.init();
    }

    async init() {
        // Apply saved theme FIRST — before any rendering — so the
        // correct theme is always visible regardless of the current route.
        this.applyTheme();

        this.setupScrollReveal();
        this.setupMobileMenu();
        this.setupScrollSpy();
        this.setupCardGlow();
        this.setupSmoothAnchors();
        this.setupProjectJumpLinks();
        this.handleRouting();
        window.addEventListener('hashchange', () => this.handleRouting());
    }

    applyTheme() {
        const saved = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', saved);
    }

    setupMobileMenu() {
        const menuBtn = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        if (menuBtn && sidebar) {
            menuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });

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

    setupScrollSpy() {
        let ticking = false;
        document.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateActiveChapter();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    setupScrollReveal() {
        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

        const scaleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in-scale');
                    scaleObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

        const scan = () => {
            document.querySelectorAll('.chapter-section:not(.animate-in):not(.animate-in-scale)').forEach(el => observer.observe(el));
            document.querySelectorAll('.topic-card:not(.animate-in):not(.animate-in-scale)').forEach(el => observer.observe(el));
            document.querySelectorAll('.project-card:not(.animate-in):not(.animate-in-scale)').forEach(el => observer.observe(el));
            document.querySelectorAll('.stat-card:not(.animate-in):not(.animate-in-scale)').forEach(el => scaleObserver.observe(el));
            document.querySelectorAll('.testimonial-card:not(.animate-in):not(.animate-in-scale)').forEach(el => observer.observe(el));
        };

        scan();

        const mo = new MutationObserver(scan);
        const contentArea = document.getElementById('content-area');
        const landingView = document.getElementById('landing-view');
        if (contentArea) mo.observe(contentArea, { childList: true, subtree: true });
        if (landingView) mo.observe(landingView, { childList: true, subtree: true });
    }

    setupCardGlow() {
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.course-card.clickable').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                card.style.setProperty('--mouse-x', x + '%');
                card.style.setProperty('--mouse-y', y + '%');
            });
        });
    }

    setupSmoothAnchors() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;
            const href = link.getAttribute('href');
            if (href === '#home' || this.isCourseRoute(href) || this.isCategoryRoute(href)) return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    setupProjectJumpLinks() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-scroll-to-project]');
            if (link) {
                e.preventDefault();
                const projectId = link.dataset.scrollToProject;
                const target = document.getElementById(`project-${projectId}`);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    isCategoryRoute(hash) {
        const catId = hash.replace('#', '');
        return categories.some(c => c.id === catId);
    }

    isCourseRoute(hash) {
        const path = hash.replace('#', '');
        const parts = path.split('/');
        if (parts.length === 2) {
            return categories.some(c => c.id === parts[0]) &&
                   categories.some(c => c.courseIds.includes(parts[1]));
        }
        return false;
    }

    updateActiveChapter() {
        const sections = document.querySelectorAll('.chapter-section');
        const projectCards = document.querySelectorAll('.project-card[data-project-idx]');
        const navLinks = document.querySelectorAll('.nav-link[data-id]');
        const projectLinks = document.querySelectorAll('.nav-project-link[data-project-idx]');
        let currentId = null;
        let currentProjectIdx = null;

        let inProjectSection = false;
        if (projectCards.length > 0) {
            const firstProject = projectCards[0];
            const firstRect = firstProject.getBoundingClientRect();
            if (firstRect.top <= 200) {
                inProjectSection = true;
            }
        }

        if (inProjectSection) {
            projectCards.forEach(card => {
                const rect = card.getBoundingClientRect();
                if (rect.top <= 200) {
                    currentProjectIdx = card.dataset.projectIdx;
                }
            });
        } else {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 180) {
                    currentId = section.dataset.chapterId;
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.id == currentId);
        });

        projectLinks.forEach(link => {
            link.classList.toggle('active', currentProjectIdx !== null && link.dataset.projectIdx === currentProjectIdx);
        });
    }

    async handleRouting() {
        const hash = window.location.hash;
        const path = hash.replace('#', '');
        const landingView = document.getElementById('landing-view');
        const syllabusView = document.getElementById('syllabus-view');

        // Section anchors on the landing page
        const sectionAnchors = ['#courses', '#about', '#testimonials', '#contact'];
        if (sectionAnchors.includes(hash)) {
            if (landingView.classList.contains('hidden')) {
                landingView.classList.remove('hidden');
                syllabusView.classList.add('hidden');
                this.currentCourseId = null;
                renderLandingPage();
                setTimeout(() => {
                    const el = document.querySelector(hash);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 120);
            } else {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            return;
        }

        // Home
        if (!hash || hash === '#home') {
            landingView.classList.remove('hidden');
            syllabusView.classList.add('hidden');
            this.currentCourseId = null;
            renderLandingPage();
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
            return;
        }

        // Parse route: could be "categoryId" or "categoryId/courseId"
        const parts = path.split('/');
        const categoryId = parts[0];
        const courseId = parts.length === 2 ? parts[1] : null;
        const cat = categories.find(c => c.id === categoryId);

        if (!cat) {
            // Unknown route — go home
            window.location.hash = 'home';
            return;
        }

        if (courseId && cat.courseIds.includes(courseId)) {
            // Course syllabus view
            landingView.classList.add('hidden');
            syllabusView.classList.remove('hidden');

            if (this.currentCourseId !== courseId) {
                this.currentCourseId = courseId;
                this.currentCategoryId = categoryId;
                await this.loadCourseContent(courseId, null, categoryId);
            }
        } else {
            // Category page
            landingView.classList.remove('hidden');
            syllabusView.classList.add('hidden');
            this.currentCourseId = null;
            this.currentCategoryId = categoryId;
            renderCategoryPage(categoryId);
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
        }
    }

    async loadCourseContent(courseId, scrollToChapterId = null, categoryId = null) {
        const contentArea = document.getElementById('content-area');

        contentArea.innerHTML = `<div class="loading-state"><div class="loader"></div><p>Loading course content...</p></div>`;

        try {
            const [chapters, projects] = await Promise.all([
                loadAllChapters(courseId),
                loadProjects(courseId)
            ]);

            this.chapters = chapters;
            this.projects = projects;

            const sidebarData = chapters.map(c => ({ id: c.chapterId, title: c.chapterTitle }));
            const activeId = scrollToChapterId || (chapters.length > 0 ? chapters[0].chapterId : null);
            renderSidebar(sidebarData, activeId, courseId, projects, categoryId);
            renderChapterView(chapters, projects, courseId);

            if (scrollToChapterId) {
                setTimeout(() => this.scrollToChapter(scrollToChapterId), 150);
            } else if (chapters.length > 0) {
                setTimeout(() => this.scrollToChapter(chapters[0].chapterId), 150);
            }
        } catch (err) {
            console.error(err);
            contentArea.innerHTML = `<p class="error-message">Failed to load course content.</p>`;
        }
    }

    scrollToChapter(chapterId) {
        const section = document.querySelector(`[data-chapter-id="${chapterId}"]`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

const app = new App();

