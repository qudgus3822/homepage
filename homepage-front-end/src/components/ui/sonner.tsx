"use client";

import { useTheme } from "next-themes"; // 변경일시: 2025-07-25, 김병현 수정 - @version 패턴 제거
import { Toaster as Sonner, ToasterProps } from "sonner"; // 변경일시: 2025-07-25, 김병현 수정 - @version 패턴 제거

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
