import { Heart, Phone, ArrowRight, ShieldCheck, CheckCircle2, Calendar, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { NewsPost, VacancyStatus } from '../types';

interface HomeSectionProps {
  news: NewsPost[];
  vacancies: VacancyStatus[];
  setActiveTab: (tab: string) => void;
}

export default function HomeSection({ news, vacancies, setActiveTab }: HomeSectionProps) {
  // Take top 3 news for preview
  const recentNews = news.slice(0, 3);

  // Check if there are any available rooms in vacancies
  const hasAvailableRoom = vacancies.some(v => v.status === 'available' || v.status === 'few');

  return (
    <div className="space-y-16 pb-20" id="home-section">
      {/* 1. Hero Section with dynamic background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50/30 py-16 sm:py-24 border-b border-emerald-100/50" id="hero-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Column (Copywriting) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold tracking-wide shadow-xs border border-emerald-500/20">
                <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" />
                <span>鹿児島市伊敷の介護・生活支援サービス</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 leading-tight tracking-tight">
                笑顔があふれ、安心とともに<br />
                <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">自分らしく暮らせる毎日</span>を。
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                「Heart of 真心株式会社」は、住宅型有料老人ホーム「ほうらぁさ家」、デイサービス「きゅっきゅ」、居宅介護支援「まごころ相談支援センター」を通じて、ご利用者様とご家族様に「まごころ」を込めた最善のケアをお届けします。
              </p>

              {/* Vacancy Quick Info inside Hero */}
              <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-emerald-100 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${hasAvailableRoom ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                  </span>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block tracking-wider">LATEST VACANCY</span>
                    <span className="text-sm font-bold text-slate-700">有料老人ホーム ほうらぁさ家</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-emerald-50 text-emerald-800 font-extrabold text-xs px-2.5 py-1 rounded-md border border-emerald-100">
                    {hasAvailableRoom ? '個室：空室あり（残りわずか）' : '満室（お申し込み受付中）'}
                  </span>
                  <button
                    onClick={() => setActiveTab('service-home')}
                    className="text-emerald-600 hover:text-emerald-700 font-bold text-xs flex items-center gap-0.5 group"
                  >
                    <span>料金・詳細</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setActiveTab('contact')}
                  className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg text-base flex items-center justify-center gap-2 group"
                  id="hero-cta-contact"
                >
                  <Phone className="w-5 h-5 fill-white" />
                  <span>施設の見学・ご相談（無料）</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setActiveTab('recruitment')}
                  className="bg-white text-emerald-700 border-2 border-emerald-600/40 font-bold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all text-base flex items-center justify-center gap-2"
                  id="hero-cta-careers"
                >
                  <span>採用情報をみる</span>
                </button>
              </div>
            </div>

            {/* Hero Right Column (Beautiful floating layout) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[400px] lg:max-w-none">
                {/* Back Decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-400 rounded-3xl rotate-3 scale-95 opacity-20 blur-xl"></div>
                {/* Main Image Frame */}
                <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-emerald-50 overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                  <img
                    src="/src/assets/images/facility_lounge_1782790448707.jpg"
                    alt="ほうらぁさ家 施設イメージ"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10">
                    <p className="text-xs text-emerald-400 font-bold">住宅型有料老人ホーム ほうらぁさ家</p>
                    <p className="text-sm font-bold mt-1">光あふれる清潔で快適な共有スペース</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Strengths / Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-philosophy">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">PHILOSOPHY</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">私たちが大切にする「3つの真心」</h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2.5">
            すべての高齢者様が、笑顔で、尊厳を持って自分らしく幸せに暮らせるように。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-emerald-50 shadow-xs hover:shadow-md transition-shadow text-center space-y-4">
            <div className="mx-auto w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
              <Heart className="w-7 h-7 fill-emerald-500 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">笑顔あふれる毎日</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              孤独感のない、笑い声に包まれたアットホームな居場所を作ります。毎日のレクリエーションやふれあいで心が通い合います。
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-emerald-50 shadow-xs hover:shadow-md transition-shadow text-center space-y-4">
            <div className="mx-auto w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">安心と安全の連携</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              24時間の常駐サポート体制と、地域の医療機関との緊急連携により、急な体調不良や持病のある方も万全の備えで守ります。
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-emerald-50 shadow-xs hover:shadow-md transition-shadow text-center space-y-4">
            <div className="mx-auto w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">自分らしい生活</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              これまでの生活スタイルや個性を最大限に尊重します。画一的なケアではなく、お一人おひとりの意思に寄り添い支援します。
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Three Services Introduction (Bento Grid) */}
      <section className="bg-emerald-50/40 py-16 border-y border-emerald-100/50" id="home-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">OUR SERVICES</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">安心のトータルサポート事業</h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2.5">
              住まい・通い・ケアマネジメントの3軸でお一人おひとりに最適な福祉を提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1: ほうらぁさ家 */}
            <div className="bg-white rounded-3xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative">
                <img
                  src="/src/assets/images/facility_lounge_1782790448707.jpg"
                  alt="ほうらぁさ家"
                  referrerPolicy="no-referrer"
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-4 left-4 bg-emerald-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md">
                  住宅型有料老人ホーム
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-800">ほうらぁさ家</h3>
                  <p className="text-sm text-slate-500 font-medium">笑顔とまごころを詰め込んだ終の棲家</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    全室個室でプライバシーを大切にしながら、常駐スタッフによる24時間の見守りと生活支援、協力医療機関との手厚い連携で安心できる住まいを提供します。
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('service-home')}
                  className="w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-1.5"
                  id="go-to-service-home"
                >
                  <span>施設紹介・料金をみる</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 2: きゅっきゅ */}
            <div className="bg-white rounded-3xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative">
                <img
                  src="/src/assets/images/day_service_activity_1782790463874.jpg"
                  alt="デイサービスきゅっきゅ"
                  referrerPolicy="no-referrer"
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-400 text-white font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md">
                  地域密着型通所介護
                </span>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-800">通所介護 きゅっきゅ</h3>
                  <p className="text-sm text-slate-500 font-medium">住み慣れた地域で自分らしく輝く</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    日帰りで送迎、美味しいお食事、ご入浴、心身の機能維持を目指す訓練を提供します。和気あいあいとしたレクリエーションで楽しい一日をお過ごしください。
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('service-day')}
                  className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-1.5"
                  id="go-to-service-day"
                >
                  <span>デイサービス紹介をみる</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service 3: まごころ相談支援センター */}
            <div className="bg-white rounded-3xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="p-6 bg-slate-50 border-b border-slate-100 text-center flex flex-col justify-center items-center h-52">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                  <Heart className="w-9 h-9 fill-amber-500 text-amber-600" />
                </div>
                <span className="bg-amber-500 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-xs mb-2">
                  居宅介護支援事業所
                </span>
                <p className="text-sm font-bold text-slate-700">介護にかかわる何でも相談窓口</p>
              </div>
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-800">まごころ相談支援センター</h3>
                  <p className="text-sm text-slate-500 font-medium">介護の不安や疑問をケアマネが解消</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    公認ケアマネジャーがお客さまの課題やご希望に寄り添い、最適な「ケアプラン（介護計画）」を作成します。市区町村や介護サービス機関との面倒な連携をすべて代行。
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('service-consult')}
                  className="w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-1.5"
                  id="go-to-service-consult"
                >
                  <span>ケアプラン作成・相談をみる</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Latest News (Real-time and Seeded) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="home-news">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">LATEST NEWS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">お知らせ・ブログ</h2>
          </div>
          <button
            onClick={() => setActiveTab('news')}
            className="text-emerald-600 hover:text-emerald-700 font-bold text-sm flex items-center gap-1 group"
            id="all-news-link"
          >
            <span>すべてのお知らせを見る</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNews.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveTab('news')}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer space-y-3 flex flex-col justify-between"
              id={`home-news-item-${post.id}`}
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-slate-400 font-mono font-bold">{post.date}</span>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
                    {post.category === 'event' && 'イベント'}
                    {post.category === 'vacancy' && '空室情報'}
                    {post.category === 'day-service' && 'きゅっきゅ'}
                    {post.category === 'recruitment' && '採用情報'}
                    {post.category === 'blog' && 'ブログ'}
                  </span>
                  {post.isImportant && (
                    <span className="bg-red-50 text-red-600 text-[10px] px-2 py-0.5 rounded-md font-bold uppercase">
                      重要
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-800 text-sm sm:text-base line-clamp-2 hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 leading-relaxed">
                  {post.content}
                </p>
              </div>
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1 mt-3">
                <span>詳細を読む</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Join Our Team Section (High priority Recruitment) */}
      <section className="bg-slate-900 text-white py-16 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative shadow-lg" id="home-careers">
        {/* Background blobs */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="bg-emerald-500 text-slate-900 font-extrabold text-xs px-3.5 py-1.5 rounded-full inline-block">
              RECRUITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              まごころを届ける仲間を<br />
              募集しています。
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
              私たちは、「職員が幸せであってこそ、最高品質のケアをご利用者様に提供できる」と考えています。充実した研修制度、賞与・各種手当、残業がほぼゼロで、お互いを助け合うあたたかい雰囲気が自慢です。未経験者やブランクがある方も歓迎！
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="bg-slate-800 text-emerald-400 font-bold text-xs px-3 py-1.5 rounded-lg border border-slate-700">未経験OK</span>
              <span className="bg-slate-800 text-emerald-400 font-bold text-xs px-3 py-1.5 rounded-lg border border-slate-700">車通勤可能</span>
              <span className="bg-slate-800 text-emerald-400 font-bold text-xs px-3 py-1.5 rounded-lg border border-slate-700">残業月平均3h以下</span>
              <span className="bg-slate-800 text-emerald-400 font-bold text-xs px-3 py-1.5 rounded-lg border border-slate-700">資格取得支援</span>
            </div>
            <button
              onClick={() => setActiveTab('recruitment')}
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-extrabold px-8 py-3.5 rounded-xl transition-all shadow-md text-sm sm:text-base flex items-center justify-center gap-2 mx-auto lg:mx-0"
              id="home-recruitment-cta"
            >
              <span>募集要項・エントリーフォームはこちら</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="lg:col-span-6">
            <img
              src="/src/assets/images/recruitment_team_1782790478867.jpg"
              alt="働く介護スタッフチーム"
              referrerPolicy="no-referrer"
              className="rounded-2xl shadow-xl w-full h-64 sm:h-80 object-cover border border-slate-800 transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* 6. Medical Coordination & Security Widget */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8" id="home-trust-details">
        {/* Medical Support info */}
        <div className="bg-amber-50/50 p-6 sm:p-8 rounded-3xl border border-amber-100 flex items-start gap-4">
          <div className="bg-amber-100 text-amber-800 p-3 rounded-2xl shrink-0">
            <ShieldCheck className="w-6 h-6 text-amber-700" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-slate-800 text-base sm:text-lg">万全な医療連携・緊急対応体制</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              月2回の往診・夜間の緊急連絡対応・薬の処方など、地域の提携医療機関と緊密な連携を敷いています。夜間もスタッフが常駐しており、緊急搬送が必要な場合でも迅速に救急要請と家族連絡が可能なマニュアル体制を確立しています。
            </p>
          </div>
        </div>

        {/* Safety measures */}
        <div className="bg-blue-50/50 p-6 sm:p-8 rounded-3xl border border-blue-100 flex items-start gap-4">
          <div className="bg-blue-100 text-blue-800 p-3 rounded-2xl shrink-0">
            <CheckCircle2 className="w-6 h-6 text-blue-700" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-slate-800 text-base sm:text-lg">衛生管理と高度な感染症対策</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              入居者様および職員の毎日の検温・健康観察、全室及び共有部における定期的なオゾン空気除菌、およびHEPAフィルター搭載高機能加湿清浄機の稼働を行っています。ご家族の面会ルール、緊急時のゾーニング隔離ガイドラインも整備しています。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
