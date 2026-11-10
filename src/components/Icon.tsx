import type { ReactNode, SVGProps } from "react";

type IconName =
    | "home"
    | "grid"
    | "flask"
    | "briefcase"
    | "user"
    | "mail"
    | "arrow-up-right"
    | "arrow-right"
    | "graduation"
    | "code"
    | "brain"
    | "terminal"
    | "download"
    | "maze"
    | "vision"
    | "mobile"
    | "web"
    | "external"
    | "chevron-down";

const paths: Record<IconName, ReactNode> = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
    flask: <><path d="M9 3h6" /><path d="M10 3v6l-5.5 9.1A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.9L14 9V3" /><path d="M8 15h8" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    "arrow-up-right": <><path d="M7 17 17 7M7 7h10v10" /></>,
    "arrow-right": <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    graduation: <><path d="m2 10 10-6 10 6-10 6-10-6Z" /><path d="M6 12v5c3.5 3 8.5 3 12 0v-5M22 10v6" /></>,
    code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
    brain: <><path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 11a4 4 0 0 0 2 7 3 3 0 0 0 6 0ZM12 18V5a3 3 0 0 1 5.8-1A4 4 0 0 1 20 11a4 4 0 0 1-2 7 3 3 0 0 1-6 0Z" /><path d="M8 8c1 0 2 1 2 2M16 8c-1 0-2 1-2 2M7 14c1 0 2 .5 2 2M17 14c-1 0-2 .5-2 2" /></>,
    terminal: <><path d="m4 17 6-5-6-5M12 19h8" /></>,
    download: <><path d="M12 3v12M7 10l5 5 5-5M4 20h16" /></>,
    maze: <><path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" /><path d="M10 7h4M7 10v4M14 7v7h6M10 17h4" /></>,
    vision: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /><circle cx="12" cy="12" r="3" /><path d="M12 2v2M3 3l1.5 1.5M21 3l-1.5 1.5" /></>,
    mobile: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 18h4" /></>,
    web: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    external: <><path d="M14 3h7v7M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
    "chevron-down": <path d="m6 9 6 6 6-6" />,
};

export function Icon({ name, size = 18, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            {paths[name]}
        </svg>
    );
}
