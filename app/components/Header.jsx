export default function Header({ title, subtitle }) {
    return (
      <div className="bg-blue-500 p-6 text-white">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm mt-1">{subtitle}</p>
      </div>
    );
  }