'use client'

import { useEffect, useState } from 'react';
import type { GitHubProfile } from './model/GitHubProfile';
import { FiGithub } from 'react-icons/fi';

const GitHub = () => {
    const [profile, setProfile] = useState<GitHubProfile | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('/api/gitstat');
                if (!response.ok) {
                    throw new Error('Failed to fetch GitHub profile stats');
                }
                const data: GitHubProfile = await response.json() as GitHubProfile;
                setProfile(data);
            } catch (err) {
                setError((err as Error).message);
            }
        };

        void fetchProfile();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="flex gap-2">
                <FiGithub className='z-10 text-xl' />
                <h1 className='z-10 font-medium'>Stats</h1>
            </div>
            <div>
                <div className="flex flex-col gap-10">
                    <h2 className='font-extralight text-xs'>Eric Sia (@Sia De Long)</h2>
                    <div className="flex justify-between gap-2">
                        <div>
                            <h1 className='font-medium text-center text-lg'>{profile?.followers}</h1>
                            <h2 className='font-light text-[#e3e3e3] text-xs'>Followers</h2>
                        </div>
                        <div>
                            <h1 className='font-medium text-center text-lg'>{profile?.following}</h1>
                            <h2 className='font-light text-[#e3e3e3] text-xs'>Following</h2>
                        </div>
                        <div>
                            <h1 className='font-medium text-center text-lg'>{profile?.public_repos}</h1>
                            <h2 className='font-light text-[#e3e3e3] text-xs'>Repositories</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GitHub;
