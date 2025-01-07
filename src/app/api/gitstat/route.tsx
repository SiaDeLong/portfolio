import { NextResponse } from 'next/server';
import type { GitHubProfile } from '../../model/GitHubProfile';


export async function GET() {
  const { GITHUB_USERNAME } = process.env;

  if (!GITHUB_USERNAME) {
    return NextResponse.json({ error: 'Missing GitHub credentials in environment variables' }, { status: 400 });
  }

  // Fetch profile data from GitHub API
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { });

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch GitHub profile data' }, { status: response.status });
  }

  const data: GitHubProfile = await response.json() as GitHubProfile;

  console.log(data)
  return NextResponse.json(data);
}
