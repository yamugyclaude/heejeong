import ContactSection from '@/components/ContactSection';

const services = [
  {
    icon: '🏠',
    title: '아파트 매수 상담',
    desc: '통영시 아파트 단지별 특징, 가격대, 학군 정보까지. 처음 사시는 분도 걱정 없습니다.',
  },
  {
    icon: '📊',
    title: '시세 분석',
    desc: '최근 실거래가 기반으로 정확한 시세를 알려드립니다. 적정 가격에 사실 수 있도록 도와드립니다.',
  },
  {
    icon: '🗺️',
    title: '지역 정보',
    desc: '통영 토박이가 알려주는 동네 정보. 편의시설, 교통, 생활 환경을 솔직하게 말씀드립니다.',
  },
];

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* Hero */}
      <section className="py-12 text-center">
        <div className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          경상남도 통영시 아파트 전문
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
          통영시 아파트 전문<br />
          <span className="text-blue-700">공인중개사 희정님</span>과 함께하세요
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          통영에서 직접 발로 뛰며 쌓은 아파트 매수·매도 경험.<br />
          복잡한 부동산 거래, 희정님이 처음부터 끝까지 함께합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://open.kakao.com/KAKAO_PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-gray-900 font-bold px-8 py-4 rounded-xl text-lg shadow-md hover:bg-yellow-400 transition-colors"
          >
            💬 지금 카카오로 문의하기
          </a>
          <a
            href="tel:010-XXXX-XXXX"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg hover:border-blue-400 hover:text-blue-700 transition-colors"
          >
            📞 전화 상담
          </a>
        </div>
      </section>

      {/* About */}
      <section className="py-8 bg-blue-50 rounded-2xl px-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-3">희정님은 이런 분입니다</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold mt-0.5">✓</span>
            통영시 아파트 매수·매도 전문
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold mt-0.5">✓</span>
            현지 시세와 실거래가를 정확하게 파악
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold mt-0.5">✓</span>
            처음 아파트 사시는 분들도 단계별 안내
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold mt-0.5">✓</span>
            카카오·전화 빠른 응답 (오전 9시~오후 9시)
          </li>
        </ul>
      </section>

      {/* Services */}
      <section className="py-8 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">도움드릴 수 있는 것들</h2>
        <div className="space-y-4">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-xl p-5 flex gap-4">
              <span className="text-3xl">{s.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection />

      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>통영 희정 부동산 | 경상남도 통영시</p>
        <p className="mt-1">© 2024 희정 부동산. All rights reserved.</p>
      </footer>
    </div>
  );
}
