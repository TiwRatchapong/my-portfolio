"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";


interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
}

const topicMap: Record<string, string> = {
  nextjs: "Next.js",
  react: "React",
  typescript: "TypeScript",
  javascript: "JavaScript",
  tailwindcss: "Tailwind CSS",
  nodejs: "Node.js",
  supabase: "Supabase",
  mysql: "MySQL",
  postgresql: "PostgreSQL",
  prisma: "Prisma",
  vercel: "Vercel",
};

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="pt-6 pb-16">
        <div className="container-custom">
          <h2 className="mb-5 text-[24px] font-semibold">Projects</h2>
          <p className="text-zinc-400">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <Reveal>
      <section className="pt-6 pb-16">
        <div className="container-custom">
          <h2 className="mb-5 text-[24px] font-semibold">Projects</h2>

          <div className="grid gap-5 md:grid-cols-2">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="card flex flex-col p-6 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-zinc-100">
                  {repo.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-7 text-zinc-400">
                  {repo.description || "No description"}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {repo.language && (
                    <span className="badge">{repo.language}</span>
                  )}

                  {repo.topics
                    ?.filter((topic) => topic !== "featured")
                    .map((topic) => (
                      <span key={topic} className="badge">
                        {topicMap[topic] ?? topic}
                      </span>
                    ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="mb-5 border-t border-zinc-800" />

                  <div className="flex items-center gap-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-project button-project-secondary"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-project button-project-primary"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}