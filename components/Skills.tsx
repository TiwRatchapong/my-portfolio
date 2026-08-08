import Reveal from "./Reveal";

const skills = [
  {
    title: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "REST API",
      "API Integration",
    ],
  },
  {
    title: "Database",
    items: [
      "MySQL",
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      "Git",
      "GitHub",
      "Figma",
      "XAMPP",
      "Render",
      "Vercel",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <Reveal>
      <section className="section">
        <div className="container-custom">

          <h2 className="section-title">
            Tech Stack
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((group) => (
              <div
                key={group.title}
                className="card p-6"
              >
                <h3
                  className="mb-4 text-lg font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="badge"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Reveal>
  );
}