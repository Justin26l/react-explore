export default function Home() {
  return (
    <div>
      <section id="home" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Website</h2>
        <p className="text-gray-700">
          This is the home section. Add your content here.
        </p>
      </section>
      <section id="promo" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Promotions</h2>
        <p className="text-gray-700">
          This is the about section. Add information about your website or
          business here.
        </p>
      </section>
      <section id="contact">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          This is the contact section. Add your contact details here.
        </p>
      </section>
    </div>
  );
}