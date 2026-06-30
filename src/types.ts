export interface NewsPost {
  id: string;
  title: string;
  date: string;
  category: 'event' | 'vacancy' | 'day-service' | 'recruitment' | 'blog';
  content: string;
  isImportant?: boolean;
}

export interface JobApplication {
  id: string;
  name: string;
  furigana: string;
  email: string;
  phone: string;
  desiredJob: 'caregiver' | 'nurse' | 'caremanager' | 'kitchen' | 'parttime';
  qualifications: string;
  message: string;
  createdAt: string;
  status: 'unread' | 'contacted' | 'hired' | 'rejected';
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  category: 'home' | 'dayservice' | 'caremanager' | 'general';
  message: string;
  createdAt: string;
  status: 'unread' | 'read' | 'replied';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'home' | 'dayservice' | 'caremanager' | 'general';
}

export interface VacancyStatus {
  roomType: string;
  capacity: string;
  status: 'available' | 'few' | 'full';
  description: string;
}
