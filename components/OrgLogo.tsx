import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { initialsFor } from "@/lib/logos";

export default function OrgLogo({
  name,
  logoFile,
  alt,
}: {
  name: string;
  logoFile: string;
  alt: string;
}) {
  const filePath = path.join(process.cwd(), "public", "logos", logoFile);
  const hasLogo = existsSync(filePath);

  if (!hasLogo) {
    return (
      <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-red-400">
        {initialsFor(name)}
      </span>
    );
  }

  return (
    <Image
      src={`/logos/${logoFile}`}
      alt={alt}
      fill
      sizes="80px"
      className="object-contain p-2"
    />
  );
}
