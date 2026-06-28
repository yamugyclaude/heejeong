'use client'

const KAKAO_URL = 'https://open.kakao.com/o/s8krZCBi'

export default function FloatingCTA({ kakaoUrl = KAKAO_URL }: { kakaoUrl?: string }) {
  return (
    <a
      href={kakaoUrl}
      target="_blank"
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 bg-[#F5A623] text-gray-900 font-bold py-3 px-5 rounded-full shadow-lg hover:brightness-110 transition"
    >
      💬 카카오 문의
    </a>
  )
}
