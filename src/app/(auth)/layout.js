import StrongPasswordScript from "@/app/components/StrongPasswordScript";
import "../globals.css";

export default function SignUpLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <StrongPasswordScript />
      </body>
    </html>
  );
}
