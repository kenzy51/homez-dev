"use client";
import ScrollToTop from "./components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../public/scss/main.scss";
import { DM_Sans, Poppins } from "next/font/google";
import { useEffect } from "react";
import { NextIntlClientProvider } from "next-intl";

if (typeof window !== "undefined") {
  import("bootstrap");
}

// DM_Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = import(`../../messages/${locale}.json`).default;
  } catch (error) {
    notFound();
  }
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang={locale}>
      <body
        className={`body  ${poppins.className} ${dmSans.className}`}
        cz-shortcut-listen="false"
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="wrapper ovh">{children}</div>
        </NextIntlClientProvider>

        <ScrollToTop />
      </body>
    </html>
  );
}
