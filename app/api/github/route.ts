import { NextResponse } from "next/server";
import { getRepositories } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const repos = await getRepositories();
    return NextResponse.json(repos);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}