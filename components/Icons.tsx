// components/Icons.tsx
export function DashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  );
}

export function WorkflowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h16v2H4V4zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
    </svg>
  );
}

export function AnalyticsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h2v18H3V3zm6 6h2v12h-2V9zm6-6h2v18h-2V3zm6 12h2v6h-2v-6z" />
    </svg>
  );
}

export function ReportingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zm0-8h14V7H7v2z" />
    </svg>
  );
}
