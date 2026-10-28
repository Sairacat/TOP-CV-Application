import '../styles/Greeting.css';
import greetingLogo from '../assets/greeting-logo.svg';

function Greeting({handleForward}) {

    return(
        <div className="greeting-container">
            <section id="greeting">
                <img src={greetingLogo} alt="a greeting logo" width="300" height="300"/>
                <div>
                    <p>Build your CV/Resume here!</p>
                    <p>Free of charge!</p>
                </div>
                <button onClick={handleForward}>Get Started</button>
            </section>          
        </div>
    )
}

export {Greeting};