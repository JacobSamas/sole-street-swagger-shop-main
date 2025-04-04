
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    }
  };
  
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay in the Loop</h2>
          <p className="text-lg text-gray-300 mb-8">
            Sign up for our newsletter to receive exclusive offers, early access to drops, and style inspiration.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-electric-500 transition-colors"
                required
              />
              <label 
                className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                  focused || email ? 'text-xs text-electric-400 -top-2.5 bg-black px-1' : 'text-gray-400 top-3'
                }`}
              >
                Your Email
              </label>
            </div>
            <Button 
              type="submit"
              className="bg-electric-500 hover:bg-electric-600 text-white py-3 px-6 rounded-md"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
