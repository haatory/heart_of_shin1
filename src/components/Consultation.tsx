import { Heart, CheckCircle2, DollarSign, HelpCircle, Phone, ArrowRight, ShieldCheck, Clipboard } from 'lucide-react';
import { INITIAL_FAQS } from '../data';

export default function Consultation() {
  const consultFaqs = INITIAL_FAQS.filter(f => f.category === 'caremanager');

  const features = [
    {
      title: '丁寧で親身なヒアリング',
      desc: '介護を必要とされるご本人様や、日々支えておられるご家族様のお悩み・ご希望を徹底的にお伺いします。「これからどう暮らしていきたいか」を何より大切にします。'
    },
    {
      title: '最適なオリジナル介護計画（ケアプラン）',
      desc: 'デイサービス、ヘルパー派遣、ショートステイ、福祉用具のレンタルなど、多岐にわたるサービスの中から、最も合理的で生活しやすい組み合わせをご提案・計画します。'
    },
    {
      title: '市区町村への申請手続きを無料代行',
      desc: '初めて介護保険を利用する際の、自治体窓口への新規要介護認定の申請や、その後の更新申請の代行手続きも、すべて当センターで責任を持ってお手伝いします。'
    },
    {
      title: '各事業者とのスムーズな連絡・調整',
      desc: '介護サービスを提供する施設、福祉用具取扱店、往診医、訪問看護師などとのやり取りをケアマネジャーが一手に行うため、お客様の手を煩わせることがありません。'
    }
  ];

  const steps = [
    { step: '1', title: 'ご相談の受付（お電話・ご来訪）', desc: 'まずは「介護保険って何？」「親の様子がおかしい」など、何でもお気軽にご連絡（099-801-5561）またはご相談ください。相談は無料です。' },
    { step: '2', title: 'ご家庭への訪問面談', desc: '公認ケアマネジャーがご自宅を訪問し、ご本人様の心身の状態、ご家庭の状況、今後のご希望をお聞きします。（プライバシーは厳守します）' },
    { step: '3', title: '要介護認定の申請・調査', desc: 'まだ認定を受けていない場合、市区町村への介護保険申請を代行します。認定調査員による調査などを経て、要介護度が通知されます。' },
    { step: '4', title: 'ケアプラン原案の作成・相談', desc: '要介護度やご本人の心身状況に合わせた「ケアプラン（居宅サービス計画書）」の素案を作成し、ご家族様と内容をすり合わせて修正します。' },
    { step: '5', title: 'サービス事業者との調整・担当者会議', desc: 'プランに基づいて、利用するデイサービスやヘルパーなどの事業者を交えた連絡調整会議（サービス担当者会議）を開き、具体的な日時やサービス内容を合意します。' },
    { step: '6', title: 'ケアプラン決定・サービス開始！', desc: '正式な計画書を作成し決定。各サービスのご利用が開始されます。その後も月1回以上は必ずケアマネジャーがご自宅を訪問し、状況の変化に合わせたプランの見直し（モニタリング）を行います。' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="consultation-section">
      {/* 1. Header */}
      <div className="text-center space-y-3">
        <span className="bg-amber-500 text-white font-extrabold text-xs px-3 py-1.5 rounded-full inline-block uppercase tracking-wider">
          居宅介護支援事業所
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">まごころ相談支援センター</h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          介護にかかわる不安、疑問、手続きのすべてを。公認ケアマネジャーが全力でサポートします。
        </p>
        <div className="h-1.5 w-16 bg-amber-500 mx-auto rounded-full mt-4"></div>
      </div>

      {/* 2. Banner with Important fee statement */}
      <section className="bg-amber-500/10 border border-amber-200 rounded-3xl p-6 sm:p-10 relative overflow-hidden" id="consult-free-banner">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <span className="bg-amber-500 text-white font-extrabold text-[11px] px-3 py-1 rounded-full inline-block">
              SELF-PAY: ¥0 (FREE)
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
              ケアマネジャーへのご相談・ケアプラン作成費用は、全額介護保険から支払われるため、自己負担はありません。
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ご相談から、ケアプラン作成、申請手続きの代行まで、ご利用者様やご家族様に費用を請求することは一切ございません。どなた様も完全無料でご利用いただけます。
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <div className="bg-white p-6 rounded-2xl border border-amber-100 text-center shadow-sm space-y-1 max-w-[200px]">
              <span className="text-xs text-slate-400 font-bold block">自己負担額</span>
              <span className="text-3xl sm:text-4xl font-black text-amber-500 font-mono">0 円</span>
              <span className="text-[10px] text-slate-400 block pt-1.5 border-t border-slate-100 font-bold">（介護保険で全額カバー）</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Care Manager Roles */}
      <section className="space-y-6" id="consult-roles">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-amber-500 pl-3">
          ケアマネジャー（介護支援専門員）の役割
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat) => (
            <div key={feat.title} className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-50 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
              <div className="bg-amber-50 text-amber-600 p-3 rounded-2xl shrink-0">
                <CheckCircle2 className="w-5 h-5 text-amber-600 fill-amber-100" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Service Flow */}
      <section className="space-y-6" id="consult-flow">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-amber-500 pl-3">
          ご相談からサービス利用開始までの流れ
        </h2>
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="space-y-8 relative before:absolute before:inset-y-1 before:left-3 sm:before:left-32 before:w-0.5 before:bg-amber-100">
            {steps.map((st) => (
              <div key={st.step} className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8 relative">
                {/* Step circle */}
                <div className="flex items-center gap-2 sm:w-32 shrink-0">
                  <div className="w-7 h-7 rounded-full bg-amber-500 border-4 border-white flex items-center justify-center text-white text-xs z-10 shadow-xs shrink-0 font-extrabold">
                    {st.step}
                  </div>
                  <span className="font-bold text-xs text-amber-700 uppercase tracking-widest leading-none sm:hidden">STEP {st.step}</span>
                  <span className="font-bold text-xs text-amber-700 uppercase tracking-widest leading-none hidden sm:inline">STEP {st.step}</span>
                </div>
                {/* Content */}
                <div className="pl-9 sm:pl-0 space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base">{st.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Who can use (ご利用できる方) */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-4" id="consult-eligible">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Clipboard className="w-5 h-5 text-amber-500" />
          <span>当センターをご利用できる対象の方</span>
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <li className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
            <span className="text-amber-500 font-bold">✔</span>
            <span>介護保険で「要支援1〜2」「要介護1〜5」と認定された方</span>
          </li>
          <li className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
            <span className="text-amber-500 font-bold">✔</span>
            <span>加齢による体力低下、物忘れ、退院後の自立支援などでお悩みの方</span>
          </li>
          <li className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
            <span className="text-amber-500 font-bold">✔</span>
            <span>まだ介護認定を受けていないが、これから申請を行いたいと考えている方</span>
          </li>
          <li className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
            <span className="text-amber-500 font-bold">✔</span>
            <span>介護をしているが心身の疲労が限界に近く、相談できる専門家を求めているご家族様</span>
          </li>
        </ul>
      </section>

      {/* 6. FAQ for Consultation */}
      <section className="space-y-6" id="consult-faq">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-amber-500 pl-3">
          よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          {consultFaqs.map((faq) => (
            <div key={faq.id} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 space-y-2.5">
              <h4 className="font-bold text-slate-800 text-sm sm:text-base flex items-start gap-2">
                <span className="text-amber-500 font-extrabold font-mono">Q.</span>
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 pl-5 leading-relaxed border-l-2 border-amber-100">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
