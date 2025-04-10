import React from 'react';
import { Newspaper, TrendingUp, Scale, Building2, ChevronRight, Tag } from 'lucide-react';

interface Update {
  id: string;
  date: string;
  category: 'industry' | 'regulatory' | 'market' | 'company';
  title: string;
  summary: string;
  source: {
    name: string;
    url: string;
  };
  tags: string[];
}

const updates: Update[] = [
  {
    id: '1',
    date: '2024-03-18',
    category: 'industry',
    title: 'Indian Staffing Industry Shows 12% Growth in Q4 2023',
    summary: 'The Indian staffing industry demonstrated robust growth in Q4 2023, with IT and manufacturing sectors leading the surge. Key indicators suggest continued expansion through 2024.',
    source: {
      name: 'Indian Staffing Federation',
      url: 'https://indianstaffingfederation.org/reports/q4-2023',
    },
    tags: ['Market Growth', 'IT Sector', 'Manufacturing'],
  },
  {
    id: '2',
    date: '2024-03-15',
    category: 'regulatory',
    title: 'New Labor Codes Implementation Update',
    summary: 'Government announces final timeline for implementing the four labor codes. Changes will affect wages, social security, industrial relations, and occupational safety across sectors.',
    source: {
      name: 'Ministry of Labour & Employment',
      url: 'https://labour.gov.in/latest-update',
    },
    tags: ['Labor Laws', 'Compliance', 'Policy Change'],
  },
  {
    id: '3',
    date: '2024-03-12',
    category: 'market',
    title: 'Remote Work Trends Report 2024',
    summary: 'Latest research shows 45% of Indian companies adopting hybrid work models permanently. Study indicates improved productivity and employee satisfaction in flexible arrangements.',
    source: {
      name: 'Workforce Insights Report',
      url: 'https://workforceinsights.org/remote-work-2024',
    },
    tags: ['Remote Work', 'Hybrid Model', 'Workplace Trends'],
  },
  {
    id: '4',
    date: '2024-03-10',  // Fixed the date format
    category: 'company',  // Fixed the category
    title: 'Major Tech Companies Announce Expansion Plans',
    summary: 'Leading technology firms reveal plans to increase their workforce in India by 25% in 2024. Focus on AI, machine learning, and cloud computing roles.',
    source: {
      name: 'Tech Industry Report',
      url: 'https://techindustryreport.com/india-expansion-2024',
    },
    tags: ['Tech Industry', 'Job Market', 'AI & ML'],
  },
];

const categoryIcons: Record<Update['category'], React.ElementType> = {
  industry: Newspaper,
  regulatory: Scale,
  market: TrendingUp,
  company: Building2,
};

const categoryColors: Record<Update['category'], string> = {
  industry: 'bg-blue-100 text-blue-800',
  regulatory: 'bg-purple-100 text-purple-800',
  market: 'bg-green-100 text-green-800',
  company: 'bg-orange-100 text-orange-800',
};

export default function IndustryUpdates() {
  const [selectedCategory, setSelectedCategory] = React.useState<Update['category'] | null>(null);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const allTags = React.useMemo(() => {
    const tags = new Set<string>();
    updates.forEach(update => update.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredUpdates = React.useMemo(() => {
    return updates.filter(update => {
      const matchesCategory = !selectedCategory || update.category === selectedCategory;
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => update.tags.includes(tag));
      return matchesCategory && matchesTags;
    });
  }, [selectedCategory, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Industry Updates
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay informed with the latest developments, trends, and insights from the staffing and recruitment industry.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          {/* Filters Sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-8">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {(Object.entries(categoryIcons) as [Update['category'], React.ElementType][]).map(([category, Icon]) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(
                        selectedCategory === category ? null : category
                      )}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-sm ${
                        selectedCategory === category
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      <span className="capitalize">{category}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        selectedTags.includes(tag)
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Tag className="h-4 w-4 mr-1" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Updates List */}
          <div className="lg:col-span-9">
            <div className="space-y-8">
              {filteredUpdates.map((update) => {
                const Icon = categoryIcons[update.category];
                return (
                  <article
                    key={update.id}
                    className="relative isolate flex flex-col gap-8 lg:flex-row"
                  >
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <div className={`absolute inset-0 rounded-2xl ${
                        categoryColors[update.category]
                      } opacity-10`} />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className={`h-10 w-10 ${
                          update.category === 'industry' ? 'text-blue-600' :
                          update.category === 'regulatory' ? 'text-purple-600' :
                          update.category === 'market' ? 'text-green-600' :
                          'text-orange-600'
                        }`} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={update.date} className="text-gray-500">
                          {new Date(update.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                          categoryColors[update.category]
                        }`}>
                          {update.category.charAt(0).toUpperCase() + update.category.slice(1)}
                        </span>
                      </div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                          {update.title}
                        </h3>
                        <p className="mt-5 text-sm leading-6 text-gray-600">
                          {update.summary}
                        </p>
                      </div>
                      <div className="mt-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {update.tags.map(tag => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {/* Source Link */}
                        <a
                          href={update.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                        >
                          Read full report at {update.source.name}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}