import React, {ComponentPropsWithoutRef} from "react";

type Color = "red" | "blue" | "green" | "yellow" | "purple"
type FontSize = "sm" | "base" | "xl"

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    bgColor: Color,
    fontSize: FontSize,
    children?: string
}

export type ComponentProps = {
    children: React.ReactNode
}