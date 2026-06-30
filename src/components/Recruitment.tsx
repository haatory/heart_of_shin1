import { useState, FormEvent } from 'react';
import { Heart, Briefcase, Sparkles, Check, CheckCircle2, ChevronRight, MessageSquare, ShieldCheck, Mail, Phone, FileSignature } from 'lucide-react';
import { JOB_OPENINGS } from '../data';
import { JobApplication } from '../types';

interface RecruitmentProps {
  applications: JobApplication[];
  setApplications: (apps: JobApplication[]) => void;
}

export default function Recruitment({ applications, setApplications }: RecruitmentProps) {
  // Active job details modal
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  // Form Fields
  const [name, setName] = useState('');
  const [furigana, setFurigana] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desiredJob, setDesiredJob] = useState<'caregiver' | 'nurse' | 'caremanager' | 'kitchen' | 'parttime'>('caregiver');
  const [qualifications, setQualifications] = useState('');
  const [message, setMessage] = useState('');

  // Submission Feedback State
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitApplication = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    const newApp: JobApplication = {
      id: `app-${Date.now()}`,
      name,
      furigana,
      email,
      phone,
      desiredJob,
      qualifications,
      message,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'unread',
    };

    const updated = [newApp, ...applications];
    setApplications(updated);
    localStorage.setItem('magokoro_applications', JSON.stringify(updated));

    // Clear form
    setName('');
    setFurigana('');
    setEmail('');
    setPhone('');
    setQualifications('');
    setMessage('');

    setIsSubmitted(true);
  };

  const selectedJob = JOB_OPENINGS.find((job) => job.id === selectedJobId);

  const workplaceFeatures = [
    { title: '残業は月平均3時間以下', desc: '業務効率化と十分な人員配置により、持ち帰り仕事や突発的な残業はほとんどありません。定時退社を推奨しています。' },
    { title: '手厚い資格取得支援制度', desc: '初任者研修から介護福祉士、ケアマネジャーまで。受験費用サポート、勉強時間確保のためのシフト配慮を行っています。' },
    { title: 'アットホームで抜群の定着率', desc: '20代の若手から60代のベテラン、シニア層まで幅広く在籍。お互いの家庭の事情やプライベートを理解し、助け合う風土です。' },
    { title: '充実した福利厚生・賞与年2回', desc: '昇給年1回、賞与年2回支給（正社員）。各種社会保険、マイカー通勤手当（ガソリン代支給）、退職金制度もしっかり完備しています。' }
  ];

  const staffInterviews = [
    {
      name: '介護職員 Aさん（入社3年目）',
      role: '住宅型有料老人ホーム ほうらぁさ家 勤務',
      text: '「ほうらぁさ家は本当に雰囲気が良くて、スタッフ同士の仲がすごく良いのが自慢です。未経験で入社しましたが、先輩方がマンツーマンで優しく教えてくれたので、最初から安心して仕事に取り組めました。夜勤の際もフォロー体制がしっかりしているので怖くありません。残業がないので、プライベートの時間もしっかり楽しめて、家庭とも両立しやすいです！」'
    },
    {
      name: 'ケアマネジャー Bさん（入社5年目）',
      role: 'まごころ相談支援センター 勤務',
      text: '「代表の吉留が、スタッフの労働環境や心身の健康を一番に考えてくれるので、とても守られているなと実感します。まごころ相談支援センターでは、土日祝休みでカレンダー通りのため、生活リズムが整いやすく働きやすいです。ご利用者様へ最適なプランを悩み抜いて作成し、笑顔をいただいた時のやりがいは何物にも代えがたいです」'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="recruitment-section">
      {/* 1. Header */}
      <div className="text-center space-y-3">
        <span className="bg-emerald-500 text-white font-extrabold text-xs px-3 py-1.5 rounded-full inline-block uppercase tracking-wider">
          RECRUITMENT
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">採用情報</h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          ご利用者様の笑顔を一緒につくる、まごころに溢れた新たな仲間を募集しています。
        </p>
        <div className="h-1.5 w-16 bg-emerald-500 mx-auto rounded-full mt-4"></div>
      </div>

      {/* 2. Top recruitment intro banner */}
      <section className="bg-emerald-50/50 rounded-3xl border border-emerald-100 p-8 sm:p-12" id="careers-intro">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider block">MESSAGE</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-800 leading-snug">
              「職員が笑顔でなければ、最善のまごころケアは生まれない。」
            </h2>
            <div className="text-sm text-slate-600 leading-relaxed space-y-3">
              <p>
                Heart of 真心株式会社は、スタッフ一人ひとりの個性と働きやすさを大切にする会社です。
              </p>
              <p>
                私たちは、ご利用者様に最高に温かい介護をお届けするためには、まず現場で働くスタッフが心から安心して、笑顔で働ける環境が不可欠だと信じています。残業の削減、資格取得の費用全額補助、充実した諸手当など、一人ひとりの努力と生活をしっかり支える制度を築いています。
              </p>
              <p>
                介護・看護の資格を活かしたい方はもちろん、無資格・未経験の方、シニア層の方、子育て中で急なシフト相談が必要な方も、私たちは大歓迎でお迎えします。
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src="/src/assets/images/recruitment_team_1782790478867.jpg"
              alt="まごころの仲間達"
              referrerPolicy="no-referrer"
              className="rounded-2xl shadow-md w-full h-64 object-cover border border-emerald-100"
            />
          </div>
        </div>
      </section>

      {/* 3. Workplace Atmosphere (職場の雰囲気) */}
      <section className="space-y-6" id="careers-atmosphere">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">
          職場の魅力・働きやすさ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workplaceFeatures.map((feat) => (
            <div key={feat.title} className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
              <div className="bg-emerald-50 text-emerald-600 p-3 rounded-2xl shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Staff Interviews (スタッフインタビュー) */}
      <section className="space-y-6" id="careers-interviews">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">
          先輩スタッフの声（インタビュー）
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {staffInterviews.map((inter, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-3xl space-y-4 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 font-extrabold text-sm rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base leading-tight">{inter.name}</h4>
                  <span className="text-xs text-slate-400 mt-0.5 block">{inter.role}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic whitespace-pre-wrap">
                {inter.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Job Openings list (募集職種) */}
      <section className="space-y-6" id="careers-openings">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">
          現在募集中の職種
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">ご希望の職種をクリックすると、詳細な勤務条件が表示されます。</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {JOB_OPENINGS.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJobId(selectedJobId === job.id ? null : job.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer space-y-4 ${
                selectedJobId === job.id
                  ? 'border-emerald-500 bg-emerald-50/20 shadow-md ring-2 ring-emerald-500/10'
                  : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-xs'
              }`}
              id={`job-card-${job.id}`}
            >
              <div className="flex justify-between items-start gap-2">
                <div className="space-y-1">
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded font-extrabold">
                    {job.type}
                  </span>
                  <h3 className="font-extrabold text-slate-800 text-base sm:text-lg hover:text-emerald-600 transition-colors">
                    {job.title}
                  </h3>
                </div>
                <span className="text-xs font-bold text-emerald-600 whitespace-nowrap shrink-0">
                  {selectedJobId === job.id ? '閉じる ▲' : '詳細を見る ▼'}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600">
                <p><strong>給与：</strong> {job.salary.split('\n')[0]}</p>
                <p><strong>勤務地：</strong> {job.location}</p>
              </div>

              {/* Collapsible details */}
              {selectedJobId === job.id && (
                <div className="pt-4 border-t border-slate-100/80 space-y-3 text-xs sm:text-sm text-slate-600 animate-fade-in" id={`job-details-${job.id}`}>
                  <div>
                    <strong className="text-slate-800 block mb-1">■ 詳しい給与条件：</strong>
                    <p className="whitespace-pre-wrap pl-3 border-l-2 border-emerald-200">{job.salary}</p>
                  </div>
                  <div>
                    <strong className="text-slate-800 block mb-1">■ 勤務時間・休日：</strong>
                    <p className="whitespace-pre-wrap pl-3 border-l-2 border-emerald-200">{job.hours}</p>
                  </div>
                  <div>
                    <strong className="text-slate-800 block mb-1">■ 応募要件・必須資格：</strong>
                    <p className="whitespace-pre-wrap pl-3 border-l-2 border-emerald-200">{job.qualifications}</p>
                  </div>
                  <div>
                    <strong className="text-slate-800 block mb-1">■ 主な仕事内容：</strong>
                    <p className="whitespace-pre-wrap pl-3 border-l-2 border-emerald-200">{job.description}</p>
                  </div>
                  <div>
                    <strong className="text-slate-800 block mb-1">■ 待遇・メリット：</strong>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {job.features.map((f) => (
                        <span key={f} className="bg-white text-emerald-700 border border-emerald-100 text-[11px] px-2.5 py-1 rounded-md font-bold">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href="#recruitment-form-anchor"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-lg text-xs tracking-wider transition-colors inline-block"
                    >
                      この職種でエントリーする
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Recruitment Application Form (応募フォーム) */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto space-y-6" id="recruitment-form-anchor">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-xs">
            <FileSignature className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800">求人エントリーフォーム</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            下記の必要事項を入力し、「応募する」ボタンを押してください。<br />
            数日中に、採用担当者よりお電話またはメールにてご連絡差し上げます。
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white p-8 rounded-2xl border border-emerald-100 text-center space-y-4 shadow-sm animate-fade-in" id="recruitment-success-msg">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-10 h-10 text-emerald-600" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-lg sm:text-xl">エントリーを受け付けました！</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              ご応募ありがとうございます。ご入力いただいた連絡先へ、近日中に担当者から面接日時等のご案内を差し上げます。今しばらくお待ちください。
            </p>
            <p className="text-[11px] text-emerald-600 font-bold bg-emerald-50/50 py-2.5 rounded-lg border border-emerald-100 max-w-xs mx-auto">
              💡 HP管理者ポータルから受信データを確認できます。
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-xs"
            >
              もう一度入力する
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitApplication} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="例：山田 太郎"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">
                  お名前（ふりがな）
                </label>
                <input
                  type="text"
                  placeholder="例：やまだ たろう"
                  value={furigana}
                  onChange={(e) => setFurigana(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="例：taro.yamada@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="例：090-1234-5678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">
                  希望職種 <span className="text-red-500">*</span>
                </label>
                <select
                  value={desiredJob}
                  onChange={(e) => setDesiredJob(e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-700 text-sm"
                >
                  <option value="caregiver">介護スタッフ（常勤・パート）</option>
                  <option value="nurse">看護職員（非常勤）</option>
                  <option value="caremanager">ケアマネジャー（常勤）</option>
                  <option value="kitchen">調理スタッフ・配膳員（パート）</option>
                  <option value="parttime">その他パート・夜勤専従職員</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">
                  お持ちの介護・医療資格
                </label>
                <input
                  type="text"
                  placeholder="例：初任者研修修了、介護福祉士、看護師など"
                  value={qualifications}
                  onChange={(e) => setQualifications(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600 block">
                自己PR・職歴・ご質問など
              </label>
              <textarea
                rows={4}
                placeholder="志望動機や、希望の勤務日数・条件、ご不明点がございましたらご記入ください。"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
              id="submit-recruitment-form"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-100" />
              <span>この内容で応募エントリーする</span>
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
