<script setup lang="ts">
import { usePageHead } from '../composables/usePageHead'
import LegalLayout from '../components/LegalLayout.vue'
import LegalSection from '../components/LegalSection.vue'

// Adapted from bieterpost-site/datenschutz.html. Sections 4-6 describe the app
// (~/repos/qrnomad): update them when it stores or sends anything new.
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
            <p>Die Website setzt keine Cookies, nutzt keine Analyse-Tools und lädt nichts von fremden Servern. Die Schrift liegt auf derselben Website.</p>
        </LegalSection>
        <LegalSection title="3. QR-Code-Generator">
            <p>Den kostenlosen QR-Code erzeugt dein Browser auf deinem Gerät. Der Link, den du eingibst, wird nicht an uns übertragen und nicht gespeichert. Auch die Datei, die du herunterlädst, entsteht in deinem Browser.</p>
            <p>Scannt jemand einen statischen Code, öffnet das Handy direkt den Link im Code. Unsere Server sind daran nicht beteiligt.</p>
        </LegalSection>
        <LegalSection title="4. Konto und Kauf auf app.qrnomad.com">
            <p>Änderbare Codes verwaltest du in unserer Anwendung app.qrnomad.com. Wenn du kaufst, wickelt Stripe (Stripe Payments Europe, Ltd., Dublin, Irland) die Zahlung ab. Deine Zahlungsdaten gibst du direkt bei Stripe ein; wir sehen sie nicht. Von Stripe erhalten wir deine E-Mail-Adresse, den Betrag und die Kennung deines Kunden- und Zahlungsdatensatzes. Stripe verarbeitet Zahlungsdaten auch in eigener Verantwortung, etwa zur Betrugsprävention.</p>
            <p>Wir speichern deine E-Mail-Adresse, deine Sprache, bis wann dein Jahr läuft, deine Zahlungen und deine Codes mit Namen und Ziel. Zum Anmelden schicken wir dir einen Link per E-Mail; der Link gilt einmal und 30 Minuten. Danach setzt die Anwendung ein technisch notwendiges Cookie, das dich 30 Tage angemeldet hält. Andere Cookies und Analyse-Tools nutzt sie nicht.</p>
            <p>Wir schreiben dir nur zu deinem Konto: Anmeldelinks, die Bestätigung nach dem Kauf und Erinnerungen 30 und 7 Tage vor dem Ende deines Jahres und am letzten Tag. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, die Erfüllung des Vertrags, und für Rechnungen Art. 6 Abs. 1 lit. c DSGVO, unsere gesetzliche Aufbewahrungspflicht.</p>
        </LegalSection>
        <LegalSection title="5. Scans änderbarer Codes">
            <p>Scannt jemand einen änderbaren Code, ruft sein Gerät go.qrnomad.com auf, und wir leiten es an das Ziel weiter. Dabei verarbeiten wir kurz die IP-Adresse und die Browser-Kennung des Geräts. Aus der IP-Adresse ermitteln wir mit einer Datenbank auf unserem eigenen Server (DB-IP Lite) das Land, aus der Browser-Kennung den Gerätetyp. Gespeichert werden nur Zeitpunkt, Code, Land und Gerätetyp, weder die IP-Adresse noch die Browser-Kennung. Daraus entsteht die Statistik für den Inhaber des Codes.</p>
            <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO, das Interesse des Code-Inhabers, zu sehen, wie oft und wo seine Codes gescannt werden. Einzelne Personen erkennt die Statistik nicht.</p>
        </LegalSection>
        <LegalSection title="6. Dienstleister und Speicherdauer">
            <p>Die Anwendung läuft auf einem Server von DigitalOcean in Frankfurt am Main. Die E-Mails versenden wir über Amazon Simple Email Service (Amazon Web Services EMEA SARL, Luxemburg; Versand über Server in den USA). Mit beiden Anbietern bestehen Verträge zur Auftragsverarbeitung. Beide sind nach dem EU-US Data Privacy Framework zertifiziert.</p>
            <p>Konto, Codes und Scans speichern wir, bis du die Löschung verlangst, auch nach dem Ende deines Jahres, damit deine Codes beim Verlängern wieder funktionieren. Rechnungen und Zahlungsbelege bewahren wir so lange auf, wie es das Handels- und Steuerrecht verlangt, in der Regel zehn Jahre. Wir verkaufen deine Daten nicht.</p>
        </LegalSection>
        <LegalSection title="7. Deine Rechte">
            <p>Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Schreib dazu an <a class="link" :href="`mailto:${mail}`">{{ mail }}</a>.</p>
            <p>Du kannst dich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren. Für uns zuständig ist das Bayerische Landesamt für Datenschutzaufsicht in Ansbach.</p>
        </LegalSection>
        <LegalSection title="8. Stand">
            <p>November 2026</p>
        </LegalSection>
    </LegalLayout>
</template>
