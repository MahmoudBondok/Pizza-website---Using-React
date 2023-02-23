import './Home.css';
import { FaPizzaSlice } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

function Home() {
    return (
        <div className="app">
            <div className='container'>
                <div className='overly'></div>
                <div className='text-info'>
                    <h1 className='logo'>
                        Pizza
                    </h1>
                    <div className='text'>
                        <span>Menu</span>
                        <FaPizzaSlice />
                    </div>
                </div>
                <div className='heading'>
                    <h1>greatest<br />Pizza Ever</h1>
                    <h4>ready in 60 Seconds</h4>
                    <Button className='btn'>
                        Place Order
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;