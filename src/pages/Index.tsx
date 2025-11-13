import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const weddingDate = new Date('2025-08-15T15:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    message: ''
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за подтверждение! Мы ждём вас на нашей свадьбе ❤️');
    setFormData({ name: '', guests: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('venue')} className="text-sm hover:text-primary transition-colors">Место</button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm hover:text-primary transition-colors">Фото</button>
            <button onClick={() => scrollToSection('rsvp')} className="text-sm hover:text-primary transition-colors">RSVP</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 animate-fade-in">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading text-7xl md:text-9xl font-light tracking-wide text-foreground">
            Анна & Дмитрий
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-widest">
            15 августа 2025
          </p>

          <div className="py-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">До нашей свадьбы</p>
            <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-heading font-light text-primary">
                  {timeLeft.days}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">дней</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-heading font-light text-primary">
                  {timeLeft.hours}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">часов</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-heading font-light text-primary">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">минут</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-heading font-light text-primary">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">секунд</div>
              </div>
            </div>
          </div>

          <Button 
            onClick={() => scrollToSection('rsvp')}
            size="lg"
            className="mt-8 px-12 py-6 text-base tracking-wider"
          >
            Подтвердить присутствие
          </Button>
        </div>
      </section>

      <section id="venue" className="min-h-screen flex items-center px-4 py-20 bg-accent/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-6xl md:text-7xl font-light mb-4">Место проведения</h2>
            <div className="w-24 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="aspect-[4/3] bg-secondary rounded-lg overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ae96f9ee-0a7f-4e4a-9ab6-12cc90fee2a4/files/39869128-2e3c-4a64-a12f-bc37ee12797d.jpg" 
                  alt="Место проведения" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-2xl mb-2">Усадьба «Романтика»</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Московская область, Истринский район<br />
                      деревня Лучинское, улица Садовая, 12
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-2xl mb-2">Время</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Начало церемонии в 15:00<br />
                      Просим приходить за 20 минут
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Car" size={24} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-2xl mb-2">Как добраться</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Организован трансфер от метро<br />
                      Детали будут высланы отдельно
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen flex items-center px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-6xl md:text-7xl font-light mb-4">Наша история</h2>
            <div className="w-24 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              'https://cdn.poehali.dev/projects/ae96f9ee-0a7f-4e4a-9ab6-12cc90fee2a4/files/179e6ebe-bfff-4eb4-ae68-ea7bd213cdee.jpg',
              'https://cdn.poehali.dev/projects/ae96f9ee-0a7f-4e4a-9ab6-12cc90fee2a4/files/211238e8-fdcc-4694-9e30-c6f10d35b4c4.jpg',
              '/placeholder.svg',
              '/placeholder.svg',
              '/placeholder.svg',
              '/placeholder.svg'
            ].map((src, i) => (
              <div 
                key={i} 
                className="aspect-square bg-secondary rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 animate-scale-in"
              >
                <img 
                  src={src} 
                  alt={`Фото ${i + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rsvp" className="min-h-screen flex items-center px-4 py-20 bg-accent/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-6xl md:text-7xl font-light mb-4">Подтверждение</h2>
            <div className="w-24 h-px bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg">
              Будем рады видеть вас на нашем празднике
            </p>
          </div>

          <Card className="animate-scale-in border-border shadow-lg">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider text-muted-foreground">
                    Ваше имя
                  </label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                    className="text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider text-muted-foreground">
                    Количество гостей
                  </label>
                  <Input 
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    placeholder="2"
                    required
                    className="text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider text-muted-foreground">
                    Пожелания
                  </label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Особые пожелания или диетические ограничения"
                    rows={4}
                    className="text-base resize-none"
                  />
                </div>

                <Button type="submit" className="w-full py-6 text-base tracking-wider">
                  Подтвердить присутствие
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="min-h-screen flex items-center px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-6xl md:text-7xl font-light mb-4">Контакты</h2>
            <div className="w-24 h-px bg-primary mx-auto mb-8"></div>
            <p className="text-muted-foreground text-lg mb-12">
              Если у вас остались вопросы, свяжитесь с нами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-scale-in">
            <Card className="text-center p-8 border-border hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Icon name="User" size={40} className="text-primary mx-auto" />
                <h3 className="font-heading text-3xl">Анна</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={18} />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Mail" size={18} />
                    <span>anna@example.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-border hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Icon name="User" size={40} className="text-primary mx-auto" />
                <h3 className="font-heading text-3xl">Дмитрий</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={18} />
                    <span>+7 (999) 765-43-21</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Mail" size={18} />
                    <span>dmitry@example.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-muted-foreground border-t border-border">
        <p className="font-heading text-2xl mb-2">Анна & Дмитрий</p>
        <p className="text-sm">15 августа 2025</p>
      </footer>
    </div>
  );
};

export default Index;