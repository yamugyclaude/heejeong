export default function PostCTA() {
  return (
    <div className="border-2 border-[#FEE500] bg-yellow-50 rounded-xl p-5 my-6 text-center">
      <p className="font-bold text-gray-900 mb-1">이 글이 도움이 되셨나요?</p>
      <p className="text-sm text-gray-600 mb-4">통영 아파트 매수, 직접 상담하시면 더 정확합니다.</p>
      <a
        href="https://open.kakao.com/KAKAO_PLACEHOLDER"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#FEE500] text-gray-900 font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-400 transition-colors text-sm"
      >
        💬 희정님께 바로 물어보기
      </a>
    </div>
  );
}
