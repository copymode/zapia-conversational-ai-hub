
import { AppSidebar } from './AppSidebar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      
      {/* Main Content */}
      <main className={cn(
        "lg:ml-64 transition-all duration-300 ease-in-out",
        "min-h-screen"
      )}>
        {/* Mobile Header Spacer */}
        <div className="h-16 lg:hidden" />
        
        {/* Content */}
        <div className="p-4 lg:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
