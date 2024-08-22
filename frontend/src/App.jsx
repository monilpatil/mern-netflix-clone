import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";
import WatchPage from "./pages/WatchPage";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistoryPage";
import NotFoundPage from "./pages/404";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";

function App() {
  const { user, isCheckin, authCheck } = useAuthStore();
  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isCheckin) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to={"/"} />}
        ></Route>
        <Route
          path="/signup"
          element={!user ? <SignupPage /> : <Navigate to={"/"} />}
        ></Route>
        <Route
          path="/watch/:id"
          element={user ? <WatchPage /> : <Navigate to={"/login"} />}
        ></Route>{" "}
        <Route
          path="/search"
          element={user ? <SearchPage /> : <Navigate to={"/login"} />}
        ></Route>
        <Route
          path="/history"
          element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />}
        ></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />

      <Toaster />
    </>
  );
}

export default App;
