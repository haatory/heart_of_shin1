import { Heart, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8" id="privacy-policy-section">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">PRIVACY POLICY</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800">個人情報保護方針</h1>
        <div className="h-1.5 w-16 bg-emerald-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6 text-sm text-slate-600 leading-relaxed text-justify">
        <div className="flex items-center gap-2 text-emerald-700 font-bold border-b border-emerald-50 pb-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>個人情報保護方針について</span>
        </div>

        <p>
          Heart of 真心株式会社（以下、「当社」）は、提供する介護福祉サービス（住宅型有料老人ホーム「ほうらぁさ家」、通所介護「きゅっきゅ」、居宅介護支援「まごころ相談支援センター」）において、ご利用者様およびご家族様の個人情報を適切に保護することが社会的責務であると考え、個人情報保護に関する法令および国が定める指針を遵守し、以下の通り個人情報保護方針を定め、実行・維持いたします。
        </p>

        <div className="space-y-4">
          <h3 className="font-bold text-slate-800 text-base">1. 個人情報の取得、利用および提供</h3>
          <p className="pl-4">
            当社は、介護保険法に基づくサービス提供、ケアプラン作成、入居相談および各種お問い合わせへの回答等に必要な範囲に限定して、適切に個人情報を取得、利用および提供いたします。目的外利用を行うことはなく、そのための厳格な管理措置を講じます。
          </p>

          <h3 className="font-bold text-slate-800 text-base">2. 個人情報の第三者提供</h3>
          <p className="pl-4">
            当社は、法令に基づく場合、またはご本人（もしくは代理人）の同意を得た場合を除き、取得した個人情報を第三者に提供いたしません。ただし、サービス担当者会議などにおいて医療・介護連携（協力往診医・他事業者との照会・指示等）に必要な範囲で、最低限の個人情報を開示・共有する場合はあります。
          </p>

          <h3 className="font-bold text-slate-800 text-base">3. 個人情報の安全管理措置</h3>
          <p className="pl-4">
            当社は、取扱う個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、適切な組織的・技術的安全措置および是正措置を講じます。紙面資料の施錠管理、PC端末等のアクセス権限の徹底的な制限等を行っています。
          </p>

          <h3 className="font-bold text-slate-800 text-base">4. 法令、国が定める指針その他の規範の遵守</h3>
          <p className="pl-4">
            当社は、個人情報の取扱いに関する法令（個人情報保護法、介護保険法など）、厚生労働省のガイドライン、国が定める指針その他の規範を遵守いたします。
          </p>

          <h3 className="font-bold text-slate-800 text-base">5. 個人情報に関するお問い合わせおよび苦情への対応</h3>
          <p className="pl-4">
            個人情報の開示、訂正、削除、利用停止などのご請求や苦情につきましては、以下の窓口までご連絡ください。法令に基づき、速やかに合理的な範囲で対応いたします。
          </p>
        </div>

        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-xs text-slate-500 space-y-1 mt-6">
          <strong className="text-slate-800 block text-sm mb-2 font-bold">【お問い合わせ窓口】</strong>
          <p>Heart of 真心株式会社　個人情報保護管理担当者</p>
          <p>〒890-0008 鹿児島県鹿児島市伊敷4丁目10-1</p>
          <p>電話番号：099-801-5561</p>
        </div>
      </div>
    </div>
  );
}
