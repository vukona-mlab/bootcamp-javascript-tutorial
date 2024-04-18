window.addEventListener(('load'), () => {
    loadProjects()
})

function loadProjects() {
    const projects = [
        {
            picture:"./assets/images.jpg",
            projectName: 'Afrika Ecommerce',
            techStacks: ['HTML', 'CSS', 'React', 'JavaScript'],
            description: 'I need more titles'
        },
        {
            picture:"./assets/images.jpg",
            projectName: 'BeeHive Farms',
            techStacks: ['HTML', 'CSS', 'Angular', 'JavaScript'],
            description: 'hey there'
        },
        {
            picture:"./assets/images.jpg",
            projectName: 'Ruinscapes Games',
            techStacks: ['HTML', 'CSS', 'React Native', 'JavaScript', 'Node.js'],
            description: 'Hi there'
        }
    ]

    const projectsContainer = document.getElementById('cards')
    


    projects.forEach((project) => {
        const projectDetailsContainer = document.createElement('div')
        projectDetailsContainer.classList.add('card')
        projectDetailsContainer.innerHTML = `
            <div class="card">
                <img src=${project.picture} alt="" style="width: 18rem" />
                <h3>${project.projectName}</h3>
                <p>${project.description}</p>
                <br />
                <small>Tech stack: ${ project.techStacks.join(', ') }</small>
                <div style="display: flex; justify-content: space-around; margin-top: 1rem;">
                    <div><i class="ri-links-fill"></i> <small>Live Preview</small></div>
                    <div><i class="ri-github-fill"></i> <small>View Code</small></div>
                </div>
            </div>
        `
        projectsContainer.appendChild(projectDetailsContainer)
    })


    
}