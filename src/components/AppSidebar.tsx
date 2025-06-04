
import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard,
  MessageSquare,
  Bot,
  Zap,
  Users,
  Send,
  Phone,
  Settings,
  BookOpen,
  BarChart3,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Meu WhatsApp', href: '/numbers', icon: Phone },
  { name: 'Agentes de IA', href: '/ai-agents', icon: Bot },
  { name: 'Chatbots', href: '/chatbots', icon: MessageSquare },
  { name: 'Mensagens Rápidas', href: '/quick-messages', icon: Zap },
  { name: 'Disparos em Massa', href: '/bulk-messages', icon: Send },
  { name: 'Chat', href: '/chat', icon: MessageSquare },
  { name: 'Contatos', href: '/contacts', icon: Users },
  { name: 'Kanban', href: '/kanban', icon: BarChart3 },
  { name: 'Tutoriais', href: '/tutorials', icon: BookOpen },
  { name: 'Configurações', href: '/settings', icon: Settings },
];

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <TooltipProvider>
      {/* Mobile Menu Button */}
      <Button
        onClick={toggleMobileMenu}
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm"
      >
        {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
        "lg:translate-x-0",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  Zapia
                </span>
              </div>
            )}
            <Button 
              onClick={toggleSidebar}
              variant="ghost" 
              size="icon"
              className="hidden lg:flex h-8 w-8"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-2 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              
              const navLink = (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-lg" 
                      : "text-muted-foreground hover:text-foreground hover:bg-accent",
                    isCollapsed ? "justify-center" : "justify-start"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", !isCollapsed && "mr-3")} />
                  {!isCollapsed && (
                    <span className="truncate">{item.name}</span>
                  )}
                </NavLink>
              );

              // Se estiver colapsado no desktop, adiciona tooltip
              if (isCollapsed) {
                return (
                  <Tooltip key={item.name}>
                    <TooltipTrigger asChild>
                      {navLink}
                    </TooltipTrigger>
                    <TooltipContent side="right" className="hidden lg:block">
                      {item.name}
                    </TooltipContent>
                  </Tooltip>
                );
              }

              return navLink;
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            {isCollapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={toggleTheme}
                    variant="ghost"
                    size="icon"
                    className="w-full justify-center"
                  >
                    {theme === 'dark' ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="hidden lg:block">
                  {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 mr-2" />
                ) : (
                  <Moon className="h-4 w-4 mr-2" />
                )}
                <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>
              </Button>
            )}
          </div>
        </div>
      </aside>
    </TooltipProvider>
  );
}
