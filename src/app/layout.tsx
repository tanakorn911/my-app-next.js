import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"; // นำเข้า Separator ที่ติดตั้งผ่าน CLI

export const metadata: Metadata = {
  title: "NextApp - บทเรียน Next.js 16",
  description: "เว็บแอปพลิเคชันตัวอย่างที่สร้างด้วย Next.js, Tailwind CSS และ shadcn/ui",
  images: [
    {
      url: "./favicon.ico",
      width: 1200,
      height: 630,
      alt: "NextApp - บทเรียน Next.js 16",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="antialiased min-h-screen bg-white">
        {/* Navigation Bar: แบบ Sticky พร้อมเอฟเฟกต์ Blur */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
          <div className="container mx-auto flex h-16 items-center px-4">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-2 mr-8">
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                NextApp
              </span>
            </Link>

            {/* Menu Section พร้อมการใช้ Separator แบ่งหมวดหมู่ */}
            <nav className="flex flex-1 items-center space-x-4 text-sm font-medium">
              <Link
                href="/"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                หน้าแรก
              </Link>
              
              <Separator orientation="vertical" className="h-4" /> {/* เส้นคั่นแนวตั้ง */}

              <Link
                href="/about"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                เกี่ยวกับเรา
              </Link>

              <Separator orientation="vertical" className="h-4" />

              <Link
                href="/products"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                สินค้า
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content: แก้ปัญหาข้อความชิดขอบจอด้วย Container และ Padding */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}