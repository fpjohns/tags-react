import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);
  const [tags, setTags] = useState([
    {
      text: "JavaScript",
    },
    {
      text: "TypeScript",
    },
    {
      text: "PHP",
    },
  ]);

  const handleSetValue = (e) => {
    setValue(e.target.value);
    setSend(false);
    setError(false);
  };
  const handleSubmit = (e) => {
    setTags([...tags, { text: value }]);
    e.preventDefault();
    setValue("");
    setSend(true);
  };
  const handleBlur = () => {
    if (!value) {
      setError(true);
      setError(false);
    }
  };
  const handleDelete = (index) => {
    setTags(tags.filter((item, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="footer">
        <form onSubmit={handleSubmit} className="main">
          <input
            type="text"
            value={value}
            onChange={handleSetValue}
            onBlur={handleBlur}
          />
          <button type="submit" disabled={!value}>
            Отправить
          </button>
        </form>
        {send && <div>тег создан</div>}
        {error && <div>поле не должно быть пустым</div>}
      </div>
      <div className="tags">
        {tags.map((item, i) => {
          return (
            <div className="text">
              {item.text}
              <button onClick={() => handleDelete(i)}>x</button>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export default App;
