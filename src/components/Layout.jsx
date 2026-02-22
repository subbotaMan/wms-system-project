import {Header} from "./Header.jsx";
import {Outlet} from "react-router-dom";
import {Container} from "./Container.jsx";
import {Footer} from "./Footer.jsx";
import {ButtonToTopAnchor} from "./ButtonToTopAnchor.jsx";
import {navLinks} from "../data/data.js";


export const Layout = () => {
    return (
        <>
            <Header navLinks={navLinks} />

            <Container>
                <Outlet/>
                <ButtonToTopAnchor/>
            </Container>

            <Footer navLinks={navLinks} />
        </>
    )
}