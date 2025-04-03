import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers"; // biz yozgan client component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GreenShop",
  icons: {
    // add icon paths if needed
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}













// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Providers from "./providers";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "GreenShop",
//   icons: {

//   },
// };

// export default function RootLayout({ children }) {

//   const queryClient = new QueryClient()

//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>



//         <QueryClientProvider client={queryClient}>
//           <Providers>
//             {children}
//           </Providers>
//         </QueryClientProvider>



//       </body>
//     </html>
//   );
// }


