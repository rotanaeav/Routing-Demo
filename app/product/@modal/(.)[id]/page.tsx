import Link from "next/link";

export default async function ProductModal({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-80 space-y-4">
        <h2 className="text-xl font-bold">Product {id}</h2>
        <p>This is the modal view.</p>

        <div className="flex gap-3 justify-end">
          <Link
            href="/product"
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Back
          </Link>

          <a
            href={`/product/${id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            View Full Page
          </a>
        </div>
      </div>
    </div>
  );
}
