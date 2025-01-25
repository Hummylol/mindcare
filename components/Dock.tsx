import { FloatingDock } from '@/components/ui/floating-dock'
import React from 'react'
import { Home, MessageCircle, PersonStandingIcon, Settings2 } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const Dock = () => {
  const dockItems = [
    {
      title: 'Home',
      icon: <Home />, 
      href: '/'
    },
    {
      title: 'Ai chat', 
      icon: <PersonStandingIcon />,
      href: '/ai-chat'
    },
    {
      title: 'Messages',
      icon: <MessageCircle />,
      href: '/anon-chat'
    },
    {
        title: 'Toggle Theme',
        icon: <ThemeToggle />, 
        href: '#',
      },
  ]
  return (
    <div>
      <FloatingDock items={dockItems}/>
    </div>
  )
}

export default Dock