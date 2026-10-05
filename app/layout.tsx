import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "باریچ | پلتفرم استعلام نرخ حمل و نقل بین المللی",
  description: "معرفی باریچ، پلتفرم استعلام و مقایسه نرخ حمل‌ونقل بین‌المللی",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
