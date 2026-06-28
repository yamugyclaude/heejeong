import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: '힐스테이트 통영, 통영의 미래를 대표할 아파트 | 코코맘',
  description: '죽림 시가지 인접, KTX 개통 호재, 이마트 생활권. 입주 전 지금이 기회입니다.',
}

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-10">
      <div className="h-1 bg-[#1E3A5F] rounded mb-8" />
      <h1 className="text-2xl md:text-3xl font-black text-[#1E3A5F] mb-2 leading-tight">
        힐스테이트 통영, 통영의 미래를 대표할 아파트
      </h1>
      <p className="text-gray-400 text-sm mb-8">코코맘 · 힐스테이트 통영 입지 이야기</p>

      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          통영에서 10년 넘게 살아온 입장에서 힐스테이트 통영의 위치는
          제가 봐도 탐나는 자리입니다. 조용하면서도 편의시설은 가깝고, 앞으로 더 좋아질 호재가 있어요.
        </p>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">죽림 시가지 바로 옆, 프라이빗한 입지</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          죽림 시가지가 도보권에 있지만 단지 자체는 조용하고 프라이빗한 느낌이에요.
          이마트와 하나로마트가 모두 근처에 있어 장보는 데 전혀 불편함이 없고,
          죽림해안로를 따라 산책도 할 수 있어요.
        </p>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">KTX통영역 개통 — 입지 가치 상승 예정</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          KTX통영역이 개통되면 서울~통영이 훨씬 빨라집니다.
          관광 인구 증가는 물론, 통영으로 이주를 고려하는 수요도 늘어날 거예요.
          지금 입주 전에 들어가는 분들이 가장 좋은 가격에 들어가는 셈입니다.
        </p>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">지금이 마지막 기회</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          잔여세대가 빠르게 소진되고 있어요. 입주 전에 결정하는 게 가격 면에서 유리하고,
          원하는 동·호수를 고를 수 있는 선택권도 지금이 가장 넓을 때입니다.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-8">
          <p className="font-bold text-red-700 mb-1">⚠️ 잔여세대 소진 중 — 지금 확인하세요</p>
          <p className="text-red-600 text-sm">원하는 타입이 남아 있는지 먼저 문의해 보세요.</p>
        </div>
      </div>

      <ContactSection />
    </article>
  )
}
