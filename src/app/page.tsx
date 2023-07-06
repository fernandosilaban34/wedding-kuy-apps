import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./layout/Header";

export default function Home() {
  return (
        <div className="flex justify-center">
          {/* <Footer /> */}
          <div className="flex h-screen w-[450px] bg-slate-400">
            <Header />
          </div>
        </div>
  );
}
