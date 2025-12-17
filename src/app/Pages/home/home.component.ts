import { Component, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface CaseStudy {
  name: string;
  impact: string;
  result: string;
  metric: string;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  menuOpen = false;
  solutionsOpen = false;
  touchActive = false;
  currentYear = new Date().getFullYear();

  formData = {
    name: '',
    email: '',
    projectType: '',
    message: '',
  };

  services: Service[] = [
    {
      title: 'Product Engineering',
      description: 'From discovery to launch with cloud-native, scalable builds.',
      icon: 'ph-lightning',
    },
    {
      title: 'AI & Automation',
      description: 'Practical AI, data pipelines, and workflow automation at scale.',
      icon: 'ph-brain',
    },
    {
      title: 'Cloud & DevOps',
      description: 'Reliable CI/CD, IaC, and SRE practices for resilient releases.',
      icon: 'ph-cloud',
    },
    {
      title: 'Modernization',
      description: 'Re-architect legacy systems into secure, modular services.',
      icon: 'ph-rocket',
    },
    {
      title: 'Mobile & Web',
      description: 'Premium web, iOS, and Android experiences with responsive UX.',
      icon: 'ph-device',
    },
    {
      title: 'Dedicated Squads',
      description: 'Cross-functional teams that integrate with your product org.',
      icon: 'ph-users',
    },
  ];

  caseStudies: CaseStudy[] = [
    {
      name: 'Fintech Identity Platform',
      impact: 'Cut onboarding time by 63% with automated KYC',
      result: 'ISO 27001-ready architecture with 99.99% uptime',
      metric: '63% faster onboarding',
    },
    {
      name: 'eCommerce Replatform',
      impact: 'Drove 28% conversion lift via headless storefront',
      result: 'Global CDN, <200ms TTFB across 6 regions',
      metric: '28% conversion lift',
    },
    {
      name: 'Healthcare Analytics',
      impact: 'Real-time insights for 12M events/day',
      result: 'HIPAA-compliant data mesh with auditability',
      metric: '12M events/day',
    },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Avery Singh',
      role: 'VP Engineering, Arcadia',
      quote:
        'Aalekhan became an extension of our team—shipping reliably with a security-first mindset.',
    },
    {
      name: 'Jordan Lee',
      role: 'Product Lead, Northwind Commerce',
      quote:
        'They translated complex requirements into elegant experiences and measurable outcomes.',
    },
    {
      name: 'Casey Morgan',
      role: 'CTO, Helix Health',
      quote:
        'Architecture, delivery, and quality were all world-class. We scaled with confidence.',
    },
  ];

  faqs: Faq[] = [
    {
      question: 'How do you engage with new projects?',
      answer:
        'We start with a discovery sprint to align on goals, risks, and architecture, then move into iterative delivery with weekly demos.',
    },
    {
      question: 'Do you work with existing teams?',
      answer:
        'Yes—our squads integrate with your product, design, and security teams, aligning on rituals and tooling from day one.',
    },
    {
      question: 'Which industries do you specialize in?',
      answer:
        'Fintech, healthtech, SaaS, and eCommerce, with experience in compliance, data, and performance-sensitive systems.',
    },
    {
      question: 'How do you ensure quality and security?',
      answer:
        'Automated testing, CI/CD, IaC, threat modeling, and reviews aligned to SOC2/ISO practices where needed.',
    },
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Aalekhan Software | Custom Software Development & Product Engineering');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Aalekhan Software delivers premium product engineering, cloud, AI, and modernization services with secure, scalable architectures.',
      },
      {
        name: 'keywords',
        content:
          'software development company, product engineering, cloud native, devops, AI automation, modernization, custom software, dedicated teams',
      },
      { property: 'og:title', content: 'Aalekhan Software | Software Development Company' },
      {
        property: 'og:description',
        content:
          'Partner with Aalekhan Software for high-performing product engineering, AI, DevOps, and modernization.',
      },
      { property: 'og:type', content: 'website' },
    ]);

    const canonical = this.renderer.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', this.document.defaultView?.location.href ?? '/');
    this.renderer.appendChild(this.document.head, canonical);

    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareCompany',
      name: 'Aalekhan Software',
      url: this.document.defaultView?.location.href ?? 'https://aalekhan.software',
      logo: '/assets/logo/aalekhan_logo.jpeg',
      description:
        'Aalekhan Software builds secure, scalable products with cloud, AI, and DevOps expertise.',
      sameAs: ['https://www.linkedin.com', 'https://twitter.com'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'hello@aalekhan.software',
        },
      ],
    };

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(ldJson);
    this.renderer.appendChild(this.document.head, script);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleSolutions(): void {
    this.solutionsOpen = !this.solutionsOpen;
  }

  @HostListener('document:touchstart', ['$event'])
  handleTouchStart(event: TouchEvent): void {
    if (!this.touchActive) {
      this.touchActive = true;
    }
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-dropdown') && this.solutionsOpen) {
      this.solutionsOpen = false;
    }
    if (!target.closest('.nav-menu') && this.menuOpen) {
      this.menuOpen = false;
    }
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.formData = { name: '', email: '', projectType: '', message: '' };
  }
}

