//* Libraries imports
import { Suspense } from "react";

//* Local imports
import { Skeleton } from "@/components/skeleton";
import { SearchPreview } from '../../../components/search-preview';

export default function LoadingSearch() {
  return (
    <div className="flex-col gap-4 flx">
      <Suspense>
        <SearchPreview />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
        <Skeleton className="h-[400px]" />
      </div>
    </div>
  );
}