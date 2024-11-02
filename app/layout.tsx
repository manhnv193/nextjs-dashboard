import '@/app/ui/global.css'
import { inter} from '@/app/ui/fonts'

// Định nghĩa một layout chung cho tất cả các trang con trong thư mục
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
