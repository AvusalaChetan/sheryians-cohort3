import {useEffect, useState} from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Nav from "./components/Nav";
import TextBox from "./components/TextBox";

const App = () => {
  const [text, setText] = useState(``);

  const [isDisable, setIsDisable] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  let utterance = new SpeechSynthesisUtterance(text);

  utterance.rate = 1; // speed — 0.1 to 10, default 1
  utterance.pitch = 1; // tone  — 0 to 2, default 1
  utterance.volume = 5; // volume — 0 to 1, default 1
  utterance.lang = "en-US";

  const [charIndex, setCharIndex] = useState(0);
  const [charLength, setCharLength] = useState(0);

  utterance.onboundary = (e) => {
    if (e.name === "word") {
      setCharIndex(e.charIndex);
      setCharLength(e.charLength);
    }
  };
  const handleSpeech = () => {
    utterance.voice = voices[selectedVoice];
    speechSynthesis.speak(utterance);
    setIsDisable(true);
  };
  const hadleStop = () => {
    speechSynthesis.cancel();
    setIsDisable(false);
  };
  const hadlePause = () => {
    speechSynthesis.pause();
  };
  const hadleResume = () => {
    speechSynthesis.resume();
  };

  useEffect(() => {
    const synth = window.speechSynthesis;

    synth.onvoiceschanged = () => {
      const v = synth.getVoices();
      console.log(v[0]);
      setVoices(v);
      setSelectedVoice(v[0]);
    };
  }, []);

  utterance.onend = () => setIsDisable(false);

  return (
    <main className="p-4 h-screen lg:w-[50%] lg:mx-auto md:w-screen">
      <Nav />
      <section className="h-[80%] ">
        <div className="h-full flex items-center justify-center gap-3 flex-col ">
          <TextBox text={text} charIndex={charIndex} charLength={charLength} />
          <div className="bottom w-full">
            <Input setText={setText} />
            <div className="flex items-center gap-3">
              <Button onClick={handleSpeech} disabled={isDisable}>
                speech
              </Button>
              <Button
                onClick={hadleStop}
                className="bg-red-400 hover:bg-red-500"
              >
                stop
              </Button>
              <Button
                onClick={hadleResume}
                className="bg-green-400 hover:bg-green-500"
              >
                resume
              </Button>
              <Button
                onClick={hadlePause}
                className="bg-yellow-400 hover:bg-yellow-500"
              >
                pause
              </Button>
            </div>
            <br />
            <select
              onChange={(e) => setSelectedVoice(Number(e.target.value))}
              className="w-full text-sm px-4 py-2 rounded- focus:outline-none  cursor-pointer"
            >
              {voices.map((voice, i) => (
                <option key={i} value={i}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
