import { Price } from "./Price";

type Props = {
  name: string;
  selected: boolean;
  price: number;
  onChange: (selectedValue: boolean) => void;
};

export function BooleanChoice({
  name,
  selected,
  price,
  onChange,
}: Props): JSX.Element {
  return (
    <div>
      <h4 className="choice-name">{name}</h4>
      <div className="horizontal-choice">
        <div
          className={"horizontal-item" + (!selected ? " selected" : "")}
          onClick={() => {
            // au clic on appelle la props onClick avec en parametre false
            onChange(false);
          }}
        >
          <span className="choice-name">Aucun</span>
          {selected && <Price value={-price} />}
        </div>
        <div
          className={"horizontal-item" + (selected ? " selected" : "")}
          onClick={() => {
            // au clic on appelle la props onClick avec en parametre true
            onChange(true);
          }}
        >
          <span className="choice-name">{name}</span>
          {!selected && <Price value={price} />}
        </div>
      </div>
    </div>
  );
}
