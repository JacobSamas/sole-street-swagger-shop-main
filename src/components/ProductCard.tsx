
import { useState } from 'react';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: string[];
}

const ProductCard = ({ id, name, price, image, colors }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div 
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="product-image w-full h-80 object-cover"
        />
        
        <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}>
          <button className="bg-white text-black font-medium px-6 py-2 rounded-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            Quick View
          </button>
        </div>
        
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
        >
          <Heart 
            size={18} 
            className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"} 
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="font-bold text-lg mt-1">${price.toFixed(2)}</p>
        
        <div className="mt-3 flex items-center space-x-2">
          {colors.map((color) => (
            <div 
              key={color}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="text-sm text-gray-500">{colors.length} colors</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
