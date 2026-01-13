import Card from "../components/Card";

export default function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-1">Welcome, SENUTH 👋</h1>
      <p className="text-gray-300 mb-6">SENU MODZ Control Panel</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Bots Available" value="5" />
        <Card title="Active Users" value="—" />
        <Card title="Deploy Requests" value="—" />
      </div>
    </>
  );
}
