import { useState } from 'react';
import { Heart, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, DollarSign, List, ShieldAlert, Sparkles } from 'lucide-react';
import { INITIAL_FAQS, INITIAL_VACANCIES } from '../data';

interface HomeCareHomeProps {
  vacancies: any[];
}

export default function HomeCareHome({ vacancies }: HomeCareHomeProps) {
  // Calculator States
  const [planType, setPlanType] = useState<'normal' | 'welfare'>('normal');
  const [roomType, setRoomType] = useState<'A' | 'B'>('A');
  const [rentAmount, setRentAmount] = useState<number>(32000); // Default rent for Type A (Normal)
  const [addMeals, setAddMeals] = useState<boolean>(true); // meal plan
  const [laundryTimes, setLaundryTimes] = useState<number>(0); // Number of washes per month (300 yen each)
  const [addHygiene, setAddHygiene] = useState<boolean>(false); // optional diaper disposal service (¥5,000)
  const [careLevel, setCareLevel] = useState<number>(0); // self-pay depending on care level

  const isWelfare = planType === 'welfare';

  // Dynamic values based on planType & roomType
  const utilitiesPrice = isWelfare 
    ? (roomType === 'A' ? 15000 : 30000)
    : (roomType === 'A' ? 20000 : 30000);

  const managementPrice = isWelfare
    ? (roomType === 'A' ? 15000 : 30000)
    : (roomType === 'A' ? 20000 : 40000);

  const mealsPrice = roomType === 'A' ? 45000 : 90000;

  const optionalHygienePrice = 5000;

  const handlePlanTypeChange = (plan: 'normal' | 'welfare') => {
    setPlanType(plan);
    if (plan === 'welfare') {
      setRentAmount(roomType === 'A' ? 31600 : 38000);
    } else {
      setRentAmount(roomType === 'A' ? 32000 : 42000);
    }
  };

  const handleRoomTypeChange = (type: 'A' | 'B') => {
    setRoomType(type);
    if (planType === 'welfare') {
      setRentAmount(type === 'A' ? 31600 : 38000);
    } else {
      setRentAmount(type === 'A' ? 32000 : 42000);
    }
  };

  const totalMonthlyCost = rentAmount + utilitiesPrice + managementPrice + (addMeals ? mealsPrice : 0) + (laundryTimes * 300) + (addHygiene ? optionalHygienePrice : 0) + careLevel;

  // Filter FAQs for home
  const homeFaqs = INITIAL_FAQS.filter(f => f.category === 'home');

  const features = [
    {
      title: '24時間見守り常駐体制',
      desc: '夜間も含め、専門スタッフが常駐。お部屋のコールや緊急事態にも瞬時に駆けつけ、適切な支援を行います。ご家族様が最も安心できる体制です。'
    },
    {
      title: '充実の医療・看護機関連携',
      desc: '毎月の定期訪問診療（内科・歯科）を導入。主治医による健康管理のほか、緊急時には往診、夜間指示、救急対応など24時間のバックアップがあります。'
    },
    {
      title: '明るくあたたかい居室・環境',
      desc: '全室完全バリアフリー設計の明るい個室。使い慣れたタンスやなじみの家具を自由にお持ち込みいただき、ご自宅と変わらない心地よさで過ごせます。'
    },
    {
      title: '健康に配慮した真心の手作り料理',
      desc: 'ホーム内の厨房で専属スタッフが温かい食事を3食手作り。ご利用者様の咀嚼・嚥下力に合わせた刻み食やミキサー食、糖尿病等の治療食も個別対応します。'
    }
  ];

  const dailySchedule = [
    { time: '07:30', title: '起床・洗面', desc: '朝の光を浴び、心地よく一日をスタート。必要に応じて洗顔や整容の介助を行います。' },
    { time: '08:00', title: '朝食', desc: '出来立ての温かい朝食をお召し上がりいただきます。食後の口腔ケアや服薬サポートを行います。' },
    { time: '09:00', title: 'バイタルチェック・健康相談', desc: '看護・介護スタッフが毎朝の血圧、体温、脈拍を測定し、その日の健康状態を確認します。' },
    { time: '10:00', title: 'レクリエーション・機能訓練', desc: '体操やちぎり絵、季節のカード作りなどのアクティビティ。手先を動かし、脳と体を楽しく刺激します。' },
    { time: '12:00', title: '昼食・団らん', desc: '栄養バランスに優れた美味しい昼食時間。お食事の後はロビーで他の入居者様やお茶を飲みながら談笑。' },
    { time: '14:00', title: 'ご入浴・お昼寝・趣味の時間', desc: 'お一人おひとりのプライバシーを守りながら、安全に入浴。週に複数回、スタッフがサポートいたします。' },
    { time: '15:00', title: 'おやつ・憩いのひととき', desc: '手作りおやつとお茶を囲み、ホッと一息。おしゃべりやご家族との面会を楽しむ時間でもあります。' },
    { time: '18:00', title: '夕食', desc: '季節の素材を使った体にやさしい夕食。一日の出来事を話しながら、美味しくいただきます。' },
    { time: '20:00', title: 'イブニングケア・就寝準備', desc: 'パジャマへの着替え、ハミガキなどの就寝支援。夜間も定期的（2時間おきなど）にスタッフが訪室、見守ります。' }
  ];

  const steps = [
    { step: '1', title: 'お問い合わせ・見学予約', desc: 'お電話（099-801-5561）またはメールフォームよりお気軽にご連絡ください。まずはパンフレット等の資料をお届け、または現地見学を承ります。' },
    { step: '2', title: '施設見学・ご相談', desc: '実際の居室や共有スペース、お食事や入浴設備、1日の過ごし方をご覧いただきます。費用やご不明点をケアマネジャー・専門相談員が親身に伺います。' },
    { step: '3', title: 'ご本人様の面談（アセスメント）', desc: '当施設のスタッフがご本人様が現在いらっしゃる場所（ご自宅や病院、他施設など）へお伺いし、お体の状態や生活習慣、ご要望などを優しくお聞きします。' },
    { step: '4', title: '入居審査・ご契約', desc: '提出いただく診断書等の書類に基づき、安全にお受け入れできるか検討いたします。その後、契約内容や利用細則、お持ち込み物品についてご説明し、ご契約となります。' },
    { step: '5', title: 'ご入居・生活開始', desc: 'お持ち込みのお荷物の設置。新しい生活が安心・快適にスタートできるよう、スタッフ全員が「真心」を込めて笑顔でお迎えいたします。' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="homecarehome-section">
      {/* 1. Header */}
      <div className="text-center space-y-3">
        <span className="bg-emerald-500 text-white font-extrabold text-xs px-3 py-1.5 rounded-full inline-block uppercase tracking-wider">
          住宅型有料老人ホーム
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">ほうらぁさ家（ほうらぁさや）</h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mt-2">
          笑顔とまごころを詰め込んだ、安心とともに自分らしく暮らせる「第二の我が家」。
        </p>
        <div className="h-1.5 w-16 bg-emerald-500 mx-auto rounded-full mt-4"></div>
      </div>

      {/* 2. Features */}
      <section className="space-y-6" id="homecare-features">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">
          施設の特徴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feat) => (
            <div key={feat.title} className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-50 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
              <div className="bg-emerald-50 text-emerald-600 p-3 rounded-2xl shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-slate-800 text-base sm:text-lg">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Room & Facility info */}
      <section className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" id="homecare-rooms">
        <div className="lg:col-span-5 space-y-5">
          <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider block">ROOMS & FACILITIES</span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800">快適なプライベート居室とバリアフリー設備</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            お一人用の個室（タイプA）から、ご夫婦など2名様で一緒に暮らせるお部屋（タイプB）まで、ご利用者様の生活スタイルに合わせたお部屋をお選びいただけます。各お部屋にはエアコン、ナースコール、車椅子対応洗面台、照明、カーテン、収納が完備されています。
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span>プライバシーを守れる完全防音の個室設計</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span>2箇所にナースコール（枕元・トイレ内）を設置</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span>ゆったりとした車椅子対応の共同食堂・談話室</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span>身体状況に合わせた介護浴・リフト入浴設備</span>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7">
          <img
            src="/src/assets/images/facility_lounge_1782790448707.jpg"
            alt="ほうらぁさ家 居室紹介"
            referrerPolicy="no-referrer"
            className="rounded-2xl shadow-md w-full h-64 object-cover border border-slate-200"
          />
        </div>
      </section>

      {/* 4. Daily Schedule (1日の流れ) */}
      <section className="space-y-6" id="homecare-schedule">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">
          1日の流れ（スケジュール例）
        </h2>
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="space-y-6 relative before:absolute before:inset-y-1 before:left-3 sm:before:left-24 before:w-0.5 before:bg-emerald-100">
            {dailySchedule.map((sched) => (
              <div key={sched.time} className="flex flex-col sm:flex-row items-start gap-2 sm:gap-8 relative">
                {/* Time badge */}
                <div className="flex items-center gap-2 sm:w-24 shrink-0">
                  <div className="w-6.5 h-6.5 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center text-white text-xs z-10 shadow-xs shrink-0"></div>
                  <span className="font-mono font-extrabold text-sm sm:text-base text-emerald-700">{sched.time}</span>
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

      {/* 5. FEE CALCULATOR (利用料金とシミュレーター) */}
      <section className="space-y-6" id="homecare-calculator">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">
          ご利用料金と見積もりシミュレーター
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          ほうらぁさ家では、不透明な上乗せ費用がなく、月々に何が必要になるかを分かりやすく開示しています。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Prices Breakdown */}
          <div className="lg:col-span-5 bg-emerald-50/30 border border-emerald-100 rounded-3xl p-6 sm:p-8 space-y-5">
            <h3 className="font-bold text-slate-800 text-base sm:text-lg flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-600" />
              <span>基本月額利用料の内訳</span>
            </h3>

            {/* Tab switch for Plan Type */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">1. プラン区分を選択</span>
              <div className="flex bg-emerald-100/50 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => handlePlanTypeChange('normal')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    planType === 'normal'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-emerald-800 hover:bg-emerald-100/30'
                  }`}
                >
                  通常プラン
                </button>
                <button
                  type="button"
                  onClick={() => handlePlanTypeChange('welfare')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    planType === 'welfare'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-emerald-800 hover:bg-emerald-100/30'
                  }`}
                >
                  生活保護プラン
                </button>
              </div>
            </div>

            {/* Tab switch for Room Type */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">2. お部屋タイプを選択</span>
              <div className="flex bg-emerald-100/50 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => handleRoomTypeChange('A')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    roomType === 'A'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-emerald-800 hover:bg-emerald-100/30'
                  }`}
                >
                  {planType === 'normal' ? 'タイプA (1人部屋)' : '生活保護Aタイプ'}
                </button>
                <button
                  type="button"
                  onClick={() => handleRoomTypeChange('B')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    roomType === 'B'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-emerald-800 hover:bg-emerald-100/30'
                  }`}
                >
                  {planType === 'normal' ? 'タイプB (2人部屋/2名)' : '生活保護Bタイプ'}
                </button>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 pt-2">
              <div className="flex justify-between pb-2.5 border-b border-emerald-100/60">
                <span>家賃（非課税）</span>
                <span className="font-mono font-bold text-slate-800">
                  {isWelfare
                    ? (roomType === 'A' ? '¥31,600' : '¥38,000')
                    : (roomType === 'A' ? '¥32,000 〜 ¥33,000' : '¥42,000 〜 ¥50,000')} / 月
                </span>
              </div>
              <div className="flex justify-between pb-2.5 border-b border-emerald-100/60">
                <span>光熱費</span>
                <span className="font-mono font-bold text-slate-800">
                  ¥{utilitiesPrice.toLocaleString()} / 月
                </span>
              </div>
              <div className="flex justify-between pb-2.5 border-b border-emerald-100/60">
                <span>管理費</span>
                <span className="font-mono font-bold text-slate-800">
                  ¥{managementPrice.toLocaleString()} / 月
                </span>
              </div>
              <div className="flex justify-between pb-2.5 border-b border-emerald-100/60">
                <span>食費（おやつ代込み）</span>
                <span className="font-mono font-bold text-slate-800">
                  ¥{mealsPrice.toLocaleString()} / 月
                </span>
              </div>
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
                <div className="flex justify-between font-extrabold text-emerald-800 text-sm sm:text-base">
                  <span>基本月額合計（目安）</span>
                  <span className="font-mono text-emerald-900 font-extrabold">
                    {isWelfare
                      ? (roomType === 'A' ? '¥106,600' : '¥188,000')
                      : (roomType === 'A' ? '¥117,000 〜 ¥118,000' : '¥202,000 〜 ¥210,000')} / 月
                  </span>
                </div>
                <span className="text-[10px] text-emerald-600 block mt-1.5 leading-relaxed">
                  ※ 入居時費用：敷金として家賃2ヶ月分のみ（礼金 ¥0）。<br />
                  {roomType === 'B' && '※ タイプBは、2人部屋に2名でご入居された場合の1部屋あたりの合計金額となります。'}
                </span>
              </div>
            </div>

            {/* 別途かかる費用・オプションのご案内 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-5.5 space-y-4 shadow-2xs">
              <div>
                <h4 className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                  <span>選択可能なオプション</span>
                </h4>
                <div className="mt-2 text-xs text-slate-700 space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span>洗濯サービス</span>
                    <span className="font-mono text-slate-800 font-bold">¥300 / 回</span>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">※ご自身またはご家族様にてお洗濯を行われる場合は不要です。</p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3.5">
                <h4 className="font-bold text-slate-800 text-xs sm:text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                  <span>別途かかる費用</span>
                </h4>
                <div className="mt-2.5 space-y-2.5 text-xs text-slate-700">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-slate-800 block">① 消耗品（生活必要備品など）</span>
                    <span className="text-[10px] text-slate-500 block leading-relaxed">
                      ※ ご家族様にて手配・お持ち込みいただく場合は不要です。
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-semibold text-slate-800 block">② 往診代・お薬代</span>
                    <span className="text-[10px] text-slate-500 block leading-relaxed">
                      ※ 往診および薬剤料に関しては、提携医療機関・調剤薬局へ直接お支払いいただく形となります。
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-semibold text-slate-800 block">③ 買い物代行代</span>
                    <span className="text-[10px] text-slate-500 block leading-relaxed">
                      ※ ご家族様にて対応・お届けいただく場合は不要です。
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3.5 bg-emerald-50/40 -mx-5.5 -mb-5.5 p-5.5 rounded-b-3xl">
                <h4 className="font-bold text-emerald-800 text-xs sm:text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-3 bg-emerald-600 rounded-full"></span>
                  <span>入浴等の介護サービスについて</span>
                </h4>
                <p className="text-[11px] text-emerald-700 mt-1.5 leading-relaxed font-semibold">
                  入浴やその他の介護サービス等は、併設または系列法人のデイサービスがスムーズにご利用いただけます。
                </p>
              </div>
            </div>
          </div>

          {/* Calculator Tool */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>ESTIMATOR TOOL</span>
            </div>
            <h3 className="font-bold text-slate-800 text-base">月額ご利用料金の簡単お見積もり</h3>

            {/* Inputs */}
            <div className="space-y-4">
              {/* Plan type selection */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 block">1. プランの選択</span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handlePlanTypeChange('normal')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      planType === 'normal'
                        ? 'border-emerald-500 bg-emerald-50/30 ring-2 ring-emerald-500/10'
                        : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <span className="font-bold text-slate-800 text-sm block">通常プラン</span>
                    <span className="text-xs text-slate-500 font-mono mt-0.5 block">一般の方向け</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePlanTypeChange('welfare')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      planType === 'welfare'
                        ? 'border-emerald-500 bg-emerald-50/30 ring-2 ring-emerald-500/10'
                        : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <span className="font-bold text-slate-800 text-sm block">生活保護プラン</span>
                    <span className="text-xs text-slate-500 font-mono mt-0.5 block">生活保護受給の方向け</span>
                  </button>
                </div>
              </div>

              {/* Room type selection */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 block">2. お部屋タイプの選択</span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleRoomTypeChange('A')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      roomType === 'A'
                        ? 'border-emerald-500 bg-emerald-50/30 ring-2 ring-emerald-500/10'
                        : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <span className="font-bold text-slate-800 text-sm block">
                      {planType === 'normal' ? 'タイプA (1人部屋)' : '生活保護Aタイプ'}
                    </span>
                    <span className="text-xs text-slate-500 font-mono mt-0.5 block">
                      家賃: {planType === 'normal' ? '¥32,000 〜 ¥33,000' : '¥31,600'}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRoomTypeChange('B')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      roomType === 'B'
                        ? 'border-emerald-500 bg-emerald-50/30 ring-2 ring-emerald-500/10'
                        : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <span className="font-bold text-slate-800 text-sm block">
                      {planType === 'normal' ? 'タイプB (2人部屋・2名)' : '生活保護Bタイプ'}
                    </span>
                    <span className="text-xs text-slate-500 font-mono mt-0.5 block">
                      家賃: {planType === 'normal' ? '¥42,000 〜 ¥50,000' : '¥38,000'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Rent adjustment */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-600">家賃設定：</span>
                  <span className="text-sm font-mono font-bold text-slate-800">¥{rentAmount.toLocaleString()} / 月</span>
                </div>
                {isWelfare ? (
                  <p className="text-xs text-emerald-600 font-medium mt-1">
                    ※ 生活保護の家賃基準に基づき、家賃は固定となります。
                  </p>
                ) : roomType === 'A' ? (
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <button
                      type="button"
                      onClick={() => setRentAmount(32000)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        rentAmount === 32000
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      32,000円
                    </button>
                    <button
                      type="button"
                      onClick={() => setRentAmount(33000)}
                      className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        rentAmount === 33000
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      33,000円
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2 mt-1">
                    <input
                      type="range"
                      min={42000}
                      max={50000}
                      step={1000}
                      value={rentAmount}
                      onChange={(e) => setRentAmount(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                      <span>42,000円</span>
                      <span>46,000円</span>
                      <span>50,000円</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 block">2. オプション・食生活の選択</span>
                <div className="space-y-2.5">
                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/30 cursor-pointer hover:bg-slate-50/70 select-none">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={addMeals}
                        onChange={(e) => setAddMeals(e.target.checked)}
                        className="rounded text-emerald-600 focus:ring-emerald-500 w-4.5 h-4.5"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-slate-700">食事提供サービス（おやつ代込み）</span>
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-800">+¥{mealsPrice.toLocaleString()} / 月</span>
                  </label>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50/30 gap-2">
                    <div className="space-y-0.5 text-left">
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 block">洗濯サービス（1回300円）</span>
                      <span className="text-[10px] text-slate-500 block">※ご家族様で対応される場合は0回</span>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-2.5">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setLaundryTimes(Math.max(0, laundryTimes - 1))}
                          className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-600 bg-white hover:bg-slate-50 text-sm transition-all shadow-3xs"
                        >
                          -
                        </button>
                        <span className="font-mono font-bold text-xs sm:text-sm text-slate-800 w-8 text-center">{laundryTimes}回</span>
                        <button
                          type="button"
                          onClick={() => setLaundryTimes(Math.min(30, laundryTimes + 1))}
                          className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-600 bg-white hover:bg-slate-50 text-sm transition-all shadow-3xs"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-bold text-emerald-700 shrink-0 min-w-[70px] text-right">
                        +¥{(laundryTimes * 300).toLocaleString()} / 月
                      </span>
                    </div>
                  </div>

                  <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-100 bg-slate-50/30 cursor-pointer hover:bg-slate-50/70 select-none">
                    <div className="flex items-start gap-2.5 text-left">
                      <input
                        type="checkbox"
                        checked={addHygiene}
                        onChange={(e) => setAddHygiene(e.target.checked)}
                        className="rounded text-emerald-600 focus:ring-emerald-500 w-4.5 h-4.5 mt-0.5 shrink-0"
                      />
                      <div className="space-y-0.5">
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 block">① 消耗品パック（生活必要備品など）</span>
                        <span className="text-[10px] text-slate-500 block">※ご家族様で手配される場合は不要（チェック不要）</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-bold text-slate-800 shrink-0 ml-2">+¥5,000 / 月</span>
                  </label>
                </div>
              </div>

              {/* Care insurance bracket */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 block">3. 介護保険自己負担（目安・1割負担の場合）</span>
                <select
                  value={careLevel}
                  onChange={(e) => setCareLevel(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-700 text-xs sm:text-sm"
                >
                  <option value={0}>自立（介護保険の自己負担なし：+¥0）</option>
                  <option value={5000}>要支援1（介護予防・月額負担目安：+¥5,000）</option>
                  <option value={10000}>要支援2（介護予防・月額負担目安：+¥10,000）</option>
                  <option value={18000}>要介護1（月額負担目安：+¥18,000）</option>
                  <option value={22000}>要介護2（月額負担目安：+¥22,000）</option>
                  <option value={26000}>要介護3（月額負担目安：+¥26,000）</option>
                  <option value={30000}>要介護4（月額負担目安：+¥30,000）</option>
                  <option value={35000}>要介護5（月額負担目安：+¥35,000）</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 border border-slate-800 shadow-md">
              <div>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">PROJECTED TOTAL</span>
                <span className="text-xs text-slate-400">想定月額合計金額（税込・目安）</span>
              </div>
              <div className="text-center sm:text-right">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                  ¥{totalMonthlyCost.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">※医療費・お薬代・医療用品代は別途実費</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Move-in Flow (入居までの流れ) */}
      <section className="space-y-6" id="homecare-flow">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">
          入居までの流れ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((st) => (
            <div key={st.step} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-3 relative flex flex-col justify-between">
              <div className="space-y-2">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-sm flex items-center justify-center">
                  {st.step}
                </span>
                <h4 className="font-bold text-slate-800 text-sm leading-snug">{st.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ for Home */}
      <section className="space-y-6" id="homecare-faq">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">
          よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          {homeFaqs.map((faq) => (
            <div key={faq.id} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 space-y-2.5">
              <h4 className="font-bold text-slate-800 text-sm sm:text-base flex items-start gap-2">
                <span className="text-emerald-500 font-extrabold font-mono">Q.</span>
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 pl-5 leading-relaxed border-l-2 border-emerald-100">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
