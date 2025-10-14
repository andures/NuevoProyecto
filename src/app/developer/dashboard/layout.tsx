'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Users,
  History,
  LogOut,
  Menu,
  X,
  Building,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navItems = [
  { href: '/developer/dashboard/users', label: 'Usuarios', icon: Users },
  { href: '/developer/dashboard/history', label: 'Historial de Actividades', icon: History },
];

export default function DeveloperDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user] = useState<{ username: string }>({ username: 'Desarrollador' });
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    router.push('/');
  };
  
  const getInitials = (name: string) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      {/* Sidebar */}
      <aside
        className={`bg-card text-card-foreground flex flex-col transition-all duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        } border-r border-border`}
      >
        <div className={`p-4 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
          {isSidebarOpen && <h1 className="text-2xl font-bold flex items-center gap-2"><Building /> INAMI</h1>}
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <nav className="flex-1 px-4 space-y-2 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center p-2 rounded-lg gap-3 transition-colors ${
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent hover:text-accent-foreground'
              } ${!isSidebarOpen ? 'justify-center' : ''}`}
            >
              <item.icon className="h-5 w-5" />
              {isSidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className={`w-full flex items-center gap-3 ${!isSidebarOpen ? 'justify-center' : ''}`}
          >
            <LogOut className="h-5 w-5" />
            {isSidebarOpen && <span>Cerrar Sesión</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex h-16 items-center justify-end border-b border-border px-6 bg-card">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
               <Avatar>
                <AvatarImage src={`https://picsum.photos/seed/dev/40/40`} />
                <AvatarFallback>{user ? getInitials(user.username) : 'D'}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{user?.username}</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
