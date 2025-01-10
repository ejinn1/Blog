import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="flex text-green-100 h-60">
      <Logo />
      <Navigation />
    </header>
  );
}
