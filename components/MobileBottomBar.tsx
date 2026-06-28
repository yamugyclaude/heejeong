'use client'

export default function MobileBottomBar({ phone }: { phone: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
      <a
        href={`tel:${phone}`}
        className="flex-1 bg-[#1E3A5F] text-white py-4 text-center font-bold text-sm"
      >
        📞 {phone} 전화상담
      </a>
    </div>
  )
}
