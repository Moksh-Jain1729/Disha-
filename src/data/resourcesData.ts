import { ResourceItem } from '../types';

export const RESOURCES: ResourceItem[] = [
  // ==========================================
  // REDDIT & FORUMS FOR STUDENT GUIDANCE
  // ==========================================
  {
    id: 'res-forum-jeeneetards',
    streamId: 'pcm',
    type: 'Try',
    title: 'r/JEENEETards - Indian Aspirants Reddit Community',
    description: 'The largest active Reddit student forum for Indian JEE & NEET aspirants. Honest peer advice, preparation reviews, stress management, and study material discussions.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.reddit.com/r/JEENEETards/',
    examName: 'JEE Main, Advanced & NEET',
    tags: ['Reddit Community', 'Peer Advice', 'JEE/NEET', 'Forum'],
    provider: 'Reddit India'
  },
  {
    id: 'res-forum-indian-academia',
    streamId: 'emerging',
    type: 'Try',
    title: 'r/Indian_Academia - Higher Education & Career Advice',
    description: 'Premier Reddit community dedicated to college reviews, stream selection advice, degree comparisons, and career scope in India.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.reddit.com/r/Indian_Academia/',
    examName: 'All Streams & Degrees',
    tags: ['Reddit', 'Career Guidance', 'College Reviews', 'Forum'],
    provider: 'Reddit India'
  },
  {
    id: 'res-forum-devs-india',
    streamId: 'pcm',
    type: 'Try',
    title: 'r/developersIndia - Software & Tech Career Forum',
    description: 'India’s largest developer community discussing Computer Science degrees (B.Tech CS / BCA), AI careers, coding roadmaps, and salary trends.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.reddit.com/r/developersIndia/',
    examName: 'B.Tech CS, BCA & Tech Careers',
    tags: ['Software', 'Tech Careers', 'Coding', 'Reddit'],
    provider: 'Reddit India'
  },
  {
    id: 'res-forum-ca',
    streamId: 'commerce',
    type: 'Try',
    title: 'r/CharteredAccountants - CA / CS / CMA Student Forum',
    description: 'Active Reddit community for CA Foundation, Inter & Final students sharing ICAI study strategies, articleship experiences, and commerce roadmaps.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.reddit.com/r/CharteredAccountants/',
    examName: 'CA Foundation & Inter',
    tags: ['CA Foundation', 'Commerce', 'Reddit Forum'],
    provider: 'Reddit India'
  },
  {
    id: 'res-forum-clat',
    streamId: 'arts',
    type: 'Try',
    title: 'r/CLAT - Law Entrance Reddit Community',
    description: 'Dedicated student forum for CLAT, AILET, and NLU aspirants sharing legal reasoning strategies, current affairs, and mock test tips.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.reddit.com/r/CLAT/',
    examName: 'CLAT & Law Entrance',
    tags: ['Law', 'CLAT', 'NLU', 'Reddit Forum'],
    provider: 'Reddit India'
  },
  {
    id: 'res-forum-cuetards',
    streamId: 'arts',
    type: 'Try',
    title: 'r/CUETards - CUET UG Aspirants Community',
    description: 'Active student forum for Central University Entrance Test (CUET UG) prep across Delhi University (DU), BHU, Jamia, and JNU.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.reddit.com/r/CUETards/',
    examName: 'CUET UG',
    tags: ['CUET', 'DU Admissions', 'Central Universities', 'Reddit'],
    provider: 'Reddit India'
  },
  {
    id: 'res-forum-ipmat',
    streamId: 'commerce',
    type: 'Try',
    title: 'r/IPMATtards - IIM Integrated BBA+MBA Forum',
    description: 'Dedicated Reddit forum for IPMAT & JIPMAT aspirants sharing quantitative prep strategies, interview experiences, and IIM campus life.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.reddit.com/r/IPMATtards/',
    examName: 'IPMAT & IIM BBA+MBA',
    tags: ['IIM', 'IPMAT', 'Management', 'Reddit'],
    provider: 'Reddit India'
  },
  {
    id: 'res-forum-quora-10th',
    streamId: 'emerging',
    type: 'Try',
    title: 'Quora - Life & Career After Class 10th Space',
    description: 'Verified Q&A platform with answers written by teachers, engineers, doctors, and chartered accountants guiding 10th-grade students.',
    eligibility: 'Post 10th',
    url: 'https://www.quora.com/topic/Career-Advice-After-10th',
    examName: 'Stream Decision & Post-10th',
    tags: ['Quora', 'Q&A', 'Career Answers'],
    provider: 'Quora'
  },

  // ==========================================
  // SCIENCE PCM YOUTUBE & PORTALS
  // ==========================================
  {
    id: 'res-pcm-pw',
    streamId: 'pcm',
    type: 'Watch',
    title: 'Physics Wallah - Alakh Pandey',
    description: 'Free comprehensive Class 11 & 12 Physics, Chemistry & Math video lectures for JEE Main, Advanced & Board exams.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@PhysicsWallah',
    examName: 'JEE Main & Boards',
    tags: ['Physics', 'Chemistry', 'JEE Main', 'Free Lectures'],
    provider: 'Physics Wallah'
  },
  {
    id: 'res-pcm-unacademy-jee',
    streamId: 'pcm',
    type: 'Watch',
    title: 'Unacademy JEE - Live Concept Classes',
    description: 'Daily live lectures, past year question solving, and crash courses for Physics, Chemistry, and Math by top IITian educators.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@UnacademyJEE',
    examName: 'JEE Main & Advanced',
    tags: ['JEE Prep', 'Live Classes', 'IIT JEE'],
    provider: 'Unacademy'
  },
  {
    id: 'res-pcm-apni-kaksha',
    streamId: 'pcm',
    type: 'Watch',
    title: 'Apni Kaksha - Aman Dhattarwal',
    description: 'Class 11 & 12 Science lecture series, hand-written chapter notes, and career guidance videos for engineering aspirants.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@ApniKakshaOfficial',
    examName: 'JEE & Board Exams',
    tags: ['Chapter Notes', 'Class 11/12 PCM', 'Guidance'],
    provider: 'Aman Dhattarwal'
  },
  {
    id: 'res-pcm-mohit-tyagi',
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
    id: 'res-pcm-physics-galaxy',
    streamId: 'pcm',
    type: 'Watch',
    title: 'Physics Galaxy by Ashish Arora',
    description: 'Concept revision checklists, advanced physics numerical solutions, and rank booster series.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@physicsgalaxybyashisharora',
    examName: 'JEE Advanced & BITSAT',
    tags: ['Physics', 'Advanced', 'Revision'],
    provider: 'Physics Galaxy'
  },
  {
    id: 'res-pcm-codewithharry',
    streamId: 'pcm',
    type: 'Watch',
    title: 'CodeWithHarry - Coding & CS Basics',
    description: 'India’s most popular computer science and programming channel covering Python, C++, Web Dev, and DSA for beginners.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@CodeWithHarry',
    examName: 'Computer Science & Software',
    tags: ['Programming', 'C++', 'Python', 'Tech Skills'],
    provider: 'CodeWithHarry'
  },
  {
    id: 'res-pcm-gate-smashers',
    streamId: 'pcm',
    type: 'Watch',
    title: 'Gate Smashers - Computer Science Engineering',
    description: 'Clear, concise video lectures on computer science fundamentals, algorithms, and engineering subject overviews.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.youtube.com/@GateSmashers',
    examName: 'B.Tech CS & IT',
    tags: ['Computer Science', 'B.Tech CS', 'Engineering'],
    provider: 'Gate Smashers'
  },
  {
    id: 'res-pcm-khan-academy',
    streamId: 'pcm',
    type: 'Watch',
    title: 'Khan Academy India - Math & Science',
    description: 'World-class free conceptual mathematics, physics, and chemistry video tutorials tailored to NCERT syllabus.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@KhanAcademyIndia',
    examName: 'Class 11/12 & Foundation',
    tags: ['Khan Academy', 'Free Math', 'NCERT Concepts'],
    provider: 'Khan Academy'
  },
  {
    id: 'res-pcm-nta-jee',
    streamId: 'pcm',
    type: 'Read',
    title: 'NTA Official JEE Main Candidate Portal',
    description: 'Official exam schedules, downloadable syllabus PDFs, mock exam papers, and question keys for JEE Main.',
    eligibility: 'Post 10th/12th',
    url: 'https://jeemain.nta.ac.in/',
    examName: 'JEE Main',
    tags: ['Official Site', 'Syllabus', 'Past Papers'],
    provider: 'National Testing Agency (NTA)'
  },
  {
    id: 'res-pcm-jee-adv',
    streamId: 'pcm',
    type: 'Read',
    title: 'IIT JEE Advanced Official Portal',
    description: 'Official past year question papers, candidate guides, and branch allocation details for 23 IITs.',
    eligibility: 'Post 12th',
    url: 'https://jeeadv.ac.in/',
    examName: 'JEE Advanced',
    tags: ['IIT', 'JEE Advanced', 'Official'],
    provider: 'IIT Organising Institute'
  },
  {
    id: 'res-pcm-ncert',
    streamId: 'pcm',
    type: 'Read',
    title: 'NCERT Official Online E-Books (Physics, Chem, Math)',
    description: 'Free downloadable textbooks for Physics, Chemistry, and Mathematics — mandatory foundation for entrance exams.',
    eligibility: 'Post 10th',
    url: 'https://ncert.nic.in/textbook.php',
    examName: 'Board Exams & JEE',
    tags: ['NCERT', 'Textbooks', 'Official'],
    provider: 'NCERT'
  },
  {
    id: 'res-pcm-bitsat',
    streamId: 'pcm',
    type: 'Try',
    title: 'BITSAT Official Admission Portal',
    description: 'Information brochure, mock test links, and campus overview for BITS Pilani, Goa, and Hyderabad.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.bitsadmission.com/',
    examName: 'BITSAT',
    tags: ['BITSAT', 'Engineering', 'BITS Pilani'],
    provider: 'BITS Pilani'
  },
  {
    id: 'res-pcm-nata',
    streamId: 'pcm',
    type: 'Read',
    title: 'NATA Official Architecture Exam Portal',
    description: 'Guidelines, drawing test criteria, and registered architecture college list across India.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.nata.in/',
    examName: 'NATA',
    tags: ['Architecture', 'B.Arch', 'NATA'],
    provider: 'Council of Architecture'
  },
  {
    id: 'res-pcm-nda',
    streamId: 'pcm',
    type: 'Read',
    title: 'UPSC Official NDA & NA Candidate Portal',
    description: 'Official notifications, physical standards, syllabus breakdown, and past papers for NDA entry.',
    eligibility: 'Post 10th/12th',
    url: 'https://upsc.gov.in/',
    examName: 'NDA',
    tags: ['UPSC', 'Defense', 'Army/Navy/AirForce'],
    provider: 'UPSC'
  },
  {
    id: 'res-pcm-iiser',
    streamId: 'pcm',
    type: 'Try',
    title: 'IISER Admissions Official Portal (BS-MS Dual)',
    description: 'IISER Aptitude Test (IAT) eligibility, test structure, and research branch details.',
    eligibility: 'Post 10th/12th',
    url: 'https://iiseradmission.in/',
    examName: 'IISER IAT',
    tags: ['Pure Science', 'IISER', 'Research'],
    provider: 'IISER Consortium'
  },

  // ==========================================
  // SCIENCE PCB YOUTUBE & PORTALS
  // ==========================================
  {
    id: 'res-pcb-vedantu',
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
    id: 'res-pcb-unacademy',
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
  {
    id: 'res-pcb-comp-wallah',
    streamId: 'pcb',
    type: 'Watch',
    title: 'Competition Wallah - Physics Wallah Medical',
    description: 'Dedicated NEET preparation channel offering full subject marathons, NCERT decoded series, and mock test solving.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@CompetitionWallah',
    examName: 'NEET-UG',
    tags: ['NEET', 'NCERT Decoded', 'Biology & Physics'],
    provider: 'Physics Wallah'
  },
  {
    id: 'res-pcb-sankalp',
    streamId: 'pcb',
    type: 'Watch',
    title: 'Sankalp Bharat - NEET Biology & Chemistry',
    description: 'High-yield biology memory techniques, chemistry reaction mechanisms, and daily practice problem solving.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@SankalpBharatNEET',
    examName: 'NEET-UG',
    tags: ['NEET Revision', 'Biology', 'Chemistry'],
    provider: 'Sankalp Bharat'
  },
  {
    id: 'res-pcb-nta-neet',
    streamId: 'pcb',
    type: 'Read',
    title: 'NTA Official NEET-UG Candidate Portal',
    description: 'Official information bulletin, syllabus breakdown in PCB, tie-breaker rules, and cut-off trends.',
    eligibility: 'Post 10th/12th',
    url: 'https://neet.nta.nic.in/',
    examName: 'NEET-UG',
    tags: ['Official Site', 'Medical', 'Cutoffs'],
    provider: 'National Testing Agency'
  },
  {
    id: 'res-pcb-aiims',
    streamId: 'pcb',
    type: 'Read',
    title: 'AIIMS Exams Official Portal (B.Sc Nursing & Paramedical)',
    description: 'Official notification, prospectus, and mock tests for AIIMS B.Sc Nursing and Allied Health.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.aiimsexams.ac.in/',
    examName: 'AIIMS Paramedical',
    tags: ['AIIMS', 'Nursing', 'Paramedical'],
    provider: 'AIIMS New Delhi'
  },
  {
    id: 'res-pcb-icar',
    streamId: 'pcb',
    type: 'Read',
    title: 'ICAR Official Portal for Agriculture Degrees',
    description: 'All India Entrance Examination for Admission (AIEEA) for B.Sc Hons Agriculture & Horticulture.',
    eligibility: 'Post 10th/12th',
    url: 'https://icar.org.in/',
    examName: 'ICAR AIEEA',
    tags: ['Agriculture', 'Horticulture', 'ICAR'],
    provider: 'Indian Council of Agricultural Research'
  },

  // ==========================================
  // COMMERCE YOUTUBE & PORTALS
  // ==========================================
  {
    id: 'res-comm-rachana',
    streamId: 'commerce',
    type: 'Watch',
    title: 'CA Rachana Phadke Ranade - Finance & Accounting',
    description: 'Top financial educator explaining stock market fundamentals, corporate banking, balance sheets, and career paths in finance.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.youtube.com/@CA-Rachana-Ranade',
    examName: 'Finance & Banking',
    tags: ['Finance', 'Financial Literacy', 'Banking', 'Investing'],
    provider: 'CA Rachana Ranade'
  },
  {
    id: 'res-comm-parag',
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
    id: 'res-comm-rajat',
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
  {
    id: 'res-comm-baba',
    streamId: 'commerce',
    type: 'Watch',
    title: 'Commerce Baba - Class 11 & 12 Guidance',
    description: 'Energetic video tutorials on Accountancy, Microeconomics, and Business Management for Commerce students.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@CommerceBaba',
    examName: 'Commerce Boards & CUET',
    tags: ['Commerce Baba', 'Accountancy', 'Economics'],
    provider: 'Commerce Baba'
  },
  {
    id: 'res-comm-unacademy-ca',
    streamId: 'commerce',
    type: 'Watch',
    title: 'Unacademy CA Foundation Channel',
    description: 'Complete free live lectures covering Business Laws, Quantitative Aptitude, Accounting, and Business Economics for CA Foundation.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.youtube.com/@UnacademyCAFoundation',
    examName: 'CA Foundation',
    tags: ['CA Foundation', 'Business Law', 'Free CA Classes'],
    provider: 'Unacademy CA'
  },
  {
    id: 'res-comm-icai',
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
    id: 'res-comm-icsi',
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
    id: 'res-comm-ipmat',
    streamId: 'commerce',
    type: 'Try',
    title: 'IIM Indore IPMAT Official Admissions Portal',
    description: 'Integrated Programme in Management (5-Year BBA+MBA) eligibility, test syllabus, and mock papers.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.iimidr.ac.in/',
    examName: 'IPMAT',
    tags: ['IIM', 'BBA+MBA', 'Management'],
    provider: 'IIM Indore'
  },

  // ==========================================
  // ARTS & HUMANITIES YOUTUBE & PORTALS
  // ==========================================
  {
    id: 'res-arts-legaledge',
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
    id: 'res-arts-studyiq',
    streamId: 'arts',
    type: 'Watch',
    title: 'StudyIQ IAS - Humanities & World Affairs',
    description: 'In-depth video analysis of Indian Constitution, History, Political Science, and International Relations.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.youtube.com/@StudyIQIAS',
    examName: 'CUET Arts & UPSC Prep',
    tags: ['Polity', 'History', 'World Affairs', 'Civil Services'],
    provider: 'StudyIQ'
  },
  {
    id: 'res-arts-clat-gurukul',
    streamId: 'arts',
    type: 'Watch',
    title: 'CLAT Gurukul - Legal Aptitude & English',
    description: 'Passage solving techniques, legal maxims, and current events revision for law entrance aspirants.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.youtube.com/@CLATGurukul',
    examName: 'CLAT & AILET',
    tags: ['Legal Aptitude', 'Passage Analysis', 'CLAT'],
    provider: 'CLAT Gurukul'
  },
  {
    id: 'res-arts-clat',
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
    id: 'res-arts-nift',
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
    id: 'res-arts-nid',
    streamId: 'arts',
    type: 'Try',
    title: 'NID DAT Official Admissions Portal',
    description: 'Design Aptitude Test (DAT) details for B.Des at NID campuses across India.',
    eligibility: 'Post 10th/12th',
    url: 'https://admissions.nid.edu/',
    examName: 'NID DAT',
    tags: ['NID', 'Design', 'Product Design'],
    provider: 'National Institute of Design'
  },

  // ==========================================
  // VOCATIONAL YOUTUBE & PORTALS
  // ==========================================
  {
    id: 'res-voc-global-iti',
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
    id: 'res-voc-skill-train',
    streamId: 'vocational',
    type: 'Watch',
    title: 'SkillTrain - Practical Vocational Skills',
    description: 'Hands-on practical videos showing electrical wiring, solar panel assembly, and motor repair techniques.',
    eligibility: 'Post 10th',
    url: 'https://www.youtube.com/@SkillTrainIndia',
    examName: 'Vocational Trades',
    tags: ['Solar PV', 'Wiring', 'Hands-on Skills'],
    provider: 'SkillTrain'
  },
  {
    id: 'res-voc-dgt',
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
    id: 'res-voc-nsdc',
    streamId: 'vocational',
    type: 'Read',
    title: 'Skill India Digital Hub (NSDC Portal)',
    description: 'Government certified skill programs in EV maintenance, solar technology, digital design, and logistics.',
    eligibility: 'Post 10th',
    url: 'https://www.skillindiadigital.gov.in/',
    examName: 'Skill India Certs',
    tags: ['Skill India', 'Govt Cert', 'Vocational'],
    provider: 'National Skill Development Corporation'
  },

  // ==========================================
  // EMERGING & CROSS-STREAM YOUTUBE & PORTALS
  // ==========================================
  {
    id: 'res-emg-fcc',
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
    id: 'res-emg-figma',
    streamId: 'emerging',
    type: 'Watch',
    title: 'Figma Official - UI/UX Design Tutorials',
    description: 'Official beginner-friendly design lessons on UI wireframing, mobile app design, and design systems.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.youtube.com/@Figma',
    examName: 'UI/UX Design',
    tags: ['UI/UX', 'Figma', 'Product Design'],
    provider: 'Figma'
  },
  {
    id: 'res-emg-simplilearn',
    streamId: 'emerging',
    type: 'Watch',
    title: 'Simplilearn - AI & Cybersecurity Roadmaps',
    description: 'High-level conceptual overviews of Cyber Security, Data Science, Cloud Operations, and Artificial Intelligence.',
    eligibility: 'Post 10th/12th',
    url: 'https://www.youtube.com/@SimplilearnOfficial',
    examName: 'Cybersecurity & Data Science',
    tags: ['AI', 'Cybersecurity', 'Cloud'],
    provider: 'Simplilearn'
  },
  {
    id: 'res-emg-coursera-google',
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
    id: 'res-emg-nfsu',
    streamId: 'emerging',
    type: 'Read',
    title: 'National Forensic Sciences University (NFSU) Portal',
    description: 'B.Sc Cybersecurity, Digital Forensics, and Behavioral Science university admission details.',
    eligibility: 'Post 10th/12th',
    url: 'https://nfsu.ac.in/',
    examName: 'NFSU Entrance',
    tags: ['Cybersecurity', 'Forensics', 'Govt University'],
    provider: 'NFSU'
  },
  {
    id: 'res-emg-nchm',
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
