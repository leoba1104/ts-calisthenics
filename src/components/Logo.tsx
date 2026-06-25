export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" rx="8" fill="none"/>
      {/* T */}
      <rect x="8" y="8" width="30" height="8" fill="currentColor"/>
      <rect x="18" y="16" width="10" height="28" fill="currentColor"/>
      {/* S */}
      <path d="M44 8h28v8H52v8h20v8H44v-8h20v-8H44V8z" fill="#FF6200"/>
      {/* bottom bar S */}
      <rect x="44" y="40" width="28" height="8" fill="#FF6200"/>
      {/* vertical connector */}
      <rect x="8" y="44" width="64" height="4" fill="currentColor" opacity="0.15"/>
      {/* lower T */}
      <rect x="8" y="48" width="30" height="8" fill="currentColor"/>
      <rect x="18" y="56" width="10" height="16" fill="currentColor"/>
      {/* lower S */}
      <path d="M44 48h28v8H52v8h20v8H44v-8h20v-8H44V48z" fill="#FF6200"/>
    </svg>
  )
}
