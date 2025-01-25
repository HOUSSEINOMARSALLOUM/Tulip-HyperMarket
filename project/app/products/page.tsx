import { ProductCard } from "@/components/product-card";
import { ProductFilters } from "@/components/product-filters";

const products = [
  {
    id: 1,
    name: "Organic Bananas",
    description: "Fresh organic bananas from local farmers",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80",
    category: "Fruits",
  },
  {
    id: 2,
    name: "Fresh Milk",
    description: "Farm-fresh whole milk",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80",
    category: "Dairy",
  },
  {
    id: 3,
    name: "Whole Grain Bread",
    description: "Freshly baked whole grain bread",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    category: "Bakery",
  },
  {
    id: 4,
    name: "Fresh Tomatoes",
    description: "Ripe and juicy tomatoes",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80",
    category: "Vegetables",
  },
];

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 md:px-6">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Browse our selection of fresh products.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <ProductFilters />
          </div>
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}