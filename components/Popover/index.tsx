"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { FC } from "react";

import { styled } from "@/style/stitches.config";

interface PopoverProps {
  label: string;
  content: string;
}

export const Popover: FC<PopoverProps> = ({ label, content }) => (
  <PopoverPrimitive.Root>
    <PopoverTrigger>{label}</PopoverTrigger>
    <PopoverPrimitive.Portal>
      <PopoverContent sideOffset={5}>
        {content}
        <PopoverArrow />
      </PopoverContent>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
);

const PopoverTrigger = styled(PopoverPrimitive.Trigger, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  rounded: "$base",
  px: "$8",
  lineHeight: 1,
  fontWeight: 500,
  height: "35px",
  backgroundColor: "white",
  color: "$violet11",
  boxShadow: "0 2px 10px var(--blackA7)",

  "&:focus": {
    boxShadow: "0 0 0 2px var(--violet11)",
  },

  "&:hover": {
    backgroundColor: "$mauve3",
  },
});

const PopoverContent = styled(PopoverPrimitive.Content, {
  rounded: "$md",
  padding: "$5",
  width: "$md",
  fontSize: "$base",
  lineHeight: 1,
  color: "$violet11",
  backgroundColor: "white",
  justify: "around",
  shadow: "xl",

  "&:focus": {
    outline: "none",
    shadow: "2xl",
  },
});

const PopoverArrow = styled(PopoverPrimitive.Arrow, {
  fill: "white",
});
