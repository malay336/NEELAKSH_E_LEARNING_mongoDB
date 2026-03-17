import { useEffect, useState } from 'react';
import { fetchTutorials } from '../api';
import { BookOpen, Search, Clock, Tag } from 'lucide-react';

export default function Tutorials() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTutorials()
      .then(data => { setTutorials(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-[fadeIn_0.5s_ease-out]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 flex items-center">
            <span className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mr-4 shadow-inner">
              <BookOpen size={24} />
            </span>
            Tutorial Library
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 ml-16">
            Explore {tutorials.length} premium tech guides and tutorials.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search tutorials..." 
            className="w-full pl-11 pr-4 py-3 rounded-xl glass border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white transition-all shadow-sm"
          />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <div key={tutorial._id} className="glass rounded-[2rem] p-6 hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col h-full border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Tag size={12} className="mr-1" /> {tutorial.category}
                </span>
                <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Clock size={12} className="mr-1" />
                  {new Date(tutorial.createdAt).toLocaleDateString()}
                </span>
              </div>
              
              <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {tutorial.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow line-clamp-3 leading-relaxed">
                {tutorial.description}
              </p>
              
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center mt-auto">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  By {tutorial.author}
                </span>
                <button className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
          {tutorials.length === 0 && !loading && (
            <div className="col-span-full py-20 text-center glass rounded-3xl">
              <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-xl text-gray-500">No tutorials found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
