import { Link } from "react-router-dom";
import * as S from "./styles";

import ImgLogo from "../../assets/logo.png";

const Home = () => {
    return (
        <S.HomeContainer>
            <nav>
                <S.LogoMenu>
                    <Link to="/home">
                        <img src={ImgLogo} alt="logo" />
                    </Link>
                </S.LogoMenu>

                <ul>
                    <li>
                        <S.StyledLink to="/home">
                            <p>Home</p>
                        </S.StyledLink>
                    </li>

                    <li>
                        <S.StyledLink to="/home">
                            <p>Serviços</p>
                        </S.StyledLink>
                    </li>

                    <li>
                        <S.StyledLink to="/home">
                            <p>Sobre nós</p>
                        </S.StyledLink>
                    </li>

                    <li>
                        <S.StyledLink to="/home">
                            <p>FAQ</p>
                        </S.StyledLink>
                    </li>

                    <li>
                        <S.StyledLink to="/home">
                            <p>Login</p>
                        </S.StyledLink>
                    </li>
                </ul>
            </nav>
            <S.Content>
                <h1>Empreendendo juntos, todos os dias.</h1>
                <h3>
                    Softwares de gestão para administração de condomínios,
                    imobiliárias, escolas e negócios que cobram assinaturas e
                    pagamentos recorrentes.
                </h3>

                <S.Button>
                    <S.StyledLink to="/home">
                        <p>Assine um plano</p>
                    </S.StyledLink>
                </S.Button>
            </S.Content>
        </S.HomeContainer>
    );
};

export default Home;
