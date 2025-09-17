# Portfolio Management Guide

This portfolio is now organized with a modular structure that makes it easy to add, remove, or update content without touching the main HTML/CSS code.

## Folder Structure

```
data/
├── projects/
│   └── projects.json          # All project information
├── education/
│   └── education.json         # Education history
├── experience/
│   └── experience.json        # Work experience
├── skills/
│   └── skills.json           # Skills and technologies
└── personal/
    └── personal.json         # Personal information and contact
```

## How to Manage Content

### Adding a New Project

1. Open `data/projects/projects.json`
2. Add a new project object to the array:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "technologies": ["Tech1", "Tech2", "Tech3"],
  "description": "Project description here...",
  "icon": "flaticon-project-icon",
  "link": "#",
  "status": "completed" // or "in-progress"
}
```

3. Save the file - the website will automatically update!

### Removing a Project

1. Open `data/projects/projects.json`
2. Find the project you want to remove
3. Delete the entire project object from the array
4. Save the file

### Updating Personal Information

1. Open `data/personal/personal.json`
2. Update any field you want:
   - `name`: Your full name
   - `title`: Your professional title
   - `tagline`: The text that appears in the hero section
   - `contact`: Email, phone, location, website
   - `social`: Social media links

### Adding Education

1. Open `data/education/education.json`
2. Add a new education entry:

```json
{
  "id": "unique-education-id",
  "institution": "University Name",
  "degree": "Degree Type",
  "field": "Field of Study",
  "grade": "Grade/Result",
  "location": "Location",
  "icon": "flaticon-graduation-cap",
  "year": "2023"
}
```

### Adding Work Experience

1. Open `data/experience/experience.json`
2. Add a new experience entry:

```json
{
  "id": "unique-experience-id",
  "title": "Job Title",
  "company": "Company Name",
  "type": "Job Type/Department",
  "description": "Job description...",
  "technologies": ["Tech1", "Tech2"],
  "icon": "flaticon-portfolio",
  "startDate": "2023",
  "endDate": "Present",
  "current": true
}
```

### Updating Skills

1. Open `data/skills/skills.json`
2. Skills are organized by categories
3. Add new skills to existing categories or create new categories:

```json
{
  "category": "New Category",
  "skills": [
    {"name": "Skill Name", "icon": "skill-icon.png", "level": 85}
  ]
}
```

## Advanced Management (via Browser Console)

You can also manage projects dynamically using the browser console:

```javascript
// Add a new project
portfolioManager.addProject({
  id: "new-project",
  title: "New Project",
  technologies: ["React", "Node.js"],
  description: "Description here...",
  icon: "flaticon-portfolio",
  link: "#",
  status: "completed"
});

// Remove a project
portfolioManager.removeProject("project-id-to-remove");

// Update a project
portfolioManager.updateProject("project-id", {
  title: "Updated Title",
  description: "Updated description..."
});
```

## File Locations for Images

- Project icons: Use flaticon classes (already included)
- Skill icons: Place in `images/skills/` folder
- Profile images: Place in `images/` folder

## Notes

- All changes to JSON files will automatically reflect on the website
- No need to modify HTML or CSS for content changes
- The data manager handles all the dynamic content loading
- Keep the JSON syntax valid (use a JSON validator if needed)