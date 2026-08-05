import BestSelling from "@/components/layout/BestSelling";
import Brands from "@/components/layout/Brands";
import CustomerReview from "@/components/layout/CustomerReview";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import LeadTheWay from "@/components/layout/LeadTheWay";
import TrendingProducts from "@/components/layout/TrendingProducts";

function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <TrendingProducts />
      <LeadTheWay />
      <BestSelling />
      <CustomerReview />
      <Footer />
    </>
  );
}

export default Home;
