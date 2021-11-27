import { Fragment } from "react";

// On utilise Intl.NumberFormat pour formatter (ajouter la virgule et l'espace apres les milliers)
const formatter = new Intl.NumberFormat("fr-FR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

type Props = {
  value: number;
  noSign?: boolean;
};

// Ce composant format un nombre pour afficher un prix
export function Price({ value, noSign = false }: Props): JSX.Element | null {
  let prefix = "+";
  if (value < 0) {
    prefix = "-";
  }
  if (value === 0) {
    return null;
  }
  let before = prefix + " ";
  if (noSign) {
    before = "";
  }
  return (
    <Fragment>{before + formatter.format(Math.abs(value)) + " €"}</Fragment>
  );
}
