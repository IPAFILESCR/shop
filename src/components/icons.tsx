import type { SVGProps } from "react";
import type { IconKey } from "../types";

const baseProps: SVGProps<SVGSVGElement> = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Apple(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M16.4 13.5c0-2.4 1.9-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8s-1.8-.8-3-.8c-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.2 9.2.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-.9-2.5-3.4z" />
      <path d="M14 5.4c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z" />
    </svg>
  );
}

function Gamepad(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="2.5" y="7" width="19" height="11" rx="3.5" />
      <path d="M7 11.5h3M8.5 10v3M14 11.5h.01M16.5 13h.01M16.5 10.5h.01M14 13h.01" />
    </svg>
  );
}

function Shield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3 4 6v6c0 5.2 3.6 8.2 8 9 4.4-.8 8-3.8 8-9V6l-8-3z" />
      <path d="m9.5 12 1.7 1.8 3.3-3.6" />
    </svg>
  );
}

function Certificate(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="10" r="5" />
      <path d="m8.5 14-1 6 4.5-2.5 4.5 2.5-1-6M12 7v3l2 1.5" />
    </svg>
  );
}

function Device(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 19h2" />
    </svg>
  );
}

function Lock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="4.5" y="11" width="15" height="10.5" rx="2.5" />
      <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
    </svg>
  );
}

function Trust(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 2.5 4 6v6c0 5.2 3.6 8.2 8 9 4.4-.8 8-3.8 8-9V6l-8-3.5z" />
      <path d="M12 8v4M12 15v.01" />
    </svg>
  );
}

function Spark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l3 3M15.5 15.5l3 3M5.5 18.5l3-3M15.5 8.5l3-3" />
    </svg>
  );
}

function Wave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 9c3-3 6-3 9 0s6 3 9 0M3 15c3-3 6-3 9 0s6 3 9 0" />
    </svg>
  );
}

export function Icon({ name, ...props }: { name: IconKey } & SVGProps<SVGSVGElement>) {
  switch (name) {
    case "apple":
      return <Apple {...props} />;
    case "gamepad":
      return <Gamepad {...props} />;
    case "shield":
      return <Shield {...props} />;
    case "certificate":
      return <Certificate {...props} />;
    case "device":
      return <Device {...props} />;
    case "lock":
      return <Lock {...props} />;
    case "trust":
      return <Trust {...props} />;
    case "spark":
      return <Spark {...props} />;
    case "wave":
      return <Wave {...props} />;
    default:
      return null;
  }
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
    </svg>
  );
}

export function DotIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" {...props}>
      <circle cx="3" cy="3" r="3" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
