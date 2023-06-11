'use client';

// Error components must be Client Components
import { redirect } from 'next/navigation';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  if (error.message === '401') redirect('/auth');

  console.log(error);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
