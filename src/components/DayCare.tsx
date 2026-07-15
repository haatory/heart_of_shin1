import { Heart, CheckCircle2, Clock, Calendar, HelpCircle, Phone, Sparkles, Users } from 'lucide-react';
import { INITIAL_FAQS } from '../data';

export default function DayCare() {
  const dayFaqs = INITIAL_FAQS.filter(f => f.category === 'dayservice');

  const features = [
    {
      title: '和気あいあいとしたアットホームな居場所',
      desc: 'スタッフとご利用者様、またご利用者様同士の距離が近く、笑顔と明るいおしゃべりが一日中絶えないあたたかな空間です。笑顔で過ごすことが何よりの脳活性と体力向上につながります。'
    },
    {
      title: '安心・安全のリフト送迎＆入浴設備',
      desc: '車椅子のまま安全に乗降できる専用リフト車でご自宅までお迎え・お送りします。浴室には最新の浴槽や特殊入浴装置を備えており、立ち上がりや移動が不安な方も負担なくゆったりとご入浴いただけます。'
    },
    {
      title: '手作りのあったか栄養バランス食事',
      desc: '健康状態や噛む力、飲み込む力に合わせ、施設内の調理場で温かいお食事をお出しします。季節折々のイベント食や郷土料理の日など、味覚でも楽しんでいただけるメニューが自慢です。'
    },
    {
      title: 'リハビリ専門指導・多彩なレク',
      desc: '理学療法士などの指導のもと、椅子に座ったままできる体操や転倒予防トレーニングを行います。また、手芸、書道、ちぎり絵、カラオケ、外出活動など、五感を刺激する多種多様なメニューを用意。'
    }
  ];

  const dailySchedule = [
    { time: '08:15 〜 09:15', title: 'ご自宅へお迎え（送迎）', desc: '専用送迎車にて、スタッフがご自宅まで笑顔でお迎えにあがります。お荷物の持ちだし等もお手伝いします。' },
    { time: '09:15', title: '到着・健康チェック（バイタル測定）', desc: 'お茶を飲んでホッと一息。看護職員がお一人おひとりの血圧、体温、脈拍、お体の様子をチェックし、一日の安全なご利用に備えます。' },
    { time: '09:30', title: '朝のご挨拶・朝の体操', desc: '皆様が揃って元気よくご挨拶。音楽に合わせた軽快な全身ストレッチ体操や準備体操を行います。' },
    { time: '10:00', title: '入浴・趣味活動・個別機能訓練', desc: '順次、安心・安全な浴室にてリラックス入浴。お一人おひとりの身体状況に合わせた個別機能訓練（リハビリ）や、ちぎり絵・塗り絵などの趣味活動を行います。' },
    { time: '12:00', title: '嚥下体操・美味しい昼食', desc: 'お食事の前に誤嚥を防ぐ「口腔・パタカラ体操」を実施。温かいご飯、栄養バランスの良いおかずを皆様で和気あいあいといただきます。' },
    { time: '13:00', title: '静養・口腔ケア', desc: '食後の歯磨き・うがい。その後はリクライニングチェアやベッドにて、ホッと一息お昼寝や歓談の時間です。' },
    { time: '14:00', title: '集団レクリエーション・季節の行事', desc: '脳トレクイズ、音楽健康レク、風船バレー、ビンゴ大会など、笑顔と体を使った楽しい全員参加のゲームを行います。' },
    { time: '15:00', title: 'おやつタイム・リラックス時間', desc: '美味しいおやつとお茶を飲みながら、ご利用者様同士やスタッフと笑顔でおしゃべり。' },
    { time: '16:00', title: '整理体操・帰りのご挨拶', desc: '一日の出来事を振り返りながら、感謝をこめてご挨拶。お忘れ物がないか一緒に確認します。' },
    { time: '16:30 〜 17:30', title: 'ご自宅までお送り（送迎）', desc: 'ご自宅の玄関、またはお部屋の中までスタッフが責任を持って安全にお送りいたします。ご家族様へ一日の様子をご報告。' }
  ];

  const targetUsers = [
    '介護保険で「要支援1〜2」「要介護1〜5」の認定を受けられている方',
    '鹿児島市内に住民票をお持ちの方（地域密着型サービスのため、近隣にお住まいの方中心に手厚く対応いたします）',
    '「日中、一人で家にいるのが不安」「お友達を作って楽しく過ごしたい」「お風呂に安全に入りたい」といった想いをお持ちの方',
    '車椅子、歩行器をご利用の方、軽度・中度の認知症をお持ちの方も安心してご利用いただけます。'
  ];

  const steps = [
    { step: '1', title: 'お問い合わせ・ご見学', desc: 'ケアマネジャー様にご相談いただくか、当施設（099-801-5561）へ直接お電話ください。随時、無料見学を受け付けています。' },
    { step: '2', title: '無料の１日体験利用', desc: '実際にご自宅への往復送迎、美味しいお食事、ご入浴、レクリエーションを丸ごと無料でご体験いただきます。' },
    { step: '3', title: 'ご面談と状態の確認', desc: 'ご利用を希望される場合、スタッフがご自宅へ伺い、お体の状態や生活状況を丁寧にお聞きし、最適なサービス内容をご相談します。' },
    { step: '4', title: 'ケアプラン作成とご契約', desc: '担当のケアマネジャー様が通所介護を盛り込んだケアプランを作成。同意をいただいた後、当施設と利用契約を結びます。' },
    { step: '5', title: 'デイサービス開始！', desc: 'ご指定の曜日に送迎車でお迎えに上がります。楽しく活力に満ちた快適なまごころの時間をお過ごしください。' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="daycare-section">
      {/* 1. Header */}
      <div className="text-center space-y-3">
        <span className="bg-blue-500 text-white font-extrabold text-xs px-3 py-1.5 rounded-full inline-block uppercase tracking-wider">
          地域密着型通所介護（デイサービス）
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">デイサービス きゅっきゅ</h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          住み慣れた地域で、笑顔を絶やさず、いつまでも自分らしく輝ける楽しいひとときを。
        </p>
        <div className="h-1.5 w-16 bg-blue-500 mx-auto rounded-full mt-4"></div>
      </div>

      {/* 2. Intro Showcase Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="daycare-intro">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-wider block">CONCEPT</span>
          <h2 className="text-2xl font-bold text-slate-800 leading-tight">「第二の居間」のように気兼ねなく、楽しくリフレッシュできる一日を。</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            デイサービス「きゅっきゅ」は、小規模ならではのきめ細やかなサポート体制と、あたたかいおもてなしを大切にしています。お友達とお喋りを楽しみ、身体を動かし、美味しい食事を食べる。そんな何気ない一日の喜びを、まごころを込めてプロデュースします。
          </p>
          <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl space-y-4">
            <h4 className="font-bold text-blue-800 text-sm">【営業日・営業時間・定員のご案内】</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Calendar className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                <span><strong>営業日：</strong> 365日年中無休</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                <span><strong>利用時間：</strong> 9:15 〜 16:30</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4.5 h-4.5 text-blue-500 shrink-0" />
                <span><strong>利用定員：</strong> 18名</span>
              </div>
            </div>
            <p className="text-[11px] text-blue-700 font-medium">※ 年中無休・365日営業。ご家族様の用事などによる時間延長のご相談も柔軟に承ります。</p>
          </div>

          <div className="bg-emerald-50/75 border border-emerald-100 p-5 rounded-2xl space-y-3">
            <h4 className="font-bold text-emerald-800 text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>【各種加算体制（高品質な介護サービスの証）】</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></div>
                <span>個別機能訓練加算 Ⅰの１</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></div>
                <span>入浴介助加算 Ⅰ</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></div>
                <span>処遇改善加算 Ⅰの１</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></div>
                <span>提供体制加算 Ⅱ</span>
              </div>
            </div>
            <p className="text-[11px] text-emerald-700 font-medium leading-relaxed">
              ※ 各種加算要件を遵守し、専門資格を持ったスタッフによる安心で質の高いサービスをご提供いたします。
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <img
            src="/src/assets/images/day_service_activity_1782790463874.jpg"
            alt="きゅっきゅのレクリエーション風景"
            referrerPolicy="no-referrer"
            className="rounded-2xl shadow-md w-full h-64 object-cover border border-blue-100"
          />
        </div>
      </section>

      {/* 3. Features detail */}
      <section className="space-y-6" id="daycare-features">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-blue-500 pl-3">
          デイサービスの特徴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat) => (
            <div key={feat.title} className="bg-white p-6 sm:p-8 rounded-3xl border border-blue-50 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
              <div className="bg-blue-50 text-blue-500 p-3 rounded-2xl shrink-0">
                <CheckCircle2 className="w-5 h-5 text-blue-500 fill-blue-100" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Target audience */}
      <section className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-4" id="daycare-target">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <span>デイサービス「きゅっきゅ」の対象となる方</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {targetUsers.map((user, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{user}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Daily schedule */}
      <section className="space-y-6" id="daycare-schedule">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-blue-500 pl-3">
          1日のスケジュール（モデル例）
        </h2>
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="space-y-6 relative before:absolute before:inset-y-1 before:left-3 sm:before:left-28 before:w-0.5 before:bg-blue-100">
            {dailySchedule.map((sched) => (
              <div key={sched.time} className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8 relative">
                {/* Time badge */}
                <div className="flex items-center gap-2 sm:w-28 shrink-0">
                  <div className="w-6.5 h-6.5 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center text-white text-xs z-10 shadow-xs shrink-0"></div>
                  <span className="font-mono font-extrabold text-xs sm:text-sm text-blue-700 leading-tight">{sched.time}</span>
                </div>
                {/* Content */}
                <div className="pl-8 sm:pl-0 space-y-1">
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base">{sched.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{sched.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Steps */}
      <section className="space-y-6" id="daycare-flow">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-blue-500 pl-3">
          ご利用開始までの流れ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((st) => (
            <div key={st.step} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-extrabold text-sm flex items-center justify-center">
                  {st.step}
                </span>
                <h4 className="font-bold text-slate-800 text-sm leading-snug">{st.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ for Day */}
      <section className="space-y-6" id="daycare-faq">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-blue-500 pl-3">
          よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          {dayFaqs.map((faq) => (
            <div key={faq.id} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 space-y-2.5">
              <h4 className="font-bold text-slate-800 text-sm sm:text-base flex items-start gap-2">
                <span className="text-blue-500 font-extrabold font-mono">Q.</span>
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 pl-5 leading-relaxed border-l-2 border-blue-100">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
