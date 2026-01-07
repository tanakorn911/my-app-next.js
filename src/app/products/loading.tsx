import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        {/* กำหนดขนาดและสีผ่าน Tailwind classes */}
        <Spinner className="size-10 text-purple-500" />
        <p className="text-sm text-slate-500 animate-pulse">กำลังโหลดข้อมูล...</p>
      </div>
    </div>
  );
}