import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href='/meals/share'>Share a Meal</Link>
      </p>
      <p>
        <Link href='/meals/123'>Meal 123</Link>
      </p>
    </main>
  );
}
