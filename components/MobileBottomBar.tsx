'use client'

export default function MobileBottomBar({ phone, kakaoUrl }: { phone: string; kakaoUrl: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
      <a
        href={`tel:${phone}`}
        className="flex-1 bg-[#1E3A5F] text-white py-4 text-center font-bold text-sm"
      >
        📞 전화상담
      </a>
      <a
        href={kakaoUrl}
        target="_blank"
        className="flex-1 bg-[#F5A623] text-gray-900 py-4 text-center font-bold text-sm"
      >
        💬 카카오 문의
      </a>
    </div>
  )
}
