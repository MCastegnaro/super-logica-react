import { Link } from "react-router-dom";
import {
    HomeContainer,
    Navbar,
    LogoMenu,
    NavMenu,
    NavItem,
    Button,
    Content,
    Title,
    Subtitle,
    Item,
    StyledLink,
    ButtonContent,
} from "./styles";

import ImgLogo from "../../assets/logo.png";

const Home = () => {
    return (
        <HomeContainer>
            <Navbar>
                <LogoMenu>
                    <Link to="/home">
                        <img src={ImgLogo} alt="logo" />
                    </Link>
                </LogoMenu>

                <NavMenu>
                    <NavItem>
                        <StyledLink to="/home">
                            <Item>Home</Item>
                        </StyledLink>
                    </NavItem>

                    <NavItem>
                        <StyledLink to="/home">
                            <Item>Serviços</Item>
                        </StyledLink>
                    </NavItem>

                    <NavItem>
                        <StyledLink to="/home">
                            <Item>Sobre nós</Item>
                        </StyledLink>
                    </NavItem>

                    <NavItem>
                        <StyledLink to="/home">
                            <Item>FAQ</Item>
                        </StyledLink>
                    </NavItem>

                    <NavItem>
                        <StyledLink to="/home">
                            <Item>Login</Item>
                        </StyledLink>
                    </NavItem>
                </NavMenu>
            </Navbar>
            <Content>
                <Title>Empreendendo juntos, todos os dias.</Title>
                <Subtitle>
                    Softwares de gestão para administração de condomínios,
                    imobiliárias, escolas e negócios que cobram assinaturas e
                    pagamentos recorrentes.
                </Subtitle>

                <Button>
                    <StyledLink to="/home">
                        <ButtonContent>Assine um plano</ButtonContent>
                    </StyledLink>
                </Button>
            </Content>
        </HomeContainer>
    );
};

export default Home;
