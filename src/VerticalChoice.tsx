import { Price } from "./Price";

type Props = {
  name: string;
  options: Array<{ name: string; price: number }>;
  selected: number;
  onSelect: (selectedValue: number) => void;
};

export function VerticalChoice({
  name,
  options,
  selected,
  onSelect,
}: Props): JSX.Element {
  // on récupère l'option selectionnée
  const selectedPrice = options[selected].price;

  return (
    <div>
      <h4 className="choice-name">{name}</h4>
      {/* Map sur les options */}
      {options.map((opt, index) => {
        let cssClass = "vertical-choice";
        if (index === selected) {
          cssClass += " selected";
        }
        return (
          <div
            key={index}
            className={cssClass}
            onClick={() => {
              // au clic on appelle la props onClick avec en parametre l'index de l'élément cliqué
              onSelect(index);
            }}
          >
            <span className="choice-name">{opt.name}</span>
            <span className="choice-price">
              <Price value={opt.price - selectedPrice} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
