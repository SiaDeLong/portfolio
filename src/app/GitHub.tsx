'use client'

import { useEffect, useState } from 'react';
import type { GitHubProfile } from './model/GitHubProfile';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';

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
        <a href={"https://github.com/SiaDeLong"} target="_blank" rel="noopener noreferrer" className='relative bg-stone-700 p-4 rounded-lg transition-transform duration-200 hover:scale-105'>
            <Image className='top-0 left-0 z-0 absolute opacity-20' width={300} height={0} src={'/git.jpg'} alt={'contribution'} />
            <div className="flex gap-2">
                <FiGithub className='z-10 text-xl' />
                <h1 className='z-10 font-medium'>Stats</h1>
            </div>
            <div>
                <div className="flex flex-col gap-6">
                    <h2 className='font-extralight text-xs'>Eric Sia (@Sia De Long)</h2>
                    <div className="flex justify-between gap-2">
                        <div>
                            <h1 className='font-medium text-center'>{profile?.followers}</h1>
                            <h2 className='font-light text-[#e3e3e3] text-xs'>Followers</h2>
                        </div>
                        <div>
                            <h1 className='font-medium text-center'>{profile?.following}</h1>
                            <h2 className='font-light text-[#e3e3e3] text-xs'>Following</h2>
                        </div>
                        <div>
                            <h1 className='font-medium text-center'>{profile?.public_repos}</h1>
                            <h2 className='font-light text-[#e3e3e3] text-xs'>Repositories</h2>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default GitHub;
