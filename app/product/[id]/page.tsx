export default async function ProductDetail({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Product ID: {id}</h1>
    </div>
  );
}
