import React from 'react'
import { Home, User, Wrench, FolderGit2, Mail } from 'lucide-react'
import { NavBar } from '@/components/ui/tubelight-navbar'

const Navbar = () => {
  const navItems = [
    { name: 'Home',     url: '#hero',     icon: Home },
    { name: 'About',    url: '#about',    icon: User },
    { name: 'Skills',   url: '#skills',   icon: Wrench },
    { name: 'Projects', url: '#projects', icon: FolderGit2 },
    { name: 'Contact',  url: '#contact',  icon: Mail },
  ]

  return <NavBar items={navItems} />
}

export default Navbar