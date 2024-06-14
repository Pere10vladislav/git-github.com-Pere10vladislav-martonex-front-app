import { Route, redirect } from 'react-router-dom';


export default function ProtectedRoute({ index, path, element}) {
  const isAuthenticated = false
  return isAuthenticated ? (
    <Route
        path={path}
        element={element}
        index={index}
    />
  ) : redirect("/login")
}