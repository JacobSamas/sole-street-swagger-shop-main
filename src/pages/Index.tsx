
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import ProductSection from '@/components/ProductSection';
import CollectionBanner from '@/components/CollectionBanner';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

// Sample product data
const newArrivals = [
  {
    id: 1,
    name: "Cloud Runner X",
    price: 149.99,
    image: "/images/product-1.jpg",
    colors: ["#000000", "#FFFFFF", "#0099FF"]
  },
  {
    id: 2,
    name: "Urban Track Lite",
    price: 129.99,
    image: "/images/product-2.jpg",
    colors: ["#000000", "#6D6D6D", "#F5F5F5"]
  },
  {
    id: 3,
    name: "Velocity Air Max",
    price: 179.99,
    image: "/images/product-3.jpg",
    colors: ["#000000", "#0099FF", "#FF0000"]
  },
  {
    id: 4,
    name: "Stealth Boost",
    price: 159.99,
    image: "/images/product-4.jpg",
    colors: ["#000000", "#FFFFFF"]
  }
];

const bestSellers = [
  {
    id: 5,
    name: "Classic Street",
    price: 99.99,
    image: "/images/product-5.jpg",
    colors: ["#000000", "#FFFFFF", "#FFD700"]
  },
  {
    id: 6,
    name: "Retro Sport",
    price: 119.99,
    image: "/images/product-6.jpg",
    colors: ["#000000", "#FF0000", "#0000FF"]
  },
  {
    id: 7,
    name: "Urban Canvas",
    price: 89.99,
    image: "/images/product-7.jpg",
    colors: ["#000000", "#FFFFFF", "#006400"]
  },
  {
    id: 8,
    name: "Metro Flex",
    price: 139.99,
    image: "/images/product-8.jpg",
    colors: ["#000000", "#808080", "#0099FF"]
  }
];

const limitedDrops = [
  {
    id: 9,
    name: "Neon Nights Edition",
    price: 199.99,
    image: "/images/product-9.jpg",
    colors: ["#000000", "#FF00FF"]
  },
  {
    id: 10,
    name: "Urban Camo",
    price: 189.99,
    image: "/images/product-10.jpg",
    colors: ["#000000", "#556B2F"]
  },
  {
    id: 11,
    name: "Artist Collab Series",
    price: 219.99,
    image: "/images/product-11.jpg",
    colors: ["#000000", "#FFFFFF", "#FFD700"]
  },
  {
    id: 12,
    name: "Tech Runner Pro",
    price: 229.99,
    image: "/images/product-12.jpg",
    colors: ["#000000", "#0099FF"]
  }
];

const Index = () => {
  // Create placeholder images on load
  useEffect(() => {
    // This would be replaced with actual product images in a real application
    console.log("Creating placeholder images on first load");
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      
      <div className="py-8 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $150</p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Secure Checkout</h3>
              <p className="text-gray-600">100% protected payments</p>
            </div>
          </div>
        </div>
      </div>
      
      <ProductSection 
        title="New Arrivals" 
        products={newArrivals} 
        id="new-arrivals"
      />
      
      <CollectionBanner 
        title="Urban Athletics Collection" 
        subtitle="Performance meets style in our latest city-inspired collection."
        image="/images/collection-1.jpg"
        buttonText="Explore Collection"
        buttonLink="#"
        alignment="left"
      />
      
      <ProductSection 
        title="Best Sellers" 
        products={bestSellers} 
        id="best-sellers"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96 overflow-hidden">
            <img src="/images/lifestyle-1.jpg" alt="Urban lifestyle" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Men's Collection</h3>
                <a href="#" className="text-white font-medium hover:text-electric-300 transition-colors inline-flex items-center">
                  Shop Now <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-96 overflow-hidden">
            <img src="/images/lifestyle-2.jpg" alt="Urban lifestyle" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Women's Collection</h3>
                <a href="#" className="text-white font-medium hover:text-electric-300 transition-colors inline-flex items-center">
                  Shop Now <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ProductSection 
        title="Limited Drops" 
        products={limitedDrops} 
        id="limited-drops"
      />
      
      <CollectionBanner 
        title="The Streetwear Edit" 
        subtitle="Curated styles that define the pulse of urban culture."
        image="/images/collection-2.jpg"
        buttonText="View Lookbook"
        buttonLink="#"
        alignment="right"
      />
      
      <section id="collections" className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
            Featured Collections
            <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-electric-500"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/images/collection-card-1.jpg" alt="Athletic Collection" className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Athletic Collection</h3>
                <p className="text-gray-600 mb-4">Performance shoes for serious athletes</p>
                <a href="#" className="font-medium text-electric-500 hover:text-electric-600 inline-block">Explore Collection →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/images/collection-card-2.jpg" alt="Casual Collection" className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Casual Collection</h3>
                <p className="text-gray-600 mb-4">Everyday comfort with street style</p>
                <a href="#" className="font-medium text-electric-500 hover:text-electric-600 inline-block">Explore Collection →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="/images/collection-card-3.jpg" alt="Designer Collection" className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Designer Collection</h3>
                <p className="text-gray-600 mb-4">Limited edition designer collaborations</p>
                <a href="#" className="font-medium text-electric-500 hover:text-electric-600 inline-block">Explore Collection →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
