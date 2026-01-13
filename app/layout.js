import "./globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "SENU MODZ Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="min-h-screen bg-black/60 flex">
          <Sidebar />
          <main className="flex-1">
            <Navbar />
            <div className="p-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
