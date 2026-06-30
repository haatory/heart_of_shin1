import { Heart, Phone, MapPin, Mail, Lock, Shield } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  adminLoggedIn: boolean;
  setAdminLoggedIn: (loggedIn: boolean) => void;
}

export default function Footer({ setActiveTab, adminLoggedIn, setAdminLoggedIn }: FooterProps) {
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4" id="footer-brand-col">
            <div className="flex items-center gap-2" onClick={() => handleTabChange('home')}>
              <div className="bg-emerald-500 text-white p-2 rounded-full cursor-pointer">
                <Heart className="w-5 h-5 fill-white" />
              </div>
              <span className="text-xl font-bold text-white cursor-pointer hover:text-emerald-400 transition-colors">
                Heart of 真心株式会社
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              私たちは、鹿児島市伊敷にて、住宅型有料老人ホーム、デイサービス、居宅介護支援事業所を運営しています。ご利用者様とそのご家族に寄り添う「まごころ」の介護を提供します。
            </p>
            <div className="space-y-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  〒890-0008<br />
                  鹿児島県鹿児島市伊敷4丁目10-1
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:099-801-5561" className="hover:text-emerald-400 transition-colors">
                  TEL: 099-801-5561
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Business Units */}
          <div className="space-y-4" id="footer-services-col">
            <h3 className="text-base font-bold text-white uppercase tracking-wider border-l-4 border-emerald-500 pl-3">
              運営事業内容
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleTabChange('service-home')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  住宅型有料老人ホーム ほうらぁさ家
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange('service-day')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  地域密着型通所介護 きゅっきゅ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabChange('service-consult')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  居宅介護支援 まごころ相談支援センター
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4" id="footer-links-col">
            <h3 className="text-base font-bold text-white uppercase tracking-wider border-l-4 border-emerald-500 pl-3">
              クイックリンク
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleTabChange('about')} className="hover:text-emerald-400 transition-colors text-left">
                  私たちについて（法人概要・理念）
                </button>
              </li>
              <li>
                <button onClick={() => handleTabChange('news')} className="hover:text-emerald-400 transition-colors text-left">
                  お知らせ・ブログ
                </button>
              </li>
              <li>
                <button onClick={() => handleTabChange('recruitment')} className="hover:text-emerald-400 transition-colors text-left">
                  求人情報（一緒に働く仲間へ）
                </button>
              </li>
              <li>
                <button onClick={() => handleTabChange('privacy')} className="hover:text-emerald-400 transition-colors text-left">
                  個人情報保護方針
                </button>
              </li>
              <li>
                <button onClick={() => handleTabChange('contact')} className="hover:text-emerald-400 transition-colors text-left text-amber-400 font-semibold">
                  無料見学・お問い合わせ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quality & Trust Statement */}
          <div className="space-y-4" id="footer-trust-col">
            <h3 className="text-base font-bold text-white uppercase tracking-wider border-l-4 border-emerald-500 pl-3">
              安心と信頼の体制
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              24時間の緊急時対応体制、協力医療機関との強い連携、徹底した衛生・感染症対策を施し、ご利用者様が安全に毎日を笑ってお過ごしいただける環境作りに取り組んでいます。
            </p>
            <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700 space-y-1">
              <div className="text-xs text-slate-300 font-bold flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                感染症対策について
              </div>
              <p className="text-[11px] text-slate-400">
                検温・消毒・換気、高機能空気清浄機の常時運転、全スタッフの衛生教育等を実施しています。
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Heart of 真心株式会社. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleTabChange('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              プライバシーポリシー
            </button>
            <span className="text-slate-700">|</span>
            {/* Elegant Hidden Admin Portal link for demonstrating forms & state management */}
            <button
              onClick={() => {
                setAdminLoggedIn(!adminLoggedIn);
                handleTabChange('admin');
              }}
              className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
                adminLoggedIn
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  : 'hover:text-emerald-400 text-slate-500'
              }`}
              id="admin-mode-toggle"
            >
              <Lock className="w-3 h-3" />
              <span>{adminLoggedIn ? '管理者モード：ON' : '管理者ログイン（デモ）'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
