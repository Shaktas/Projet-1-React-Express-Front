const Rgpd = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Politique de Protection des Données (RGPD)
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          1. Collecte des informations
        </h2>
        <p className="mb-4 text-gray-600">
          Nous collectons les informations suivantes :
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Pseudo</li>
          <li>Adresse email</li>
          <li>Photo de profile</li>
          <li>Nom d&apos;utilisateur</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          2. Utilisation des informations
        </h2>
        <p className="mb-4 text-gray-600">
          Les informations que nous collectons sont utilisées pour :
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Personnaliser votre expérience</li>
          <li>Améliorer notre service</li>
          <li>Communiquer avec vous concernant nos services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          3. Protection des informations
        </h2>
        <p className="text-gray-600">
          Nous mettons en œuvre une variété de mesures de sécurité pour
          préserver la sécurité de vos informations personnelles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          4. Vos droits
        </h2>
        <p className="mb-4 text-gray-600">
          Conformément au RGPD, vous disposez des droits suivants :
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Droit d&apos;accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l&apos;effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité des données</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          5. Contact
        </h2>
        <p className="mb-4 text-gray-600">
          Pour toute question relative à notre politique de protection des
          données, vous pouvez nous contacter :
        </p>
        <p className="text-gray-600">Email : contact@example.com</p>
        <p className="text-gray-600">Téléphone : 01 02 03 04 05</p>
      </section>
    </div>
  );
};

export default Rgpd;
