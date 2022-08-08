import { UserConsumer } from "../context/authenticator";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserConsumer>
      <Component {...pageProps} />
    </UserConsumer>
  );
}

export default MyApp;
