export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">UGUNJA DAILY</h3>
            <p className="text-sm text-gray-500 italic">
              &ldquo;The Voice of Ugunja &amp; Ugenya&rdquo;
            </p>
            <p className="text-sm mt-3">
              Delivering trusted news and stories from the heart of Siaya County.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Breaking", "Politics", "Sports", "Entertainment", "Community"].map(
                (link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Ugunja, Siaya County</li>
              <li>info@ugunjadaily.co.ke</li>
              <li>+254 700 000 000</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs">
          &copy; {new Date().getFullYear()} Ugunja Daily Report. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
