import { useState } from 'react';
import { Heart, Menu, X, Phone, Building2, MapPin } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  const navItems = [
    { id: 'home', label: 'トップページ' },
    { id: 'about', label: '私たちについて' },
    {
      id: 'services',
      label: '事業内容',
      subItems: [
        { id: 'service-home', label: '有料老人ホーム ほうらぁさ家' },
        { id: 'service-day', label: '通所介護 きゅっきゅ' },
        { id: 'service-consult', label: '居宅介護支援 まごころ' }
      ]
    },
    { id: 'news', label: 'お知らせ・ブログ' },
    { id: 'recruitment', label: '採用情報' },
    { id: 'contact', label: 'お問い合わせ' }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    setShowServiceDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs" id="site-header">
      {/* Top Bar for contact info (ideal for elderly access) */}
      <div className="bg-emerald-50 text-emerald-800 text-xs sm:text-sm py-1.5 px-4 sm:px-6 flex justify-between items-center border-b border-emerald-100">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 font-medium">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            鹿児島県鹿児島市伊敷
          </span>
          <span className="hidden md:inline text-emerald-600">|</span>
          <span className="hidden md:inline font-medium text-emerald-700">
            住宅型有料老人ホーム・デイサービス・ケアプラン作成
          </span>
        </div>
        <a
          href="tel:099-801-5561"
          className="flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
          id="top-phone-link"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-xs">お電話相談：</span>
          <span className="text-sm">099-801-5561</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div
            className="flex items-center gap-2.5 cursor-pointer select-none"
            onClick={() => handleTabClick('home')}
            id="brand-logo"
          >
            <div className="bg-emerald-500 text-white p-2.5 rounded-full shadow-sm hover:scale-105 transition-transform duration-300">
              <Heart className="w-6 h-6 fill-white" />
            </div>
            <div>
              <span className="text-xs font-bold tracking-wider text-emerald-600 block">ハートオブシンカブシキガイシャ</span>
              <span className="text-lg sm:text-xl font-bold text-slate-800 leading-tight block">
                Heart of 真心株式会社
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              if (item.subItems) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setShowServiceDropdown(true)}
                    onMouseLeave={() => setShowServiceDropdown(false)}
                  >
                    <button
                      className={`px-4 py-2 rounded-lg text-[15px] font-semibold transition-all flex items-center gap-1 ${
                        activeTab.startsWith('service-')
                          ? 'bg-emerald-500 text-white'
                          : 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50'
                      }`}
                      id={`nav-btn-${item.id}`}
                    >
                      {item.label}
                      <span className="text-[10px] opacity-80">▼</span>
                    </button>
                    {/* Dropdown Menu */}
                    {showServiceDropdown && (
                      <div className="absolute left-0 mt-0 w-64 bg-white border border-emerald-50 rounded-xl shadow-xl py-2 z-50 animate-fade-in">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleTabClick(sub.id)}
                            className={`w-full text-left px-5 py-3 text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors ${
                              activeTab === sub.id ? 'bg-emerald-50/70 text-emerald-600 font-bold' : 'text-slate-600'
                            }`}
                            id={`nav-btn-sub-${sub.id}`}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-[15px] font-semibold transition-all ${
                    activeTab === item.id
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50'
                  }`}
                  id={`nav-btn-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Quick Inquiry CTA */}
            <button
              onClick={() => handleTabClick('contact')}
              className="ml-4 bg-amber-500 text-white font-bold px-5 py-2.5 rounded-full hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
              id="header-cta-btn"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>見学・相談する</span>
            </button>
          </nav>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:099-801-5561"
              className="bg-emerald-500 text-white p-2.5 rounded-full shadow-sm hover:bg-emerald-600 transition-colors"
              id="mobile-phone-cta"
            >
              <Phone className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-emerald-600 p-2 rounded-lg transition-colors border border-slate-100"
              aria-label="Toggle Menu"
              id="mobile-hamburger-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-emerald-100 bg-white px-4 py-4 space-y-2 shadow-inner" id="mobile-nav-panel">
          {navItems.map((item) => {
            if (item.subItems) {
              return (
                <div key={item.id} className="space-y-1">
                  <div className="text-xs font-bold text-slate-400 px-3 pt-2 uppercase tracking-wider">
                    {item.label}
                  </div>
                  {item.subItems.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleTabClick(sub.id)}
                      className={`w-full text-left px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === sub.id
                          ? 'bg-emerald-50 text-emerald-700 font-bold border-l-4 border-emerald-500'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                      id={`nav-btn-mobile-${sub.id}`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full text-left px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'bg-emerald-500 text-white'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
                id={`nav-btn-mobile-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => handleTabClick('contact')}
              className="w-full bg-amber-500 text-white font-bold py-3.5 rounded-xl hover:bg-amber-600 transition-all shadow-md text-center flex justify-center items-center gap-2"
              id="mobile-nav-cta-btn"
            >
              <Phone className="w-5 h-5 fill-white" />
              <span>無料見学・ご相談はこちら</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
