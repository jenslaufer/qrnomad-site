<script setup lang="ts">
import { usePageHead } from '../composables/usePageHead'
import LegalLayout from '../components/LegalLayout.vue'
import LegalSection from '../components/LegalSection.vue'

// Adapted from bieterpost-site/datenschutz.html. Section 4 describes the e-mail list
// (Launch Kit tenant qrnomad), sections 5-7 the app (~/repos/qrnomad): update them
// when either stores or sends anything new.
usePageHead({
    title: 'Datenschutzerklärung | QRnomad',
    description: 'Datenschutz bei QRnomad: kein Tracking, freie QR-Codes entstehen in deinem Browser, Scans ohne IP-Adresse.',
    path: '/datenschutz/',
    lang: 'de',
    ogLocale: 'de_DE',
})
const mail = 'jens.laufer@solytics.de'
</script>

<template>
    <LegalLayout title="Datenschutzerklärung">
        <LegalSection title="1. Verantwortlicher">
            <p>Solytics GmbH, Hörsteiner Str. 20a, 63791 Karlstein a. Main<br>E-Mail: <a class="link" :href="`mailto:${mail}`">{{ mail }}</a></p>
        </LegalSection>
        <LegalSection title="2. Aufruf der Website">
            <p>Die Website liegt bei GitHub Pages (GitHub, Inc., USA). Beim Aufruf verarbeitet GitHub technisch notwendige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Seite und Browser, um die Seite auszuliefern und vor Missbrauch zu schützen. GitHub ist nach dem EU-US Data Privacy Framework zertifiziert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO, unser Interesse an einer sicheren Auslieferung der Website.</p>
            <p>Die Website setzt keine Cookies, nutzt keine Analyse-Tools und lädt nichts von fremden Servern, außer du trägst dich freiwillig für E-Mails ein (Abschnitt 4). Die Schrift liegt auf derselben Website.</p>
        </LegalSection>
        <LegalSection title="3. QR-Code-Generator">
            <p>Den kostenlosen QR-Code erzeugt dein Browser auf deinem Gerät. Der Link, den du eingibst, bleibt in deinem Browser. Auch die Datei, die du herunterlädst, entsteht dort. Nur wenn du auf „Code änderbar machen“ klickst, geben wir den Link an app.qrnomad.com weiter, damit er nach dem Kauf dein erster änderbarer Code wird. Kaufst du nicht, speichern wir ihn nicht.</p>
            <p>Scannt jemand einen statischen Code, öffnet das Handy direkt den Link im Code. Unsere Server sind daran nicht beteiligt.</p>
        </LegalSection>
        <LegalSection title="4. E-Mails von QRnomad">
            <p>Im Download-Fenster kannst du freiwillig deine E-Mail-Adresse eintragen. Der Download funktioniert auch ohne. Trägst du dich ein, schicken wir dir eine Mail mit einem Bestätigungslink. Erst nach deinem Klick nehmen wir dich in die Liste auf (Double-Opt-in). Danach bekommst du Tipps zu QR-Codes und Angebote von QRnomad, keine Werbung für andere Produkte.</p>
            <p>Wir speichern deine Adresse, deine Sprache und den Zeitpunkt deiner Bestätigung, aber nicht den Link deines QR-Codes. Bestätigst du nicht, löschen wir deine Adresse nach 7 Tagen. Bestätigte Adressen speichern wir, bis du dich abmeldest. Danach behalten wir nur die Adresse mit einem Sperrvermerk, damit wir dir nie wieder schreiben. Auf Wunsch löschen wir sie ganz. Die Liste führen wir mit Launch Kit, einer eigenen Software auf unserem Server bei DigitalOcean in Frankfurt am Main. Versendet wird über Amazon SES (siehe Abschnitt 7).</p>
            <p>Beim Eintragen schickt dein Browser die Anfrage an auth.solytics.de. Der Server nutzt deine IP-Adresse nur kurz im Arbeitsspeicher, um Missbrauch zu begrenzen, und führt kein Zugriffsprotokoll. Nur bei einer technischen Störung kann sie in einem Fehlerprotokoll landen, das regelmäßig überschrieben wird. Rechtsgrundlage dafür ist Art. 6 Abs. 1 lit. f DSGVO, unser Interesse an einem sicheren Betrieb.</p>
            <p>Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Du kannst sie jederzeit widerrufen, über den Abmeldelink in jeder Mail oder per Mail an uns. Danach schreiben wir dir nicht mehr.</p>
        </LegalSection>
        <LegalSection title="5. Konto und Kauf auf app.qrnomad.com">
            <p>Änderbare Codes verwaltest du in unserer Anwendung app.qrnomad.com. Wenn du kaufst, wickelt Stripe (Stripe Payments Europe, Ltd., Dublin, Irland) die Zahlung ab. Deine Zahlungsdaten gibst du direkt bei Stripe ein; wir sehen sie nicht. Von Stripe erhalten wir deine E-Mail-Adresse, den Betrag und die Kennung deines Kunden- und Zahlungsdatensatzes. Stripe verarbeitet Zahlungsdaten auch in eigener Verantwortung, etwa zur Betrugsprävention.</p>
            <p>Kommst du über eine Anzeige zu uns, steht in der Adresse der Seite der Name der Kampagne, etwa „search-de-paid“. Klickst du auf „Code änderbar machen“, geben wir diesen Namen an app.qrnomad.com weiter. Kaufst du, speichern wir ihn bei Stripe zu deiner Zahlung. So sehen wir, welche Anzeige zu einem Kauf geführt hat. Der Name ist für alle Besucher einer Kampagne gleich und sagt nichts über dich aus. Andere Angaben aus der Adresse, etwa die Klick-Kennung von Google, werten wir nicht aus. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO, unser Interesse, zu wissen, welche Werbung sich lohnt.</p>
            <p>Wir speichern deine E-Mail-Adresse, deine Sprache, bis wann dein Jahr läuft, deine Zahlungen und deine Codes mit Namen und Ziel. Zum Anmelden schicken wir dir einen Link per E-Mail; der Link gilt einmal und 30 Minuten. Danach setzt die Anwendung ein technisch notwendiges Cookie, das dich 30 Tage angemeldet hält. Andere Cookies und Analyse-Tools nutzt sie nicht.</p>
            <p>Wir schreiben dir nur zu deinem Konto: Anmeldelinks, die Bestätigung nach dem Kauf und Erinnerungen 30 und 7 Tage vor dem Ende deines Jahres und am letzten Tag. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, die Erfüllung des Vertrags, und für Rechnungen Art. 6 Abs. 1 lit. c DSGVO, unsere gesetzliche Aufbewahrungspflicht.</p>
        </LegalSection>
        <LegalSection title="6. Scans änderbarer Codes">
            <p>Scannt jemand einen änderbaren Code, ruft sein Gerät go.qrnomad.com auf, und wir leiten es an das Ziel weiter. Dabei verarbeiten wir kurz die IP-Adresse und die Browser-Kennung des Geräts. Aus der IP-Adresse ermitteln wir mit einer Datenbank auf unserem eigenen Server (DB-IP Lite) das Land, aus der Browser-Kennung den Gerätetyp. Gespeichert werden nur Zeitpunkt, Code, Land und Gerätetyp, weder die IP-Adresse noch die Browser-Kennung. Daraus entsteht die Statistik für den Inhaber des Codes.</p>
            <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO, das Interesse des Code-Inhabers, zu sehen, wie oft und wo seine Codes gescannt werden. Einzelne Personen erkennt die Statistik nicht.</p>
        </LegalSection>
        <LegalSection title="7. Dienstleister und Speicherdauer">
            <p>Die Anwendung läuft auf einem Server von DigitalOcean in Frankfurt am Main. Die E-Mails versenden wir über Amazon Simple Email Service (Amazon Web Services EMEA SARL, Luxemburg; Versand über Server in den USA). Mit beiden Anbietern bestehen Verträge zur Auftragsverarbeitung. Beide sind nach dem EU-US Data Privacy Framework zertifiziert.</p>
            <p>Konto, Codes und Scans speichern wir, bis du die Löschung verlangst, auch nach dem Ende deines Jahres, damit deine Codes beim Verlängern wieder funktionieren. Rechnungen und Zahlungsbelege bewahren wir so lange auf, wie es das Handels- und Steuerrecht verlangt, in der Regel zehn Jahre. Wir verkaufen deine Daten nicht.</p>
        </LegalSection>
        <LegalSection title="8. Deine Rechte">
            <p>Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Schreib dazu an <a class="link" :href="`mailto:${mail}`">{{ mail }}</a>.</p>
            <p>Du kannst dich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren. Für uns zuständig ist das Bayerische Landesamt für Datenschutzaufsicht in Ansbach.</p>
        </LegalSection>
        <LegalSection title="9. Stand">
            <p>November 2026</p>
        </LegalSection>
    </LegalLayout>
</template>
