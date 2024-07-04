import React from 'react';
import Image from 'next/image';
import profileImg from '@public/쿵야.png';
import { GithubOutlined, MoonOutlined, SearchOutlined, SunOutlined } from '@ant-design/icons';
import '@/styles/globals.css';
import { GITHUB_PROFILE_URL } from '@/utils/urls';

export default function Header() {
  return (
    <header className="w-full h-16 bg-testColor text-foreground sticky top-0 left-0">
      <div className="w-full h-full flex justify-between px-6">
        <a href="/" className="align-content-center">
          <div className="flex flex-row justify-center items-center logo">
            <Image src={profileImg} alt="ProfileImage" width={56} height={56} className="w-14 mr-4"></Image>
            <span className="font-bold text-2xl">Woody.Tech</span>
          </div>
        </a>

        <nav className="w-44 h-full flex flex-row justify-between">
          <div className="align-content-center">
            <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="content-center">
              <GithubOutlined className="icon" />
            </a>
          </div>
          <div className="align-content-center">
            <MoonOutlined className="icon" />
          </div>
          <div className="align-content-center">
            <SunOutlined className="icon" />
          </div>
          <div className="align-content-center">
            <SearchOutlined className="icon" />
          </div>
        </nav>
      </div>
    </header>
  );
}
