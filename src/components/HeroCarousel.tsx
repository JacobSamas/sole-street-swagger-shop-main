
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Urban Stride Collection",
    subtitle: "Elevate your street style with our latest drop",
    image: "/images/hero-1.jpg",
    ctaText: "Shop Now",
    ctaLink: "#new-arrivals"
  },
  {
    id: 2,
    title: "Limited Edition Series",
    subtitle: "Premium craftsmanship meets bold design",
    image: "/images/hero-2.jpg",
    ctaText: "Explore Collection",
    ctaLink: "#limited-drops"
  },
  {
    id: 3,
    title: "Summer Essentials",
    subtitle: "Stay cool with breathable designs",
    image: "/images/hero-3.jpg",
    ctaText: "View All",
    ctaLink: "#best-sellers"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                {slide.title}
              </h1>
              <p className="text-xl text-white/80 mb-8">
                {slide.subtitle}
              </p>
              <Button 
                asChild
                size="lg" 
                className="bg-electric-500 hover:bg-electric-600 text-white font-medium px-8 py-6 rounded-md"
              >
                <a href={slide.ctaLink}>{slide.ctaText}</a>
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <div className="absolute bottom-10 right-10 flex space-x-4">
        <button 
          onClick={prevSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
