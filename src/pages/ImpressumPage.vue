<script setup lang="ts">
import { usePageHead } from '../composables/usePageHead'
import LegalLayout from '../components/LegalLayout.vue'
import LegalSection from '../components/LegalSection.vue'

// Operator data: same as bieterpost-site/impressum.html (same company).
usePageHead({
    title: 'Impressum | QRnomad',
    description: 'Impressum von QRnomad. Anbieter ist die Solytics GmbH, Karlstein a. Main.',
    path: '/impressum/',
    lang: 'de',
    ogLocale: 'de_DE',
})
</script>

<template>
    <LegalLayout title="Impressum">
        <LegalSection title="Angaben gemäß § 5 DDG">
            <p>Solytics GmbH<br>Hörsteiner Str. 20a<br>63791 Karlstein a. Main<br>Deutschland</p>
        </LegalSection>
        <LegalSection title="Vertreten durch">
            <p>Jens Laufer, Geschäftsführer</p>
        </LegalSection>
        <LegalSection title="Kontakt">
            <p>
                Telefon: <a class="link" href="tel:+4915510249850">+49 155 10249850</a><br>
                E-Mail: <a class="link" href="mailto:jens.laufer@solytics.de">jens.laufer@solytics.de</a>
            </p>
        </LegalSection>
        <LegalSection title="Registereintrag">
            <p>Registergericht: Amtsgericht Aschaffenburg<br>Registernummer: HRB 16879</p>
        </LegalSection>
        <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            <p>Jens Laufer<br>Hörsteiner Str. 20a<br>63791 Karlstein a. Main</p>
        </LegalSection>
        <LegalSection title="Verbraucherstreitbeilegung">
            <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </LegalSection>
    </LegalLayout>
</template>
