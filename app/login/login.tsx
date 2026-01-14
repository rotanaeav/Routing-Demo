"use client";

export default function LoginPage() {
  const handleLogin = async () => {
    await fetch("/api/login", { method: "POST" });
    window.location.href = "/dashboard";
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>
    </div>
  );
}
