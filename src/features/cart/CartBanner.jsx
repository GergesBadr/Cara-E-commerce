function CartBanner() {
  return (
    <section className="h-[380px] bg-[url('./assets/banners/cart.jpg')] bg-cover bg-right bg-no-repeat md:bg-top">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-[rgb(0,0,0,30%)] px-6 text-center text-white">
        <h1 className="heading-1">#Your_cart</h1>
        <p className="text-lg tracking-wider text-gray-200">
          Add your coupon code & Save up to 70%
        </p>
      </div>
    </section>
  );
}

export default CartBanner;
