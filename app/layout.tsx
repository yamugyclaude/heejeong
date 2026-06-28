import type { Metadata } from 'next';
import './globals.css';
import FloatingCTA from '@/components/FloatingCTA';

export const metadata: Metadata = {
  title: '통영시 아파트 전문 공인중개사 | 희정 부동산',
  description: '통영시 아파트 매수·매도 전문 공인중개사 희정님. 통영 부동산 시세 분석, 아파트 매수 상담, 지역 정보 제공. 지금 바로 카카오로 무료 상담하세요.',
  keywords: ['통영시 아파트', '통영 부동산', '경남 통영 아파트 매수', '통영 아파트 시세', '통영 공인중개사'],
  openGraph: {
    title: '통영시 아파트 전문 공인중개사 | 희정 부동산',
    description: '통영시 아파트 매수·매도 전문 공인중개사 희정님과 함께하세요.',
    locale: 'ko_KR',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '희정 부동산',
  description: '통영시 아파트 전문 공인중개사',
  address: {
    '@type': 'PostalAddress',
    addressLocality: '통영시',
    addressRegion: '경상남도',
    addressCountry: 'KR',
  },
  telephone: '010-4844-3101',
  areaServed: '통영시',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-gray-900">
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
            <span className="font-bold text-lg text-blue-700">통영 희정 부동산</span>
            <a
              href="tel:010-4844-3101"
              className="text-sm font-medium text-gray-600 hover:text-blue-700"
            >
              📞 010-4844-3101
            </a>
          </div>
        </header>
        <main>{children}</main>
        <FloatingCTA />
      </body>
    </html>
  );
}
