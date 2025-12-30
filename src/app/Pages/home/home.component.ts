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
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your unique business requirements and drive growth.',
      icon: 'ph-lightning',
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end development services covering frontend, backend, and database layers for complete solutions.',
      icon: 'ph-code',
    },
    {
      title: 'Frontend Development Services',
      description: 'Modern, responsive user interfaces built with React, Angular, and Vue.js for exceptional user experiences.',
      icon: 'ph-browser',
    },
    {
      title: 'Backend Development Services',
      description: 'Scalable server-side solutions with Node.js, Java, .NET, and Python for robust application architecture.',
      icon: 'ph-server',
    },
    {
      title: 'API Development Services',
      description: 'RESTful and GraphQL APIs designed for seamless integration and optimal performance.',
      icon: 'ph-plug',
    },
    {
      title: 'Web Application Development',
      description: 'Enterprise-grade web applications and SPAs built with modern frameworks and best practices.',
      icon: 'ph-globe',
    },
    {
      title: 'SaaS Application Development',
      description: 'Cloud-native SaaS platforms with multi-tenancy, scalability, and subscription management.',
      icon: 'ph-cloud',
    },
    {
      title: 'ERP & CRM Development',
      description: 'Custom ERP and CRM software solutions tailored to streamline your business operations.',
      icon: 'ph-chart-line',
    },
    {
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation services to modernize legacy systems and drive innovation.',
      icon: 'ph-rocket',
    },
    {
      title: 'Dedicated Development Team',
      description: 'Expert development teams that integrate seamlessly with your organization for long-term success.',
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
    this.title.setTitle('Aalekhan Software | Digitize your life | Custom Software Development Company');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Aalekhan Software - Digitize your life. Leading software development company offering custom software development, full stack development, web application development services, SaaS application development, ERP/CRM software development, and dedicated development teams. Expert IT services company and software solutions provider.',
      },
      {
        name: 'keywords',
        content:
          'software development company, custom software development, IT services company, software solutions provider, enterprise software development, business software solutions, digital transformation services, backend development services, API development services, frontend development services, SPA development company, full stack development company, full stack Java developer company, web application development services, software outsourcing company, dedicated development team, custom ERP software development, CRM software development services, SaaS application development',
      },
      { property: 'og:title', content: 'Aalekhan Software | Digitize your life | Custom Software Development Company' },
      {
        property: 'og:description',
        content:
          'Digitize your life with Aalekhan Software. Leading software development company providing custom software development, full stack development, web applications, SaaS, ERP/CRM solutions, and dedicated development teams.',
      },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Aalekhan Software' },
    ]);

    const canonical = this.renderer.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', this.document.defaultView?.location.href ?? '/');
    this.renderer.appendChild(this.document.head, canonical);

    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Aalekhan Software',
      applicationCategory: 'SoftwareDevelopmentCompany',
      operatingSystem: 'Web, Cloud',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
      },
    };

    const organizationJson = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Aalekhan Software',
      url: this.document.defaultView?.location.href ?? 'https://aalekhansoftware.com',
      logo: '/assets/logo/aalekhan_logo.jpeg',
      description:
        'Leading software development company providing custom software development, full stack development, web application development services, SaaS application development, ERP/CRM software development, and dedicated development teams.',
      sameAs: ['https://www.linkedin.com', 'https://twitter.com'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+91-8401428050',
          email: 'info@aalekhansoftware.com',
          areaServed: 'Worldwide',
          availableLanguage: ['English'],
        },
      ],
      areaServed: {
        '@type': 'Country',
        name: 'Worldwide',
      },
      knowsAbout: [
        'Custom Software Development',
        'Full Stack Development',
        'Web Application Development',
        'SaaS Application Development',
        'ERP Software Development',
        'CRM Software Development',
        'API Development',
        'Digital Transformation',
      ],
    };

    const script1 = this.renderer.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(ldJson);
    this.renderer.appendChild(this.document.head, script1);

    const script2 = this.renderer.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(organizationJson);
    this.renderer.appendChild(this.document.head, script2);
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

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-dropdown') && this.solutionsOpen) {
      this.solutionsOpen = false;
    }
    if (!target.closest('.nav-menu') && !target.closest('.menu-btn') && this.menuOpen) {
      this.menuOpen = false;
    }
  }

  @HostListener('window:resize')
  handleResize(): void {
    if (window.innerWidth > 768) {
      this.menuOpen = false;
      this.solutionsOpen = false;
    }
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.formData = { name: '', email: '', projectType: '', message: '' };
  }
}

