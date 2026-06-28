import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: '힐스테이트 통영, 평면부터 프리미엄 | 코코맘',
  description: '고급 마감재, 주방 디스플레이 컨트롤러, 넓은 드레스룸까지. 힐스테이트 통영의 평면을 살펴봤어요.',
}

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-10">
      <div className="h-1 bg-[#1E3A5F] rounded mb-8" />
      <h1 className="text-2xl md:text-3xl font-black text-[#1E3A5F] mb-2 leading-tight">
        힐스테이트 통영, 평면부터 프리미엄
      </h1>
      <p className="text-gray-400 text-sm mb-8">코코맘 · 힐스테이트 통영 마감재 후기</p>

      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          같은 신축이어도 브랜드 아파트는 마감재가 달라요.
          힐스테이트 통영을 직접 보니 손에 닿는 모든 부분에서 차이가 느껴졌습니다.
        </p>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">주방 — 디스플레이 컨트롤러가 인상적</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          주방에 디스플레이 컨트롤러가 달려 있어요. 조명이나 환기 등을 터치 패널 하나로 조작할 수 있습니다.
          요즘 신축에서 흔한 기능이지만, 마감 퀄리티 자체가 달랐어요.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>고급 타일 마감 — 주방 바닥과 벽 모두</li>
          <li>아일랜드 조리대 기본 적용</li>
          <li>수납 공간 설계가 실용적</li>
        </ul>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">드레스룸 — 깊고 넓게</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          안방 드레스룸이 생각보다 훨씬 넓었어요. 파우더룸까지 연결되는 구조라
          아침 루틴이 편해질 것 같았습니다. 수납 용도가 명확하게 구분된 설계예요.
        </p>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">전반적인 마감 퀄리티</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          문손잡이, 스위치 플레이트, 욕실 수전까지 일반 아파트와 다른 질감이었어요.
          직접 만져보지 않으면 모르는 차이인데, 현장에 가보시면 바로 느끼실 거예요.
        </p>
      </div>

      <ContactSection />
    </article>
  )
}
