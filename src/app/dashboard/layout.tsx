'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Bell,
  Home,
  Users,
  Briefcase,
  HeartPulse,
  BookOpen,
  Building,
  LogOut,
  Search,
  Menu,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navItems = [
  { href: '/dashboard', label: 'Inicio', icon: Home },
  { href: '/dashboard/personas', label: 'Personas', icon: Users },
  { href: '/dashboard/legal', label: 'Legal', icon: Briefcase },
  { href: '/dashboard/salud', label: 'Salud', icon: HeartPulse },
  { href: '/dashboard/educacion', label: 'Educación', icon: BookOpen },
  { href: '/dashboard/Seguridad', label: 'Seguridad', icon: Building },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ username: string } | null>({ username: 'Usuario' });
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
          {isSidebarOpen && <h1 className="text-2xl font-bold">INAMI</h1>}
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className={`p-4 ${isSidebarOpen ? '' : 'hidden'}`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Buscar..." className="pl-10" />
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 py-4">
          <p className={`text-sm text-muted-foreground px-2 ${isSidebarOpen ? '' : 'hidden'}`}>Navegación Principal</p>
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
        <header className="flex h-16 items-center justify-between border-b border-border px-6 bg-card">
          <div>
             {/* Could be a breadcrumb or page title */}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificaciones</span>
            </Button>
            <div className="flex items-center gap-2">
               <Avatar>
                <AvatarImage src={`https://picsum.photos/seed/user/40/40`} />
                <AvatarFallback>{user ? getInitials(user.username) : 'U'}</AvatarFallback>
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
