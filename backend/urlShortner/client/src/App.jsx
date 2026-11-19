import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
  const [urls, setUrls] = useState([]);
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const getUrls = async () => {
    const res = await axios.get("/api/url");
    console.log(res.data.urls);
    setUrls([...res.data.urls]);
  };

  const deleteUrl = async (id) => {
    await axios.delete(`/api/url/${id}`);
    getUrls();
  };

  const handleCopy = (shortCode) => {
    navigator.clipboard.writeText(shortCode);
    alert("copyed");
  };

  const createShortURL = async () => {
    const url = inputValue.trim();
    console.log(url);

    try {
      const res = await axios.post("/api/url", {url});
      setUrls((previousUrls) => [...previousUrls, res.data.data]);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }

    setInputValue("");
  };

  useEffect(() => {
    getUrls();
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            URL Shortener
          </h1>
          <p className="mt-3 text-slate-500">
            Create short, easy-to-share links.
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm sm:flex-row">
          <input
            type="url"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your long URL"
            className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          <button
            onClick={createShortURL}
            type="button"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Short
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {urls.map((url) => (
            <div
              key={url?.shortCode}
              className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-400">Short code</p>
                <p className="mt-1 text-xl font-bold text-blue-600">
                  {url?.shortCode}
                </p>
                <p className="mt-1 truncate text-sm text-slate-500">
                  {window?.location.href}
                  {url?.shortCode}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => deleteUrl(url._id)}
                  type="button"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleCopy(url.shortCode)}
                  type="button"
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Copy
                </button>
                <a
                  href={url.orginalUrl}
                  target="_blank"
                  className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  Redirect
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
