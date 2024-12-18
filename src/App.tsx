import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PrivateRoutes } from "./Routes/PrivateRoutes"
import { PublicRoutes } from "./Routes/PublicRoutes"

const isAuthenticated = true

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          (isAuthenticated)
            ? <Route path="/*" element={<PrivateRoutes />} />
            : <Route path="/*" element={<PublicRoutes />} />
        }
      </Routes>
    </BrowserRouter>
  )
}
export default App