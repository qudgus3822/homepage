"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"; // 변경일시: 2025-07-25, 김병현 수정 - @version 패턴 제거

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
