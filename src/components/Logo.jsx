import React from 'react';

/**
 * AutomateLabs Logo — sleek, minimal mark.
 * A rounded square with a stylised "A" letterform made from
 * clean geometric strokes, paired with the wordmark.
 */
export default function Logo({ size = 32, showText = true, className = '' }) {
  return (
    <span className={`logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}>
      {/* Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="AutomateLabs logo"
      >
        {/* Rounded square container */}
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="10"
          stroke="url(#logo-grad)"
          strokeWidth="2"
          fill="rgba(var(--accent-orange-rgb), 0.06)"
        />
        {/* Stylised "A" — two converging strokes + cross bar */}
        <path
          d="M13 29 L20 11 L27 29"
          stroke="url(#logo-grad)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="15.5"
          y1="23"
          x2="24.5"
          y2="23"
          stroke="url(#logo-grad)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Small accent dot — brand pulse */}
        <circle cx="20" cy="8" r="1.6" fill="var(--accent-orange)" />
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="var(--accent-orange)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      {showText && (
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 800,
            fontSize: `${size * 0.55}px`,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            lineHeight: 1,
            textDecoration: 'none',
          }}
        >
          automate<span style={{ color: 'var(--accent-orange)' }}>labs</span>
        </span>
      )}
    </span>
  );
}
