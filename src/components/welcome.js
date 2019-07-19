import React from 'react';


import illustration1 from '../svg/launch.svg';
import AllProducts from '../svg/all-products.svg';
import illustration2 from '../svg/understand-product.svg';
import illustration3 from '../svg/app-user.svg';
import Container from '@material-ui/core/Container';
import SignupButton from './buttons/signupButton';
import LoginButton from './buttons/loginButton';
import Logo from './logo';
import Footer from './common/footer';
const Welcome = () => {




    return (

        <Container maxWidth="lg">

<br/>
           <Logo/>

            <img src={illustration1} className="App-illus" alt="women empowerment" />


            <header className="App-header">
                <div className="left">

                    <SignupButton />
                    <LoginButton />

                </div>
                <h1 className="sleek-font"> Launch and manage your<br/> Mvp<br /> Prototype <br /> Project</h1>
                
                <div className="left">
                    <h2 className="slight-weight-font" style={{ color: 'black',}}>Put all your projects and related docs at one place.</h2>
                    <img src={AllProducts} className="App-illus" alt="women empowerment" />
                </div>
                <div className="right">
                    <h2 className="slight-weight-font" style={{ color: 'black' }}>
                        Better define your product with our <span style={{ fontSize: '60px' }}>Researched </span>
                     product definition.
                    </h2>
                    <img src={illustration2} className="App-illus" alt="women empowerment" />
                </div>
                <div className="left">
                    <h2 className="slight-weight-font" style={{ color: 'black' }}>
                        Let others know about the next <span style={{ fontSize: '60px' }}>big thing</span> you have.
                        </h2>
                    <img src={illustration3} className="App-illus" alt="women empowerment" />
                </div>
            </header>

<Footer/>
        </Container>

    );
}


export default Welcome;
