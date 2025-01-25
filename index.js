document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        project.addEventListener("click", function() {
            alert(`You clicked on ${project.querySelector("h3").textContent}`);
        });
    });
});
