'use client';
import Link from 'next/link';
import { Users, Briefcase, HeartPulse, BookOpen, Building, Ticket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

const modules = [
  {
    title: 'Personas',
    description: 'Empleado, Beneficiario',
    href: '/dashboard/personas',
    icon: Users,
    color: 'bg-blue-500',
    textColor: 'text-white',
  },
  {
    title: 'Legal',
    description: 'Expediente judicial, Medidas sustitutivas',
    href: '/dashboard/legal',
    icon: Briefcase,
    color: 'bg-red-500',
    textColor: 'text-white',
  },
  {
    title: 'Salud',
    description: 'Evaluación médica, expediente clínico',
    href: '/dashboard/salud',
    icon: HeartPulse,
    color: 'bg-cyan-500',
    textColor: 'text-white',
  },
  {
    title: 'Educación',
    description: 'Programa Educativo, Progreso académico',
    href: '/dashboard/educacion',
    icon: BookOpen,
    color: 'bg-yellow-500',
    textColor: 'text-white',
  },
  {
    title: 'Seguridad',
    description: 'Area de seguridad',
    href: '/dashboard/seguridad',
    icon: Building,
    color: 'bg-gray-600',
    textColor: 'text-white',
  },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <Link href={mod.href} key={mod.title}>
            <Card className={`${mod.color} ${mod.textColor} hover:scale-105 transition-transform duration-200 relative overflow-hidden`}>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{mod.title}</span>
                  <mod.icon className="h-8 w-8 text-white/80" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/90">
                  {mod.description.split(', ').map(line => <p key={line}>{line}</p>)}
                </CardDescription>
              </CardContent>
              <div className="absolute -bottom-4 -right-4">
                 <Ticket className="h-20 w-20 text-white/10" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
