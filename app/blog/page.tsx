import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read Christopher O. Lopez\'s blog posts about data science, programming, and technology.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Christopher's Blog</h1>
      <BlogPosts />
    </section>
  )
}
