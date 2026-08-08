import { NextResponse } from "next/server";
import { getRepositories } from "@/lib/github";

export async function GET() {
  try {
    const repos = await getRepositories();

    return NextResponse.json(repos);
  } catch (error) {
    console.error("GitHub API Error:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch repositories",
      },
      {
        status: 500,
      }
    );
  }
}