
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Numbers from "./pages/Numbers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/numbers" element={<Numbers />} />
              <Route path="/ai-agents" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Agentes de IA</h1><p className="text-muted-foreground">Em desenvolvimento...</p></div>} />
              <Route path="/chatbots" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Chatbots</h1><p className="text-muted-foreground">Em desenvolvimento...</p></div>} />
              <Route path="/quick-messages" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Mensagens Rápidas</h1><p className="text-muted-foreground">Em desenvolvimento...</p></div>} />
              <Route path="/bulk-messages" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Disparos em Massa</h1><p className="text-muted-foreground">Em desenvolvimento...</p></div>} />
              <Route path="/chat" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Chat</h1><p className="text-muted-foreground">Em desenvolvimento...</p></div>} />
              <Route path="/contacts" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Contatos</h1><p className="text-muted-foreground">Em desenvolvimento...</p></div>} />
              <Route path="/kanban" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Kanban</h1><p className="text-muted-foreground">Em desenvolvimento...</p></div>} />
              <Route path="/tutorials" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Tutoriais</h1><p className="text-muted-foreground">Em desenvolvimento...</p></div>} />
              <Route path="/settings" element={<div className="p-8 text-center"><h1 className="text-2xl font-bold">Configurações</h1><p className="text-muted-foreground">Em desenvolvimento...</p></div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
