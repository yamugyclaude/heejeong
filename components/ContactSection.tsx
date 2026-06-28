export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-6 mb-8 text-center">
      <p className="text-sm font-semibold text-blue-200 mb-2">무료 상담</p>
      <h2 className="text-xl font-bold mb-2">이 아파트 더 알고 싶으세요?</h2>
      <p className="text-blue-100 text-sm mb-6">1분 무료 상담으로 궁금한 것 모두 해결하세요</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://open.kakao.com/KAKAO_PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-400 transition-colors"
        >
          💬 카카오로 문의
        </a>
        <a
          href="tel:010-XXXX-XXXX"
          className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors border border-white/30"
        >
          📞 010-XXXX-XXXX
        </a>
      </div>
    </section>
  );
}
