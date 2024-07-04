'use client';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import profileImg from '@public/쿵야.png';
import { GithubOutlined, MoonOutlined, SearchOutlined, SunOutlined } from '@ant-design/icons';
import '@/styles/globals.css';
import { GITHUB_PROFILE_URL } from '@/utils/urls';
import { DarkModeContext } from '@/context/DarkModeContext';

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className="w-full h-20 bg-background text-foreground sticky top-0 left-0 pl-24 pr-24">
      <div className="w-full h-full flex justify-between px-6">
        <a href="/" className="align-content-center">
          <div className="flex flex-row justify-center items-center logo">
            <Image
              src={profileImg}
              alt="ProfileImage"
              // width={48}
              // height={48}
              className="w-12 mr-4 rounded-full p-1"
            ></Image>
            <span className="font-bold text-2xl font-foreground ">Woody.Tech</span>
          </div>
        </a>

        <nav className="w-44 h-full flex flex-row justify-between">
          <div className="align-content-center">
            <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="content-center">
              <GithubOutlined className="icon" />
            </a>
          </div>
          <div className="align-content-center" onClick={toggleDarkMode}>
            {isDarkMode ? <SunOutlined className="icon" /> : <MoonOutlined className="icon" />}
          </div>
          <div className="align-content-center">
            <SearchOutlined className="icon" />
          </div>
        </nav>
      </div>
    </header>
  );
}
