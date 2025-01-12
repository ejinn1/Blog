import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="flex-between sticky top-0 h-60 px-30 text-green-100">
      <Logo />
      <Navigation />
    </header>
  );
}
