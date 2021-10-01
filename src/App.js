import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Plans from "./pages/Plans/Plans";

import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import DeliveryApp from "./pages/DeliveryApp/DeliveryApp";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plans" exact component={Plans} />

        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/delivery-app" exact component={DeliveryApp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
