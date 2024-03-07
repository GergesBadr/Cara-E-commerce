function ShopBanner() {
  return (
    <section
      className="flex h-[300px] flex-col items-center justify-center gap-6
    bg-[url('./assets/banners/shop-page.jpg')] bg-cover bg-center bg-no-repeat px-6 text-center text-white"
    >
      <h1 className="heading-1">#stayhome</h1>
      <p className="text-lg text-gray-300">
        Save more money with coupons & up to 70% OFF!
      </p>
    </section>
  );
}

export default ShopBanner;
