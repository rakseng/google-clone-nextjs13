import Footer from '@/components/Footer';
import './../globals.css';
import SearchHeader from '@/components/SearchHeader';

export const metadata = {
  title: 'Google Clone Next js 13',
  description: 'Google clone created by Next js 13',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}

      {/* Footer */}
    </div>
  );
}
