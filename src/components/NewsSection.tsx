import { useState } from 'react';
import { Calendar, Heart, FileText, ChevronRight, MessageSquare, Tag, AlertCircle } from 'lucide-react';
import { NewsPost } from '../types';

interface NewsSectionProps {
  news: NewsPost[];
}

export default function NewsSection({ news }: NewsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'すべて表示' },
    { id: 'event', label: 'イベント' },
    { id: 'vacancy', label: '空室・空き情報' },
    { id: 'day-service', label: 'きゅっきゅ（デイ）' },
    { id: 'recruitment', label: '採用・求人' },
    { id: 'blog', label: 'ブログ' }
  ];

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" id="news-section">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">NEWS & BLOG</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">お知らせ・ブログ</h1>
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mt-2">
          施設のイベント情報、ほうらぁさ家の空室状況、きゅっきゅでの活動風景などを更新しています。
        </p>
        <div className="h-1.5 w-16 bg-emerald-500 mx-auto rounded-full mt-4"></div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex flex-wrap gap-2 justify-center" id="news-category-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setExpandedId(null);
            }}
            className={`px-4.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === cat.id
                ? 'bg-emerald-500 text-white shadow-xs'
                : 'bg-white border border-slate-100 text-slate-600 hover:border-emerald-200 hover:text-emerald-600'
            }`}
            id={`filter-news-cat-${cat.id}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* News Feed List */}
      <div className="space-y-4" id="news-list-container">
        {filteredNews.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-100 text-slate-400 space-y-2">
            <FileText className="w-12 h-12 mx-auto text-slate-300" />
            <p className="font-medium">該当する記事はありません。</p>
            <p className="text-xs">管理者画面から記事を新しく投稿できます！</p>
          </div>
        ) : (
          filteredNews.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`bg-white rounded-3xl p-6 border transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'border-emerald-500 shadow-md ring-2 ring-emerald-500/5'
                    : 'border-slate-100 shadow-xs hover:border-slate-200'
                }`}
                id={`news-full-item-${item.id}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100/60 mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-slate-400 font-mono font-bold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.date}
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] px-2.5 py-0.5 rounded font-bold uppercase">
                      {item.category === 'event' && 'イベント'}
                      {item.category === 'vacancy' && '空室情報'}
                      {item.category === 'day-service' && 'きゅっきゅ'}
                      {item.category === 'recruitment' && '採用'}
                      {item.category === 'blog' && 'ブログ'}
                    </span>
                    {item.isImportant && (
                      <span className="bg-red-50 text-red-600 text-[10px] px-2.5 py-0.5 rounded font-extrabold uppercase animate-pulse flex items-center gap-0.5">
                        <AlertCircle className="w-3 h-3" />
                        重要なお知らせ
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold text-emerald-600 sm:order-last">
                    {isExpanded ? '折りたたむ ▲' : '詳しく読む ▼'}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-extrabold text-slate-800 text-base sm:text-lg leading-snug">
                    {item.title}
                  </h3>
                  <p className={`text-slate-600 text-sm leading-relaxed ${isExpanded ? 'whitespace-pre-wrap' : 'line-clamp-2'}`}>
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
