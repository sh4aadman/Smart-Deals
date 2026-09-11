function LoadingScreen() {
  return (
    <section className="h-screen bg-white z-50 fixed inset-0 overflow-hidden flex justify-center items-center">
      <span className="loading loading-infinity loading-xl"></span>
    </section>
  );
}

export default LoadingScreen;
