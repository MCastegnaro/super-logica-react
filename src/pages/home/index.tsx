import { Link } from "react-router-dom";
import {
    HomeContainer,
    Navbar,
    NavbarContainer,
    LogoMenu,
    NavMenu,
    NavItem,
    Button,
} from "./styles";

import ImgLogo from "../../assets/logo.png";

const Home = () => {
    return (
        <HomeContainer>
            <Navbar>
                <NavbarContainer>
                    <LogoMenu>
                        <Link to="/">
                            <img src={ImgLogo} alt="logo" />
                        </Link>
                    </LogoMenu>

                    <NavMenu>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/">Serviços</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/">Sobre nós</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/">FAQ</Link>
                        </NavItem>

                        <NavItem>
                            <Link to="/">Login</Link>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Navbar>

            <Button> Assine um plano </Button>
        </HomeContainer>
    );
};

export default Home;
