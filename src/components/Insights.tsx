import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, TrendingUp, Newspaper, Download } from 'lucide-react';

const insights = [
  {
    category: 'Industry Report',
    title: 'Digital Transformation Trends 2024',
    description: 'Comprehensive analysis of emerging technology trends and their impact on business operations.',
    type: 'report',
    date: 'Mar 15, 2024',
    readTime: '15 min read',
  },
  {
    category: 'Case Study',
    title: 'Financial Services Digital Innovation',
    description: 'How we helped a leading bank modernize their core banking systems.',
    type: 'case-study',
    date: 'Mar 10, 2024',
    readTime: '10 min read',
  },
  {
    category: 'Whitepaper',
    title: 'Future of Cloud Computing',
    description: 'Strategic insights on cloud adoption and digital infrastructure.',
    type: 'whitepaper',
    date: 'Mar 5, 2024',
    readTime: '20 min read',
  },
];

const categories = [
  { name: 'All', count: 45 },
  { name: 'Reports', count: 12 },
  { name: 'Case Studies', count: 15 },
  { name: 'Whitepapers', count: 8 },
  { name: 'Articles', count: 10 },
];

export default function Insights() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Insights
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Expert analysis, industry trends, and strategic insights to help you make informed decisions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
          {insights.map((insight) => (
            <article key={insight.title} className="flex flex-col">
              <div className="rounded-2xl bg-gray-50 p-8">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={insight.date} className="text-gray-500">
                    {insight.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600">
                    {insight.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link to="#">
                      <span className="absolute inset-0" />
                      {insight.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {insight.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="text-sm font-medium leading-6">
                    <Download className="h-5 w-5 text-gray-400 hover:text-gray-500 cursor-pointer" />
                  </div>
                  <div className="text-sm font-medium leading-6 text-gray-600">
                    {insight.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/insights"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            View All Insights
          </Link>
        </div>
      </div>
    </div>
  );
}