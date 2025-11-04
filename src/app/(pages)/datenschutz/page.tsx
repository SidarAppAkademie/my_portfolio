import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Sidar Erener',
  description: 'Datenschutzerklärung (Privacy Policy) for the website of Sidar Erener.',
};

export default function DatenschutzPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Datenschutzerklärung
        </h1>
      </div>

      <div className="prose prose-invert prose-headings:text-primary prose-a:text-primary mx-auto">
        <h2 className="font-semibold text-xl">1. Datenschutz auf einen Blick</h2>
        <h3 className="font-semibold">Allgemeine Hinweise</h3>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
        
        <h3 className="font-semibold">Datenerfassung auf dieser Website</h3>
        <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>

        <h2 className="font-semibold text-xl">2. Allgemeine Hinweise und Pflicht­informationen</h2>
        <h3 className="font-semibold">Datenschutz</h3>
        <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
        
        <h3 className="font-semibold">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

        <h3 className="font-semibold">Recht auf Datenübertragbarkeit</h3>
        <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.</p>
        
        <h2 className="font-semibold text-xl">3. Kontaktformular</h2>
        <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>

        <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
          <strong>Wichtiger Hinweis:</strong> Dies ist eine automatisch generierte Datenschutzerklärung und dient nur als Vorlage. Sie ersetzt keine Rechtsberatung. Bitte lassen Sie Ihre Texte von einem Anwalt prüfen.
        </p>
      </div>
    </div>
  );
}
