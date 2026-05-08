# Institute Course Portal

A static course syllabus explorer built for Ramascript. It provides a landing page with course cards and a syllabus browser for C/C++ and Python modules.

## Features

- Landing page with course information, about section, testimonials, and contact form
- Course routing using hash URLs
- Sidebar module navigation for selected course
- Module content rendered from JSON data files
- Support for both C/C++ chapter-based modules and Python course modules
- Mobile sidebar toggle and responsive UI

## Project Structure

- `index.html` — main page entry point
- `src/css/` — styling for the landing page and syllabus view
- `src/js/` — application logic
  - `app.js` — router, course view control, mobile menu handling
  - `dataLoader.js` — loads `modules.json` and individual module JSON files
  - `components/landing.js` — landing page rendering
  - `components/sidebar.js` — sidebar navigation rendering
  - `components/moduleView.js` — module content rendering
  - `data/courses.js` — available courses metadata
- `src/data/` — course content JSON
  - `candcpp/` — C/C++ course modules and `modules.json`
  - `python/` — Python course modules and `modules.json`

## How It Works

- The app uses hash-based routes like:
  - `#home` — landing page
  - `#course/candcpp` — C/C++ course overview
  - `#course/candcpp/module/1` — C/C++ module 1
  - `#course/python` — Python course overview
  - `#course/python/module/1` — Python module 1
- `loadModuleList(courseId)` reads `src/data/<courseId>/modules.json`
- `getModule(id, courseId)` fetches `src/data/<courseId>/module<id>.json`
- Module views render chapters, topics, assignments, and final project details

## Run Locally

Because the site loads JSON data using `fetch`, you should serve it from a local web server instead of opening `index.html` directly.

From the project folder:

```bash
cd /Users/ramascript/Work/Rama/playground/#MINE/institute
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

- The landing page course list is defined in `src/js/data/courses.js`
- C/C++ has 11 modules, while Python has 15 modules
- The `dsa` course is present in the course list as a placeholder and is marked `isAvailable: false`
- Module content is JSON-driven, so additional courses/modules can be added by updating `modules.json` and adding new `moduleX.json` files

## Suggested Improvements

- Add a real `dsa` course dataset
- Improve error handling when a module JSON file is missing
- Add search/filter support for modules
- Add dark mode and more polished landing page animations

## License

Use freely for learning and project reference.
