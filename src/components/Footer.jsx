import { COUPLE, WEDDING_DETAILS } from '../constants/wedding';

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__script">{COUPLE.bride} &amp; {COUPLE.groom}</p>
      <p className="footer__sub">November 15, 2025 · {WEDDING_DETAILS.footerLocation}</p>
      <p className="footer__heart" aria-hidden="true">♥</p>
    </footer>
  );
}
