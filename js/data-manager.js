/**
 * Portfolio Data Manager
 * Handles loading and rendering of all portfolio data from JSON files
 */

class PortfolioDataManager {
    constructor() {
        this.data = {
            projects: [],
            education: [],
            experience: [],
            skills: [],
            personal: {}
        };
    }

    // Load all data
    async loadAllData() {
        try {
            await Promise.all([
                this.loadProjects(),
                this.loadEducation(),
                this.loadExperience(),
                this.loadSkills(),
                this.loadPersonal()
            ]);
            this.renderAll();
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    // Load projects data
    async loadProjects() {
        try {
            const response = await fetch('./data/projects/projects.json');
            this.data.projects = await response.json();
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    }

    // Load education data
    async loadEducation() {
        try {
            const response = await fetch('./data/education/education.json');
            this.data.education = await response.json();
        } catch (error) {
            console.error('Error loading education:', error);
        }
    }

    // Load experience data
    async loadExperience() {
        try {
            const response = await fetch('./data/experience/experience.json');
            this.data.experience = await response.json();
        } catch (error) {
            console.error('Error loading experience:', error);
        }
    }

    // Load skills data
    async loadSkills() {
        try {
            const response = await fetch('./data/skills/skills.json');
            this.data.skills = await response.json();
        } catch (error) {
            console.error('Error loading skills:', error);
        }
    }

    // Load personal data
    async loadPersonal() {
        try {
            const response = await fetch('./data/personal/personal.json');
            this.data.personal = await response.json();
        } catch (error) {
            console.error('Error loading personal data:', error);
        }
    }

    // Render all sections
    renderAll() {
        this.renderProjects();
        this.renderEducation();
        this.renderExperience();
        this.renderSkills();
        this.renderPersonalInfo();
    }

    // Render projects section
    renderProjects() {
        const projectsContainer = document.querySelector('#project-section .row:not(.justify-content-center)');
        if (!projectsContainer || !this.data.projects.length) return;

        projectsContainer.innerHTML = '';

        this.data.projects.forEach(project => {
            const projectHTML = `
                <div class="col-md-4 text-center d-flex ftco-animate">
                    <a href="${project.link}" class="services-1 shadow">
                        <span class="icon">
                            <i class="${project.icon}"></i>
                        </span>
                        <div class="desc">
                            <h3 class="mb-4">${project.title}</h3>
                            <p><strong>${project.technologies.join(' • ')}</strong></p>
                            <p>${project.description}</p>
                        </div>
                    </a>
                </div>
            `;
            projectsContainer.innerHTML += projectHTML;
        });
    }

    // Render education section
    renderEducation() {
        const educationContainer = document.querySelector('#page-1');
        if (!educationContainer || !this.data.education.length) return;

        let educationHTML = '<h2 class="heading">Education</h2>';

        this.data.education.forEach(edu => {
            educationHTML += `
                <div class="resume-wrap d-flex ftco-animate">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="${edu.icon}"></span>
                    </div>
                    <div class="text pl-3">
                        <h2>${edu.institution}</h2>
                        <span class="position">${edu.degree}</span>
                        <p><strong>${edu.field}</strong></p>
                        ${edu.grade ? `<p>${edu.grade}</p>` : ''}
                        <p>${edu.location}</p>
                        <span class="date">${edu.year}</span>
                    </div>
                </div>
            `;
        });

        educationContainer.innerHTML = educationHTML;
    }

    // Render experience section
    renderExperience() {
        const experienceContainer = document.querySelector('#page-2');
        if (!experienceContainer || !this.data.experience.length) return;

        let experienceHTML = '<h2 class="heading">Experience</h2>';

        this.data.experience.forEach(exp => {
            experienceHTML += `
                <div class="resume-wrap d-flex ftco-animate">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="${exp.icon}"></span>
                    </div>
                    <div class="text pl-3">
                        <h2>${exp.title}</h2>
                        <span class="position">${exp.type}</span>
                        <p><strong>${exp.technologies.join(', ')}</strong></p>
                        <p>${exp.description}</p>
                    </div>
                </div>
            `;
        });

        experienceContainer.innerHTML = experienceHTML;
    }

    // Render skills section
    renderSkills() {
        const skillsContainer = document.querySelector('#page-3');
        if (!skillsContainer || !this.data.skills.length) return;

        let skillsHTML = '<h2 class="heading">Skills</h2>';

        this.data.skills.forEach(category => {
            skillsHTML += `<div class="row mb-4 ftco-animate">`;
            category.skills.forEach(skill => {
                skillsHTML += `
                    <div class="col">
                        <img class="img-fluid grow" src="images/skills/${skill.icon}" title="${skill.name}" />
                    </div>
                `;
            });
            skillsHTML += `</div>`;
        });

        skillsContainer.innerHTML = skillsHTML;
    }

    // Render personal information
    renderPersonalInfo() {
        if (!this.data.personal.name) return;

        // Update hero section
        const heroName = document.querySelector('.hero-title');
        if (heroName) {
            heroName.textContent = this.data.personal.name;
        }

        const heroTagline = document.querySelector('.hero-wrap h2:last-of-type');
        if (heroTagline) {
            heroTagline.innerHTML = this.data.personal.tagline;
        }

        // Update about section
        const aboutInfo = document.querySelector('.about-info');
        if (aboutInfo) {
            aboutInfo.innerHTML = `
                <li class="d-flex"><span>Name:</span><span>${this.data.personal.name.toLowerCase()}</span></li>
                <li class="d-flex"><span>Email:</span><span>${this.data.personal.contact.email}</span></li>
                <li class="d-flex"><span>Phone:</span><span>${this.data.personal.contact.phone}</span></li>
                <li class="d-flex"><span>Country:</span><span>${this.data.personal.contact.location.country}</span></li>
                <li class="d-flex"><span>City:</span><span>${this.data.personal.contact.location.city}</span></li>
            `;
        }

        // Update contact section
        const contactPhone = document.querySelector('.contact-info p a');
        if (contactPhone) {
            contactPhone.textContent = this.data.personal.contact.phone;
        }

        const contactEmail = document.querySelectorAll('.contact-info p a')[1];
        if (contactEmail) {
            contactEmail.textContent = this.data.personal.contact.email;
        }

        const contactWebsite = document.querySelectorAll('.contact-info p a')[2];
        if (contactWebsite) {
            contactWebsite.textContent = this.data.personal.contact.website;
        }
    }

    // Add new project (for easy management)
    addProject(project) {
        this.data.projects.push(project);
        this.renderProjects();
    }

    // Remove project by ID
    removeProject(projectId) {
        this.data.projects = this.data.projects.filter(p => p.id !== projectId);
        this.renderProjects();
    }

    // Update project
    updateProject(projectId, updatedProject) {
        const index = this.data.projects.findIndex(p => p.id === projectId);
        if (index !== -1) {
            this.data.projects[index] = { ...this.data.projects[index], ...updatedProject };
            this.renderProjects();
        }
    }
}

// Initialize data manager when page loads
let portfolioManager;

document.addEventListener('DOMContentLoaded', function() {
    portfolioManager = new PortfolioDataManager();
    portfolioManager.loadAllData();
});

// Make it globally available for easy management
window.portfolioManager = portfolioManager;