import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-beige-200 sticky top-0 border-b border-gray-100 px-16 py-12">
      <div className="flex-between mx-auto max-w-750">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
