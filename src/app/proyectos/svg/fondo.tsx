export const Links = ({ color = "currentColor" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="48"
        d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66m-142.27-96h175.86"
      />
    </svg>
  );
};

export const Github = ({ color = "currentColor" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 48 48"
    >
      <g fill={color} fillRule="evenodd" clipRule="evenodd">
        <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24s-10.745 24-24 24S0 37.255 0 24" />
        <path d="M19.183 45.472c-.193-.25-.193-2.475 0-6.674c-2.072.072-3.38-.072-3.927-.431c-.819-.539-1.64-2.2-2.367-3.371c-.728-1.17-2.343-1.356-2.995-1.618c-.652-.261-.816-1.328 1.797-.522c2.613.807 2.74 3.005 3.565 3.518c.825.514 2.796.29 3.689-.122c.893-.412.827-1.944.987-2.551c.201-.567-.509-.693-.524-.697c-.873 0-5.454-.997-6.713-5.433c-1.258-4.437.363-7.337 1.228-8.583c.576-.832.525-2.603-.153-5.314c2.464-.315 4.365.46 5.703 2.326c.002.01 1.756-1.043 4.527-1.043c2.772 0 3.755.858 4.514 1.043c.76.185 1.366-3.266 6.053-2.326c-.979 1.923-1.798 4.326-1.173 5.314c.626.987 3.08 4.127 1.573 8.583c-1.006 2.97-2.982 4.781-5.929 5.433c-.337.108-.506.282-.506.522c0 .36.456.399 1.114 2.086c.44 1.124.471 4.336.096 9.635c-.951.242-1.691.405-2.22.488c-.937.147-1.955.23-2.955.261c-1 .032-1.347.029-2.73-.1a19.799 19.799 0 0 1-2.654-.424" />
      </g>
    </svg>
  );
};

export const Fondo = ({ color = "currentColor" }: { color?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="606"
      height="422"
      fill="none"
    >
      <g clip-path="url(#a)" shape-rendering="crispEdges">
        <g filter="url(#b)">
          <path
            fill="url(#c)"
            d="M182 75.197V7a7 7 0 0 0-7-7H7a7 7 0 0 0-7 7v407.5a7 7 0 0 0 7 7h168a7 7 0 0 0 7-7V263.303a10 10 0 0 0-5.039-8.682l-24.922-14.242a10 10 0 0 1-5.039-8.682V106.803a10 10 0 0 1 5.039-8.682l24.922-14.242A10 10 0 0 0 182 75.197z"
          />
          <path
            stroke="url(#d)"
            d="M182 75.197V7a7 7 0 0 0-7-7H7a7 7 0 0 0-7 7v407.5a7 7 0 0 0 7 7h168a7 7 0 0 0 7-7V263.303a10 10 0 0 0-5.039-8.682l-24.922-14.242a10 10 0 0 1-5.039-8.682V106.803a10 10 0 0 1 5.039-8.682l24.922-14.242A10 10 0 0 0 182 75.197z"
          />
        </g>
        <g filter="url(#e)">
          <path
            fill="url(#f)"
            d="M424 75.197V7a7 7 0 0 1 7-7h168a7 7 0 0 1 7 7v407.5a7 7 0 0 1-7 7H431a7 7 0 0 1-7-7V263.303a10 10 0 0 1 5.039-8.682l24.922-14.242a10 10 0 0 0 5.039-8.682V106.803a10 10 0 0 0-5.039-8.682l-24.922-14.242A10 10 0 0 1 424 75.197z"
          />
          <path
            stroke="url(#g)"
            d="M424 75.197V7a7 7 0 0 1 7-7h168a7 7 0 0 1 7 7v407.5a7 7 0 0 1-7 7H431a7 7 0 0 1-7-7V263.303a10 10 0 0 1 5.039-8.682l24.922-14.242a10 10 0 0 0 5.039-8.682V106.803a10 10 0 0 0-5.039-8.682l-24.922-14.242A10 10 0 0 1 424 75.197z"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="c"
          x1="343.5"
          x2="466.767"
          y1="-164.5"
          y2="260.887"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1F1F1F" />
          <stop offset=".71" stop-color="#0F0F0F" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="216"
          x2="289.148"
          y1="-33.5"
          y2="292.965"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#292929" />
          <stop offset=".628" stop-color="#292929" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="732.5"
          x2="260.5"
          y1="-178.5"
          y2="439.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1F1F1F" />
          <stop offset=".701" stop-color="#0F0F0F" />
        </linearGradient>
        <linearGradient
          id="g"
          x1="390"
          x2="316.852"
          y1="-33.5"
          y2="292.965"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#292929" />
          <stop offset=".628" stop-color="#292929" stop-opacity="0" />
        </linearGradient>
        <filter
          id="b"
          width="431.2"
          height="670.7"
          x="-118.6"
          y="-124.6"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="6" />
          <feGaussianBlur stdDeviation="62.05" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_484_1104"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_484_1104"
            result="shape"
          />
        </filter>
        <filter
          id="e"
          width="431.2"
          height="670.7"
          x="293.4"
          y="-124.6"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="-6" />
          <feGaussianBlur stdDeviation="62.05" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_484_1104"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_484_1104"
            result="shape"
          />
        </filter>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h606v421.5H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
