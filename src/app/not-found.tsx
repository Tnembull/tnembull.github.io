import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex-col items-center justify-center flex">
      <h1 className="text-center text-3xl font-semibold text-primary">
        Ups… Halaman tidak ditemukan
      </h1>
      <p className="text-center text-base mt-4 text-muted-foreground">
        Maaf, halaman yang Anda cari tidak tersedia. <br />
        Silakan periksa kembali URL atau{" "}<a href="/"> kembali ke beranda</a>?
      </p>
      <Link href={"/"}>
        <Button className="mt-4" variant={"outline"}>
          Kembali ke beranda
        </Button>
      </Link>
    </div>
  );
}
