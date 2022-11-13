import "./App.css";
import Entry from "./components/Entry";
import emojipedia from "./emojipedia";

// function createEntry(emoji) {
//   return (
//     <Entry
//       key={emoji.id}
//       emoji={emoji.emoji}
//       name={emoji.name}
//       meaning={emoji.meaning.substring(0, 100)}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {/* <dl className="dictionary">{emojipedia.map(createEntry)}</dl> */}
      <dl className="dictionary">
        {emojipedia.map((emoji) => {
          return (
            <Entry
              key={emoji.id}
              emoji={emoji.emoji}
              name={emoji.name}
              meaning={emoji.meaning.substring(0, 100)}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
