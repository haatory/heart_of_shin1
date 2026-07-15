import { useState, useEffect, FormEvent } from 'react';
import { Mail, Briefcase, FileText, Check, Plus, Trash2, Calendar, AlertTriangle, HelpCircle, Shield, Sparkles } from 'lucide-react';
import { NewsPost, JobApplication, ContactInquiry, VacancyStatus } from '../types';

interface AdminPortalProps {
  news: NewsPost[];
  setNews: (news: NewsPost[]) => void;
  applications: JobApplication[];
  setApplications: (apps: JobApplication[]) => void;
  inquiries: ContactInquiry[];
  setInquiries: (inqs: ContactInquiry[]) => void;
  vacancies: VacancyStatus[];
  setVacancies: (vacs: VacancyStatus[]) => void;
  adminLoggedIn: boolean;
  setAdminLoggedIn: (login: boolean) => void;
}

export default function AdminPortal({
  news,
  setNews,
  applications,
  setApplications,
  inquiries,
  setInquiries,
  vacancies,
  setVacancies,
  adminLoggedIn,
  setAdminLoggedIn,
}: AdminPortalProps) {
  const [activeSubTab, setActiveSubTab] = useState<'inquiries' | 'applications' | 'vacancies' | 'news'>('inquiries');

  // For publishing news
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'event' | 'vacancy' | 'day-service' | 'recruitment' | 'blog'>('event');
  const [newContent, setNewContent] = useState('');
  const [newIsImportant, setNewIsImportant] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Password-based authentication
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();
    const correctPassword = 'tknr1115'; // Administrator Password
    if (password === correctPassword) {
      setAdminLoggedIn(true);
      setPasswordError('');
    } else {
      setPasswordError('パスワードが正しくありません。もう一度入力してください。');
    }
  };

  const handlePublishNews = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPost: NewsPost = {
      id: `news-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      content: newContent,
      date: new Date().toISOString().split('T')[0],
      isImportant: newIsImportant,
    };

    const updatedNews = [newPost, ...news];
    setNews(updatedNews);
    localStorage.setItem('magokoro_news', JSON.stringify(updatedNews));

    setNewTitle('');
    setNewContent('');
    setNewIsImportant(false);
    setSuccessMsg('お知らせを公開しました！');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  const handleDeleteNews = (id: string) => {
    const updatedNews = news.filter((n) => n.id !== id);
    setNews(updatedNews);
    localStorage.setItem('magokoro_news', JSON.stringify(updatedNews));
  };

  const handleUpdateVacancy = (index: number, status: 'available' | 'few' | 'full') => {
    const updated = [...vacancies];
    updated[index].status = status;
    setVacancies(updated);
    localStorage.setItem('magokoro_vacancies', JSON.stringify(updated));
  };

  const handleUpdateInquiryStatus = (id: string, status: 'unread' | 'read' | 'replied') => {
    const updated = inquiries.map((i) => (i.id === id ? { ...i, status } : i));
    setInquiries(updated);
    localStorage.setItem('magokoro_inquiries', JSON.stringify(updated));
  };

  const handleUpdateApplicationStatus = (id: string, status: 'unread' | 'contacted' | 'hired' | 'rejected') => {
    const updated = applications.map((a) => (a.id === id ? { ...a, status } : a));
    setApplications(updated);
    localStorage.setItem('magokoro_applications', JSON.stringify(updated));
  };

  const handleDeleteInquiry = (id: string) => {
    const updated = inquiries.filter((i) => i.id !== id);
    setInquiries(updated);
    localStorage.setItem('magokoro_inquiries', JSON.stringify(updated));
  };

  const handleDeleteApplication = (id: string) => {
    const updated = applications.filter((a) => a.id !== id);
    setApplications(updated);
    localStorage.setItem('magokoro_applications', JSON.stringify(updated));
  };

  if (!adminLoggedIn) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20" id="admin-login-screen">
        <div className="bg-white rounded-3xl shadow-xl border border-emerald-50 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-500 text-white p-8 text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 animate-pulse text-emerald-100" />
            <h1 className="text-2xl sm:text-3xl font-bold">HP管理者ポータル</h1>
            <p className="text-emerald-100 text-sm mt-2">
              お問い合わせ・採用応募の受信確認や、空室状況の更新、お知らせの新規投稿を管理できます。
            </p>
          </div>
          <div className="p-8 sm:p-12 text-center space-y-6">
            <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto space-y-4 text-left">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 block">管理者パスワード</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="パスワードを入力してください"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-mono text-slate-800"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold"
                  >
                    {showPassword ? "非表示" : "表示"}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs font-semibold flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {passwordError}
                  </p>
                )}
              </div>


              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-bold py-3.5 rounded-xl hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg text-base flex items-center justify-center gap-2 mt-4"
                id="admin-demo-login-btn"
              >
                <span>パスワード認証してログイン</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="admin-dashboard-screen">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-lg border border-slate-700 mb-10">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>REAL-TIME SITE MANAGEMENT</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">管理者用ダッシュボード</h1>
        </div>
        <button
          onClick={() => setAdminLoggedIn(false)}
          className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold px-4 py-2 rounded-xl text-sm transition-colors border border-slate-600"
          id="admin-logout-btn"
        >
          ログアウト
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          <button
            onClick={() => setActiveSubTab('inquiries')}
            className={`w-full flex items-center justify-between p-4 rounded-xl font-bold transition-all ${
              activeSubTab === 'inquiries'
                ? 'bg-emerald-500 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-emerald-50/50 border border-slate-100'
            }`}
            id="admin-tab-inquiries"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-5 h-5" />
              <span>お問い合わせ受信</span>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
              activeSubTab === 'inquiries' ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-100 text-slate-600'
            }`}>
              {inquiries.length}
            </span>
          </button>

          <button
            onClick={() => setActiveSubTab('applications')}
            className={`w-full flex items-center justify-between p-4 rounded-xl font-bold transition-all ${
              activeSubTab === 'applications'
                ? 'bg-emerald-500 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-emerald-50/50 border border-slate-100'
            }`}
            id="admin-tab-applications"
          >
            <div className="flex items-center gap-2.5">
              <Briefcase className="w-5 h-5" />
              <span>求人応募一覧</span>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
              activeSubTab === 'applications' ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-100 text-slate-600'
            }`}>
              {applications.length}
            </span>
          </button>

          <button
            onClick={() => setActiveSubTab('vacancies')}
            className={`w-full flex items-center justify-between p-4 rounded-xl font-bold transition-all ${
              activeSubTab === 'vacancies'
                ? 'bg-emerald-500 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-emerald-50/50 border border-slate-100'
            }`}
            id="admin-tab-vacancies"
          >
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5" />
              <span>空室状況の管理</span>
            </div>
          </button>

          <button
            onClick={() => setActiveSubTab('news')}
            className={`w-full flex items-center justify-between p-4 rounded-xl font-bold transition-all ${
              activeSubTab === 'news'
                ? 'bg-emerald-500 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-emerald-50/50 border border-slate-100'
            }`}
            id="admin-tab-news"
          >
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5" />
              <span>お知らせ投稿・編集</span>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
              activeSubTab === 'news' ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-100 text-slate-600'
            }`}>
              {news.length}
            </span>
          </button>
        </div>

        {/* Dynamic Content Panel */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xs">
          {/* 1. Contact Inquiries Tab */}
          {activeSubTab === 'inquiries' && (
            <div className="space-y-6" id="admin-panel-inquiries">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800">お問い合わせ受信履歴（リアルタイム）</h2>
                <span className="text-xs text-slate-400 font-mono">Total: {inquiries.length}</span>
              </div>

              {inquiries.length === 0 ? (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <Mail className="w-12 h-12 mx-auto text-slate-300" />
                  <p>受信したお問い合わせはまだありません。</p>
                  <p className="text-xs">「お問い合わせ」タブからメッセージを送信すると、ここに即座に反映されます。</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        inq.status === 'unread'
                          ? 'bg-emerald-50/30 border-emerald-100'
                          : 'bg-slate-50/50 border-slate-100'
                      }`}
                      id={`inquiry-card-${inq.id}`}
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                        <div>
                          <span className="inline-block bg-slate-200 text-slate-700 text-xs px-2 py-1 rounded font-bold mr-2 mb-1.5 sm:mb-0">
                            {inq.category === 'home' && 'ほうらぁさ家（老人ホーム）'}
                            {inq.category === 'dayservice' && 'きゅっきゅ（デイサービス）'}
                            {inq.category === 'caremanager' && 'まごころ（ケアマネ支援）'}
                            {inq.category === 'general' && 'その他・法人一般'}
                          </span>
                          <h3 className="font-bold text-slate-800 text-base inline-block">
                            {inq.name} 様
                          </h3>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">{inq.createdAt}</span>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-500 mb-4 bg-white/60 p-3 rounded-lg border border-slate-100">
                        <div>メール： <a href={`mailto:${inq.email}`} className="text-emerald-600 underline font-semibold">{inq.email}</a></div>
                        <div>電話番号： <a href={`tel:${inq.phone}`} className="text-emerald-600 underline font-semibold">{inq.phone}</a></div>
                      </div>

                      <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap mb-4 bg-white p-4 rounded-xl border border-slate-100">
                        {inq.message}
                      </p>

                      <div className="flex flex-wrap justify-between items-center gap-2 pt-2 border-t border-slate-100/60">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleUpdateInquiryStatus(inq.id, 'read')}
                            className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                              inq.status === 'read'
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700'
                            }`}
                          >
                            既読にする
                          </button>
                          <button
                            onClick={() => handleUpdateInquiryStatus(inq.id, 'replied')}
                            className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                              inq.status === 'replied'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-700'
                            }`}
                          >
                            対応済にする
                          </button>
                        </div>
                        <button
                          onClick={() => handleDeleteInquiry(inq.id)}
                          className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded transition-colors text-xs font-semibold flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          削除
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 2. Job Applications Tab */}
          {activeSubTab === 'applications' && (
            <div className="space-y-6" id="admin-panel-applications">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800">求人応募エントリー状況（リアルタイム）</h2>
                <span className="text-xs text-slate-400 font-mono">Total: {applications.length}</span>
              </div>

              {applications.length === 0 ? (
                <div className="text-center py-12 text-slate-400 space-y-2">
                  <Briefcase className="w-12 h-12 mx-auto text-slate-300" />
                  <p>現在、求人への応募はまだありません。</p>
                  <p className="text-xs">「採用情報」の最下部にあるエントリーフォームから応募すると、ここに即時反映されます。</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        app.status === 'unread'
                          ? 'bg-amber-50/30 border-amber-100'
                          : 'bg-slate-50/50 border-slate-100'
                      }`}
                      id={`application-card-${app.id}`}
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                        <div>
                          <span className="inline-block bg-emerald-600 text-white text-xs px-2.5 py-1 rounded-full font-bold mr-2 mb-1.5 sm:mb-0">
                            希望職種：
                            {app.desiredJob === 'caregiver' && '介護スタッフ'}
                            {app.desiredJob === 'nurse' && '看護師'}
                            {app.desiredJob === 'caremanager' && 'ケアマネジャー'}
                            {app.desiredJob === 'kitchen' && '調理スタッフ'}
                            {app.desiredJob === 'parttime' && 'パート職員'}
                          </span>
                          <span className="text-xs text-slate-400 block sm:inline-block sm:mr-2">
                            ({app.furigana})
                          </span>
                          <h3 className="font-bold text-slate-800 text-base block sm:inline-block">
                            {app.name} 様
                          </h3>
                        </div>
                        <span className="text-xs text-slate-400 font-mono">{app.createdAt}</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 bg-white/60 p-3.5 rounded-lg border border-slate-100 text-xs text-slate-600">
                        <div><strong>メール：</strong> <a href={`mailto:${app.email}`} className="text-emerald-600 underline">{app.email}</a></div>
                        <div><strong>電話番号：</strong> <a href={`tel:${app.phone}`} className="text-emerald-600 underline">{app.phone}</a></div>
                        <div className="md:col-span-2"><strong>保有資格：</strong> {app.qualifications || '特になし / 取得見込み'}</div>
                      </div>

                      <div className="space-y-1 bg-white p-4 rounded-xl border border-slate-100 mb-4">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">志望動機・自己PR：</span>
                        <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap">{app.message}</p>
                      </div>

                      <div className="flex flex-wrap justify-between items-center gap-2 pt-2 border-t border-slate-100/60">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleUpdateApplicationStatus(app.id, 'contacted')}
                            className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                              app.status === 'contacted'
                                ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                : 'bg-slate-100 hover:bg-amber-50 text-slate-600 hover:text-amber-700'
                            }`}
                          >
                            連絡済
                          </button>
                          <button
                            onClick={() => handleUpdateApplicationStatus(app.id, 'hired')}
                            className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                              app.status === 'hired'
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                : 'bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700'
                            }`}
                          >
                            採用決定
                          </button>
                          <button
                            onClick={() => handleUpdateApplicationStatus(app.id, 'rejected')}
                            className={`px-3 py-1 rounded text-xs font-bold transition-all ${
                              app.status === 'rejected'
                                ? 'bg-red-100 text-red-800 border border-red-200'
                                : 'bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-700'
                            }`}
                          >
                            見送り
                          </button>
                        </div>
                        <button
                          onClick={() => handleDeleteApplication(app.id)}
                          className="text-red-500 hover:text-red-700 p-1.5 hover:bg-red-50 rounded transition-colors text-xs font-semibold flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          削除
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 3. Vacancy Status Tab */}
          {activeSubTab === 'vacancies' && (
            <div className="space-y-6" id="admin-panel-vacancies">
              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800">老人ホーム「ほうらぁさ家」の空室状況更新</h2>
                <p className="text-slate-500 text-xs mt-1">ここで変更した空室状況は、トップページ等に即時反映されます。</p>
              </div>

              <div className="space-y-6">
                {vacancies.map((vac, idx) => (
                  <div key={vac.roomType} className="p-5 border border-slate-100 rounded-2xl bg-slate-50/50">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                      <div>
                        <h3 className="font-bold text-slate-800 text-base">{vac.roomType}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">総室数：{vac.capacity}</p>
                      </div>
                      <div className="flex gap-1.5 bg-white p-1 rounded-xl border border-slate-200">
                        <button
                          onClick={() => handleUpdateVacancy(idx, 'available')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                            vac.status === 'available'
                              ? 'bg-emerald-500 text-white shadow-xs'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          空室あり (○)
                        </button>
                        <button
                          onClick={() => handleUpdateVacancy(idx, 'few')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                            vac.status === 'few'
                              ? 'bg-amber-500 text-white shadow-xs'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          残りわずか (▲)
                        </button>
                        <button
                          onClick={() => handleUpdateVacancy(idx, 'full')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                            vac.status === 'full'
                              ? 'bg-red-500 text-white shadow-xs'
                              : 'text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          満室 (×)
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 bg-white p-3 rounded-lg border border-slate-100">
                      <strong>説明文：</strong> {vac.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. News Tab */}
          {activeSubTab === 'news' && (
            <div className="space-y-8" id="admin-panel-news">
              <div className="pb-4 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800">お知らせ・ブログの新規投稿</h2>
                <p className="text-slate-500 text-xs mt-1">
                  新しい記事を投稿すると、「お知らせ・ブログ」コーナーに即時掲載されます。
                </p>
              </div>

              {successMsg && (
                <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl p-4 text-sm font-bold flex items-center gap-2 animate-bounce">
                  <Check className="w-5 h-5 text-emerald-600" />
                  {successMsg}
                </div>
              )}

              {/* Form to submit news */}
              <form onSubmit={handlePublishNews} className="space-y-4 bg-slate-50/50 border border-slate-100 p-5 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600">記事のタイトル</label>
                    <input
                      type="text"
                      required
                      placeholder="例：【きゅっきゅ】お花見レクリエーションを開催しました"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-600">カテゴリー</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as any)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                    >
                      <option value="event">イベント情報</option>
                      <option value="vacancy">空室・空き情報</option>
                      <option value="day-service">デイサービス様子</option>
                      <option value="recruitment">採用・求人情報</option>
                      <option value="blog">ブログ記事</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600">記事本文</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="お知らせの詳しい本文を入力してください..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="isImportant"
                    checked={newIsImportant}
                    onChange={(e) => setNewIsImportant(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <label htmlFor="isImportant" className="text-xs font-bold text-slate-700 select-none">
                    重要なお知らせとして固定する（目立つタグを表示）
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  この記事を公開する
                </button>
              </form>

              {/* List and manage existing news */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-800">公開中のお知らせ一覧 ({news.length}件)</h3>
                <div className="space-y-3">
                  {news.map((item) => (
                    <div key={item.id} className="p-4 border border-slate-100 rounded-xl flex justify-between items-center bg-white shadow-xs">
                      <div className="space-y-1 pr-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs text-slate-400 font-mono">{item.date}</span>
                          <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-bold">
                            {item.category === 'event' && 'イベント'}
                            {item.category === 'vacancy' && '空室情報'}
                            {item.category === 'day-service' && 'きゅっきゅ'}
                            {item.category === 'recruitment' && '採用'}
                            {item.category === 'blog' && 'ブログ'}
                          </span>
                          {item.isImportant && (
                            <span className="bg-red-50 text-red-600 text-[10px] px-2 py-0.5 rounded font-bold">
                              重要
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm line-clamp-1">{item.title}</h4>
                      </div>
                      <button
                        onClick={() => handleDeleteNews(item.id)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors shrink-0"
                        title="削除"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
