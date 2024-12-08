import localFont from "next/font/local";
import "./globals.css";
import "./main.css"
import "./vendor/bootstrap/css/bootstrap.min.css"
import "./vendor/bootstrap-icons/bootstrap-icons.css"
import "./vendor/aos/aos.css"
import "./vendor/fontawesome-free/css/all.min.css"
import "./vendor/glightbox/css/glightbox.min.css"
import "./vendor/swiper/swiper-bundle.min.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Connect Logistics",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script src="/js/bootstrap/js/bootstrap.bundle.min.js" async ></script>
        <script src="/js/php-email-form/validate.js" async ></script>
        <script src="/js/aos/aos.js" async ></script>
        <script src="/js/glightbox/js/glightbox.min.js" async ></script>
        <script src="/js/imagesloaded/imagesloaded.pkgd.min.js" async ></script>
        <script src="/js/isotope-layout/isotope.pkgd.min.js" async ></script>
        <script src="/js/swiper/swiper-bundle.min.js" async ></script>
        <script src="/js/purecounter/purecounter_vanilla.js" async ></script>
        <script src="/js/main.js" async ></script>
      </body>
    </html>
  );
}