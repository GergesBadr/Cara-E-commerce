import Button from "../../components/Button";

function DiscountBanner() {
  return (
    <section
      className="mt-24 flex min-h-[450px] flex-col items-center justify-center
    bg-[url('./assets/banners/discount.jpg')] bg-cover px-8 text-center"
    >
      <p className="mb-4 text-lg tracking-wider text-white">Repair Sevices</p>
      <h2 className="heading-2 mb-6 text-white">
        Up to <span className="text-red-600">70% off</span> &mdash; All t-Shirts
        & Accessories
      </h2>
      <Button variation="sec" extraClasses="text-white">
        Explore more
      </Button>
    </section>
  );
}

export default DiscountBanner;
