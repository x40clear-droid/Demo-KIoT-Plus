
import React, { useState, useEffect, useRef } from 'react';
import { NAV_ITEMS, FEATURES, SECTORS, NEWSLETTER_ARCHIVE } from './constants.ts';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className={`flex items-center space-x-2 text-2xl font-bold ${isScrolled ? 'text-navy' : 'text-white'}`}>
          <i className="fa-solid fa-building-shield text-sky"></i>
          <span>K-IoT Plus</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-navy' : 'text-white/90 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a 
          href="#inquiry" 
          onClick={(e) => handleNavClick(e, '#inquiry')}
          className={`hidden md:block px-6 py-2 rounded-full font-semibold transition-all ${isScrolled ? 'bg-navy text-white hover:bg-navy/90' : 'bg-sky text-navy hover:bg-sky/90'}`}
        >
          상담 신청
        </a>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} ${isScrolled ? 'text-navy' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-semibold text-navy"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#inquiry" 
            onClick={(e) => handleNavClick(e, '#inquiry')}
            className="w-full text-center bg-navy text-white py-4 rounded-xl text-xl font-bold"
          >
            지금 상담 신청하기
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center">
        {/* 히어로 섹션 가독성을 위한 더 어둡고 짙은 오버레이 */}
        <div className="absolute inset-0 bg-navy/75 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          건물 관리의 효율화,<br />
          <span className="text-sky">자산 가치의 상승</span>으로.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          K-IoT Plus는 정밀 데이터 분석과 지능형 진단을 통해<br className="hidden md:block" />
          건물의 잠재력을 극대화하고 프리미엄 자산 가치를 완성합니다.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#inquiry" className="w-full md:w-auto px-10 py-4 bg-sky text-navy font-bold rounded-lg shadow-lg hover:scale-105 transition-all text-lg">
            상담 신청하기
          </a>
          <a href="#support" className="w-full md:w-auto px-10 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/30 backdrop-blur-md hover:bg-white/20 transition-all text-lg">
            뉴스레터 아카이브
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce text-2xl hidden md:block">
        <i className="fa-solid fa-chevron-down"></i>
      </div>
    </section>
  );
};

