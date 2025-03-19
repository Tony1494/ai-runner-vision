
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white/50 backdrop-blur-sm border-t border-border py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <span className="text-runner">AI Runner</span>
              <span className="font-light">Vision</span>
            </Link>
            <p className="text-muted-foreground">
              Elevate your running with AI-powered insights and personalized training plans.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-runner transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-runner transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-muted-foreground hover:text-runner transition-colors">
                  Training Plans
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-runner transition-colors">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Stay Connected</h4>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest updates and running tips.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-md border border-input focus:outline-none focus:ring-1 focus:ring-runner flex-1"
              />
              <button className="bg-runner text-white px-4 py-2 rounded-r-md hover:bg-runner-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} AI Runner Vision. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={16} className="text-runner fill-runner" />
            <span>for runners</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
