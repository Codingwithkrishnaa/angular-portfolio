
import { Component } from '@angular/core';

type ProjectCategory =
  | 'All'
  | 'Web Apps'
  | 'Dashboards'
  | 'Automation'
  | 'Mobile Apps';

interface Project {
  number: string;
  title: string;
  category: string;
  filter: ProjectCategory;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  activeFilter: ProjectCategory = 'All';

  filters: ProjectCategory[] = [
    'All',
    'Web Apps',
    'Dashboards',
    'Automation',
    'Mobile Apps'
  ];

  projects: Project[] = [
    {
      number: '01',
      title: 'Smart Hospitality Dashboard',
      category: 'DASHBOARD · SAAS',
      filter: 'Dashboards',
      description:
        'A hospitality dashboard with revenue analytics, dynamic pricing, KPI widgets and interactive charts.',
      technologies: [
        'Angular',
        'TypeScript',
        'ECharts',
        'Tailwind CSS'
      ],
      image: '/images/projects/hospitality-dashboard.png',
      github: '',
      demo: ''
    },
    {
      number: '02',
      title: 'Spotify Music Request Bot',
      category: 'API INTEGRATION · PYTHON',
      filter: 'Automation',
      description:
        'A music request workflow that connects chat commands with Spotify search and queue management.',
      technologies: [
        'Python',
        'Spotify API',
        'REST API',
        'Automation'
      ],
      image: '/images/projects/music-bot.png',
      github: '',
      demo: ''
    },
    {
      number: '03',
      title: 'Developer Portfolio',
      category: 'WEB DEVELOPMENT · PERSONAL',
      filter: 'Web Apps',
      description:
        'A responsive portfolio showcasing projects, technical skills, professional experience and contact information.',
      technologies: [
        'Angular',
        'TypeScript',
        'CSS',
        'Responsive UI'
      ],
      image: '/images/projects/portfolio.png',
      github: '',
      demo: ''
    },
    {
      number: '04',
      title: 'Travel Explorer App',
      category: 'MOBILE APP · IONIC',
      filter: 'Mobile Apps',
      description:
        'A travel app concept featuring destination discovery, search and itinerary planning.',
      technologies: [
        'Ionic',
        'Angular',
        'Firebase',
        'Capacitor'
      ],
      image: '/images/projects/travel-app.png',
      github: '',
      demo: ''
    },
    {
      number: '05',
      title: 'Revenue Manager AI Assistant',
      category: 'LLM · AI ASSISTANT',
      filter: 'Dashboards',
      description:
        'An AI assistant concept integrated with dashboard data to provide business insights and recommendations.',
      technologies: [
        'Angular',
        'OpenAI',
        'LLM',
        'TypeScript'
      ],
      image: '/images/projects/ai-assistant.png',
      github: '',
      demo: ''
    },
    {
      number: '06',
      title: 'Document OCR Tool',
      category: 'PYTHON · OCR',
      filter: 'Automation',
      description:
        'An OCR tool concept for extracting information from invoices and receipts using Python automation.',
      technologies: [
        'Python',
        'Tesseract OCR',
        'OpenCV',
        'Automation'
      ],
      image: '/images/projects/document-ocr.png',
      github: '',
      demo: ''
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projects;
    }

    return this.projects.filter(
      project => project.filter === this.activeFilter
    );
  }

  setFilter(filter: ProjectCategory): void {
    this.activeFilter = filter;
  }
}
