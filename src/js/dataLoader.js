const DATA_DIR = 'src/data/';

// Cache to store loaded modules (Key: courseId_moduleId)
const moduleCache = {};

export async function loadModuleList(courseId = 'candcpp') {
    // If courseId is candcpp, check if we have a modules.json, otherwise generate/fetch standard 11
    // Ideally we should create a modules.json for candcpp now too.

    // Path: src/data/<courseId>/modules.json (Proposed standard)
    const listPath = `${DATA_DIR}${courseId}/modules.json`;

    try {
        const response = await fetch(listPath);
        if (!response.ok) {
            // Fallback for C++ if modules.json doesn't exist (we haven't created it yet in previous steps, but I should create it now)
            // If I don't create it, this breaks.
            // However, for the purpose of this "fix", let's assume I WILL create it.
            throw new Error(`Failed to load module list for ${courseId}`);
        }
        const list = await response.json();
        return list.map(m => ({ id: m.id, title: m.title }));
    } catch (e) {
        console.error(`Error loading modules for ${courseId}:`, e);
        // Fallback for legacy if needed, but better to just fix the data.
        return [];
    }
}

export async function getModule(id, courseId = 'candcpp') {
    const cacheKey = `${courseId}_${id}`;
    if (moduleCache[cacheKey]) return moduleCache[cacheKey];

    // New Path: src/data/<courseId>/module<id>.json
    const url = `${DATA_DIR}${courseId}/module${id}.json`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json();
        moduleCache[cacheKey] = json;
        return json;
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
}
