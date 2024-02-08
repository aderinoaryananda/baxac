import { Route, Routes } from "react-router-dom";
import HomeAdmin from "./pages/admin/HomeAdmin";
import Home from "./pages/Home";
import HomeTeknisi from "./pages/teknisi/HomeTeknisi";
import HomeCustomer from "./pages/customer/HomeCustomer";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Box>
        <Box>Test</Box>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<HomeAdmin />} />
            <Route path="/customer" element={<HomeCustomer />} />
            <Route path="/teknisi" element={<HomeTeknisi />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
