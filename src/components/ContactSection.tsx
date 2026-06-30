import { useState, FormEvent } from 'react';
import { Mail, Phone, Clock, MapPin, CheckCircle2, ShieldCheck, ClipboardCheck, MessageSquare } from 'lucide-react';
import { ContactInquiry } from '../types';

interface ContactSectionProps {
  inquiries: ContactInquiry[];
  setInquiries: (inqs: ContactInquiry[]) => void;
}

export default function ContactSection({ inquiries, setInquiries }: ContactSectionProps) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState<'home' | 'dayservice' | 'caremanager' | 'general'>('home');
  const [message, setMessage] = useState('');

  // Submission Status
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitInquiry = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) return;

    const newInq: ContactInquiry = {
      id: `inq-${Date.now()}`,
      name,
      email,
      phone,
      category,
      message,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'unread',
    };

    const updated = [newInq, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('magokoro_inquiries', JSON.stringify(updated));

    // Clear form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

    setIsSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16" id="contact-section">
      {/* 1. Header */}
      <div className="text-center space-y-3">
        <span className="bg-emerald-500 text-white font-extrabold text-xs px-3 py-1.5 rounded-full inline-block uppercase tracking-wider">
          CONTACT
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">見学・お問い合わせ</h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mt-2">
          有料老人ホームの見学相談、デイサービス無料体験利用、介護に関する相談など、何でもお気軽にお寄せください。
        </p>
        <div className="h-1.5 w-16 bg-emerald-500 mx-auto rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Column: Direct Phone & Access Contacts */}
        <div className="lg:col-span-5 bg-emerald-50/40 border border-emerald-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8" id="contact-details-box">
          <div className="space-y-6">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider block">DIRECT CONTACTS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug">
              お急ぎの場合は、<br />
              直接お電話でもお受けしております
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              施設に関するご質問、入居空き情報、デイサービスの空き・無料体験予約、介護保険の申請方法、求人の確認など、お気軽にお電話ください。
            </p>

            {/* Huge Clickable Phone Banner */}
            <a
              href="tel:099-801-5561"
              className="block bg-white hover:bg-emerald-50/50 p-5 rounded-2xl border-2 border-emerald-500/20 text-center shadow-xs transition-all transform hover:-translate-y-0.5"
              id="contact-huge-phone-btn"
            >
              <span className="text-[11px] font-bold text-emerald-600 block mb-1">電話番号（相談総合ダイヤル）</span>
              <div className="flex justify-center items-center gap-2 text-emerald-700 font-black text-2xl sm:text-3xl font-mono">
                <Phone className="w-6.5 h-6.5 text-emerald-600 fill-emerald-50" />
                <span>099-801-5561</span>
              </div>
              <span className="text-[10px] text-slate-400 block mt-1.5">営業時間：月曜 〜 土曜 8:30 〜 17:30</span>
            </a>

            {/* Address box */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800">所在地：</strong>
                  <p className="text-slate-500 mt-0.5">〒890-0008 鹿児島県鹿児島市伊敷4丁目10-1</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800">来訪・相談受付時間：</strong>
                  <p className="text-slate-500 mt-0.5">午前 9:00 〜 午後 17:00（事前に見学のご予約をいただくとご案内がスムーズです）</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/80 p-4 rounded-2xl border border-emerald-100 flex items-start gap-3">
            <ShieldCheck className="w-5.5 h-5.5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
              <strong>個人情報保護について：</strong> お問い合わせ時に送信されたお名前やご連絡先などの個人情報は、回答および資料送付以外の目的で利用することは一切ございません。
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Email form */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs" id="contact-form-box">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-fade-in" id="contact-success-msg">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="font-extrabold text-slate-800 text-lg sm:text-xl">お問い合わせを送信しました！</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                メッセージをお送りいただき、ありがとうございます。まごころを込めて内容を確認し、2営業日以内に担当者よりお返事いたします。
              </p>
              <div className="bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100 text-[11px] text-emerald-700 font-bold max-w-xs mx-auto">
                💡 管理者ポータルにてメッセージの受信状況を確認できます。
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-xs"
              >
                新しいお問い合わせを入力する
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs sm:text-sm mb-4">
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>INQUIRY FORM</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 block">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="例：真心 花子"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 block">
                    お問い合わせカテゴリ <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-700 text-sm"
                  >
                    <option value="home">ほうらぁさ家について（老人ホーム）</option>
                    <option value="dayservice">きゅっきゅについて（デイサービス）</option>
                    <option value="caremanager">まごころ相談支援センターについて（居宅介護）</option>
                    <option value="general">その他（法人全般・取材など）</option>
                  </select>
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
                    placeholder="例：hanako@example.com"
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
                    placeholder="例：099-801-5561"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">
                  お問い合わせ詳細本文 <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="見学のご希望日、ご本人様の要介護状況、ご質問内容などを具体的にご記入ください。"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
                id="submit-contact-form"
              >
                <span>お問い合わせを送信する</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
