import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Primary focus when analyzing a real-world problem',
    subtitle: 'What part of a complex situation draws your immediate curiosity?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'The mathematical logic, physics mechanics, and structural calculations.',
        subtext: 'Engineering & Physical Sciences mindset'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'The biological health, organic systems, and medical impact.',
        subtext: 'Healthcare & Life Sciences mindset'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'The financial cost, profit margins, and economic feasibility.',
        subtext: 'Business & Finance mindset'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'The human stories, legal rules, social impact, and ethics.',
        subtext: 'Humanities & Legal mindset'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'The physical tools, machinery parts, and hands-on repair steps.',
        subtext: 'Practical Skill & Trade mindset'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'The user experience, digital software tools, and AI automation.',
        subtext: 'New-Age Tech & Innovation mindset'
      }
    ]
  },
  {
    id: 2,
    question: 'Easiest type of information for you to absorb and retain',
    subtitle: 'What format of learning material feels most natural to you?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'Math formulas, physics theorems, circuit diagrams, and graphs.',
        subtext: 'Quantitative & Mathematical'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'Anatomical diagrams, chemical reactions, and biology lifecycles.',
        subtext: 'Biological & Laboratory'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'Financial ledgers, market growth charts, and balance sheets.',
        subtext: 'Financial & Analytical'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'History case studies, political debates, essays, and literature.',
        subtext: 'Conceptual & Expressive'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'Step-by-step video tutorials, wiring blueprints, and hands-on demos.',
        subtext: 'Tactile & Operational'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'Figma visual design boards, tech news, and coding cheat sheets.',
        subtext: 'Digital & Creative Tech'
      }
    ]
  },
  {
    id: 3,
    question: 'Your natural role when working in a school group project',
    subtitle: 'Where do you naturally contribute best when collaborating?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'System Architect: Designing the core formula, code, or structural plan.',
        subtext: 'Technical Lead'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'Research Lead: Fact-checking health data, biology details, and evidence.',
        subtext: 'Scientific Investigator'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'Operations Manager: Handling the budget, timelines, and resource allocation.',
        subtext: 'Project Coordinator'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'Communicator & Presenter: Writing persuasive copy, speeches, and legal arguments.',
        subtext: 'Creative & Policy Lead'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'Tactical Executor: Assembling physical models, hardware, and physical displays.',
        subtext: 'Hands-on Builder'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'Digital Innovator: Designing the app prototype, slides, and web graphics.',
        subtext: 'UI/UX & Tech Lead'
      }
    ]
  },
  {
    id: 4,
    question: 'Preferred way to learn a brand-new skill or topic',
    subtitle: 'How do you like to tackle fresh challenges?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'Solving numerical problems step-by-step until the logic clicks.',
        subtext: 'Analytical problem-solving'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'Observing living systems, conducting lab tests, and dissecting concepts.',
        subtext: 'Scientific observation'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'Studying real-world business case studies and financial strategies.',
        subtext: 'Commercial strategy'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'Reading diverse perspectives, writing opinions, and debating ideas.',
        subtext: 'Reflective discussion'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'Dismantling and reassembling physical parts in a workshop setup.',
        subtext: 'Practical apprenticeship'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'Building a live digital project or app using online toolkits and AI tools.',
        subtext: 'Interactive project build'
      }
    ]
  },
  {
    id: 5,
    question: 'Your personal definition of a fulfilling career',
    subtitle: 'What ultimate impact matters most to you in the future?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'Building robust technology, infrastructure, rockets, or computing engines.',
        subtext: 'Engineering Innovation'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'Healing illnesses, saving lives, and advancing medical or biological science.',
        subtext: 'Healthcare Service'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'Leading profitable enterprises, managing wealth, and mastering markets.',
        subtext: 'Financial Leadership'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'Upholding justice, creating inspiring art/films, or shaping public policy.',
        subtext: 'Social & Cultural Impact'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'Mastering a specialized trade, technical mastery, and early financial independence.',
        subtext: 'Skilled Craftsmanship'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'Pioneering cutting-edge digital experiences, AI apps, and viral media.',
        subtext: 'Future Tech & Design'
      }
    ]
  },
  {
    id: 6,
    question: 'A global challenge you feel most passionate about addressing',
    subtitle: 'Which problem domain inspires you to act?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'Transitioning to clean renewable energy, space tech, and smart mobility.',
        subtext: 'Engineering Solutions'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'Curing genetic diseases, preventing pandemics, and healthcare accessibility.',
        subtext: 'Biomedical Advances'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'Stabilizing economic markets, funding startups, and wealth distribution.',
        subtext: 'Economic Growth'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'Protecting human rights, reforming education, and judicial equity.',
        subtext: 'Social Justice'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'Upgrading physical infrastructure, manufacturing quality, and trade skills.',
        subtext: 'Practical Infrastructure'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'Guarding cybersecurity, AI ethics, and human-computer interactions.',
        subtext: 'Digital Ecosystems'
      }
    ]
  },
  {
    id: 7,
    question: 'How you respond when a project or plan encounters a sudden failure',
    subtitle: 'What is your immediate troubleshooting style?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'Re-verify math, formulas, and logical steps to pinpoint the exact calculation flaw.',
        subtext: 'Logic debugging'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'Isolate variables, re-test hypotheses, and check root biological cause.',
        subtext: 'Experimental diagnosis'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'Review budget expenses, ROI metrics, and pivot financial resources.',
        subtext: 'Financial reallocation'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'Gather team feedback, analyze human behavior, and re-craft communication.',
        subtext: 'Human-centered feedback'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'Inspect hardware connections, replace faulty components, and test manually.',
        subtext: 'Physical repair'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'Iterate wireframes, tweak UI feedback, or prompt AI tools for alternatives.',
        subtext: 'Agile design iteration'
      }
    ]
  },
  {
    id: 8,
    question: 'Your dream work environment',
    subtitle: 'Where do you see yourself feeling happiest day-to-day?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'Advanced engineering laboratory, software tech campus, or design studio.',
        subtext: 'Tech & Engineering Lab'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'Hospital clinic, diagnostic center, or biotech research facility.',
        subtext: 'Medical & Clinical Space'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'High-rise corporate office, stock exchange floor, or consultancy firm.',
        subtext: 'Corporate & Financial Center'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'Courtrooms, film sets, journalism newsrooms, or creative design studios.',
        subtext: 'Creative & Policy Spaces'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'Automotive workshop, manufacturing plant floor, or technical site.',
        subtext: 'Industrial Workshop & Field'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'Modern tech startup workspace, remote digital setup, or design agency.',
        subtext: 'Flexible Tech Studio'
      }
    ]
  },
  {
    id: 9,
    question: 'First reaction when presented with a large dataset or set of facts',
    subtitle: 'How do you prefer to handle raw information?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'Write a script or statistical formula to compute exact trends and correlation.',
        subtext: 'Mathematical modeling'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'Filter medical/biological metrics to identify disease patterns or scientific proof.',
        subtext: 'Medical pattern analysis'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'Look for profit margins, sales growth, and financial forecasts.',
        subtext: 'Commercial metrics'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'Search for social themes, historical trends, and human stories behind the numbers.',
        subtext: 'Qualitative narrative'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'Extract practical numbers to order correct equipment and spare parts.',
        subtext: 'Operational inventory'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'Build an interactive visual dashboard with charts, infographics, and filters.',
        subtext: 'Data visualization'
      }
    ]
  },
  {
    id: 10,
    question: 'Preferred duration and style of post-10th higher education',
    subtitle: 'What pace of learning and credentialing fits your life plan best?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: '4-year intensive technical degree (B.Tech) with rigorous exams and labs.',
        subtext: '4-Year Engineering Degree'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: '5.5-year medical degree (MBBS) or 4-year healthcare science program.',
        subtext: '5-Year Medical Pathway'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: '3-4 year B.Com/BBA alongside professional CA/CS exams or 5-year IPM.',
        subtext: 'Degree + Professional Exams'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: '3-year BA or 5-year Integrated Law (BA LLB) emphasizing reading & debate.',
        subtext: 'Humanities & Law Degree'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: '3-year hands-on Polytechnic Diploma with option for early job or lateral B.Tech.',
        subtext: '3-Year Polytechnic Diploma'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: '1-3 year skill certifications, portfolio bootcamps, and continuous online learning.',
        subtext: 'Skill Certificate Bootcamps'
      }
    ]
  },
  {
    id: 11,
    question: 'Which extracurricular activity sounds most enjoyable to you?',
    subtitle: 'Where would you spend an open Saturday afternoon?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'Building a robotics line-follower, drone kit, or solving Math Olympiad problems.',
        subtext: 'Robotics & Math Olympiad'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'Volunteering at a health camp, botany garden tour, or observing surgery clips.',
        subtext: 'Health & Biology Exploration'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'Participating in a school mock stock trading competition or entrepreneurship pitch.',
        subtext: 'Stock Market & Pitch Deck'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'Taking part in a Model United Nations (MUN), creative writing, or drama club.',
        subtext: 'MUN, Writing & Theater'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'Restoring a bicycle/appliance, electronic soldering, or wood crafting in a shop.',
        subtext: 'Workshop Crafting'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'Designing app mockups in Figma, editing YouTube shorts, or tweaking AI prompts.',
        subtext: 'App Design & Media Production'
      }
    ]
  },
  {
    id: 12,
    question: 'How you judge whether a finished project is a success',
    subtitle: 'What primary metric defines excellence for you?',
    options: [
      {
        label: 'A',
        streamId: 'pcm',
        text: 'Precision & Performance: Zero mathematical bugs, high structural efficiency.',
        subtext: 'Technical Precision'
      },
      {
        label: 'B',
        streamId: 'pcb',
        text: 'Clinical Accuracy: Improved biological well-being, scientific validity.',
        subtext: 'Health Outcome'
      },
      {
        label: 'C',
        streamId: 'commerce',
        text: 'Financial Growth: High Return on Investment (ROI), revenue, and cost control.',
        subtext: 'Financial ROI'
      },
      {
        label: 'D',
        streamId: 'arts',
        text: 'Societal & Cultural Value: Inspiring change, legal fairness, and public awareness.',
        subtext: 'Societal Resonance'
      },
      {
        label: 'E',
        streamId: 'vocational',
        text: 'Practical Reliability: Works flawlessly in real conditions, easily serviceable.',
        subtext: 'Operational Reliability'
      },
      {
        label: 'F',
        streamId: 'emerging',
        text: 'User Engagement: Delightful design, smooth interface, and fast digital adoption.',
        subtext: 'User Delight & UI Polish'
      }
    ]
  }
];
