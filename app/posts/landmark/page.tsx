import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: '힐스테이트 통영, 랜드마크 단지의 품격 | 코코맘',
  description: 'KTX통영역 호재와 함께 통영 최고 브랜드 단지로 자리잡는 힐스테이트 통영. 코코맘이 정리했습니다.',
}

export default function Page() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-10">
      <div className="h-1 bg-[#1E3A5F] rounded mb-8" />
      <h1 className="text-2xl md:text-3xl font-black text-[#1E3A5F] mb-2 leading-tight">
        힐스테이트 통영, 랜드마크 단지의 품격
      </h1>
      <p className="text-gray-400 text-sm mb-8">코코맘 · 힐스테이트 통영 입지 분석</p>

      <div className="prose prose-gray max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          통영에서 힐스테이트가 갖는 의미는 남다릅니다. 소비자 만족도 1위 브랜드가
          통영 죽림지구에 들어선다는 것 자체가 이미 사건이에요.
        </p>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">통영 1%를 위한 아파트</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          힐스테이트는 현대건설의 프리미엄 브랜드입니다. 전국 어디에 들어서든
          주변 시세를 리드하는 경향이 있어요. 통영에서도 마찬가지입니다.
          784세대 규모의 대단지가 죽림 시가지 바로 옆에 자리잡습니다.
        </p>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">KTX통영역 호재</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          KTX통영역 개통이 예정되어 있습니다. 개통 이후 통영으로의 접근성이 획기적으로
          개선되면서 관광 인구뿐 아니라 이주 수요도 늘어날 것으로 보입니다.
          입지 가치가 추가로 올라갈 시간이 남아 있는 셈이에요.
        </p>

        <h2 className="text-xl font-bold text-[#1E3A5F] mt-8 mb-4">다양한 타입으로 선택지 확보</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>59㎡ ~ 145㎡ 다양한 타입 구성</li>
          <li>주력 타입 84㎡ 판상형 4bay 중심</li>
          <li>1~2인 가구부터 대가족까지 선택 가능</li>
        </ul>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-8">
          <p className="font-bold text-red-700 mb-1">⚠️ 잔여세대 선착순 계약 중</p>
          <p className="text-red-600 text-sm">원하는 타입·층수가 빠르게 소진되고 있습니다. 지금 확인하세요.</p>
        </div>
      </div>

      <ContactSection />
    </article>
  )
}
