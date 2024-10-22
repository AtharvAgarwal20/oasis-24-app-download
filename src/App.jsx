import styles from "./app.module.scss";

import ImagePreloader from "../components/ImagePreloader/ImagePreloader";

function App() {
  const imagePreloadArray = ["/desktopBackground.svg", "/phones.png"];
  return (
    <>
      <ImagePreloader imageUrls={imagePreloadArray}>
        <div className={styles.container}>
          <div className={styles.content}>
            <img
              src={imagePreloadArray[1]}
              alt="phones"
              className={styles.phones}
            />
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
