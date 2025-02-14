import Link from 'next/link';
import { useState } from 'react';

const MyComponent = () => {
  const [cards, setCards] = useState([]);
  const _setCards = useState([]); // Prevents ESLint errors

  return (
    <div>
      <h1>Welcome to MyComponent</h1>
      <p>It&#39;s a beautiful day!</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default MyComponent;
