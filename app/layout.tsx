import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '코코맘 힐스테이트 통영 부동산 | 통영 힐스테이트 부동산 전문가',
  description: '힐스테이트 통영 아파트 매수 고객을 위한 정보. 코코맘이 직접 발로 뛴 솔직 후기와 매수 상담 정보.',
  keywords: '통영 힐스테이트, 힐스테이트 통영, 통영 부동산 전문가, 힐스테이트 통영 아파트, 통영 힐스테이트 부동산전문가',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-[#F8F9FA]">
        <header className="bg-[#1E3A5F] text-white sticky top-0 z-40 shadow-md">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <span className="font-bold text-base md:text-lg">🏠 코코맘 힐스테이트 통영 부동산</span>
          </div>
        </header>

        <main className="pb-8">
          {children}
        </main>
      </body>
    </html>
  )
}
