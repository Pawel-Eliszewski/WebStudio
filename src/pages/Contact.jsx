import { Form } from "../components/Form/Form";
import { GoogleMaps } from "../components/GoogleMaps/GoogleMaps";

export default function Contact() {
  return (
    <main>
      <div className="contact__container container">
        <Form />
        <GoogleMaps />
      </div>
    </main>
  );
}
