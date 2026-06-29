const PHONE = '010-4844-3101'

export default function ContactSection() {
  return (
    <div className="bg-[#F5A623] rounded-xl p-6 my-8 text-center">
      <p className="font-bold text-gray-900 text-lg mb-1">
        📞 궁금한 점 있으시면 편하게 연락주세요!
      </p>
      <p className="text-gray-800 text-sm mb-5">
        잔여세대 현황 · 계약 상담 · 동호수 확인
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href={`tel:${PHONE}`}
          className="bg-[#1E3A5F] text-white font-bold py-3 px-6 rounded-lg hover:brightness-110 transition"
        >
          📞 {PHONE}
        </a>
      </div>
    </div>
  )
}
