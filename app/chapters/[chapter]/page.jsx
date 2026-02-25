// app/chapters/[chapter]/page.jsx
import ChapterPageClient from '../../../components/ChapterPageClient';

export default async function ChapterPage({ params }) {
  // Unwrap params asynchronously (Next.js 16+ App Router)
  const { chapter } = await params;

  return <ChapterPageClient chapter={chapter} />;
}