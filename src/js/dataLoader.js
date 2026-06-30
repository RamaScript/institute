const DATA_DIR = 'src/data/';

const courseCache = {};

export async function loadCourseData(courseId = 'c') {
    if (courseCache[courseId]) return courseCache[courseId];

    const url = `${DATA_DIR}${courseId}.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to load course data for ${courseId}`);
        const data = await response.json();
        courseCache[courseId] = data;
        return data;
    } catch (error) {
        console.error(`Error loading course ${courseId}:`, error);
        throw error;
    }
}

export async function loadChapterList(courseId = 'c') {
    const data = await loadCourseData(courseId);
    return (data.chapters || []).map(c => ({ id: c.chapterId, title: c.chapterTitle }));
}

export async function loadAllChapters(courseId = 'c') {
    const data = await loadCourseData(courseId);
    return data.chapters || [];
}

export async function loadProjects(courseId = 'c') {
    const data = await loadCourseData(courseId);
    return data.projects || [];
}
