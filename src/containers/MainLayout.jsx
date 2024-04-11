import Example from "../components/Example";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";

function MainLayout() {
    return (
        <>
          <Header/>
          <Home/>
          <Example/>
          <Footer/>
        </>
        );
}

export default MainLayout;