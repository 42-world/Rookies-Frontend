import { ReactNode } from 'react';
import './global.css';
import Provider from '@/libs/provider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <h1 className='text-red-500'>Rookies</h1>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
