export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Swiss Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-3xl font-bold tracking-tighter text-black uppercase">
                SOUP
              </span>
            </div>
            <div className="hidden md:flex space-x-12 text-sm uppercase tracking-wider">
              <a href="#home" className="text-black hover:text-red-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-black hover:text-red-600 transition-colors font-medium">About</a>
              <a href="#features" className="text-black hover:text-red-600 transition-colors font-medium">Service</a>
              <a href="#contact" className="text-black hover:text-red-600 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Swiss Style */}
      <section id="home" className="min-h-screen flex items-center px-8 lg:px-16 pt-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
                SMART
                <span className="block">TRAVEL</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-md">
              SOUP는 <span className="font-bold">여행길</span> 앱을 개발하는 IT 기업입니다.
              AI 기반 여행 정보로 새로운 경험을 제공합니다.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-black text-white uppercase text-sm tracking-wider font-medium hover:bg-red-600 transition-colors"
              >
                Contact
              </a>
              <a
                href="#features"
                className="px-8 py-3 border-2 border-black text-black uppercase text-sm tracking-wider font-medium hover:bg-black hover:text-white transition-colors"
              >
                Service
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-square bg-gray-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 border-4 border-black"></div>
              </div>
              <div className="absolute top-8 right-8 w-24 h-24 bg-red-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Swiss Style */}
      <section id="about" className="py-32 px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              ABOUT<span className="block">SOUP</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl">
              여행의 모든 순간을 더 특별하게 만드는 기술을 개발합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            <div className="bg-white p-12 border-l-4 border-black">
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                AI와 빅데이터를 활용한 맞춤형 여행 정보 추천 시스템을 개발합니다.
              </p>
            </div>

            <div className="bg-white p-12 border-l-4 border-red-600">
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">User-Centric</h3>
              <p className="text-gray-700 leading-relaxed">
                여행자의 실제 니즈를 파악하고 최적의 솔루션을 제공합니다.
              </p>
            </div>

            <div className="bg-white p-12 border-l-4 border-black">
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">Growth</h3>
              <p className="text-gray-700 leading-relaxed">
                끊임없는 연구개발로 여행 산업의 미래를 선도합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Swiss Style */}
      <section id="features" className="py-32 px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="w-16 h-1 bg-red-600 mb-6"></div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              SERVICE
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl">
              <strong>여행길</strong> 앱이 제공하는 핵심 기능
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            <div className="bg-gray-50 p-12 border-2 border-black hover:bg-black hover:text-white transition-colors group">
              <div className="mb-6">
                <span className="text-6xl font-bold text-red-600 group-hover:text-white">01</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 uppercase">Smart Route</h3>
              <p className="leading-relaxed mb-6">
                AI 기반 알고리즘으로 사용자의 취향과 일정에 맞는 최적의 여행 경로를 추천합니다.
              </p>
              <ul className="space-y-2 text-sm uppercase tracking-wider">
                <li>→ 개인화된 일정 추천</li>
                <li>→ 실시간 교통 정보 반영</li>
                <li>→ 예산 최적화</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-12 border-2 border-black hover:bg-black hover:text-white transition-colors group">
              <div className="mb-6">
                <span className="text-6xl font-bold text-red-600 group-hover:text-white">02</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 uppercase">Travel Info</h3>
              <p className="leading-relaxed mb-6">
                전국의 숨은 명소부터 인기 관광지까지 상세한 정보와 실시간 리뷰를 제공합니다.
              </p>
              <ul className="space-y-2 text-sm uppercase tracking-wider">
                <li>→ 실시간 사용자 리뷰</li>
                <li>→ 포토 스팟 가이드</li>
                <li>→ 현지인 추천 장소</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-12 border-2 border-black hover:bg-black hover:text-white transition-colors group">
              <div className="mb-6">
                <span className="text-6xl font-bold text-red-600 group-hover:text-white">03</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 uppercase">Booking</h3>
              <p className="leading-relaxed mb-6">
                여행지의 숙소와 맛집을 한 번에 검색하고 예약할 수 있는 통합 플랫폼을 제공합니다.
              </p>
              <ul className="space-y-2 text-sm uppercase tracking-wider">
                <li>→ 최저가 보장</li>
                <li>→ 간편한 예약 시스템</li>
                <li>→ 맞춤형 추천</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-12 border-2 border-black hover:bg-black hover:text-white transition-colors group">
              <div className="mb-6">
                <span className="text-6xl font-bold text-red-600 group-hover:text-white">04</span>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 uppercase">Community</h3>
              <p className="leading-relaxed mb-6">
                여행자들과 경험을 공유하고 소통할 수 있는 활발한 커뮤니티를 운영합니다.
              </p>
              <ul className="space-y-2 text-sm uppercase tracking-wider">
                <li>→ 여행 후기 공유</li>
                <li>→ 동행자 찾기</li>
                <li>→ Q&A 게시판</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Swiss Style */}
      <section id="contact" className="py-32 px-8 lg:px-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                CONTACT
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                함께 여행의 미래를 만들어갑니다
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Email</h3>
                <a href="mailto:dominic@studyproject.kr" className="text-2xl font-medium hover:text-red-600 transition-colors">
                  dominic@studyproject.kr
                </a>
              </div>

              <div className="border-l-4 border-white pl-6">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Phone</h3>
                <a href="tel:+821050465043" className="text-2xl font-medium hover:text-red-600 transition-colors">
                  +82 10-5046-5043
                </a>
              </div>

              {/*<div className="border-l-4 border-white pl-6">*/}
              {/*  <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Location</h3>*/}
              {/*  <p className="text-2xl font-medium">서울특별시 강남구</p>*/}
              {/*</div>*/}

              <div className="pt-8">
                <a
                  href="mailto:dominic@studyproject.kr"
                  className="inline-block px-8 py-3 bg-red-600 text-white uppercase text-sm tracking-wider font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Swiss Style */}
      <footer className="bg-white border-t-4 border-black py-12 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold tracking-tighter mb-4 uppercase">SOUP</h3>
              <p className="text-gray-700">
                여행길 앱으로 여행의 새로운 기준을 만들어갑니다
              </p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About</a></li>
                <li><a href="#features" className="text-gray-700 hover:text-red-600 transition-colors">Service</a></li>
                <li><a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wider font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>dominic@studyproject.kr</li>
                <li>+82 10-5046-5043</li>
                {/*<li>서울특별시 강남구</li>*/}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 uppercase tracking-wider">
              © 2026 SOUP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
