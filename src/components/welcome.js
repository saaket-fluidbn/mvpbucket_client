import React from 'react';


import illustration1 from '../svg/launch.svg';
import AllProducts from '../svg/all-products.svg';
import illustration2 from '../svg/understand-product.svg';
import illustration3 from '../svg/app-user.svg';
import res from '../svg/res.svg';
import acad from '../svg/academic.svg';
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
                <h1 className="sleek-font"> Launch and manage your<br/> Mvp <br /> Project</h1>
                
                <div className="left">
                    <h2 className="slight-weight-font" style={{ color: 'black',}}>Put all your projects and related docs at one place.</h2>
                    <img src={AllProducts} className="App-illus" alt=" empowerment" />
                </div>
                <div className="right">
                    <h2 className="slight-weight-font" style={{ color: 'black' }}>
                        Better define your project.
                    </h2>
                    <img src={illustration2} className="App-illus" alt="empowerment" />
                </div>
                <div className="left">
                    <h2 className="slight-weight-font" style={{ color: 'black', }}>Share your project repository with anyone or<br/> include it in your<span style={{ fontSize: '60px' }}> resume.</span></h2>
                    <img src={res} className="App-illus" alt="empowerment" />
                </div>
                <div className="right">
                    <h2 className="slight-weight-font" style={{ color: 'black', }}>Show that your projects are beyond<span style={{ fontSize: '60px' }}> academic</span> ones.</h2>
                    <img src={acad} className="App-illus" alt="empowerment" />
                </div>
                <div className="left">
                    <h2 className="slight-weight-font" style={{ color: 'black' }}>
                        Let others know about the next <span style={{ fontSize: '60px' }}>big thing</span> you have.
                        </h2>
                    <img src={illustration3} className="App-illus" alt="empowerment" />
                </div>
            </header>

<Footer/>
        </Container>

    );
}


export default Welcome;
