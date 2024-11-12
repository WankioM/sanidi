// app/page.js
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  return {
    title: 'Redirecting...',
  };
}

export default async function Page() {
  redirect('/home');
}