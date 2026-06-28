import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import FloatingCTA from '@/components/FloatingCTA'

const PHONE = '010-4844-3101'

const posts = [
  {
    slug: 'interior-84',
    title: '힐스테이트 통영, 브랜드 새 아파트의 실내는 다르네요',
    excerpt: '84A 4bay 판상형의 드레스룸부터 아일랜드 조리대까지. 직접 모델하우스 다녀온 후기를 솔직하게 풀어봅니다.',
  },
  {
    slug: 'landmark',
    title: '힐스테이트 통영, 랜드마크 단지의 품격',
    excerpt: 'KTX통영역 호재까지 더해진 통영 최고의 브랜드 단지. 왜 랜드마크인지 정리했습니다.',
  },
  {
    slug: 'premium-plan',
    title: '힐스테이트 통영, 평면부터 프리미엄',
    excerpt: '손에 닿는 부분까지 다른 마감재. 주방 디스플레이 컨트롤러, 고급 타일까지 살펴봤어요.',
  },
  {
    slug: 'future',
    title: '힐스테이트 통영, 통영의 미래를 대표할 아파트',
    excerpt: '죽림 시가지 인접에 이마트·하나로마트 생활권. KTX 개통 후 입지 가치가 더 오릅니다.',
  },
]

const priceData = [
  { type: '84A', area: '25.65평', price: '4억1천~4억5천만원' },
  { type: '84B', area: '25.67평', price: '4억~4억3천만원' },
  { type: '109', area: '33.21평', price: '5억3천~5억8천만원' },
  { type: '145', area: '44.16평', price: '7억3천~7억9천만원' },
]

export default function Home() {
  return (
    <>
      {/* 섹션 1: 히어로 */}
      <section className="bg-[#1E3A5F] text-white py-16 px-4 text-center">
        <p className="text-[#F5A623] font-bold text-sm mb-2 tracking-widest">HILLSTATE TONGYEONG</p>
        <h1 className="text-2xl md:text-4xl font-black mb-2 leading-tight">
          통영 최고의 브랜드 아파트<br />힐스테이트 통영
        </h1>
        <p className="text-gray-300 text-sm md:text-base mb-8 mt-3">
          코코맘이 직접 발로 뛰며 모은 진짜 정보
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-[#F5A623] text-gray-900 font-bold py-3 px-6 rounded-lg hover:brightness-110 transition"
          >
            📞 {PHONE}
          </a>
        </div>
      </section>

      {/* 섹션 2: 코코맘 소개 */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white border-2 border-[#1E3A5F] rounded-xl p-6">
          <p className="text-lg font-bold text-[#1E3A5F] mb-2">👩 코코맘입니다</p>
          <p className="text-gray-700 leading-relaxed">
            통영 죽림지구에 살면서 힐스테이트 통영을 직접 발로 뛰며 알아봤어요.<br />
            아파트 구매 고민 있으시면 편하게 물어보세요!
          </p>
        </div>
      </section>

      {/* 섹션 3: 핵심 정보 카드 */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-4">힐스테이트 통영 핵심 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: '📍', title: '위치', desc: '경상남도 통영시 광도면\n죽림 시가지 인접' },
            { icon: '🏢', title: '규모', desc: '총 784세대\n지하4층 지상 최고29층 6개동' },
            { icon: '🚄', title: '호재', desc: 'KTX통영역 개통 예정\n통영 랜드마크 단지' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="font-bold text-[#1E3A5F] mb-1">{item.title}</p>
              <p className="text-gray-600 text-sm whitespace-pre-line">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 섹션 4: 블로그 글 목록 */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-4">📝 코코맘의 현장 이야기</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="block group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="h-2 bg-[#1E3A5F]" />
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#1E3A5F] transition leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">{post.excerpt}</p>
                  <span className="text-[#1E3A5F] text-sm font-medium">자세히 보기 →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 섹션 5: 공급가 테이블 */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <h2 className="text-xl font-bold text-[#1E3A5F] mb-4">💰 공급가 요약</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm bg-white">
            <thead>
              <tr className="bg-[#1E3A5F] text-white">
                <th className="py-3 px-4 text-left">타입</th>
                <th className="py-3 px-4 text-left">전용면적</th>
                <th className="py-3 px-4 text-left">분양가(최저~최고)</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((row, i) => (
                <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-3 px-4 font-bold text-[#1E3A5F]">{row.type}</td>
                  <td className="py-3 px-4 text-gray-700">{row.area}</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 섹션 6: 커뮤니티 */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-[#1E3A5F] text-white rounded-xl p-6 text-center">
          <p className="text-[#F5A623] font-bold text-xs mb-2 tracking-widest">COMMUNITY</p>
          <p className="font-bold text-lg mb-1">전국 최고 수준 커뮤니티 1,129평</p>
          <p className="text-gray-300 text-sm">
            단지 내 수영장 · 피트니스 · 스크린골프 · 어린이집 · 작은도서관
          </p>
        </div>
      </section>

      {/* 섹션 7: 하단 CTA */}
      <section className="bg-[#F5A623] py-12 px-4 text-center">
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">지금 바로 문의하세요!</h2>
        <p className="text-gray-800 text-sm mb-6">잔여세대 소진 중 — 서두르세요</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="bg-[#1E3A5F] text-white font-bold py-3 px-6 rounded-lg hover:brightness-110 transition"
          >
            📞 {PHONE}
          </a>
        </div>
      </section>

      <FloatingCTA />
    </>
  )
}
