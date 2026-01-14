export default function Layout({
  chat,
  notification
}: {
  chat: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-1/2">{chat}</div>
      <div className="w-1/2">{notification}</div>
    </div>
  );
}
