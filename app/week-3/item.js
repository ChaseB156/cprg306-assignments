
export default function Item({ name, quantity, category }) {
    const categoryColors = {
        // Added some coloring to the different categories
      dairy: 'bg-blue-400',
      bakery: 'bg-yellow-400',
      produce: 'bg-green-400',
      meat: 'bg-red-400',
      'canned goods': 'bg-purple-300',
      'dry goods': 'bg-orange-400',
      household: 'bg-gray-500',
    };
  
    const categoryClass = categoryColors[category] || 'bg-white';
  
    // Text to black and changed the box sizes with some padding and margins in between
    return (
      <li className={`p-1 mb-2 ml-2 ${categoryClass} max-w-60`}>
        <div className="text-lg font-bold text-black">{name}</div>
        <div className="text-black">Buy {quantity} in {category}</div>
      </li>
    );
  }
  
  