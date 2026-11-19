<script setup lang="ts">
import { usePageHead } from '../composables/usePageHead'
import LegalLayout from '../components/LegalLayout.vue'
import LegalSection from '../components/LegalSection.vue'

// Adapted from bieterpost-site/datenschutz.html. This site has no forms,
// no cookies, no tracking: update this page before adding any of them.
usePageHead({
    title: 'Datenschutzerklärung | QRnomad',
    description: 'Datenschutz bei QRnomad: keine Cookies, kein Tracking, QR-Codes entstehen in deinem Browser.',
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
        <LegalSection title="4. Links zu app.qrnomad.com">
            <p>Die Schaltflächen für änderbare Codes führen zu app.qrnomad.com. Erst wenn du darauf klickst, rufst du diese Anwendung auf. Welche Daten sie verarbeitet, ergänzen wir hier, bevor sie in Betrieb geht.</p>
        </LegalSection>
        <LegalSection title="5. Deine Rechte">
            <p>Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Schreib dazu an <a class="link" :href="`mailto:${mail}`">{{ mail }}</a>.</p>
            <p>Du kannst dich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren. Für uns zuständig ist das Bayerische Landesamt für Datenschutzaufsicht in Ansbach.</p>
        </LegalSection>
        <LegalSection title="6. Stand">
            <p>November 2026</p>
        </LegalSection>
    </LegalLayout>
</template>
