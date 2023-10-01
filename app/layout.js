import { Providers } from "./Providers";
import "./globals.css";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Join Go Now",
  description: "",
};
// const lufga = localFont({
//   src: [
//     {
//       path: "./font/Fontspring-DEMO-lufga-bold.otf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./font/Fontspring-DEMO-lufga-regular.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./font/Fontspring-DEMO-lufga-semibold.otf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "./font/Fontspring-DEMO-lufga-medium.otf",
//       weight: "500",
//       style: "normal",
//     },
//   ],
// });

const montserrat = Montserrat({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
