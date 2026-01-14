export default function NotificationPage() {
  return (
    <div className="p-4 bg-green-50 h-screen">
      <h2 className="font-bold text-lg">Notifications</h2>
      <ul>
        <li>New order received</li>
        <li>Driver arrived</li>
        <li>Payment completed</li>
      </ul>
    </div>
  );
}
