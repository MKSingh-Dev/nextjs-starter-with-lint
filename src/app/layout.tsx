import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ThemeProvider from '~/components/molecules/theme-provider';
import { Toaster } from '~/components/ui/sonner';
import { cn } from '~/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
            <body className={cn(inter.className, 'flex flex-col min-h-svh antialiased')}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Toaster />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
