import './globals.css';

export const metadata = {
  title: 'Hyperfixate',
  description: 'A place to geek out over my latest obsession',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
