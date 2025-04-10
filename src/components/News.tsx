import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Apex Enterprises Expands Healthcare Division',
    description: 'Meeting growing demand with specialized medical staffing solutions.',
    date: 'Mar 16, 2024',
    category: 'Company News',
  },
  {
    id: 2,
    title: 'New Tech Talent Partnership Program',
    description: 'Launching innovative recruitment solutions for tech companies.',
    date: 'Mar 10, 2024',
    category: 'Programs',
  },
  {
    id: 3,
    title: 'Workforce Trends Report 2024',
    description: 'Insights and predictions for the evolving job market.',
    date: 'Mar 5, 2024',
    category: 'Industry Insights',
  },
];

export default function News() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Updates</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay informed about our latest news, insights, and industry developments.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                  {post.category}
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}