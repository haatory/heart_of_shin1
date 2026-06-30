import { Heart, Phone, MapPin, Users, Award, ShieldAlert, Calendar } from 'lucide-react';
import { COMPANY_PROFILE } from '../data';

export default function AboutSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="about-section">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">ABOUT US</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">私たちについて</h1>
        <div className="h-1.5 w-16 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      {/* 1. Corporate Philosophy */}
      <section className="bg-emerald-50/40 border border-emerald-100 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden" id="about-philosophy">
        {/* Floating background icon */}
        <Heart className="absolute -top-10 -right-10 w-44 h-44 text-emerald-500/5 fill-emerald-500/5 rotate-12 pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-emerald-600 font-extrabold text-xs sm:text-sm tracking-widest uppercase block">法人理念</span>
          <p className="text-xl sm:text-2xl font-bold text-slate-800 leading-relaxed italic">
            「笑顔をあきらめない。まごころの介護で、家族のようによりそう。」
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify sm:text-center">
            {COMPANY_PROFILE.philosophy}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
            <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-2">
              <span className="text-emerald-600 font-bold text-sm block">1. 笑顔の尊重</span>
              <p className="text-xs text-slate-500 leading-relaxed">ご利用者様の笑顔あふれる日常のため、楽しい時間・快適な環境を作ります。</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-2">
              <span className="text-emerald-600 font-bold text-sm block">2. ご家族の安心</span>
              <p className="text-xs text-slate-500 leading-relaxed">24時間見守りと迅速な連絡体制により、ご家族が心から安心できる関係を築きます。</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-emerald-100 space-y-2">
              <span className="text-emerald-600 font-bold text-sm block">3. 地域のつながり</span>
              <p className="text-xs text-slate-500 leading-relaxed">鹿児島市伊敷の地域社会、そして医療機関との連携を密にし、地域福祉に貢献します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Representative Message */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center" id="about-representative">
        <div className="md:col-span-5 relative">
          <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-md border border-slate-200">
            {/* Elegant placeholder illustration representing a kind Japanese manager */}
            <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-blue-100 flex flex-col justify-center items-center text-center p-6 space-y-3">
              <div className="bg-white text-emerald-600 p-4 rounded-full shadow-md">
                <Heart className="w-12 h-12 fill-emerald-500 text-emerald-600" />
              </div>
              <p className="font-bold text-slate-800 text-lg">代表取締役　吉留 真由美</p>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">「まごころを第一に、心通いあうあたたかな空間をお約束いたします」</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-5">
          <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider block">代表あいさつ</span>
          <h2 className="text-2xl font-bold text-slate-800">「住み慣れた地域で、笑顔と尊厳に満ちた暮らしを」</h2>
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              ホームページをご覧いただき、誠にありがとうございます。Heart of 真心株式会社 代表の吉留真由美です。
            </p>
            <p>
              私たちは、鹿児島市伊敷の緑豊かな環境の中で、お一人おひとりの「自分らしさ」と「安心」を両立できる介護サービスを目指してまいりました。
            </p>
            <p>
              介護とは、単にお世話をすることだけではなく、その方がこれまでに歩んでこられた人生に敬意を払い、共に喜びや楽しみを共有することだと考えています。私たちの施設名「ほうらぁさ家」やデイサービス名「きゅっきゅ」には、温かさと楽しさがたくさん詰まっています。
            </p>
            <p>
              高齢者様はもちろん、その介護に日々向き合っていらっしゃるご家族様にとっても、心のオアシスとなれるよう、全スタッフが「真心」を尽くして取り組んでおります。どんな些細なことでも、いつでもお気軽にご相談ください。
            </p>
          </div>
          <div className="pt-2 text-right">
            <span className="text-xs text-slate-400 block">Heart of 真心株式会社</span>
            <span className="text-base font-bold text-slate-800 mt-1 block">代表取締役　吉留 真由美</span>
          </div>
        </div>
      </section>

      {/* 3. Corporate Profile */}
      <section className="space-y-6" id="about-profile">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">
          法人概要
        </h2>
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xs overflow-hidden">
          <dl className="divide-y divide-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-6 gap-2">
              <dt className="text-sm font-bold text-slate-500">法人名</dt>
              <dd className="text-sm sm:text-base font-semibold text-slate-800 sm:col-span-2">
                {COMPANY_PROFILE.name}
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-6 gap-2">
              <dt className="text-sm font-bold text-slate-500">所在地</dt>
              <dd className="text-sm sm:text-base text-slate-800 sm:col-span-2 space-y-1">
                <span>{COMPANY_PROFILE.address}</span>
                <span className="block text-xs text-emerald-600 font-bold">★ 鹿児島市立伊敷中学校・鹿児島高校グラウンド近く</span>
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-6 gap-2">
              <dt className="text-sm font-bold text-slate-500">電話番号 / FAX</dt>
              <dd className="text-sm sm:text-base text-slate-800 sm:col-span-2 space-y-1 font-mono">
                <div>TEL： <a href={`tel:${COMPANY_PROFILE.phone}`} className="text-emerald-600 font-bold hover:underline">{COMPANY_PROFILE.phone}</a></div>
                <div>FAX： <span>{COMPANY_PROFILE.fax}</span></div>
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-6 gap-2">
              <dt className="text-sm font-bold text-slate-500">設立</dt>
              <dd className="text-sm sm:text-base text-slate-800 sm:col-span-2 font-mono">
                {COMPANY_PROFILE.established}
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-6 gap-2">
              <dt className="text-sm font-bold text-slate-500">代表者</dt>
              <dd className="text-sm sm:text-base font-semibold text-slate-800 sm:col-span-2">
                {COMPANY_PROFILE.representative}
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-6 gap-2">
              <dt className="text-sm font-bold text-slate-500">職員数</dt>
              <dd className="text-sm sm:text-base text-slate-800 sm:col-span-2">
                {COMPANY_PROFILE.employees}
              </dd>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-5 sm:p-6 gap-2">
              <dt className="text-sm font-bold text-slate-500">事業内容</dt>
              <dd className="text-sm sm:text-base text-slate-800 sm:col-span-2">
                <ul className="list-disc pl-5 space-y-1 text-slate-600 font-medium">
                  {COMPANY_PROFILE.businesses.map((biz) => (
                    <li key={biz}>{biz}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 4. Access & Interactive Map Widget */}
      <section className="space-y-6" id="about-access">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">
          交通アクセス
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Description */}
          <div className="lg:col-span-5 bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 text-sm sm:text-base">Heart of 真心株式会社 所在地</span>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">{COMPANY_PROFILE.address}</p>
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-slate-800 block">🚗 お車でお越しの場合：</span>
                  <span className="text-slate-500">鹿児島IC・鹿児島北ICから約10分。敷地内、無料の来客用駐車場を10台完備しています。お気軽にお車でご来訪ください。</span>
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-slate-800 block">🚌 公共交通機関（バス）でお越しの場合：</span>
                  <span className="text-slate-500">鹿児島市電「鹿児島駅」またはJR「鹿児島中央駅」より鹿児島交通バス「伊敷ニュータウン」方面行き乗車、「伊敷4丁目」バス停下車、徒歩約3分。</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-emerald-100 flex items-center justify-between gap-3 shadow-xs">
              <span className="text-xs font-bold text-slate-600 leading-tight">施設見学はお気軽にご予約ください</span>
              <a
                href="tel:099-801-5561"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3.5 rounded-lg text-xs tracking-wider transition-colors inline-flex items-center gap-1 shrink-0"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>見学を予約</span>
              </a>
            </div>
          </div>

          {/* Interactive Simulated Map */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-100 min-h-[300px] flex flex-col relative shadow-xs">
            {/* Elegant Vector Map Showcase representing Kagoshima, Yoshino/Ishiki area */}
            <div className="flex-1 bg-slate-50 relative p-6 flex flex-col justify-between items-center text-center overflow-hidden">
              {/* Fake abstract map shapes */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute top-10 left-0 w-full h-4 bg-slate-400 rotate-12"></div>
                <div className="absolute top-0 left-40 w-6 h-full bg-slate-400 -rotate-45"></div>
                <div className="absolute top-1/2 left-0 w-full h-8 bg-slate-400 -rotate-12"></div>
                <div className="absolute top-20 left-1/3 w-20 h-20 rounded-full border-4 border-slate-400"></div>
                <div className="absolute bottom-10 right-20 w-32 h-16 bg-emerald-300 rounded-3xl"></div>
              </div>

              <div className="relative z-10 w-full space-y-4 my-auto">
                <div className="mx-auto w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-md">
                  <MapPin className="w-8 h-8 text-emerald-600 animate-bounce" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-base">鹿児島市伊敷4丁目10-1</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto leading-relaxed">
                    国道3号線近く、伊敷中学校・甲突川沿いの静かで穏やかな住宅街にあります。
                  </p>
                </div>
                <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full inline-block border border-emerald-100 text-[11px] font-bold text-emerald-700 shadow-xs">
                  📞 道に迷われた際は：099-801-5561（ほうらぁさ家）までご連絡ください
                </div>
              </div>

              {/* Fake coordinates tag for high styling without tech larping */}
              <div className="w-full text-right text-[10px] text-slate-400 font-mono mt-auto relative z-10">
                伊敷4丁目交差点近く / 甲突川近隣
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
