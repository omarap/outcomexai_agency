// components/FeatureGrid.tsx
export interface FeatureGridItem {
  title: string;
  description?: string; // optional description
  icon: React.ElementType; // icon component
}

interface FeatureGridProps {
  items: FeatureGridItem[];
}

export default function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1"
          >
            <Icon className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            {item.description && (
              <p className="text-gray-700 text-sm">{item.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
