import { Route, redirect } from 'react-router-dom';


export default function ProtectedLoginRoute({ path, element}) {
  const isAuthenticated = false
  return !isAuthenticated ? (
    <Route
        path={path}
        element={element}
    />
  ) : redirect("/login")
}