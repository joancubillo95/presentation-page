export type Skill = {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  area: 'Frontend' | 'Backend' | 'Database' | 'Security' | 'Tools' | 'Soft';
};

export type Experience = {
  company: string;
  role: string;
  start: string; // YYYY-MM
  end?: string;  // YYYY-MM or 'Present'
  summary: string;
  highlights: string[];
  tech: string[];
};

export type Education = {
  institution: string;
  credential: string;
  year: string;
};

export type Profile = {
  name: string;
  title: string;
  location: string;
  languages: string[];
  summary: string;
  links: { label: string; url: string }[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
};

export const profile: Profile = {
  name: 'Joan Manuel Cubillo Arguedas',
  title: 'Software Developer',
  location: 'Alajuela, Costa Rica',
  languages: ['English', 'Spanish', 'Portuguese'],
  summary:
    'With a Technical degree in Software Development from INA, I contributed to Cargill as a Software Engineer, where I designed, developed, and maintained scalable web applications across backend, frontend, and database layers. My core strengths lie in software development, web engineering, and collaborative teamwork, with a consistent focus on delivering secure, high-performing code.'  
    +'At Cargill, I worked in hybrid environments to implement new features, address security vulnerabilities, and enhance application performance. By applying best practices in version control, automated testing, and deployment pipelines, I helped foster a culture of quality, reliability, and innovation.'
    +'I’m also committed to continuous improvement, currently expanding my expertise in cloud computing (AWS), data science fundamentals, and AI systems — with a focus on ethical, scalable solutions.'
    +'I am eager to bring my expertise in software development and collaborative mindset to future opportunities that prioritize robust technology solutions and efficient teamwork',
  links: [
    { label: 'GitHub', url: 'https://github.com/joancubillo95' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joan-manuel-b7962024a' }
  ],
  skills: [
    { name: 'React + TypeScript', level: 'Advanced', area: 'Frontend' },
    { name: '.NET Core (C#)', level: 'Intermediate', area: 'Backend' },
    { name: 'Spring Boot (Java)', level: 'Intermediate', area: 'Backend' },
    { name: 'PostgreSQL', level: 'Advanced', area: 'Database' },
    { name: 'Oracle DB', level: 'Advanced', area: 'Database' },
    { name: 'Git/GitHub', level: 'Advanced', area: 'Tools' },
    { name: 'Vulnerability Mitigation', level: 'Intermediate', area: 'Security' },
    { name: 'Analytical Thinking', level: 'Advanced', area: 'Soft' }
  ],
  experience: [
    {
      company: 'Cargill',
      role: 'Software Engineer',
      start: '2022-01',
      end: 'Present',
      summary:
        'Designed, developed, and maintained scalable web applications; implemented features, resolved vulnerabilities, and optimized performance.',
      highlights: [
        'Led hybrid environment deployments',
        'Improved API performance',
        'Proactively mitigated security issues'
      ],
      tech: ['React', 'TypeScript', '.NET', 'PostgreSQL', 'Oracle', 'GitHub', 'Swagger', 'Postman']
    }
  ],
  education: [
    {
      institution: 'INA',
      credential: 'Technical degree in Software Development',
      year: '2021'
    }
  ]
};