"use client";

import { Audio } from "react-loader-spinner";

interface Props {
  loading?: boolean;
}

export default function LoadingSpinner({ loading = true }: Props) {
  if (!loading) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60"
      style={{ zIndex: 2000 }}
    >
      <Audio height="100" width="100" color="#8A2BE2" />
    </div>
  );
}
