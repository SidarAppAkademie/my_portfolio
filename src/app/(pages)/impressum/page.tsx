import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Sidar Erener',
  description: 'Impressum (Legal Notice) for the website of Sidar Erener.',
};

export default function ImpressumPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Impressum
        </h1>
      </div>

      <div className="prose prose-invert prose-headings:text-primary prose-a:text-primary mx-auto">
        <h2 className="font-semibold text-xl">Angaben gemäß § 5 TMG</h2>
        <p>
          Sidar Erener
          <br />
          Mülheim an der Ruhr
          <br />
          Deutschland
        </p>

        <h2 className="font-semibold text-xl">Kontakt</h2>
        <p>
          E-Mail: erener@apply10.com
        </p>

        <h2 className="font-semibold text-xl">Haftungsausschluss (Disclaimer)</h2>
        <p>
          <strong>Haftung für Inhalte</strong>
          <br />
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>
        
        <p>
          <strong>Haftung für Links</strong>
          <br />
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <p>
          <strong>Urheberrecht</strong>
          <br />
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </p>

        <p className="mt-6 border-t border-border pt-4 text-sm text-muted-foreground">
          <strong>Wichtiger Hinweis:</strong> Dies ist ein automatisch generiertes Impressum und dient nur als Vorlage. Es ersetzt keine Rechtsberatung. Bitte lassen Sie Ihre Texte von einem Anwalt prüfen.
        </p>
      </div>
    </div>
  );
}
