"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BikeIcon as Motorcycle, Tag, Users, ShoppingCart, BarChart2, Briefcase, FileText, PieChart } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarItems = [
  { name: "Dashboard", href: "/", icon: BarChart2 },
  { name: "Motocicletas", href: "/motorcycles", icon: Motorcycle },
  { name: "Marcas", href: "/brands", icon: Tag },
  { name: "Tipos", href: "/types", icon: Tag },
  { name: "Clientes", href: "/customers", icon: Users },
  { name: "Trabajadores", href: "/workers", icon: Briefcase },
  { name: "Ventas", href: "/sales", icon: ShoppingCart },
  { name: "Estadísticas", href: "/statistics", icon: PieChart },
  { name: "Reportes", href: "/reports", icon: FileText },
  { name: "Login", href: "/auth", icon: FileText },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    
    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-4">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <Motorcycle className="h-6 w-6" />
            <span>Moto Inventario</span>
          </Link>
        </div>
        <ScrollArea className="flex-1">
          <nav className="flex flex-col gap-2 p-2">
            {sidebarItems.map((item) => (
              <Button
                key={item.name}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-2", {
                  "bg-gray-200 dark:bg-gray-700": pathname === item.href,
                })}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  )
}
