import SavedElement from "./SavedElement";
import { useAppSelector } from "../hooks/store";

const Saved = () => {
  const saved = useAppSelector((state) => state.saved);
  
  return (
    <>
        <p className="saved-title">saved</p>
        <div className="saved-container">
          {saved.map(item => (
            <SavedElement key={item.id} item={item} />
          ))}
        </div>
    </>
  );
}

export default Saved;
