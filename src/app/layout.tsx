import { ReactNode } from 'react';
import Provider from '@/libs/provider';
import './global.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <h1 className="text-red-500">Rookies</h1>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
