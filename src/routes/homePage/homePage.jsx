import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';
import { AuthContext } from '../../context/AuthContext.jsx';

function HomePage() {
    const {currentUser} = useContext(AuthContext);
    console.log(currentUser);

    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get your Dream Place</h1>
                    <p>
                    Welcome to NestQuest, the ultimate destination for all your real estate needs. 
                    Whether you are buying, selling, or renting, our platform offers a seamless 
                    experience to help you find your perfect home.</p>
                    
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt=""/>
            </div>
        </div>
    );
}

export default HomePage;
