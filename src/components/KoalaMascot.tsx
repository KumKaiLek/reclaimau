export default function KoalaMascot({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 230"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="headShine" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#90A4AE" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="eyeShineL" cx="30%" cy="30%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Branch ── */}
      <rect x="0" y="150" width="200" height="16" rx="8" fill="#795548" />
      <rect x="0" y="150" width="200" height="6" rx="3" fill="#A1887F" opacity="0.6" />

      {/* Eucalyptus leaves left */}
      <ellipse cx="22" cy="143" rx="16" ry="7" fill="#66BB6A" transform="rotate(-35 22 143)" />
      <ellipse cx="40" cy="137" rx="14" ry="6" fill="#81C784" transform="rotate(-18 40 137)" />
      <ellipse cx="14" cy="152" rx="13" ry="5" fill="#4CAF50" transform="rotate(-50 14 152)" />

      {/* Eucalyptus leaves right */}
      <ellipse cx="178" cy="143" rx="16" ry="7" fill="#66BB6A" transform="rotate(35 178 143)" />
      <ellipse cx="160" cy="137" rx="14" ry="6" fill="#81C784" transform="rotate(18 160 137)" />
      <ellipse cx="186" cy="152" rx="13" ry="5" fill="#4CAF50" transform="rotate(50 186 152)" />

      {/* ── Left arm hugging branch ── */}
      <path d="M 68 132 C 52 138 36 144 30 155 C 26 163 34 168 46 165"
        fill="none" stroke="#90A4AE" strokeWidth="16" strokeLinecap="round" />
      <circle cx="46" cy="165" r="10" fill="#90A4AE" />
      {/* Left paw toes */}
      <circle cx="38" cy="169" r="4" fill="#78909C" />
      <circle cx="46" cy="172" r="4" fill="#78909C" />
      <circle cx="54" cy="169" r="4" fill="#78909C" />

      {/* ── Right arm hugging branch ── */}
      <path d="M 132 132 C 148 138 164 144 170 155 C 174 163 166 168 154 165"
        fill="none" stroke="#90A4AE" strokeWidth="16" strokeLinecap="round" />
      <circle cx="154" cy="165" r="10" fill="#90A4AE" />
      {/* Right paw toes */}
      <circle cx="146" cy="169" r="4" fill="#78909C" />
      <circle cx="154" cy="172" r="4" fill="#78909C" />
      <circle cx="162" cy="169" r="4" fill="#78909C" />

      {/* ── Dangling left leg ── */}
      <path d="M 82 158 C 76 175 70 190 66 202" stroke="#90A4AE" strokeWidth="14" strokeLinecap="round" fill="none" />
      <ellipse cx="64" cy="207" rx="12" ry="8" fill="#90A4AE" />
      <circle cx="56" cy="210" r="4" fill="#78909C" />
      <circle cx="64" cy="213" r="4" fill="#78909C" />
      <circle cx="72" cy="210" r="4" fill="#78909C" />

      {/* ── Dangling right leg ── */}
      <path d="M 118 158 C 124 175 130 190 134 202" stroke="#90A4AE" strokeWidth="14" strokeLinecap="round" fill="none" />
      <ellipse cx="136" cy="207" rx="12" ry="8" fill="#90A4AE" />
      <circle cx="128" cy="210" r="4" fill="#78909C" />
      <circle cx="136" cy="213" r="4" fill="#78909C" />
      <circle cx="144" cy="210" r="4" fill="#78909C" />

      {/* ── Body ── */}
      <ellipse cx="100" cy="143" rx="34" ry="26" fill="#B0BEC5" />
      {/* Belly patch */}
      <ellipse cx="100" cy="145" rx="19" ry="16" fill="#ECEFF1" />

      {/* ── Left ear ── */}
      <circle cx="48" cy="36" r="28" fill="#90A4AE" />
      <circle cx="48" cy="36" r="20" fill="#B0BEC5" />
      <ellipse cx="48" cy="38" rx="12" ry="14" fill="#F8BBD9" />
      {/* Ear tuft lines */}
      <path d="M 40 28 Q 48 22 56 28" stroke="#78909C" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* ── Right ear ── */}
      <circle cx="152" cy="36" r="28" fill="#90A4AE" />
      <circle cx="152" cy="36" r="20" fill="#B0BEC5" />
      <ellipse cx="152" cy="38" rx="12" ry="14" fill="#F8BBD9" />
      {/* Ear tuft lines */}
      <path d="M 144 28 Q 152 22 160 28" stroke="#78909C" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* ── Head ── */}
      <circle cx="100" cy="82" r="54" fill="#CFD8DC" />
      <circle cx="100" cy="82" r="54" fill="url(#headShine)" />

      {/* Muzzle */}
      <ellipse cx="100" cy="99" rx="28" ry="20" fill="#DDEAEE" />

      {/* ── Left eye ── */}
      <circle cx="78" cy="76" r="20" fill="white" />
      <circle cx="78" cy="76" r="15" fill="#3949AB" />
      <circle cx="78" cy="76" r="10" fill="#1A237E" />
      {/* Main sparkle */}
      <ellipse cx="70" cy="67" rx="7" ry="6" fill="white" opacity="0.95" />
      {/* Secondary sparkle */}
      <circle cx="87" cy="82" r="3" fill="white" opacity="0.7" />
      {/* Tiny star sparkle */}
      <circle cx="84" cy="68" r="1.5" fill="white" opacity="0.8" />
      {/* Bottom lash */}
      <path d="M 62 86 Q 67 92 74 90" stroke="#455A64" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* ── Right eye ── */}
      <circle cx="122" cy="76" r="20" fill="white" />
      <circle cx="122" cy="76" r="15" fill="#3949AB" />
      <circle cx="122" cy="76" r="10" fill="#1A237E" />
      {/* Main sparkle */}
      <ellipse cx="114" cy="67" rx="7" ry="6" fill="white" opacity="0.95" />
      {/* Secondary sparkle */}
      <circle cx="131" cy="82" r="3" fill="white" opacity="0.7" />
      {/* Tiny star sparkle */}
      <circle cx="128" cy="68" r="1.5" fill="white" opacity="0.8" />
      {/* Bottom lash */}
      <path d="M 128 86 Q 133 92 138 90" stroke="#455A64" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* ── Top lashes ── */}
      <path d="M 60 62 Q 63 55 68 60" stroke="#37474F" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 70 57 Q 74 50 78 56" stroke="#37474F" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 140 62 Q 137 55 132 60" stroke="#37474F" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M 130 57 Q 126 50 122 56" stroke="#37474F" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* ── Nose ── */}
      <ellipse cx="100" cy="95" rx="11" ry="8" fill="#37474F" />
      <ellipse cx="96" cy="92" rx="4.5" ry="3" fill="#546E7A" opacity="0.55" />

      {/* ── Mouth ── */}
      <path d="M 88 106 Q 100 118 112 106" stroke="#546E7A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Tiny smile lines */}
      <path d="M 87 106 Q 84 103 86 100" stroke="#546E7A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M 113 106 Q 116 103 114 100" stroke="#546E7A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* ── Blush ── */}
      <ellipse cx="62" cy="94" rx="13" ry="9" fill="#F48FB1" opacity="0.38" />
      <ellipse cx="138" cy="94" rx="13" ry="9" fill="#F48FB1" opacity="0.38" />

      {/* ── Tiny sparkles floating around ── */}
      <path d="M 20 60 L 22 55 L 24 60 L 22 65 Z" fill="#FDD835" opacity="0.7" />
      <path d="M 172 48 L 174 43 L 176 48 L 174 53 Z" fill="#FDD835" opacity="0.6" />
      <circle cx="18" cy="80" r="3" fill="#CE93D8" opacity="0.6" />
      <circle cx="182" cy="72" r="3" fill="#80DEEA" opacity="0.6" />
    </svg>
  )
}
