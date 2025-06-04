
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Users, 
  Bot, 
  TrendingUp, 
  Activity,
  Phone,
  Zap,
  BarChart3
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Mensagens Enviadas',
      value: '12,456',
      change: '+20.1%',
      icon: MessageSquare,
      trend: 'up'
    },
    {
      title: 'Contatos Ativos',
      value: '2,350',
      change: '+15.3%',
      icon: Users,
      trend: 'up'
    },
    {
      title: 'Agentes de IA',
      value: '8',
      change: '+2',
      icon: Bot,
      trend: 'up'
    },
    {
      title: 'Taxa de Resposta',
      value: '94.2%',
      change: '+2.5%',
      icon: TrendingUp,
      trend: 'up'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'message',
      description: 'Nova mensagem recebida de João Silva',
      time: '2 minutos atrás',
      status: 'pending'
    },
    {
      id: 2,
      type: 'agent',
      description: 'Agente IA respondeu automaticamente para Maria Santos',
      time: '5 minutos atrás',
      status: 'completed'
    },
    {
      id: 3,
      type: 'bulk',
      description: 'Disparo em massa para 500 contatos iniciado',
      time: '15 minutos atrás',
      status: 'in-progress'
    },
    {
      id: 4,
      type: 'connection',
      description: 'Novo número WhatsApp conectado',
      time: '1 hora atrás',
      status: 'completed'
    }
  ];

  const quickActions = [
    {
      title: 'Conectar Número',
      description: 'Adicione um novo número WhatsApp',
      icon: Phone,
      href: '/numbers',
      color: 'bg-green-500'
    },
    {
      title: 'Criar Agente IA',
      description: 'Configure um novo agente inteligente',
      icon: Bot,
      href: '/ai-agents',
      color: 'bg-purple-500'
    },
    {
      title: 'Disparo em Massa',
      description: 'Envie mensagens para múltiplos contatos',
      icon: Zap,
      href: '/bulk-messages',
      color: 'bg-blue-500'
    },
    {
      title: 'Ver Relatórios',
      description: 'Analise as métricas de performance',
      icon: BarChart3,
      href: '/reports',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo ao seu painel de controle do Zapia
          </p>
        </div>
        <Button className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-200">
          <Activity className="mr-2 h-4 w-4" />
          Relatório Completo
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">{stat.change}</span>
                <span>desde o mês passado</span>
              </div>
            </CardContent>
            <div className="absolute inset-0 gradient-card opacity-50" />
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>
              Últimas ações realizadas na plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">
                      {activity.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                  <Badge 
                    variant={activity.status === 'completed' ? 'default' : 
                             activity.status === 'pending' ? 'secondary' : 'outline'}
                  >
                    {activity.status === 'completed' ? 'Concluído' :
                     activity.status === 'pending' ? 'Pendente' : 'Em Progresso'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>
              Acesse rapidamente as principais funcionalidades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickActions.map((action) => (
                <Button
                  key={action.title}
                  variant="ghost"
                  className="w-full justify-start h-auto p-3 text-left"
                  asChild
                >
                  <a href={action.href}>
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center flex-shrink-0`}>
                        <action.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{action.title}</div>
                        <div className="text-xs text-muted-foreground">{action.description}</div>
                      </div>
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
