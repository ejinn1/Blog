export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/blog" className="hover:underline">
            Blog
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