const Overview: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new (window as any).Chart(ctx, {
          type: 'line',
          data: {
            labels: ['1년차', '2년차', '3년차', '4년차', '5년차'],
            datasets: [
              {
                label: 'K-IoT Plus 도입 후 자산 가치',
                data: [100, 105, 112, 120, 130],
                borderColor: '#00d1ff',
                backgroundColor: 'rgba(0, 209, 255, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#00d1ff'
              },
              {
                label: '전통적 방식의 관리 가치',
                data: [100, 98, 95, 92, 88],
                borderColor: '#64748b',
                borderDash: [5, 5],
                fill: false,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#64748b'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom' },
              tooltip: { mode: 'index', intersect: false }
            },
            scales: {
              y: { beginAtZero: false, display: false }
            }
          }
        });
      }
    }
  }, []);

  return (
    <section id="overview" className="py-24 bg-white relative overflow-hidden">
      {/* 가독성을 방해하지 않도록 정돈된 배경 요소 */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/70 -skew-x-6 translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-sky mb-2 tracking-widest uppercase">Service Overview</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6">진단과 이력 관리 중심의<br />새로운 건물 관리 패러다임</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              K-IoT Plus는 단순한 직접 제어를 넘어 건물의 '건전성'을 최우선으로 합니다. 
              정밀한 데이터 수집과 독자적인 알고리즘 분석을 통해 설비의 이상 징후를 조기에 발견하고, 
              모든 관리 이력을 디지털 자산화하여 건물의 수명을 연장시킵니다.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-sky shadow-sm">
                <span className="block text-4xl font-bold text-navy mb-1">25%</span>
                <span className="text-slate-500 font-medium text-sm">운영 비용(OPEX) 절감</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-navy shadow-sm">
                <span className="block text-4xl font-bold text-sky mb-1">15%</span>
                <span className="text-slate-500 font-medium text-sm">자산 가치 상승 효과</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,58,122,0.1)] border border-slate-100 h-[400px]">
              <h4 className="text-center font-bold text-slate-800 mb-6">K-IoT 도입 후 관리 가치 비교 분석</h4>
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sky mb-2 tracking-widest uppercase">Key Capabilities</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">K-IoT Plus만의 차별화된 지능형 서비스 역량</h3>
          <p className="text-slate-600">독보적인 기술력으로 건물의 효율성과 안전성을 동시에 확보합니다.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl text-navy mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
                <i className={`fa-solid ${feature.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-navy mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Sectors: React.FC = () => {
  return (
    <section id="sectors" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-sky mb-2 tracking-widest uppercase">Major Sectors</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">분야별 주요 적용 사례</h3>
          <p className="text-slate-600">실제 설비 데이터 분석과 관리를 통해 건물의 가치를 높이고 있는 핵심 분야입니다.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {SECTORS.map((sector, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-2xl h-[480px] shadow-lg">
              <img 
                src={sector.image} 
                alt={sector.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              {/* 이미지 가독성을 위한 하단 짙은 그라데이션 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <h4 className="text-white text-xl font-bold mb-2">{sector.title}</h4>
                  <p className="text-white/80 text-xs mb-3 line-clamp-2">
                    {sector.description}
                  </p>
                  <div className="h-1 w-10 bg-sky group-hover:w-full transition-all duration-500 mb-3"></div>
                  <p className="text-sky text-[11px] font-bold uppercase tracking-tighter">
                    <i className="fa-solid fa-circle-check mr-1"></i> {sector.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SupportHub: React.FC = () => {
  return (
    <section id="support" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Newsletter Section */}
          <div>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-navy mb-4">인사이트 뉴스레터</h3>
              <p className="text-slate-600 mb-8 text-lg">
                KIoT Plus 및 건물 관리 관련 최신 혁신 사례를 정기적으로 받아보세요.
              </p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="이메일 주소를 입력하세요" 
                  className="flex-1 bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky/50 shadow-sm"
                  required
                />
                <button className="bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy/90 transition-colors shadow-md">
                  구독하기
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <h4 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Past Newsletter Archives</h4>
              {NEWSLETTER_ARCHIVE.map((news, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl flex items-center justify-between shadow-sm border border-slate-100 hover:border-sky transition-colors cursor-pointer group">
                  <div className="flex items-center space-x-4">
                    <span className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center font-bold text-navy text-sm">
                      Vol.{news.vol}
                    </span>
                    <div>
                      <p className="text-xs text-slate-400">{news.date}</p>
                      <h5 className="font-bold text-slate-700 group-hover:text-navy">{news.title}</h5>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-slate-300 group-hover:text-sky transition-colors"></i>
                </div>
              ))}
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-3 bg-white border border-slate-200 py-4 rounded-xl hover:bg-slate-50 transition-colors text-navy font-bold shadow-sm">
                <i className="fa-solid fa-file-pdf text-red-500 text-xl"></i>
                <span>솔루션 카탈로그</span>
              </button>
              <button className="flex items-center justify-center space-x-3 bg-white border border-slate-200 py-4 rounded-xl hover:bg-slate-50 transition-colors text-navy font-bold shadow-sm">
                <i className="fa-solid fa-file-signature text-navy text-xl"></i>
                <span>솔루션 신청서</span>
              </button>
            </div>
          </div>

          {/* Inquiry Form */}
          <div id="inquiry" className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative z-10">
            <h3 className="text-3xl font-bold text-navy mb-8 text-center">도입 상담 신청</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">이름</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20" placeholder="홍길동" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">연락처</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20" placeholder="010-0000-0000" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-600 mb-2">회사명</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20" placeholder="(주)케아이오티" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-600 mb-2">문의 내용</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20" placeholder="도입 희망 솔루션 및 건물 유형을 기재해 주세요." required></textarea>
              </div>
              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded text-navy" required />
                <span className="text-sm text-slate-500">개인정보 수집 및 이용에 동의합니다. (필수)</span>
              </div>
              <button className="w-full bg-navy text-white py-5 rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all">
                상담 예약하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-navy text-white pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* 로고 및 설명, 소셜 정보 섹션 */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex items-center space-x-2 text-3xl font-bold mb-4">
              <i className="fa-solid fa-building-shield text-sky"></i>
              <span>K-IoT Plus</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              지능형 건물 관리 솔루션의 리더, K-IoT Plus는 고도의 기술력과 풍부한 현장 데이터를 바탕으로 건물의 미래 가치를 실현합니다.
            </p>
            
            {/* 소셜 아이콘 영역 */}
            <div className="flex space-x-4 mb-6">
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors">
                <i className="fa-brands fa-youtube text-sm"></i>
              </a>
              <a href="#support" onClick={(e) => handleNavClick(e, '#support')} title="Newsletter Subscription" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-sky hover:border-sky transition-colors">
                <i className="fa-solid fa-envelope text-sm"></i>
              </a>
              <a href="https://pf.kakao.com/_xgxkzxgG" target="_blank" rel="noopener noreferrer" title="KakaoTalk Channel" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FEE500] hover:text-[#3C1E1E] hover:border-[#FEE500] transition-colors">
                <i className="fa-solid fa-comment text-sm"></i>
              </a>
            </div>

            {/* 기업 정보 및 저작권 통합 영역 */}
            <div className="flex flex-col space-y-2 text-white/40 text-[11px] md:text-[12px] leading-relaxed">
              {/* 기업 정보 1줄 배치 */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="whitespace-nowrap">(주)코오롱글로벌</span>
                <span className="hidden md:inline text-white/10 opacity-30">|</span>
                <span className="whitespace-nowrap">대표이사 : 김정일</span>
                <span className="hidden md:inline text-white/10 opacity-30">|</span>
                <span className="whitespace-nowrap">주소 : 경기도 과천시 코오롱로 11 (별양동, 코오롱)</span>
                <span className="hidden md:inline text-white/10 opacity-30">|</span>
                <span className="whitespace-nowrap">사업자 등록 번호 : 648-85-03091</span>
                <span className="hidden md:inline text-white/10 opacity-30">|</span>
                <a href="https://www.kolonglobal.com/" target="_blank" rel="noopener noreferrer" className="text-sky hover:text-white transition-colors whitespace-nowrap font-medium no-underline">
                  사업자 정보확인
                </a>
              </div>
              {/* 저작권 문구 최하단 배치 */}
              <div className="mt-1">
                <span className="font-bold text-white/60 whitespace-nowrap">© 2026 K-IoT Plus All right Reserved</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-5 text-sky text-base">Quick Links</h5>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#overview" onClick={(e) => handleNavClick(e, '#overview')} className="hover:text-white transition-colors">서비스 개요</a></li>
              <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="hover:text-white transition-colors">서비스 특장점</a></li>
              <li><a href="#sectors" onClick={(e) => handleNavClick(e, '#sectors')} className="hover:text-white transition-colors">주요 적용 분야</a></li>
              <li><a href="#support" onClick={(e) => handleNavClick(e, '#support')} className="hover:text-white transition-colors">고객 지원</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-5 text-sky text-base">Company</h5>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-white transition-colors">기업정보</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Overview />
      <Features />
      <Sectors />
      <SupportHub />
      <Footer />
    </div>
  );
};

export default App;
