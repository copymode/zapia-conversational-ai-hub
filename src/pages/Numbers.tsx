
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { QrCode, Phone, Plus, Settings, Trash2, Power, PowerOff } from 'lucide-react';

export default function Numbers() {
  const [numbers, setNumbers] = useState([
    {
      id: '1',
      number: '+55 11 99999-9999',
      name: 'Atendimento Principal',
      status: 'connected',
      type: 'qr',
      agent: 'Vendas IA',
      lastActivity: '2 min atrás'
    },
    {
      id: '2',
      number: '+55 11 88888-8888',
      name: 'Suporte Técnico',
      status: 'connecting',
      type: 'api',
      agent: 'Suporte IA',
      lastActivity: '1 hora atrás'
    }
  ]);

  const [qrCode, setQrCode] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meus Números</h1>
          <p className="text-muted-foreground">
            Gerencie suas conexões do WhatsApp
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gradient-primary text-white shadow-lg hover:shadow-xl transition-all duration-200">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Número
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Número</DialogTitle>
              <DialogDescription>
                Escolha como deseja conectar seu número do WhatsApp
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="qr" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="qr">QR Code</TabsTrigger>
                <TabsTrigger value="api">API Oficial</TabsTrigger>
              </TabsList>
              
              <TabsContent value="qr" className="space-y-4">
                <div className="text-center">
                  <div className="mx-auto w-48 h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <QrCode className="h-32 w-32 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Escaneie o QR Code acima com seu WhatsApp para conectar
                  </p>
                  <Button className="mt-4" variant="outline">
                    <QrCode className="mr-2 h-4 w-4" />
                    Gerar Novo QR
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="api" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="token">Token da API</Label>
                    <Input
                      id="token"
                      placeholder="Insira seu token da API do WhatsApp Business"
                      type="password"
                    />
                  </div>
                  <div>
                    <Label htmlFor="webhook">URL do Webhook</Label>
                    <Input
                      id="webhook"
                      placeholder="https://seu-dominio.com/webhook"
                    />
                  </div>
                  <Button className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Conectar via API
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>

      {/* Numbers Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {numbers.map((number) => (
          <Card key={number.id} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-lg">{number.name}</CardTitle>
                <CardDescription className="font-mono text-sm">
                  {number.number}
                </CardDescription>
              </div>
              <Badge 
                variant={number.status === 'connected' ? 'default' : 'secondary'}
                className="ml-auto"
              >
                {number.status === 'connected' ? 'Conectado' : 'Conectando...'}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tipo:</span>
                <Badge variant="outline">
                  {number.type === 'qr' ? 'QR Code' : 'API Oficial'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Agente:</span>
                <span className="font-medium">{number.agent}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Última atividade:</span>
                <span>{number.lastActivity}</span>
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Settings className="mr-2 h-3 w-3" />
                  Configurar
                </Button>
                <Button 
                  size="sm" 
                  variant={number.status === 'connected' ? 'destructive' : 'default'}
                  className="flex-1"
                >
                  {number.status === 'connected' ? (
                    <>
                      <PowerOff className="mr-2 h-3 w-3" />
                      Desconectar
                    </>
                  ) : (
                    <>
                      <Power className="mr-2 h-3 w-3" />
                      Conectar
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
            <div className="absolute inset-0 gradient-card opacity-30" />
          </Card>
        ))}
        
        {/* Add Number Card */}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="border-dashed border-2 cursor-pointer hover:bg-muted/50 transition-colors duration-200">
              <CardContent className="flex flex-col items-center justify-center h-full min-h-[200px] text-center space-y-2">
                <Plus className="h-8 w-8 text-muted-foreground" />
                <h3 className="font-semibold">Adicionar Número</h3>
                <p className="text-sm text-muted-foreground">
                  Conecte um novo número do WhatsApp
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Número</DialogTitle>
              <DialogDescription>
                Escolha como deseja conectar seu número do WhatsApp
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="qr" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="qr">QR Code</TabsTrigger>
                <TabsTrigger value="api">API Oficial</TabsTrigger>
              </TabsList>
              
              <TabsContent value="qr" className="space-y-4">
                <div className="text-center">
                  <div className="mx-auto w-48 h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <QrCode className="h-32 w-32 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Escaneie o QR Code acima com seu WhatsApp para conectar
                  </p>
                  <Button className="mt-4" variant="outline">
                    <QrCode className="mr-2 h-4 w-4" />
                    Gerar Novo QR
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="api" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="token">Token da API</Label>
                    <Input
                      id="token"
                      placeholder="Insira seu token da API do WhatsApp Business"
                      type="password"
                    />
                  </div>
                  <div>
                    <Label htmlFor="webhook">URL do Webhook</Label>
                    <Input
                      id="webhook"
                      placeholder="https://seu-dominio.com/webhook"
                    />
                  </div>
                  <Button className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Conectar via API
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
