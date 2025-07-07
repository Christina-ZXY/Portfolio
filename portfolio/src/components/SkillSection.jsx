import { useState } from "react";
const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Angular", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },

  // Backend
  { name: "C#", level: 90, category: "backend" },
  { name: ".NET Core / ASP.NET", level: 90, category: "backend" },
  { name: "Entity Framework", level: 85, category: "backend" },
  { name: "SQL Server", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Jira", level: 75, category: "tools" },
  { name: "Vscode", level: 95, category: "tools" },
];
const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  return <section
    id="skills"
    className="py-24 px-4 relative">
    <div className="container max-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-primary">Skills</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, key) => (
          <button key={key} className="px-5 py-2 rounded-full transition-colors duration-300 capitalize">
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid cols-3 gap-6">
        {skills.map((skill, key) => (
          <div
            key={key}
            className="p-6 shadow-xs card-hover"
          >
            <div>
              {skill.name}
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
}