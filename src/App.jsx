// https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app
// https://reactrouter.com/docs/en/v6/getting-started/overview#configuring-routes

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage"; // before MoviesGrid
import { MyNavBarComponent } from "./components/MyNavBarComponent";
import { ErrorPage } from "./pages/ErrorPage";

export function App() {
  return (
    <Router className="App">
      <header>
        {<MyNavBarComponent />}

        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/movies-react-v6--debounce" element={<LandingPage />} /> */}
          <Route path="/react2022--movies-react-v6--debounce" element={<LandingPage />} />

          {/* 👇usamos el COMPONENTE (cdo HACEMOS CLICK en una movie)*/}
          {/* al path le pasamos un parametro (:movieId) que es dinámico 
                y lo capturamos en MovieDetails*/}
          {/* "movieId" es el identificador de la película */}
          {/* https://reactrouter.com/docs/en/v6/hooks/use-params */}
          <Route path="/movies/:movieId" element={<MovieDetails />} />

          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<h4>contactUs</h4>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </Router>
  );
}

function AboutUs() {
  return (
    <>
      <main className={styles.myAbout}>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav className={styles.myHome}>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
