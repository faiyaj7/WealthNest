import HeroBanner from "../components/HeroBanner";
import Income from "../components/income/Income";
import Investing from "../components/Investing";
import Pricing from "../components/Pricing";
import Trust from "../components/Trust";


export default function Home() {
  return (
    <>
      <HeroBanner />
      <Investing />
      <Trust />
      <Income />
      <Pricing />
    </>
  );
}
