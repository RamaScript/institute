const DATA_DIR = 'src/data/';

// Cache to store loaded modules
const moduleCache = {};

export async function loadModuleList() {
    // Since we don't have a single "index" json, we'll assume we know the count (11).
    // Or we could fetch them one by one.
    // Ideally, for a real app, we'd have a `modules.json` index.
    // For this constraint, we will iterate 1 to 11.

    const modules = [];
    for (let i = 1; i <= 11; i++) {
        try {
            const data = await getModule(i);
            modules.push({
                id: data.moduleId,
                title: data.moduleTitle
            });
        } catch (e) {
            console.error(`Failed to load module ${i}`, e);
        }
    }
    return modules;
}

export async function getModule(id) {
    if (moduleCache[id]) return moduleCache[id];

    try {
        const response = await fetch(`${DATA_DIR}module${id}.json`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const json = await response.json();
        moduleCache[id] = json;
        return json;
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error;
    }
}
