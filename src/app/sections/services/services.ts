import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  link: string;
  image: string;
}

@Component({
  imports: [],
  selector: 'app-services',
  styleUrl: './services.css',
  templateUrl: './services.html',
})
export class Services {

  // Inside Services class
  services: Service[] = [
    {
      title: 'UI/UX Design',
      description:
        'Designing intuitive, user-friendly interfaces with clean layouts and consistent visual experiences.',
      link: '#portfolio',
      image: '/images/services/ui-ux-preview.png'
    },
    {
      title: 'Web Design',
      description:
        'Turning design concepts into modern, responsive websites with polished visual details.',
      link: '#portfolio',
      image: '/images/services/web-design-preview.png'
    },
    {
      title: 'Branding & Identity',
      description:
        'Creating engaging landing pages with clear messaging, responsive layouts and effective calls to action.',
      link: '#portfolio',
      image: '/images/services/landing-page-preview.png'
    }
  ];
}
