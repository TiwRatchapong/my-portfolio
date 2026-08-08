export interface GithubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  archived: boolean;
  updated_at: string;
}

export async function getRepositories(): Promise<GithubRepository[]> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    throw new Error("GITHUB_USERNAME is not defined");
  }

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers: {
        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos: GithubRepository[] = await res.json();

  return repos
    // ไม่เอา Repository ที่ archive แล้ว
    .filter((repo) => !repo.archived)

    // แสดงเฉพาะ Project ที่ติด featured
    .filter((repo) => repo.topics?.includes("featured"))

    // เรียงจาก Project ที่อัปเดตล่าสุด
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    );
}