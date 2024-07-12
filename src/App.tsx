import "./App.css";
import NavBarTop from "./components/Navbartop";
import ArticleSection from "./components/ArticlesSection";
import AboutUs from "./components/AboutUs";
import SubscribeSection from "./components/SubscribeSection";
import BottomNav from "./components/BottomNav";
function App() {
  return (
    <div>
      <NavBarTop />
      <ArticleSection />
      <AboutUs />
      <SubscribeSection />
      <BottomNav />
    </div>
  );
}

export default App;
