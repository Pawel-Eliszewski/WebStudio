import { TitleMedium } from "../Titles/TitleMedium/TitleMedium";
import { clientsList } from "../../data/clientsList";
import { ClientsItem } from "./ClientsItem/ClientsItem";
import "./Clients.css";

export const Clients = () => {
  return (
    <section className="clients section">
      <div className="container">
        <div className="clients__wrapper">
          <TitleMedium title="Our Clients" />
          <ul className="clients__list">
            {clientsList.map((client) => {
              return (
                <li key={client.id} className="clients__item">
                  <ClientsItem client={client} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
