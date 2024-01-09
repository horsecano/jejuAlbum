import "./App.css";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LayOut from "./LayOut.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import axios from "axios";
import { UserContextProvider } from "./UserContext.jsx";
import { useEffect } from "react";
import AccountPage from "./pages/AccountPage.jsx";
import PlaceFormPage from "./pages/PlaceFormPage.jsx";
import PlacePage from "./pages/PlacePage.jsx";
import SinglePage from "./pages/SinglePage.jsx";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/account/places" element={<PlacePage />} />
          <Route path="/account/places/new" element={<PlaceFormPage />} />
          <Route path="/account/places/:id" element={<PlaceFormPage />} />
          <Route path="/place/:id" element={<SinglePage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
