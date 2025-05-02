const courses = [
  { name: "Math 101", schedule: "Monday 9am-12pm" },
  { name: "Physics 101", schedule: "Monday 12pm-3pm" },
  { name: "Computer Science 101", schedule: "Monday 3pm-6pm" },
  { name: "Chemistry 101", schedule: "Monday 6pm-9pm" },
  { name: "Biology 101", schedule: "Monday 9am-12pm" },

  { name: "History 101", schedule: "Tuesday 9am-12pm" },
  { name: "Economics 101", schedule: "Tuesday 12pm-3pm" },
  { name: "Psychology 101", schedule: "Tuesday 3pm-6pm" },
  { name: "Sociology 101", schedule: "Tuesday 6pm-9pm" },
  { name: "Art 101", schedule: "Tuesday 9am-12pm" },

  { name: "Literature 101", schedule: "Wednesday 9am-12pm" },
  { name: "Philosophy 101", schedule: "Wednesday 12pm-3pm" },
  { name: "Political Science 101", schedule: "Wednesday 3pm-6pm" },
  { name: "Geography 101", schedule: "Wednesday 6pm-9pm" },
  { name: "Music 101", schedule: "Wednesday 9am-12pm" },

  { name: "Engineering 101", schedule: "Thursday 9am-12pm" },
  { name: "Design 101", schedule: "Thursday 12pm-3pm" },
  { name: "Business 101", schedule: "Thursday 3pm-6pm" },
  { name: "Management 101", schedule: "Thursday 6pm-9pm" },
  { name: "Marketing 101", schedule: "Thursday 9am-12pm" },

  { name: "Law 101", schedule: "Friday 9am-12pm" },
  { name: "Communication 101", schedule: "Friday 12pm-3pm" },
  { name: "Journalism 101", schedule: "Friday 3pm-6pm" },
  { name: "Health 101", schedule: "Friday 6pm-9pm" },
  { name: "Mathematics 102", schedule: "Friday 9am-12pm" },
];

// Function to fetch the timetable based on the selected day
function getTimetable() {
  const selectedDay = document.getElementById("day-select").value;
  const timetableElement = document.getElementById("timetable");
  const selectedDayElement = document.getElementById("selected-day");
  selectedDayElement.textContent = selectedDay;

  // Filter courses based on the selected day
  const filteredCourses = courses.filter(course => course.schedule.toLowerCase().includes(selectedDay.toLowerCase()));

  // Clear any previous timetable
  timetableElement.innerHTML = "";

  if (filteredCourses.length === 0) {
    timetableElement.innerHTML = "<li>No courses found for this day.</li>";
  } else {
    // Display courses for the selected day
    filteredCourses.forEach(course => {
      const li = document.createElement("li");
      li.textContent = `${course.name} - ${course.schedule}`;
      timetableElement.appendChild(li);
    });
  }
}

// Attach event listener to the button
document.getElementById("get-timetable").addEventListener("click", getTimetable);

// Load timetable for the default day (Monday)
document.addEventListener("DOMContentLoaded", getTimetable);