import { COUPLE } from '../constants/wedding';
import { NAV_LINKS } from '../data/navigation';
import { useScrolled } from '../hooks/useScrolled';

export function Nav() {
  const scrolled = useScrolled();

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Primary navigation">
      <a className="nav__brand" href="#top" aria-label="Back to top">
        {COUPLE.initials}
      </a>
      <div className="nav__links">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="nav__link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
