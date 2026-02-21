import {Header} from "./Header.jsx";
import {Outlet} from "react-router-dom";
import {Container} from "./Container.jsx";
import {Footer} from "./Footer.jsx";
import {ButtonToTopAnchor} from "./ButtonToTopAnchor.jsx";


export const Layout = () => {
    return (
        <>
            <Header/>

            <Container>
                <Outlet/>
                <ButtonToTopAnchor/>
            </Container>

            <Footer/>
        </>
    )
}