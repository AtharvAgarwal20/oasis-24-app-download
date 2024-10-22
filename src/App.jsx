import styles from "./app.module.scss";

import ImagePreloader from "../components/ImagePreloader/ImagePreloader";

function App() {
  const imagePreloadArray = [
    "/desktopBackground.svg",
    "/phones.png",
    "/apple.svg",
    "/android.svg",
  ];
  return (
    <>
      <ImagePreloader imageUrls={imagePreloadArray}>
        <div className={styles.container}>
          <div className={styles.mobileContent}>
            <h1>ENTIRE FEST AT YOUR FINGERTIPS!</h1>
            <img
              src={imagePreloadArray[1]}
              alt="phones"
              className={styles.phones}
            />
            <h2>DOWNLOAD THE APP NOW</h2>
            <div className={styles.btnContainer}>
              <button>
                <img src={imagePreloadArray[2]} alt="apple download button" />
              </button>
              <button>
                <img src={imagePreloadArray[3]} alt="android download button" />
              </button>
            </div>
          </div>
          <div className={styles.desktopContent}>
            <div className={styles.left}>
              <h1>ENTIRE FEST AT YOUR FINGERTIPS!</h1>
              <h2>DOWNLOAD THE APP NOW</h2>
              <div className={styles.btnContainer}>
                <button>
                  <img src={imagePreloadArray[2]} alt="apple download button" />
                </button>
                <button>
                  <img
                    src={imagePreloadArray[3]}
                    alt="android download button"
                  />
                </button>
              </div>
            </div>
            <img
              src={imagePreloadArray[1]}
              alt="phones"
              className={styles.phones}
            />
            <footer>
              MADE WITH{" "}
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.978482 2.60971C4.896 -2.49986 9.10397 1.13021 10.9507 3.10003C12.7974 1.13021 16.7958 -2.49986 20.9229 2.60971C22.0925 4.45638 23.1759 9.36856 18.1529 14.2439C16.2446 15.9059 12.1326 19.784 10.9507 22C9.76876 19.784 5.65679 15.9059 3.74854 14.2439C-1.2745 9.36856 -0.191096 4.45638 0.978482 2.60971Z"
                  fill="#D33026"
                />
              </svg>{" "}
              BY DVM
            </footer>
          </div>
        </div>
        <div className={styles.backgroundGradient}></div>
        <img
          src={imagePreloadArray[0]}
          className={styles.background}
          alt="background"
        />
      </ImagePreloader>
    </>
  );
}

export default App;
