import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Icon from '@/components/ui/icon'

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  details: string
  technologies: string[]
  year: string
  gallery: string[]
  challenges: string
  solution: string
  results: string
}

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Luxury Interior Design",
    category: "Полиграфия",
    image: "/img/c2c6ab1c-5a3d-4d8f-86a1-86f7f11422bb.jpg",
    description: "Элегантный дизайн интерьера премиум-класса для частного дома",
    details: "Проект включает полную концепцию дизайна интерьера роскошного частного дома площадью 450 кв.м. Использованы натуральные материалы высочайшего качества: мрамор Calacatta, дубовый паркет, бронзовые элементы фурнитуры. Цветовая палитра построена на контрасте глубоких тёмных тонов и светлых акцентов.",
    technologies: ["3D моделирование", "Визуализация", "Планирование"],
    year: "2024",
    gallery: [
      "/img/c2c6ab1c-5a3d-4d8f-86a1-86f7f11422bb.jpg",
      "/img/64369250-9d4e-44f1-86be-83775da78c5e.jpg",
      "/img/652c8ef0-6ce4-4afc-8aa9-669c1ee31d20.jpg"
    ],
    challenges: "Основной вызов заключался в создании гармоничного пространства, объединяющего современные технологии с классическими элементами дизайна. Необходимо было учесть архитектурные особенности здания и пожелания заказчика по функциональности каждой зоны.",
    solution: "Решение найдено в создании модульной системы пространств, где каждая зона имеет свой характер, но все они объединены общей дизайн-концепцией. Использована умная система освещения и климат-контроля, интегрированная в дизайн.",
    results: "Результат превзошел ожидания: создано уникальное жилое пространство, которое получило признание в профессиональных кругах и было опубликовано в ведущих дизайнерских изданиях."
  },
  {
    id: 2,
    title: "Premium Brand Identity",
    category: "Упаковка",
    image: "/img/64369250-9d4e-44f1-86be-83775da78c5e.jpg",
    description: "Создание фирменного стиля для премиального бренда",
    details: "Разработка комплексной айдентики для люксового бренда включает создание логотипа, фирменных цветов, типографики и всех элементов фирменного стиля. Особое внимание уделено созданию ощущения эксклюзивности и премиальности через минималистичный подход и изысканные детали.",
    technologies: ["Логотип", "Фирменный стиль", "Печатная продукция"],
    year: "2024",
    gallery: [
      "/img/64369250-9d4e-44f1-86be-83775da78c5e.jpg",
      "/img/c2c6ab1c-5a3d-4d8f-86a1-86f7f11422bb.jpg",
      "/img/652c8ef0-6ce4-4afc-8aa9-669c1ee31d20.jpg"
    ],
    challenges: "Создание узнаваемого бренда в высококонкурентной премиальной среде. Необходимо было разработать визуальную систему, которая мгновенно передает ценности качества и эксклюзивности.",
    solution: "Разработана минималистичная визуальная система с использованием золотых акцентов и изысканной типографики. Создана модульная система элементов, которая легко адаптируется для различных носителей.",
    results: "Бренд получил высокие оценки экспертов и значительно увеличил узнаваемость на рынке. Продажи выросли на 40% в первый год после ребрендинга."
  },
  {
    id: 3,
    title: "Modern Web Interface",
    category: "Веб-дизайн",
    image: "/img/652c8ef0-6ce4-4afc-8aa9-669c1ee31d20.jpg",
    description: "Современный интерфейс мобильного приложения",
    details: "Дизайн пользовательского интерфейса для финтех-приложения с фокусом на простоту использования и элегантность. Интерфейс разработан с учётом принципов минимализма, где каждый элемент имеет функциональное назначение. Использована модульная система компонентов для обеспечения консистентности.",
    technologies: ["UI Design", "UX Research", "Prototyping"],
    year: "2024",
    gallery: [
      "/img/652c8ef0-6ce4-4afc-8aa9-669c1ee31d20.jpg",
      "/img/c2c6ab1c-5a3d-4d8f-86a1-86f7f11422bb.jpg",
      "/img/64369250-9d4e-44f1-86be-83775da78c5e.jpg"
    ],
    challenges: "Создание интуитивно понятного интерфейса для сложных финансовых операций. Пользователи должны легко находить нужную информацию и совершать операции безопасно.",
    solution: "Проведено extensive UX исследование и создана система визуальной иерархии. Разработан набор микроанимаций для обратной связи и гайдинга пользователя.",
    results: "Приложение получило высокие рейтинги пользователей (4.8/5) и было отмечено наградами в области UX дизайна. Конверсия увеличилась на 60%."
  },
  {
    id: 4,
    title: "E-commerce Platform",
    category: "Маркетплейсы",
    image: "/img/c2c6ab1c-5a3d-4d8f-86a1-86f7f11422bb.jpg",
    description: "Дизайн маркетплейса для продажи товаров ручной работы",
    details: "Создание полноценной платформы для продажи товаров ручной работы с удобной системой каталогизации, поиска и оформления заказов. Особое внимание уделено UX для продавцов и покупателей.",
    technologies: ["UX/UI Design", "E-commerce", "Mobile First"],
    year: "2024",
    gallery: [
      "/img/c2c6ab1c-5a3d-4d8f-86a1-86f7f11422bb.jpg",
      "/img/64369250-9d4e-44f1-86be-83775da78c5e.jpg",
      "/img/652c8ef0-6ce4-4afc-8aa9-669c1ee31d20.jpg"
    ],
    challenges: "Создание платформы, которая будет одинаково удобна как для мастеров-продавцов, так и для покупателей. Необходимо было решить вопросы доверия в онлайн-продажах рукодельных товаров.",
    solution: "Разработан двойной интерфейс с отдельными панелями для продавцов и покупателей. Внедрена система рейтингов, отзывов и гарантий качества.",
    results: "Платформа привлекла более 500 мастеров в первые 6 месяцев. Объем продаж вырос в 3 раза по сравнению с предыдущим решением."
  },
  {
    id: 5,
    title: "Corporate Presentation",
    category: "Презентации",
    image: "/img/64369250-9d4e-44f1-86be-83775da78c5e.jpg",
    description: "Корпоративная презентация для инвестиционного фонда",
    details: "Разработка презентации для привлечения инвесторов включает создание визуальной концепции, инфографики и анимированных слайдов. Презентация выполнена в минималистичном стиле с акцентом на данные.",
    technologies: ["Презентации", "Инфографика", "Анимация"],
    year: "2024",
    gallery: [
      "/img/64369250-9d4e-44f1-86be-83775da78c5e.jpg",
      "/img/c2c6ab1c-5a3d-4d8f-86a1-86f7f11422bb.jpg",
      "/img/652c8ef0-6ce4-4afc-8aa9-669c1ee31d20.jpg"
    ],
    challenges: "Необходимо было представить сложные финансовые данные в понятном и привлекательном виде для потенциальных инвесторов.",
    solution: "Создана модульная система слайдов с интерактивными элементами и анимированной инфографикой. Использована строгая типографика и корпоративные цвета.",
    results: "Презентация помогла привлечь инвестиции на сумму $50M. Получила награду за лучший корпоративный дизайн года."
  }
]

