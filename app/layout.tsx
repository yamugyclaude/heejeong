import type { Metadata } from 'next'
import './globals.css'
import MobileBottomBar from '@/components/MobileBottomBar'

const KAKAO_URL = 'https://open.kakao.com/o/s8krZCBi'
const PHONE = '010-4844-3101'

export const metadata: Metadata = {
  title: '코코맘 통영 부동산 이야기 | 힐스테이트 통영 전문',
  description: '통영 죽림지구 힐스테이트 통영 분양 전문. 코코맘이 직접 발로 뛰며 모은 진짜 정보.',
  keywords: '힐스테이트 통영, 통영 아파트 분양, 통영 죽림지구, 힐스테이트 통영 분양가',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-[#F8F9FA]">
        <header className="bg-[#1E3A5F] text-white sticky top-0 z-40 shadow-md">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <span className="font-bold text-base md:text-lg">🏠 코코맘 통영 부동산 이야기</span>
            <a href={`tel:${PHONE}`} className="text-xs md:text-sm text-gray-200 hover:text-white">
              {PHONE}
            </a>
          </div>
        </header>

        <main className="pb-20 md:pb-0">
          {children}
        </main>

        <MobileBottomBar phone={PHONE} kakaoUrl={KAKAO_URL} />
      </body>
    </html>
  )
}
