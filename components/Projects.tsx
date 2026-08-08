"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "./Reveal";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
}

const topicMap: Record<string, string> = {
  nextjs: "Next.js",
  react: "React",
  typescript: "TypeScript",
  javascript: "JavaScript",
  tailwindcss: "Tailwind CSS",
  nodejs: "Node.js",
  express: "Express",
  vue: "Vue.js",
  supabase: "Supabase",
  mysql: "MySQL",
  postgresql: "PostgreSQL",
  prisma: "Prisma",
  "rest-api": "REST API",
  "jikan-api": "Jikan API",
  vercel: "Vercel",
};

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repositories");
        }

        return res.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => {
        console.error(error);
        setRepos([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Reveal>
      <section className="section">
        <div className="container-custom">

          <h2 className="section-title">
            Projects
          </h2>

          {loading ? (
            <p className="muted">
              Loading...
            </p>
          ) : repos.length === 0 ? (
            <p className="muted">
              No projects found.
            </p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {repos.map((repo) => (
                <div
                  key={repo.id}
                  className="card flex flex-col p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {repo.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-zinc-400">
                    {repo.description || "No description"}
                  </p>

                  {repo.topics?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {repo.topics
                        .filter((topic) => topic !== "featured")
                        .map((topic) => (
                          <span
                            key={topic}
                            className="badge"
                          >
                            {topicMap[topic] ?? topic}
                          </span>
                        ))}
                    </div>
                  )}

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
          )}

        </div>
      </section>
    </Reveal>
  );
}