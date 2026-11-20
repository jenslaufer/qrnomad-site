<script setup lang="ts">
import { usePageHead } from '../composables/usePageHead'
import LegalLayout from '../components/LegalLayout.vue'
import LegalSection from '../components/LegalSection.vue'

// Adapted from bieterpost/marketing/agb.md (same company). Not legal advice:
// have it checked once QRnomad earns real money. The app's checkout links here
// and asks for the consent described in section 7.
usePageHead({
    title: 'AGB | QRnomad',
    description: 'Allgemeine Geschäftsbedingungen und Widerrufsbelehrung für QRnomad, änderbare QR-Codes der Solytics GmbH.',
    path: '/agb/',
    lang: 'de',
    ogLocale: 'de_DE',
})
const mail = 'hallo@qrnomad.com'
</script>

<template>
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
        <LegalSection title="1. Anbieter und Geltungsbereich">
            <p>(1) QRnomad ist ein Dienst der Solytics GmbH, Hörsteiner Str. 20a, 63791 Karlstein a. Main, eingetragen beim Amtsgericht Aschaffenburg unter HRB 16879 („wir“).</p>
            <p>(2) Diese Bedingungen gelten für alle Verträge über änderbare QR-Codes von QRnomad, mit Verbrauchern und mit Unternehmern. Abweichende Bedingungen des Kunden gelten nur, wenn wir ihnen schriftlich zustimmen.</p>
            <p>(3) Der kostenlose Generator auf qrnomad.com erzeugt feste QR-Codes in deinem Browser. Für ihn kommt kein Vertrag zustande.</p>
        </LegalSection>
        <LegalSection title="2. Leistung">
            <p>(1) Ein änderbarer Code ist ein QR-Code, der auf eine Adresse unter go.qrnomad.com zeigt. Wir leiten jeden Scan an das Ziel weiter, das der Kunde in seinem Konto auf app.qrnomad.com eingetragen hat. Der Kunde kann das Ziel jederzeit ändern.</p>
            <p>(2) Zum Konto gehören: beliebig viele Codes im Rahmen fairer Nutzung (bis 500 Codes; darüber nach Absprache), Download als PNG und SVG ohne qrnomad.com-Hinweis und eine Statistik der Scans nach Tag, Land und Gerätetyp. Wir speichern dabei keine IP-Adressen.</p>
            <p>(3) Wir betreiben den Dienst mit der Sorgfalt eines ordentlichen Kaufmanns, schulden aber keine bestimmte Verfügbarkeit. Wartung kündigen wir, wenn möglich, vorher an.</p>
            <p>(4) Wir dürfen den Dienst weiterentwickeln, solange die Leistung nach Absatz 1 erhalten bleibt.</p>
        </LegalSection>
        <LegalSection title="3. Vertragsschluss">
            <p>(1) Der Vertrag kommt zustande, wenn der Kunde den Bezahlvorgang bei unserem Zahlungsdienstleister Stripe abschließt. Danach schicken wir ihm eine E-Mail mit dem Zugang zu seinem Konto.</p>
            <p>(2) Vertragssprache ist Deutsch. Den Vertragstext speichern wir nicht gesondert; diese Bedingungen stehen dauerhaft unter qrnomad.com/agb/.</p>
        </LegalSection>
        <LegalSection title="4. Preis und Zahlung">
            <p>(1) Ein Jahr kostet 199 € einschließlich der gesetzlichen Umsatzsteuer. Kunden außerhalb der EU zahlen 199 US-Dollar zuzüglich etwaiger Steuern ihres Landes. Es gilt der Preis, den Stripe beim Bezahlen anzeigt.</p>
            <p>(2) Der Kunde zahlt einmal im Voraus. Die Rechnung kommt per E-Mail.</p>
        </LegalSection>
        <LegalSection title="5. Laufzeit, Verlängerung und Ende">
            <p>(1) Der Vertrag läuft 12 Monate ab der Zahlung und endet dann von selbst. Es gibt keine automatische Verlängerung und keine Kündigungsfrist.</p>
            <p>(2) Wir erinnern 30 und 7 Tage vor dem Ende per E-Mail. Zahlt der Kunde erneut, verlängert sich der Vertrag um 12 Monate ab dem bisherigen Ende oder, wenn es schon vorbei ist, ab der Zahlung.</p>
            <p>(3) Nach dem Ende zeigen die Codes 30 Tage lang eine Hinweisseite mit dem Link zum bisherigen Ziel. Danach sind sie nicht mehr aktiv. Konto und Codes bleiben gespeichert; zahlt der Kunde erneut, werden sie wieder aktiv. Auf Wunsch löschen wir das Konto.</p>
            <p>(4) Bereits gezahlte Beträge erstatten wir nicht anteilig, außer im Fall des Widerrufs (Abschnitt 7). Das Recht zur außerordentlichen Kündigung bleibt unberührt.</p>
        </LegalSection>
        <LegalSection title="6. Pflichten des Kunden">
            <p>(1) Der Kunde ist für die Ziele seiner Codes verantwortlich. Er leitet nicht auf rechtswidrige Inhalte, Schadsoftware, Phishing oder Seiten, die Rechte Dritter verletzen.</p>
            <p>(2) Verstößt ein Ziel gegen Absatz 1, dürfen wir den Code sperren. Wir informieren den Kunden darüber per E-Mail.</p>
            <p>(3) Der Kunde hält den Zugang zu seiner E-Mail-Adresse geschützt, weil sie den Zugang zum Konto öffnet.</p>
        </LegalSection>
        <LegalSection title="7. Widerrufsrecht für Verbraucher">
            <p>Verbraucher (§ 13 BGB) haben ein Widerrufsrecht nach der folgenden Belehrung. Unternehmer haben es nicht.</p>
            <h3 class="font-bold">Widerrufsbelehrung</h3>
            <p><strong>Widerrufsrecht.</strong> Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
            <p>Um dein Widerrufsrecht auszuüben, musst du uns (Solytics GmbH, Hörsteiner Str. 20a, 63791 Karlstein a. Main, Telefon +49 155 10249850, E-Mail <a class="link" :href="`mailto:${mail}`">{{ mail }}</a>) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Du kannst dafür das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der Widerrufsfrist reicht es aus, dass du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.</p>
            <p><strong>Folgen des Widerrufs.</strong> Wenn du diesen Vertrag widerrufst, haben wir dir alle Zahlungen, die wir von dir erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über deinen Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit dir wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden dir wegen dieser Rückzahlung Entgelte berechnet.</p>
            <p>Hast du verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so hast du uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem du uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichtest, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>
            <h3 class="font-bold">Muster-Widerrufsformular</h3>
            <p>(Wenn du den Vertrag widerrufen willst, dann fülle bitte dieses Formular aus und sende es zurück.)</p>
            <p>An Solytics GmbH, Hörsteiner Str. 20a, 63791 Karlstein a. Main, E-Mail {{ mail }}:<br>
                Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung (*)<br>
                Bestellt am (*)/erhalten am (*)<br>
                Name des/der Verbraucher(s)<br>
                Anschrift des/der Verbraucher(s)<br>
                Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)<br>
                Datum<br>
                (*) Unzutreffendes streichen.</p>
            <p><em>Ende der Widerrufsbelehrung.</em></p>
            <p>Vor dem Bezahlen fragen wir, ob du verlangst, dass wir sofort beginnen. Widerrufst du danach, zahlst du nur die genutzte Zeit: bei 199 € im Jahr rund 55 Cent pro Tag.</p>
        </LegalSection>
        <LegalSection title="8. Haftung">
            <p>(1) Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei Verletzung von Leben, Körper oder Gesundheit und nach dem Produkthaftungsgesetz.</p>
            <p>(2) Bei leichter Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht und begrenzt auf den vorhersehbaren, vertragstypischen Schaden, höchstens auf die Entgelte der letzten 12 Monate.</p>
            <p>(3) Für die Inhalte hinter den Zielen seiner Codes ist allein der Kunde verantwortlich.</p>
        </LegalSection>
        <LegalSection title="9. Datenschutz">
            <p>Wie wir Daten verarbeiten, steht in der <RouterLink class="link" to="/datenschutz/">Datenschutzerklärung</RouterLink>.</p>
        </LegalSection>
        <LegalSection title="10. Schlussbestimmungen">
            <p>(1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Bei Verbrauchern gilt diese Wahl nur, soweit ihnen nicht der Schutz zwingender Vorschriften des Staates entzogen wird, in dem sie ihren gewöhnlichen Aufenthalt haben.</p>
            <p>(2) Gerichtsstand ist Aschaffenburg, soweit der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
            <p>(3) Sollte eine Bestimmung unwirksam sein, bleibt der Rest wirksam.</p>
        </LegalSection>
        <LegalSection title="Stand">
            <p>November 2026</p>
        </LegalSection>
    </LegalLayout>
</template>
