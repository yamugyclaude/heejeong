'use client';

export default function FloatingCTA() {
  return (
    <a
      href="https://open.kakao.com/o/s8krZCBi"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#FEE500] text-gray-900 font-bold px-4 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
      aria-label="카카오 상담"
    >
      <span className="text-xl">💬</span>
      <span className="text-sm">카카오 상담</span>
    </a>
  );
}
