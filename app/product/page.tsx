import Link from "next/link";

export default function ProductList() {
  return (
    <div className="p-10">
      <h1>Products</h1>
      <ul>
        <li><Link href="/product/1">Product 1</Link></li>
        <li><Link href="/product/5">Product 5</Link></li>
      </ul>
    </div>
  );
}
