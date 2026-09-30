const projects = [
    {
        number: 1,
        title: "Project 1",
        description: "Web interface project built with modern frontend technologies.",
        link: "./project%201.html"
    },
    {
        number: 2,
        title: "Project 2",
        description: "Interactive web application created as part of my college work.",
        link: "./project2.html"
    },
    {
        number: 3,
        title: "Project 3",
        description: "Frontend project demonstrating responsive web design.",
        link: "./project-3/"
    },
    {
        number: 4,
        title: "Project 4",
        description: "Web interface project with interactive user features.",
        link: "./project-4/"
    },
    {
        number: 5,
        title: "Project 5",
        description: "Frontend application developed using React and JavaScript.",
        link: "./project-5/"
    },
    {
        number: 6,
        title: "Project 6",
        description: "React-based college web interface project.",
        link: "./project-6/"
    },
    {
        number: 7,
        title: "Project 7",
        description: "Interactive React application with reusable components.",
        link: "./project-7/"
    },
    {
        number: 8,
        title: "Project 8",
        description: "Personal portfolio website created with React.",
        link: "./project-8/"
    },
    {
        number: 9,
        title: "Project 9",
        description: "Task management application with multiple pages.",
        link: "./project-9/"
    },
    {
        number: 10,
        title: "Project 10",
        description: "Student Academic Management System built with React.",
        link: "./project-10/"
    }
];

const projectGrid = document.getElementById("projectGrid");

projects.forEach((project) => {
    const card = document.createElement("article");

    card.className = "project-card";

    card.innerHTML = `
        <div class="project-number">
            PROJECT ${project.number}
        </div>

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <a
            class="project-button"
            href="${project.link}"
        >
            View Project
        </a>
    `;

    projectGrid.appendChild(card);
});