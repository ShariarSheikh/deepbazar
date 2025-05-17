import { ProductStatus, ProductStatusType } from '@/types/product.types';

export function productStatusStyle(status: ProductStatusType): string {
  if (status === ProductStatus.Approved)
    return 'bg-[#bbf7d054] text-green-600 text-[12px] px-3 py-1 rounded-[6px]';

  if (status === ProductStatus.Pending)
    return 'bg-[#ffd10026] text-yellow-600 text-[12px] px-3 py-1 rounded-[6px]';

  if (status === ProductStatus.Rejected)
    return 'bg-red-200 text-red-600 text-[12px] px-3 py-1 rounded-[6px]';

  if (status === ProductStatus.Testing)
    return 'bg-[#b0e0e65c] text-[#5f9ea0] text-[12px] px-3 py-1 rounded-[6px]';
  else return 'text-[12px] px-3 py-1 rounded-[6px] text-gray-600';
}
