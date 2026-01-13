export default function Card({ title, value }) {
  return (
    <div className="glass p-6">
      <h2 className="text-gray-300">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
