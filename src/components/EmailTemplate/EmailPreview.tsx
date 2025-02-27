"use client";

import { Html } from "@react-email/html";
import React from "react";

interface EmailPreviewProps {
  children: React.ReactNode;
}

export const EmailPreview = ({ children }: EmailPreviewProps) => (
  <Html>{children}</Html>
);
