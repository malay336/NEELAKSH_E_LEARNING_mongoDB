import { useEffect, useState } from 'react';
import { fetchQuestions, createQuestion, postAnswer } from '../api';
import { MessageCircleQuestion, MessageSquare, Plus, ChevronRight, Send, User } from 'lucide-react';

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAskModal, setShowAskModal] = useState(false);
  const [newQTitle, setNewQTitle] = useState('');
  const [newQDesc, setNewQDesc] = useState('');
  
  const [expandedQId, setExpandedQId] = useState(null);
  const [answerText, setAnswerText] = useState('');

  const loadData = () => {
    setLoading(true);
    fetchQuestions()
      .then(data => { setQuestions(data); setLoading(false); })
      .catch(err => { console.error(err); setLoading(false); });
  };

  useEffect(() => { loadData(); }, []);

  const handleAsk = async (e) => {
    e.preventDefault();
    if(!newQTitle || !newQDesc) return;
    await createQuestion({ title: newQTitle, description: newQDesc, tags: ['General'] });
    setShowAskModal(false);
    setNewQTitle('');
    setNewQDesc('');
    loadData();
  };

  const handleAnswer = async (qId, e) => {
    e.preventDefault();
    if(!answerText) return;
    await postAnswer(qId, { text: answerText, author: 'User' });
    setAnswerText('');
    loadData();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-[fadeIn_0.5s_ease-out]">
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 flex items-center">
            <span className="text-indigo-600 dark:text-indigo-400 mr-3">
              <MessageCircleQuestion size={36} />
            </span>
            Community Q&A
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Discuss with peers and resolve your doubts.</p>
        </div>
        
        <button 
          onClick={() => setShowAskModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
        >
          <Plus size={20} className="mr-2" />
          Ask Question
        </button>
      </div>

      {showAskModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-in]">
          <div className="glass bg-white dark:bg-gray-900 w-full max-w-2xl rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 dark:text-white flex items-center">
              <MessageSquare className="mr-3 text-indigo-500" /> Post a Question
            </h2>
            <form onSubmit={handleAsk} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Title</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newQTitle} onChange={e => setNewQTitle(e.target.value)} required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-gray-300">Description</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                  value={newQDesc} onChange={e => setNewQDesc(e.target.value)} required 
                ></textarea>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setShowAskModal(false)} className="px-5 py-2.5 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-md transition-colors">
                  Post Question
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q._id} className="glass rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow dark:border-gray-800">
              <div 
                className="p-6 cursor-pointer flex items-start gap-4 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 transition-colors"
                onClick={() => setExpandedQId(expandedQId === q._id ? null : q._id)}
              >
                <div className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 p-3 rounded-xl mt-1">
                  <MessageSquare size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                     {q.tags?.map((t, idx) => (
                       <span key={idx} className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md">
                         {t}
                       </span>
                     ))}
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-2">{q.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2 md:line-clamp-none mb-3">
                    {q.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 gap-4">
                    <span className="flex items-center"><User size={14} className="mr-1" /> {q.author}</span>
                    <span>{new Date(q.createdAt).toLocaleDateString()}</span>
                    <span className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                      {q.answers.length} {q.answers.length === 1 ? 'Answer' : 'Answers'}
                    </span>
                  </div>
                </div>
                <div className="p-2 text-gray-400">
                  <ChevronRight className={`transform transition-transform ${expandedQId === q._id ? 'rotate-90' : ''}`} />
                </div>
              </div>

              {expandedQId === q._id && (
                <div className="bg-gray-50/50 dark:bg-gray-800/20 p-6 border-t border-gray-100 dark:border-gray-800 fade-in">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    Answers <span className="ml-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full text-xs">{q.answers.length}</span>
                  </h4>
                  
                  <div className="space-y-4 mb-6">
                    {q.answers.length === 0 ? (
                      <p className="text-gray-500 italic text-sm">No answers yet. Be the first to answer!</p>
                    ) : (
                      q.answers.map((ans, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                          <p className="text-gray-800 dark:text-gray-200 mb-3">{ans.text}</p>
                          <div className="flex justify-between items-center text-xs text-gray-500">
                            <span className="flex items-center text-gray-600 dark:text-gray-400 font-medium"><User size={12} className="mr-1" /> {ans.author}</span>
                            <span>{new Date(ans.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  <form onSubmit={(e) => handleAnswer(q._id, e)} className="relative">
                    <input 
                      type="text"
                      className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm dark:text-white"
                      placeholder="Write your answer..."
                      value={answerText}
                      onChange={e => setAnswerText(e.target.value)}
                    />
                    <button 
                      type="submit"
                      disabled={!answerText.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 text-white rounded-lg disabled:opacity-50 hover:bg-indigo-700 transition-colors"
                    >
                      <Send size={16} />
                    </button>
                  </form>
                </div>
              )}
            </div>
          ))}
          {questions.length === 0 && !loading && (
             <div className="py-20 text-center glass rounded-3xl">
               <MessageCircleQuestion size={48} className="mx-auto text-gray-400 mb-4" />
               <p className="text-xl text-gray-500">No questions found.</p>
             </div>
          )}
        </div>
      )}
    </div>
  );
}
