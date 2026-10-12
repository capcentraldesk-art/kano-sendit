import './globals.css';

export const metadata = {
  title: 'Kano SendIt',
  description: 'Fast delivery for Kano',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
