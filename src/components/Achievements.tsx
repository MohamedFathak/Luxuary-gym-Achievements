import { Trophy, Star, TrendingDown, Users, Weight, Award, Sparkles } from 'lucide-react';

const transformations = [
  { age: 28, kgLost: 18, before: 'https://images.pexels.com/photos/4944329/pexels-photo-4944329.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { age: 34, kgLost: 24, before: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/4944966/pexels-photo-4944966.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { age: 22, kgLost: 12, before: 'https://images.pexels.com/photos/1881719/pexels-photo-1881719.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/4753987/pexels-photo-4753987.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { age: 41, kgLost: 31, before: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { age: 26, kgLost: 15, before: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { age: 38, kgLost: 27, before: 'https://images.pexels.com/photos/4826101/pexels-photo-4826101.jpeg?auto=compress&cs=tinysrgb&w=400', after: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const stats = [
  { value: '500+', label: 'Members', icon: Users },
  { value: '2000+', label: 'Kg Lost', icon: Weight },
  { value: '4.8★', label: 'Rating', icon: Star },
];

function TransformCard({ t, index }: { t: typeof transformations[0]; index: number }) {
  return (
    <div
      className="animate-fade-in-up group bg-white rounded-3xl border border-gray-100 p-4 sm:p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.12)] hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="grid grid-cols-2 gap-3">
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
          <span className="absolute top-2 left-2 z-10 bg-gray-900/80 text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
            BEFORE
          </span>
          <img
            src={t.before}
            alt="Before transformation"
            loading="lazy"
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
          <span className="absolute top-2 left-2 z-10 bg-accent-500 text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full">
            AFTER
          </span>
          <img
            src={t.after}
            alt="After transformation"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Age</p>
          <p className="text-2xl font-extrabold text-gray-900 leading-none">{t.age}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1.5 text-accent-500">
            <TrendingDown className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-2xl font-extrabold leading-none">{t.kgLost}</span>
            <span className="text-sm font-bold">KG</span>
          </div>
          <span className="text-xs font-semibold text-accent-500 mt-1">Lost</span>
        </div>
      </div>
    </div>
  );
}

function StatItem({ value, label, Icon }: { value: string; label: string; Icon: typeof Star }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-50 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" strokeWidth={2.5} />
      </div>
      <div className="text-left">
        <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-none">{value}</div>
        <div className="text-xs sm:text-sm font-medium text-gray-500 mt-1">{label}</div>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Soft orange glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <main className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-12 sm:pt-20 pb-24">
        {/* Top badge */}
        <div className="flex justify-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-accent-50 text-accent-600 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full border border-accent-100">
            <span className="text-base">🏆</span>
            Our Success Stories
          </span>
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-in-up mt-6 text-center text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-gray-900">Real Results,</span>
          <br />
          <span className="text-accent-500">Real People</span>
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-in-up mt-6 max-w-2xl mx-auto text-center text-base sm:text-lg text-gray-500 leading-relaxed"
          style={{ animationDelay: '0.2s' }}
        >
          Every transformation tells a story of dedication, discipline, and determination.
          These are the journeys of real members who rewrote their futures — proof that with
          the right guidance and grit, anything is possible.
        </p>

        {/* Transformations section */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-accent-200" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase tracking-wider">
              Transformations
            </h2>
            <div className="h-px w-12 bg-accent-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {transformations.map((t, i) => (
              <TransformCard key={i} t={t} index={i} />
            ))}
          </div>
        </div>

        {/* Awards badge card */}
        <div className="mt-16 sm:mt-20 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl px-8 sm:px-12 py-8 sm:py-10 text-center max-w-md w-full shadow-2xl overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl" />
            <div className="relative">
              <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-accent-500 flex items-center justify-center mb-4 animate-float">
                <Trophy className="w-9 h-9 sm:w-11 sm:h-11 text-white" strokeWidth={2} />
              </div>
              <div className="inline-flex items-center gap-1.5 text-accent-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                <Award className="w-4 h-4" />
                Recognized Excellence
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Awarded Best Gym <span className="text-accent-500">2024</span>
              </h3>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Honored by the National Fitness Association for outstanding member
                transformations and community impact.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-accent-50 via-white to-accent-50 rounded-3xl border border-accent-100/60 py-8 sm:py-10 px-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center" style={{ opacity: 0, animation: 'fadeInUp 0.6s ease-out forwards', animationDelay: `${0.3 + i * 0.1}s` }}>
                  <StatItem value={s.value} label={s.label} Icon={s.icon} />
                  {i < stats.length - 1 && (
                    <div className="hidden sm:block w-px h-12 bg-gray-200 ml-12 lg:ml-20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

