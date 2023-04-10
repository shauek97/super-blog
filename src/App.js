import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <main>
      <Container/>
      <Footer  />
    </main>
  );
}

export default App;
