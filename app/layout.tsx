import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* 🔊 GLOBAL AUDIO (hidden) */}
        <audio id="global-audio" src="/music.mp3" loop />
      </body>
    </html>
  );
}