'use client'

const PHONE = '010-4844-3101'

export default function FloatingCTA() {
  return (
    <a
      href={`tel:${PHONE}`}
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 bg-[#1E3A5F] text-white font-bold py-3 px-5 rounded-full shadow-lg hover:brightness-110 transition"
    >
      📞 전화상담
    </a>
  )
}
