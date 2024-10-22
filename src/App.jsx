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
          <div className={styles.content}>
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
