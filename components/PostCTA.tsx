const PHONE = '010-4844-3101'

export default function PostCTA() {
  return (
    <div className="border-2 border-[#1E3A5F] bg-blue-50 rounded-xl p-5 my-6 text-center">
      <p className="font-bold text-gray-900 mb-1">이 글이 도움이 되셨나요?</p>
      <p className="text-sm text-gray-600 mb-4">통영 아파트 매수, 직접 상담하시면 더 정확합니다.</p>
      <a
        href={`tel:${PHONE}`}
        className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white font-bold px-5 py-2.5 rounded-lg hover:brightness-110 transition text-sm"
      >
        📞 {PHONE}
      </a>
    </div>
  )
}