function Index() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeSection, setActiveSection] = useState('home')
  const [isEditing, setIsEditing] = useState(false)
  const [editableContent, setEditableContent] = useState<any>({})
  const [activeFilter, setActiveFilter] = useState('Все')

  const sections = [
    { id: 'home', label: 'Главная' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'about', label: 'Обо мне' },
    { id: 'services', label: 'Услуги' },
    { id: 'contact', label: 'Контакты' }
  ]

  const filters = ['Все', 'Маркетплейсы', 'Полиграфия', 'Презентации', 'Упаковка', 'Веб-дизайн']

  const filteredProjects = activeFilter === 'Все' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter)

  const services = [
    {
      icon: 'Palette',
      title: 'Брендинг',
      description: 'Создание уникальной айдентики и фирменного стиля'
    },
    {
      icon: 'Monitor',
      title: 'Веб-дизайн',
      description: 'Разработка современных пользовательских интерфейсов'
    },
    {
      icon: 'Home',
      title: 'Интерьерный дизайн',
      description: 'Дизайн жилых и коммерческих пространств'
    },
    {
      icon: 'Package',
      title: 'Упаковка',
      description: 'Дизайн упаковки и печатной продукции'
    }
  ]

  const toggleEdit = () => {
    if (isEditing) {
      console.log('Saving changes:', editableContent)
    }
    setIsEditing(!isEditing)
    setEditableContent({})
  }

  const handleEditChange = (field: string, value: string, projectId?: number) => {
    const key = projectId ? `${projectId}-${field}` : field
    setEditableContent(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const getEditableValue = (field: string, defaultValue: string, projectId?: number) => {
    const key = projectId ? `${projectId}-${field}` : field
    return editableContent[key] !== undefined ? editableContent[key] : defaultValue
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold">DESIGNER PORTFOLIO</div>
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === section.id ? 'text-accent border-b-2 border-accent' : 'text-muted-foreground'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleEdit}
              >
                <Icon name={isEditing ? "Save" : "Edit"} size={16} className="mr-2" />
                {isEditing ? 'Сохранить' : 'Редактировать'}
              </Button>
              <Button variant="outline" size="sm" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <>
            <section className="py-20 text-center">
              <div className="container mx-auto px-6">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
                  CREATIVE
                  <br />
                  <span className="text-accent">DESIGNER</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Создаю изысканные дизайнерские решения, которые вдохновляют и запоминаются
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => setActiveSection('portfolio')}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Смотреть портфолио
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setActiveSection('contact')}
                  >
                    Связаться
                  </Button>
                </div>
              </div>
            </section>

            {/* Projects Section on Home */}
            <section className="py-20 bg-muted/30">
              <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-8 text-center">Проекты</h2>
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                  {filters.map((filter) => (
                    <Button
                      key={filter}
                      variant={activeFilter === filter ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveFilter(filter)}
                      className={`px-6 py-2 rounded-full transition-all duration-200 ${
                        activeFilter === filter 
                          ? 'bg-primary text-primary-foreground' 
                          : 'border-muted-foreground/20 hover:border-accent text-muted-foreground hover:text-accent'
                      }`}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <Card 
                      key={project.id} 
                      className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-background"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-xs text-accent mb-2 font-medium">{project.category}</div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Portfolio Section */}
        {activeSection === 'portfolio' && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-8 text-center">Проекты</h2>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-full transition-all duration-200 ${
                      activeFilter === filter 
                        ? 'bg-primary text-primary-foreground' 
                        : 'border-muted-foreground/20 hover:border-accent text-muted-foreground hover:text-accent'
                    }`}
                  >
                    {filter}
                  </Button>
                ))}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="text-xs text-accent mb-2 font-medium">{project.category}</div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-1">{project.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Обо мне</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Анна Дизайнер</h3>
                    <p className="text-muted-foreground mb-6">
                      С более чем 8-летним опытом в дизайне, я специализируюсь на создании 
                      премиальных решений для брендов, которые ценят качество и внимание к деталям.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Моя философия заключается в том, что хороший дизайн должен быть не только 
                      красивым, но и функциональным, рассказывающим историю бренда и создающим 
                      эмоциональную связь с аудиторией.
                    </p>
                    <div className="flex gap-4">
                      <Icon name="Award" size={24} className="text-accent" />
                      <div>
                        <h4 className="font-semibold">15+ наград</h4>
                        <p className="text-sm text-muted-foreground">В области дизайна</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-8">
                    <h4 className="font-semibold mb-4">Навыки</h4>
                    <div className="space-y-3">
                      {['Брендинг', 'UI/UX Design', 'Интерьерный дизайн', 'Типографика', '3D визуализация'].map((skill) => (
                        <div key={skill} className="flex justify-between">
                          <span>{skill}</span>
                          <span className="text-accent">●●●●●</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activeSection === 'services' && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center">Услуги</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="mb-4">
                        <Icon name={service.icon as any} size={32} className="mx-auto text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Контакты</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Готовы начать работу над вашим проектом? Свяжитесь со мной!
                </p>
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="Mail" size={20} className="text-accent" />
                    <span>hello@designer.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="Phone" size={20} className="text-accent" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex justify-center gap-6 pt-6">
                    <Button variant="outline" size="icon">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Linkedin" size={20} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Twitter" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-full p-0 overflow-hidden">
          {selectedProject && (
            <div className="flex flex-col h-full">
              <DialogHeader className="px-6 py-4 border-b">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <DialogTitle className="text-2xl font-bold mb-2">
                      {isEditing ? (
                        <input
                          className="w-full bg-transparent border border-border rounded p-2"
                          value={getEditableValue('project-title', selectedProject.title, selectedProject.id)}
                          onChange={(e) => handleEditChange('project-title', e.target.value, selectedProject.id)}
                        />
                      ) : (
                        getEditableValue('project-title', selectedProject.title, selectedProject.id)
                      )}
                    </DialogTitle>
                    <div className="flex gap-2 items-center text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded-full">
                        {selectedProject.category}
                      </span>
                      <span>{selectedProject.year}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>
              </DialogHeader>
              
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Images Gallery */}
                  <div className="space-y-4">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {selectedProject.gallery.map((img, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded">
                          <img
                            src={img}
                            alt={`${selectedProject.title} ${index + 1}`}
                            className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Описание проекта</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {isEditing ? (
                          <textarea
                            className="w-full h-24 bg-transparent border border-border rounded p-2 resize-none"
                            value={getEditableValue('project-description', selectedProject.details, selectedProject.id)}
                            onChange={(e) => handleEditChange('project-description', e.target.value, selectedProject.id)}
                          />
                        ) : (
                          getEditableValue('project-description', selectedProject.details, selectedProject.id)
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Вызовы</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {isEditing ? (
                          <textarea
                            className="w-full h-20 bg-transparent border border-border rounded p-2 resize-none"
                            value={getEditableValue('project-challenges', selectedProject.challenges, selectedProject.id)}
                            onChange={(e) => handleEditChange('project-challenges', e.target.value, selectedProject.id)}
                          />
                        ) : (
                          getEditableValue('project-challenges', selectedProject.challenges, selectedProject.id)
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Решение</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {isEditing ? (
                          <textarea
                            className="w-full h-20 bg-transparent border border-border rounded p-2 resize-none"
                            value={getEditableValue('project-solution', selectedProject.solution, selectedProject.id)}
                            onChange={(e) => handleEditChange('project-solution', e.target.value, selectedProject.id)}
                          />
                        ) : (
                          getEditableValue('project-solution', selectedProject.solution, selectedProject.id)
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Результат</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {isEditing ? (
                          <textarea
                            className="w-full h-20 bg-transparent border border-border rounded p-2 resize-none"
                            value={getEditableValue('project-results', selectedProject.results, selectedProject.id)}
                            onChange={(e) => handleEditChange('project-results', e.target.value, selectedProject.id)}
                          />
                        ) : (
                          getEditableValue('project-results', selectedProject.results, selectedProject.id)
                        )}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Технологии</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-muted text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Index