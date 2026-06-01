import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function ShieldLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <path
        d="M24 3 7 9v12c0 11 7.4 18.6 17 24 9.6-5.4 17-13 17-24V9L24 3Z"
        fill="#1B2A4A"
        stroke="#B8922A"
        strokeWidth="2"
      />
      <path d="M24 14v20M16 24h16" stroke="#B8922A" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="6.5" stroke="#FDF6E3" strokeWidth="1.5" />
    </svg>
  );
}

export function StoreIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9 5.5 4.5h13L20 9" />
      <path d="M4 9h16v2a2 2 0 0 1-2 2 2.4 2.4 0 0 1-3 0 2.4 2.4 0 0 1-3 0 2.4 2.4 0 0 1-3 0 2 2 0 0 1-2-2V9Z" />
      <path d="M5 13v7h14v-7" />
      <path d="M10 20v-4h4v4" />
    </svg>
  );
}

export function BankIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9 12 4l9 5" />
      <path d="M5 9v9M9 9v9M15 9v9M19 9v9" />
      <path d="M3 21h18M4 18h16" />
    </svg>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="6.5" r="2.5" />
      <circle cx="5.5" cy="10" r="2" />
      <circle cx="18.5" cy="10" r="2" />
      <path d="M8.5 19c0-2.5 1.5-4.5 3.5-4.5s3.5 2 3.5 4.5" />
      <path d="M2.5 18c0-2 1-3.5 2.7-3.8M21.5 18c0-2-1-3.5-2.7-3.8" />
    </svg>
  );
}

export function GovernmentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9 12 4l9 5H3Z" />
      <path d="M5 9v8M9.5 9v8M14.5 9v8M19 9v8" />
      <path d="M3 21h18" />
      <path d="M12 4v1.5" />
    </svg>
  );
}

export function MagnifierIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="11" height="14" rx="1.5" />
      <path d="M7 7h5M7 10h5M7 13h3" />
      <circle cx="15.5" cy="15.5" r="3.5" />
      <path d="m18.2 18.2 2.3 2.3" />
    </svg>
  );
}

export function ShieldSearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.5V11c0 5 3 8.5 7 10.5 4-2 7-5.5 7-10.5V5.5L12 3Z" />
      <circle cx="11" cy="11" r="2.6" />
      <path d="m13 13 2 2" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4v16h16" />
      <path d="M8 16v-3M12 16v-6M16 16v-9" />
      <path d="m8 10 4-4 4 3 3-4" />
    </svg>
  );
}

export function ShieldLockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 5.5V11c0 5 3 8.5 7 10.5 4-2 7-5.5 7-10.5V5.5L12 3Z" />
      <rect x="9.2" y="10.5" width="5.6" height="4.5" rx="1" />
      <path d="M10.2 10.5V9.2a1.8 1.8 0 0 1 3.6 0v1.3" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6M17 14c2.5.4 4.5 2.3 4.5 5" />
    </svg>
  );
}

export function MedalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7.5 21l4.5-2.5L16.5 21 15 13.5" />
      <path d="M12 6.5 13 8.5l2 .3-1.5 1.4.4 2L12 11.2 10.1 12.2l.4-2L9 8.8l2-.3 1-2Z" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <circle cx="12" cy="15" r="1.4" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
      <path d="M9 14h2M13 14h2M9 17h2" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v11M8 11l4 4 4-4" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.157 5.335 5.494 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.976-.967zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
    </svg>
  );
}

export const socialPaths: Record<string, string> = {
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.64 4.76 6.08V21h-4v-5.36c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9V9z",
  facebook:
    "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.13-2.41-.13-2.39 0-4.03 1.46-4.03 4.14V9.9H7.5V13h2.76v8h3.24z",
  twitter:
    "M22 5.9c-.7.32-1.5.54-2.3.64a4.02 4.02 0 0 0 1.77-2.22c-.78.46-1.64.8-2.56.98a4 4 0 0 0-6.9 2.74c0 .31.04.62.1.91A11.4 11.4 0 0 1 3.8 4.7a4 4 0 0 0 1.24 5.35c-.65-.02-1.26-.2-1.8-.5v.05a4 4 0 0 0 3.22 3.93c-.31.08-.64.13-.98.13-.24 0-.47-.02-.7-.07a4 4 0 0 0 3.74 2.78A8.05 8.05 0 0 1 2 18.07a11.35 11.35 0 0 0 6.16 1.8c7.39 0 11.43-6.12 11.43-11.43l-.01-.52A8.1 8.1 0 0 0 22 5.9z",
  youtube:
    "M23 12s0-3.2-.4-4.74a2.5 2.5 0 0 0-1.76-1.77C19.3 5.1 12 5.1 12 5.1s-7.3 0-8.84.39A2.5 2.5 0 0 0 1.4 7.26C1 8.8 1 12 1 12s0 3.2.4 4.74a2.5 2.5 0 0 0 1.76 1.77c1.54.39 8.84.39 8.84.39s7.3 0 8.84-.39a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12zm-13 3.5v-7l6 3.5-6 3.5z",
};
