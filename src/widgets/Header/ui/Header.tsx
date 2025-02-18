import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 p-20 backdrop-blur-sm">
      <div className="flex-between mx-auto max-w-1000">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
