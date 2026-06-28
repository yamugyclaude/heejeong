import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: '힐스테이트 통영, 브랜드 새 아파트의 실내는 다르네요 | 코코맘',
  description: '힐스테이트 통영 84A·84B 타입 실내 후기. 드레스룸, 아일랜드 조리대, 채광까지 직접 확인했어요.',
}

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-10">
      <div className="h-1 bg-[#1E3A5F] rounded mb-8" />
      <h1 className="text-2xl md:text-3xl font-black text-[#1E3A5F] mb-2 leading-tight">
        힐스테이트 통영, 브랜드 새 아파트의 실내는 다르네요
      </h1>
      <p className="text-gray-400 text-sm mb-8">코코맘 · 힐스테이트 통영 현장 후기</p>

      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          안녕하세요, 코코맘이에요. 오늘은 힐스테이트 통영 84타입을 직접 보고 온 후기를 솔직하게 써볼게요.
          같은 신축이어도 브랜드 아파트는 손에 닿는 부분부터 달랐어요.
        </p>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">84A타입 — 판상형 4bay의 정석</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          전용 84㎡ 판상형 4bay 구조예요. 방이 앞뒤로 배치되는 타워형과 달리,
          4bay 판상형은 거실·침실·침실·침실이 일렬로 배치돼서 채광과 통풍이 월등합니다.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>드레스룸 + 파우더룸 구성으로 안방이 호텔처럼 느껴짐</li>
          <li>현관 팬트리 + 주방 팬트리 — 수납 걱정 없음</li>
          <li>아일랜드 조리대로 주방이 넓어 보이는 효과</li>
          <li>우물형 천장 마감 — 천장 높이가 달라 보임</li>
        </ul>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">84B타입 — 거실 2방향 창이 핵심</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          84B는 거실 창이 2방향으로 나 있어서 채광이 특히 좋았어요.
          아이 있는 집이라면 이 타입 강추입니다.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>거실 2방향 창 → 낮에 조명 없어도 밝음</li>
          <li>드레스룸 활용성 높은 구조</li>
          <li>발코니 확장 시 침실2 팬트리 확보 가능</li>
        </ul>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-8">
          <p className="font-bold text-red-700 mb-1">⚠️ 현재 잔여세대 선착순 계약 중</p>
          <p className="text-red-600 text-sm">완판 임박입니다. 원하는 동호수가 있으시면 빠르게 확인하세요.</p>
        </div>
      </div>

      <ContactSection />
    </article>
  )
}
