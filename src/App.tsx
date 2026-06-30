import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import HomeCareHome from './components/HomeCareHome';
import DayCare from './components/DayCare';
import Consultation from './components/Consultation';
import Recruitment from './components/Recruitment';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import AdminPortal from './components/AdminPortal';

import { INITIAL_NEWS, INITIAL_VACANCIES } from './data';
import { NewsPost, JobApplication, ContactInquiry, VacancyStatus } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [adminLoggedIn, setAdminLoggedIn] = useState<boolean>(false);

  // Synchronized States
  const [news, setNews] = useState<NewsPost[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [vacancies, setVacancies] = useState<VacancyStatus[]>([]);

  // Initialize and Sync with LocalStorage
  useEffect(() => {
    // 1. News
    const savedNews = localStorage.getItem('magokoro_news');
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    } else {
      setNews(INITIAL_NEWS);
      localStorage.setItem('magokoro_news', JSON.stringify(INITIAL_NEWS));
    }

    // 2. Vacancies
    const savedVacancies = localStorage.getItem('magokoro_vacancies');
    if (savedVacancies) {
      setVacancies(JSON.parse(savedVacancies));
    } else {
      setVacancies(INITIAL_VACANCIES);
      localStorage.setItem('magokoro_vacancies', JSON.stringify(INITIAL_VACANCIES));
    }

    // 3. Applications (Seeded with 1 initial item for demo fidelity)
    const savedApps = localStorage.getItem('magokoro_applications');
    if (savedApps) {
      setApplications(JSON.parse(savedApps));
    } else {
      const initialApp: JobApplication[] = [
        {
          id: 'app-initial-1',
          name: '坂上 優介',
          furigana: 'さかうえ ゆうすけ',
          email: 'sakauye@example.com',
          phone: '080-1111-2222',
          desiredJob: 'caregiver',
          qualifications: '介護職員初任者研修修了、実務者研修、普通自動車免許',
          message: '鹿児島市伊敷に在住しており、地域に根ざした「ほうらぁさ家」の理念に深く共感いたしました。これまでの介護助手としての経験を活かし、ご利用者様に笑顔の真心ケアをお届けしたいです。職場見学も希望します。',
          createdAt: '2026-06-27',
          status: 'unread',
        }
      ];
      setApplications(initialApp);
      localStorage.setItem('magokoro_applications', JSON.stringify(initialApp));
    }

    // 4. Inquiries (Seeded with 1 initial item for demo fidelity)
    const savedInqs = localStorage.getItem('magokoro_inquiries');
    if (savedInqs) {
      setInquiries(JSON.parse(savedInqs));
    } else {
      const initialInq: ContactInquiry[] = [
        {
          id: 'inq-initial-1',
          name: '伊敷 太郎',
          email: 'ishiki.t@example.com',
          phone: '090-8888-9999',
          category: 'home',
          message: '現在、別のサービス付き高齢者向け住宅（サ高住）に入居している祖母（要介護2）がおりますが、こちらへの転入を検討しています。費用や実際のお部屋の見学は、土曜日でも可能でしょうか。パンフレットの送付も希望します。',
          createdAt: '2026-06-28',
          status: 'unread',
        }
      ];
      setInquiries(initialInq);
      localStorage.setItem('magokoro_inquiries', JSON.stringify(initialInq));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-500/20 selection:text-emerald-900" id="app-root">
      {/* Dynamic Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomeSection news={news} vacancies={vacancies} setActiveTab={setActiveTab} />
        )}
        {activeTab === 'about' && (
          <AboutSection />
        )}
        {activeTab === 'service-home' && (
          <HomeCareHome vacancies={vacancies} />
        )}
        {activeTab === 'service-day' && (
          <DayCare />
        )}
        {activeTab === 'service-consult' && (
          <Consultation />
        )}
        {activeTab === 'news' && (
          <NewsSection news={news} />
        )}
        {activeTab === 'recruitment' && (
          <Recruitment applications={applications} setApplications={setApplications} />
        )}
        {activeTab === 'contact' && (
          <ContactSection inquiries={inquiries} setInquiries={setInquiries} />
        )}
        {activeTab === 'privacy' && (
          <PrivacyPolicy />
        )}
        {activeTab === 'admin' && (
          <AdminPortal
            news={news}
            setNews={setNews}
            applications={applications}
            setApplications={setApplications}
            inquiries={inquiries}
            setInquiries={setInquiries}
            vacancies={vacancies}
            setVacancies={setVacancies}
            adminLoggedIn={adminLoggedIn}
            setAdminLoggedIn={setAdminLoggedIn}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        adminLoggedIn={adminLoggedIn}
        setAdminLoggedIn={setAdminLoggedIn}
      />
    </div>
  );
}
