
import { Button } from '@/components/ui/button';

interface CollectionBannerProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  alignment?: 'left' | 'right';
}

const CollectionBanner = ({ 
  title, 
  subtitle, 
  image, 
  buttonText, 
  buttonLink,
  alignment = 'left' 
}: CollectionBannerProps) => {
  return (
    <div 
      className="relative h-96 md:h-[500px] bg-cover bg-center mb-16"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
        <div className={`container mx-auto px-4 ${alignment === 'right' ? 'text-right' : 'text-left'}`}>
          <div className={`max-w-lg ${alignment === 'right' ? 'ml-auto' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
            <p className="text-lg text-white/90 mb-8">
              {subtitle}
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-black hover:bg-electric-500 hover:text-white transition-colors"
            >
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBanner;
