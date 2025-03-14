import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";
import { Button } from "../Button/Button";
import Image from "next/image";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: "w-[350px]",
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </>
    ),
  },
}

export const WithGradientBackground: Story = {
  args: {
    className: "w-[350px] bg-gradient-to-r from-[#4461F2]/20 to-[#A953FF]/20 border-none",
    children: (
      <>
        <CardHeader>
          <CardTitle className="text-white">Premium Content</CardTitle>
          <CardDescription>Available only for ticket holders</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Exclusive behind-the-scenes content and special perks for our valued ticket holders.
          </p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Access Content</Button>
        </CardFooter>
      </>
    ),
  },
}

export const ImageCard: Story = {
  args: {
    className: "w-[350px] overflow-hidden",
    children: (
      <>
        <div className="relative aspect-video">
          <Image src="/placeholder.svg" alt="Card cover" className="object-cover w-full h-full" />
        </div>
        <CardHeader>
          <CardTitle>Card with Image</CardTitle>
          <CardDescription>This card includes a cover image</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Additional content can go here.</p>
        </CardContent>
      </>
    ),
  },
}

export const SimpleCard: Story = {
  args: {
    className: "w-[350px] p-6",
    children: <p>This is a simple card with just padding and content.</p>,
  },
}

export const InteractiveCard: Story = {
  args: {
    className: "w-[350px] hover:border-primary transition-colors cursor-pointer",
    children: (
      <>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>This card has hover and click states</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Try hovering and clicking this card.</p>
        </CardContent>
        <CardFooter className="gap-2">
          <Button>Accept</Button>
          <Button>Cancel</Button>
        </CardFooter>
      </>
    ),
  },
}

