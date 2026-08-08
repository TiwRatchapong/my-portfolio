export interface GithubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
  archived: boolean;
  updated_at: string;
}

export async function getRepositories(): Promise<GithubRepository[]> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos: GithubRepository[] = await res.json();

  return repos
    .filter((repo) => !repo.archived)
    .filter((repo) => repo.topics?.includes("featured"))
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    );
}