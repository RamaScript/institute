# Run from repo root AFTER apply_patch.py:  python3 reorder.py
import json, copy

def load(n): return json.load(open(f"src/data/{n}.json"))
def save(n, d): json.dump(d, open(f"src/data/{n}.json", "w"), indent=2, ensure_ascii=False)
def by_title(d): return {c["chapterTitle"]: c for c in d["chapters"]}
def topics(ch, *names): return [t for t in ch["topics"] if t["topicTitle"] in names]
def renumber(d):
    for i, c in enumerate(d["chapters"], 1): c["chapterId"] = i

# ---------- CSS ----------
css = load("css"); c = by_title(css)
if "Selectors & Variables" not in str(c) and "Selectors, Variables & Modern CSS" in c:
    old = c.pop("Selectors, Variables & Modern CSS")
    sel = {"chapterTitle": "Selectors, Pseudo-classes & Specificity",
           "topics": topics(old, "Combinators & Attribute Selectors", "Pseudo-classes & Pseudo-elements", "Specificity & The Cascade"),
           "assignment": {"totalQuestions": 5,
             "theory": ["Rank these selectors by specificity: #id, .class, div, inline style.",
                        "What is the difference between a pseudo-class and a pseudo-element?"],
             "practical": ["Style a list so every odd item has a different background using :nth-child.",
                           "Create a custom tooltip using ::after and :hover.",
                           "Fix a stylesheet with conflicting rules using specificity, without !important."]}}
    var = {"chapterTitle": "CSS Variables & Modern CSS",
           "topics": topics(old, "CSS Variables (Custom Properties)", "Modern CSS Functions", "Dark Mode & Theming"),
           "assignment": {"totalQuestions": 4,
             "theory": ["Why use CSS variables instead of repeating values?",
                        "What does the prefers-color-scheme media query detect?"],
             "practical": ["Build a light/dark theme toggle powered by CSS variables.",
                           "Make a heading that scales smoothly between 24px and 48px using clamp()."]}}
    order = ["Basics of CSS & Text Properties", "The Box Model & Display Properties",
             "Relative Units, Positioning & Z-Index"]
    first = [c[t] for t in order]
    new = first + [sel, c["Flexbox Layouts & Media Queries"], c["CSS Grid & Modern Layout"], var,
                   c["Advanced CSS (Transitions, Transforms, Animations)"], c["Professional CSS Workflow"]]
    css["chapters"] = new; renumber(css); save("css", css); print("css reordered")
else: print("css already done")

# ---------- JS ----------
js = load("javascript"); c = by_title(js)
if "Scope, Closures & Modern ES6+" in c:
    old10 = c.pop("Scope, Closures & Modern ES6+"); old11 = c.pop("Debugging, Tooling & Project Workflow")
    a = {"chapterTitle": "Scope, Closures & the 'this' Keyword",
         "topics": topics(old10, "Scope, Hoisting & Closures", "The 'this' Keyword"),
         "assignment": {"totalQuestions": 4,
           "theory": ["What is a closure? Give a real use case.", "Explain hoisting with let versus var.",
                      "How does this behave in an arrow function?"],
           "practical": ["Create a counter using a closure with private state."]}}
    b = {"chapterTitle": "Objects & Modern ES6+ Syntax",
         "topics": topics(old10, "Destructuring, Spread & Rest", "Objects in Depth"),
         "assignment": {"totalQuestions": 5,
           "theory": ["What is the difference between a shallow and a deep copy?", "What do ?. and ?? do?"],
           "practical": ["Use destructuring and spread to merge two user objects.",
                         "Use optional chaining to safely read a deeply nested API response.",
                         "Remove duplicates from an array using Set."]}}
    m = {"chapterTitle": "Modules, Debugging & Project Workflow",
         "topics": topics(old10, "ES Modules") + old11["topics"],
         "assignment": {"totalQuestions": 7,
           "theory": ["What problem do ES modules solve?"] + old11["assignment"]["theory"],
           "practical": ["Split a small app into three ES modules."] + old11["assignment"]["practical"]}}
    ch = js["chapters"]
    five = [x for x in ch if x["chapterTitle"] not in (old10["chapterTitle"], old11["chapterTitle"])]
    js["chapters"] = five[:5] + [a, b] + five[5:] + [m]
    renumber(js); save("javascript", js); print("js reordered")
else: print("js already done")