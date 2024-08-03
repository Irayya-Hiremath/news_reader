// // components/PreferencesForm.js
// import { useState } from 'react';

// const PreferencesForm = ({ onSavePreferences }) => {
//   const [sources, setSources] = useState('');
//   const [categories, setCategories] = useState('');
//   const [authors, setAuthors] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSavePreferences({ sources, categories, authors });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         value={sources}
//         onChange={(e) => setSources(e.target.value)}
//         placeholder="Preferred sources"
//         className="p-2 border rounded"
//       />
//       <input
//         type="text"
//         value={categories}
//         onChange={(e) => setCategories(e.target.value)}
//         placeholder="Preferred categories"
//         className="p-2 border rounded"
//       />
//       <input
//         type="text"
//         value={authors}
//         onChange={(e) => setAuthors(e.target.value)}
//         placeholder="Preferred authors"
//         className="p-2 border rounded"
//       />
//       <button type="submit" className="p-2 bg-blue-500 text-white rounded">Save Preferences</button>
//     </form>
//   );
// };

// export default PreferencesForm;

import { useState } from 'react';

const PreferencesForm = ({ onSavePreferences }) => {
  const [sources, setSources] = useState('');
  const [categories, setCategories] = useState('');
  const [authors, setAuthors] = useState('');

  const handleSave = () => {
    const prefs = {
      sources: sources.split(',').map((s) => s.trim()),
      categories: categories.split(',').map((c) => c.trim()),
      authors: authors.split(',').map((a) => a.trim()),
    };
    onSavePreferences(prefs);
  };

  return (
    <div>
      <input
        type="text"
        value={sources}
        onChange={(e) => setSources(e.target.value)}
        placeholder="Preferred Sources (comma separated)"
      />
      <input
        type="text"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        placeholder="Preferred Categories (comma separated)"
      />
      <input
        type="text"
        value={authors}
        onChange={(e) => setAuthors(e.target.value)}
        placeholder="Preferred Authors (comma separated)"
      />
      <button onClick={handleSave}>Save Preferences</button>
    </div>
  );
};

export default PreferencesForm;
