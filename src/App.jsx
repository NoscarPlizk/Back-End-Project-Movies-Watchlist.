import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookedList } from "./content/share_content/hotelContent"; 
import useLocalStorage from "use-local-storage";
import AuthPages from "./pages/AuthPages";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import ViewHotel from "./pages/ViewHotel";
import UserPage from "./pages/UserPage";
import Payment from "./pages/payments/Payment";
import AllBookedList from "./pages/AllBookedList";

import MoviesPages from "./pages/MoviesPage";

export default function App() {
  const [ token, setToken ] = useLocalStorage('token', '');
  const APIurl = import.meta.env.VITE_NEON_POOL_LINK;

  return (
    <BookedList.Provider value={{ token, setToken, APIurl }}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='movies' element={<MoviesPages />} />

              {/* <Route path="userauth" element={<AuthPages />} />
              <Route path="viewhotel" element={<ViewHotel />} />
              <Route path="userpage" element={<UserPage />} />
              <Route path="allbookedlist" element={<AllBookedList />} />
              <Route path="payment" element={<Payment />} /> */}
            </Route>
          </Routes>
      </BrowserRouter>
    </BookedList.Provider>
  );
}