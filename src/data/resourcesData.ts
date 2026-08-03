import { ResourceItem } from '../types';

export const RESOURCES: ResourceItem[] = [
  // PCM
  {
    id: 'res-pcm-1',
    streamId: 'pcm',
    type: 'Watch',
    title: 'Physics Wallah - Alakh Pandey',
    description: 'Free comprehensive Class 11 & 12 Physics & Chemistry video lectures for JEE Main, Advanced & Board exams.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@PhysicsWallah',
    examName: 'JEE Main & Boards',
    tags: ['Physics', 'Chemistry', 'JEE Main', 'Free Lectures'],
    provider: 'Physics Wallah'
  },
  {
    id: 'res-pcm-2',
    streamId: 'pcm',
    type: 'Read',
    title: 'NTA Official JEE Main Candidate Portal',
    description: 'Official exam schedules, downloadable syllabus PDFs, mock exam papers, and question keys.',
    eligibility: 'Post 10th/12th',
    url: 'https://jeemain.nta.ac.in/',
    examName: 'JEE Main',
    tags: ['Official Site', 'Syllabus', 'Past Papers'],
    provider: 'National Testing Agency (NTA)'
  },
  {
    id: 'res-pcm-3',
    streamId: 'pcm',
    type: 'Try',
    title: 'r/JEE Student Community Forum',
    description: 'Peer study advice, time management routines, book reviews (HC Verma, Irodov, Cengage), and revision plans.',
    eligibility: 'Post 10th',
    url: 'https://www.reddit.com/r/JEE/',
    examName: 'JEE Main & Advanced',
    tags: ['Community', 'Peer Notes', 'Mentorship'],
    provider: 'Reddit'
  },
  {
    id: 'res-pcm-4',
    streamId: 'pcm',
    type: 'Watch',
    title: 'Mohit Tyagi - Complete Math & Chemistry',
    description: 'In-depth conceptual lectures covering Class 11 and 12 JEE Mathematics and Organic Chemistry.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@MohitTyagi',
    examName: 'JEE Advanced',
    tags: ['Mathematics', 'Advanced Prep'],
    provider: 'Mohit Tyagi'
  },
  {
    id: 'res-pcm-5',
    streamId: 'pcm',
    type: 'Read',
    title: 'NCERT Official Online E-Books (Class 11 & 12)',
    description: 'Free downloadable textbooks for Physics, Chemistry, and Mathematics — essential foundation for entrance exams.',
    eligibility: 'Post 10th',
    url: 'https://ncert.nic.in/textbook.php',
    examName: 'Board Exams & JEE',
    tags: ['NCERT', 'Textbooks', 'Official'],
    provider: 'NCERT'
  },

  // PCB
  {
    id: 'res-pcb-1',
    streamId: 'pcb',
    type: 'Watch',
    title: 'Vedantu NEET Biology Channel',
    description: 'NCERT line-by-line breakdown, biology diagrams, and rapid revision sessions tailored for NEET-UG.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@VedantuNEET',
    examName: 'NEET-UG',
    tags: ['Biology', 'NCERT', 'NEET Prep'],
    provider: 'Vedantu'
  },
  {
    id: 'res-pcb-2',
    streamId: 'pcb',
    type: 'Read',
    title: 'NTA Official NEET-UG Portal',
    description: 'Official information bulletin, syllabus breakdown in PCB, tie-breaker rules, and cut-off trends.',
    eligibility: 'Post 10th/12th',
    url: 'https://neet.nta.nic.in/',
    examName: 'NEET-UG',
    tags: ['Official Site', 'Medical', 'Cutoffs'],
    provider: 'National Testing Agency'
  },
  {
    id: 'res-pcb-3',
    streamId: 'pcb',
    type: 'Try',
    title: 'r/Medicoretards Student Discussion Forum',
    description: 'Active discussion space for medical aspirants sharing test series analysis, biology tricks, and score improvement plans.',
    eligibility: 'Post 10th',
    url: 'https://www.reddit.com/r/Medicoretards/',
    examName: 'NEET-UG',
    tags: ['Community', 'Mentorship', 'Mock Tests'],
    provider: 'Reddit'
  },
  {
    id: 'res-pcb-4',
    streamId: 'pcb',
    type: 'Watch',
    title: 'Unacademy NEET - Botany & Zoology',
    description: 'Interactive biology revision streams, past-year question paper solving, and organic chemistry mechanisms.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@UnacademyNEET',
    examName: 'NEET-UG',
    tags: ['Botany', 'Zoology', 'Free Classes'],
    provider: 'Unacademy'
  },

  // COMMERCE
  {
    id: 'res-comm-1',
    streamId: 'commerce',
    type: 'Read',
    title: 'ICAI Board of Studies Knowledge Portal',
    description: 'Official study material, past exam papers, mock test series, and revision podcasts for CA Foundation.',
    eligibility: 'Post 10th/12th',
    url: 'https://boslive.icai.org/',
    examName: 'CA Foundation',
    tags: ['Official Portal', 'Chartered Accountancy', 'Study Material'],
    provider: 'ICAI'
  },
  {
    id: 'res-comm-2',
    streamId: 'commerce',
    type: 'Watch',
    title: 'CA Parag Gupta - Accounts & Commerce',
    description: 'Clear, step-by-step video tutorials on Class 11 & 12 Accountancy, Business Studies, and Economics.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@ParagGuptaClasses',
    examName: 'Commerce Boards & CA Foundation',
    tags: ['Accountancy', 'Business Studies', 'Free Tutorials'],
    provider: 'CA Parag Gupta'
  },
  {
    id: 'res-comm-3',
    streamId: 'commerce',
    type: 'Try',
    title: 'ICSI Official Portal for Company Secretary (CS)',
    description: 'Registration, syllabus breakdown, and module guidelines for CSEET (CS Executive Entrance Test).',
    eligibility: 'Post 10th/12th',
    url: 'https://www.icsi.edu/home/',
    examName: 'CSEET / CS',
    tags: ['Official Site', 'Company Secretary', 'Governance'],
    provider: 'Institute of Company Secretaries of India'
  },
  {
    id: 'res-comm-4',
    streamId: 'commerce',
    type: 'Watch',
    title: 'Rajat Arora - Commerce & Economics',
    description: 'Popular high school economics and business studies summaries for Class 11 and 12 Commerce students.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@RajatAroraOfficial',
    examName: 'CUET & Commerce Boards',
    tags: ['Economics', 'Business Studies', 'Board Prep'],
    provider: 'Rajat Arora'
  },

  // ARTS
  {
    id: 'res-arts-1',
    streamId: 'arts',
    type: 'Read',
    title: 'Consortium of NLUs Official CLAT Portal',
    description: 'Official test pattern, sample question papers, passage-based legal reasoning guides, and counseling schedules.',
    eligibility: 'Post 10th/12th',
    url: 'https://consortiumofnlus.ac.in/',
    examName: 'CLAT',
    tags: ['Official Site', 'Law Entrance', 'NLU'],
    provider: 'Consortium of NLUs'
  },
  {
    id: 'res-arts-2',
    streamId: 'arts',
    type: 'Watch',
    title: 'LegalEdge - CLAT & Law Entrance Prep',
    description: 'Legal reasoning concepts, current affairs summaries, passage analysis, and CLAT mock exam strategy.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.youtube.com/@LegalEdgeCLAT',
    examName: 'CLAT & AILET',
    tags: ['Legal Reasoning', 'Law Prep', 'Video Series'],
    provider: 'Toprankers LegalEdge'
  },
  {
    id: 'res-arts-3',
    streamId: 'arts',
    type: 'Try',
    title: 'NIFT Official Admissions Portal',
    description: 'Bachelor of Design (B.Des) entrance exam syllabus, sample drawing tests, and studio test guidelines.',
    eligibility: 'Post 10th/12th',
    url: 'https://nift.ac.in/admission',
    examName: 'NIFT Entrance',
    tags: ['Official Portal', 'Fashion Design', 'Creative Ability'],
    provider: 'National Institute of Fashion Technology'
  },
  {
    id: 'res-arts-4',
    streamId: 'arts',
    type: 'Read',
    title: 'UPSC Official Candidate Guidance Portal',
    description: 'Syllabus for Civil Services Examination, previous year General Studies papers, and examination calendars.',
    eligibility: 'Post 10th/12th',
    url: 'https://upsc.gov.in/',
    examName: 'UPSC CSE',
    tags: ['Civil Services', 'Policy', 'Official'],
    provider: 'Union Public Service Commission'
  },

  // VOCATIONAL
  {
    id: 'res-voc-1',
    streamId: 'vocational',
    type: 'Read',
    title: 'Directorate General of Training (DGT) ITI Portal',
    description: 'Official database of NCVT certified ITI institutes, trade lists (Electrician, Fitter, Draftsman), and admission cycles.',
    eligibility: 'Post 10th',
    url: 'https://dgt.gov.in/',
    examName: 'ITI Trades',
    tags: ['Official Portal', 'ITI Trades', 'Technical Skill'],
    provider: 'Ministry of Skill Development'
  },
  {
    id: 'res-voc-2',
    streamId: 'vocational',
    type: 'Watch',
    title: 'Global ITI Learning - Technical Trade Classes',
    description: 'Video tutorials explaining electrician trade theory, blueprint reading, and workshop calculation for ITI students.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@GlobalITI',
    examName: 'ITI Exams & Trades',
    tags: ['Electrician', 'Fitter', 'Trade Skills'],
    provider: 'Global ITI'
  },
  {
    id: 'res-voc-3',
    streamId: 'vocational',
    type: 'Try',
    title: 'State Board of Technical Education (Polytechnic)',
    description: 'Polytechnic diploma curriculum, lateral entry engineering admission rules, and college directory.',
    eligibility: 'Post 10th',
    url: 'https://msbte.org.in/',
    examName: 'Polytechnic Diploma',
    tags: ['Polytechnic', 'Engineering Diploma', 'State Board'],
    provider: 'MSBTE / State Boards'
  },

  // EMERGING
  {
    id: 'res-emg-1',
    streamId: 'emerging',
    type: 'Try',
    title: 'Google UX Design Professional Certificate',
    description: 'Self-paced industry micro-degree in user research, wireframing, Figma prototyping, and portfolio creation.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.coursera.org/google-certificates',
    examName: 'UI/UX Design',
    tags: ['UI/UX', 'Figma', 'Portfolio', 'Self-Paced'],
    provider: 'Google / Coursera'
  },
  {
    id: 'res-emg-2',
    streamId: 'emerging',
    type: 'Watch',
    title: 'FreeCodeCamp - Full Computer Science & Coding',
    description: 'Free 100+ hour full courses on Python, Web Development, AI Basics, and Data Science for beginners.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@freecodecamp',
    examName: 'Software & AI Skills',
    tags: ['Programming', 'AI', 'Web Dev', 'Free'],
    provider: 'freeCodeCamp'
  },
  {
    id: 'res-emg-3',
    streamId: 'emerging',
    type: 'Read',
    title: 'National NCHMCT Hotel Management Portal',
    description: 'Official information on NCHM JEE for Bachelor of Science in Hospitality & Hotel Administration.',
    eligibility: 'Post 10th/12th',
    url: 'https://nchmjee.nta.nic.in/',
    examName: 'NCHM JEE',
    tags: ['Hospitality', 'Hotel Management', 'Official'],
    provider: 'NCHMCT / NTA'
  }
];
