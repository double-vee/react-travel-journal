import Card from "./Card";
import data from "../data.js";

export default function Main() {
  const cards = data.map((card) => <Card key={card.id} {...card} />);

  return <main className="main">{cards}</main>;
}
