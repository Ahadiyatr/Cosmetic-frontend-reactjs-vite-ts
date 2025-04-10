import { BrowserRouter, Route, Routes } from "react-router-dom";
import BrowsePage from "./pages/BrowsePage";
import DetailsPage from "./pages/DetailsPage";
import MyCartPage from "./pages/MyCartPages";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import BookingFinished from "./pages/BookingFinished";
import MyOrdersPage from "./pages/MyOrdersPage";
import MybookingDetailsPage from "./pages/MyBookingDetailsPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrowsePage />} />
        <Route path="/cosmetic/:slug" element={<DetailsPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/cart" element={<MyCartPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/booking-finished" element={<BookingFinished />} />
        <Route path="/check-finished" element={<MyOrdersPage />} />
        <Route path="/my-booking" element={<MybookingDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
