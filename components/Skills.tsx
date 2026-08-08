import Reveal from "./Reveal";

const skills = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Supabase",
    ],
  },
  {
    title: "Database",
    items: [
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
      "Render",
      "XAMPP",
    ],
  },
];

export default function Skills() {
  return (
    <Reveal>
      <section className="pt-6 pb-16">
        <div className="container-custom">

          <h2 className="mb-5 text-[24px] font-semibold">
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
                      className="
                      rounded-md
                      border
                      border-zinc-600
                      bg-zinc-800
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-zinc-200
                      transition-all
                      duration-200
                      hover:border-zinc-400
                      hover:bg-zinc-700
                      hover:text-white
                    "
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