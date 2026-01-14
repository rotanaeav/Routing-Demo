"use client";

export default function Home() {
  const login = async () => {
    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: "admin",
        password: "123456"
      })
    });
    alert("Logged in");
  };

  const getProfile = async () => {
    const res = await fetch("/api/profile");
    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div style={{ padding: 20 }}>
      <button  className="bg-blue-600 text-white p-4"onClick={login}>Login</button>
      <br /><br />
      <button className="bg-green-500 text-white p-4" onClick={getProfile}>Get Profile</button>
    </div>
  );
}
