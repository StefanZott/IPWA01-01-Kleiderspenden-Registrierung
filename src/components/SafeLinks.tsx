import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface SafeLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * SafeLink schützt vor XSS (nur interne Navigation),
 * ersetzt <a href> durch <Link to>.
 */
export default function SafeLink({ to, children, className, style }: SafeLinkProps) {
  // nur relative Links zulassen
  if (to.startsWith("http")) {
    console.warn(`Unsicherer externer Link blockiert: ${to}`);
    return <span>{children}</span>;
  }

  return (
    <Link to={to} className={className} style={style}>
      {children}
    </Link>
  );
}
