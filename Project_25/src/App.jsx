import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { ContactProvider } from "./context/ContactContext";

function App() {
  return (
    <ContactProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Contact Card App
        </h1>
        <ContactForm />
        <ContactList />
      </div>
    </ContactProvider>
  );
}

export default App;
