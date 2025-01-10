import './App.css'
import './globals.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Button } from './components/ui/button';
import mainLogo from "./Main Icon.png";
import { ModeToggle } from './components/mode-toggle';
import MainNav from '@/components/menus/mainNav';
import MobileNav from '@/components/menus/mobileNav';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className='mx-auto flex max-w-7xl items-center justify-between p-6'>
        <Button variant={"link"} onClick={() => navigate("/")}>
          <img src={mainLogo} alt="<w/>" className="w-[75px]" />
        </Button>
        <div />
        <div className='flex flex-row'>
          <MainNav />
          <MobileNav />
        </div>
      </header>

      <Outlet />

      <footer className='mx-auto flex max-w-7xl items-center justify-between p-6'>
        <div className='grid grid-cols-2 w-full'>
          <div>
            <span className='font-bold'>User Interface</span>
            <div>
              <ModeToggle />
            </div>
          </div>
          <div>
            <span className='font-bold'>Information</span>
            <div className="flex flex-col">
              <Link to="/privacy/">Privacy Policy</Link>
              <Link to="/terms/">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;