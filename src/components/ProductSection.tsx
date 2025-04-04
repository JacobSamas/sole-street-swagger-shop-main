
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  id: string;
}

const ProductSection = ({ title, products, id }: ProductSectionProps) => {
  return (
    <section id={id} className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          {title}
          <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-electric-500"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
