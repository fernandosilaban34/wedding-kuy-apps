import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./layout/Header";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-col h-screen justify-between">
          <div className="content">
            <Header/>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
