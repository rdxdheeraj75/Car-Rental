export default function Admin() {
  return (
    <div>
      {localStorage.getItem("username") &&
      localStorage.getItem("authority") === "ADMIN" ? (
        <p>Welcome Admin</p>
      ) : (
        <p>Login as admin to access this page</p>
      )}
    </div>
  );
}
