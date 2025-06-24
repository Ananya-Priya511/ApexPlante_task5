
const courseData = {
  web: {
    title: "Web Development",
    video: "https://www.youtube.com/embed/Q33KBiDriJY",
    lectures: [
      "Intro to HTML",
      "CSS Basics",
      "JavaScript Intro",
      "Responsive Design",
      "Final Project"
    ]
  },
  js: {
    title: "JavaScript Mastery",
    video: "https://www.youtube.com/embed/hdI2bqOjy3c",
    lectures: [
      "Variables and Data Types",
      "Functions & Scope",
      "DOM Manipulation",
      "Events & Listeners",
      "API Handling"
    ]
  },
  python: {
    title: "Python Programming",
    video: "https://www.youtube.com/embed/rfscVS0vtbw",
    lectures: [
      "Syntax & Variables",
      "Conditionals",
      "Loops",
      "Functions",
      "OOP Concepts"
    ]
  },
  react: {
    title: "React JS",
    video: "https://www.youtube.com/embed/bMknfKXIFA8",
    lectures: [
      "JSX & Components",
      "Props & State",
      "Hooks",
      "Forms & Events",
      "Final React App"
    ]
  },
  ml: {
    title: "Machine Learning",
    video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
    lectures: [
      "Linear Regression",
      "Classification",
      "Clustering",
      "Model Evaluation",
      "Capstone ML Project"
    ]
  },
  sql: {
    title: "MySQL",
    video: "https://www.youtube.com/embed/HXV3zeQKqGY",
    lectures: [
      "SQL Basics",
      "Tables & Queries",
      "Joins",
      "Aggregations",
      "Database Design"
    ]
  }
};

// Check if on course-detail.html
if (window.location.href.includes("course-detail.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("course");

  const course = courseData[courseId];

  if (course) {
    document.getElementById("course-title").innerText = course.title;
    document.getElementById("course-video").src = course.video;

    const lectureList = document.getElementById("lecture-list");
    course.lectures.forEach(lecture => {
      const li = document.createElement("li");
      li.innerHTML = `<input type="checkbox" /> ${lecture}`;
      lectureList.appendChild(li);
    });
  } else {
    document.getElementById("course-title").innerText = "Course not found!";
  }
}

