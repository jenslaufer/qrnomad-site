import type { Copy } from './types'

// Quelle: copy/landing-de.md. Bewusst weggelassen: alle [TODO] und der
// ungeprüfte Preisvergleich mit Wettbewerbern (siehe CLAUDE.md).
export const de: Copy = {
    locale: 'de',
    path: '/de/',
    seo: {
        title: 'QR-Code kostenlos erstellen – ohne Anmeldung | QRnomad',
        description: 'Erstelle deinen QR-Code kostenlos: ohne Anmeldung, ohne Ablaufdatum, als PNG oder SVG. Link nach dem Druck ändern? Dynamisch für 199 €/Jahr.',
        ogLocale: 'de_DE',
    },
    nav: {
        skip: 'Zum Inhalt springen', home: 'QRnomad Startseite', label: 'Hauptnavigation',
        pricing: 'Preise', faq: 'FAQ', cta: 'QR-Code erstellen', language: 'Sprache',
    },
    hero: {
        eyebrow: 'Kostenloser QR-Code-Generator',
        headline: 'QR-Code kostenlos erstellen. Ohne Anmeldung, ohne Ablauf­datum.',
        subline: 'Link einfügen, Code herunterladen – als PNG oder SVG. Kein Konto, kein Test-Abo, keine Kreditkarte.',
        label: 'Dein Link',
        placeholder: 'https://deine-website.de',
        submit: 'QR-Code erstellen',
        help: 'Funktioniert mit jeder Webadresse, auch mit PDF-Links.',
        downloadPng: 'PNG herunterladen',
        downloadSvg: 'SVG herunterladen',
        trustLead: 'Warum er nie abläuft:',
        trust: 'Dein Link steckt direkt im Code. Beim Scannen läuft nichts über unsere Server.',
        preview: host => `Vorschau des QR-Codes für ${host}`,
        sample: 'deine-website.de',
        staticLabel: 'Statisch',
        created: host => `QR-Code für ${host} ist fertig. Lade ihn unten herunter.`,
        errors: {
            empty: 'Füge zuerst einen Link ein, zum Beispiel deine-website.de.',
            invalid: 'Das sieht nicht nach einer Webadresse aus. Probier etwas wie deine-website.de/karte.',
        },
    },
    upsell: {
        title: 'Kommt der Code in den Druck? Dann mach ihn änderbar.',
        body: [
            'Nach dem Druck ist dieser Link für immer fest. Neue Speisekarte, neue Website, ein Tippfehler – und du druckst neu.',
            'Einen änderbaren Code leitest du jederzeit woandershin. Gleicher Druck, neues Ziel. Dazu siehst du, wie oft er gescannt wird.',
        ],
        offer: '199 € im Jahr für beliebig viele änderbare Codes.',
        offerRest: 'Kein Test-Abo, kein Monatsabo.',
        primary: 'Code änderbar machen',
        free: 'Kostenlos herunterladen (Link bleibt fest)',
        close: 'Schließen',
        optin: {
            label: 'E-Mail (freiwillig)',
            consent: 'Trag deine Adresse ein, dann bekommst du Tipps zu QR-Codes im Druck und Angebote von QRnomad. Du bestätigst per Mail und kannst dich jederzeit abmelden.',
            privacy: 'Datenschutz',
            sent: 'Fast geschafft: Bitte bestätige den Link in deinem Postfach.',
            invalid: 'Diese Adresse sieht unvollständig aus. Dein Download läuft trotzdem.',
        },
    },
    problem: {
        title: 'Einen QR-Code erstellen dauert Sekunden. Ärgerlich wird es nach dem Druck.',
        cases: [
            { key: '500 Speisekarten.', text: 'Du lässt 500 Speisekarten drucken. Zwei Wochen später ändern sich die Preise. Der Code öffnet weiter das alte PDF.' },
            { key: 'Neue Adresse.', text: 'Deine Website zieht um. Der Code auf Flyer, Verpackung und Schaufenster führt jetzt auf eine Fehlerseite.' },
            { key: '14 Tage.', text: 'Oder du hast woanders einen „kostenlosen“ Code erstellt. Nach 14 Tagen geht er nicht mehr – außer du schließt ein Abo ab. Da sind die Flyer längst verteilt.' },
        ],
        verdict: ['Bei QRnomad ist das einfach.', 'Kostenlose Codes bleiben kostenlos. Änderbare Codes kosten einen klaren Preis.', 'Dazwischen gibt es nichts.'],
    },
    how: {
        title: 'Zwei Arten von Codes. Du entscheidest vor dem Druck.',
        static: {
            label: 'Kostenlos', title: 'Statischer Code',
            steps: ['Link einfügen.', 'Code erstellen.', 'Als PNG oder SVG herunterladen. Fertig.'],
            body: 'Dein Link steckt im schwarz-weißen Muster selbst. Das Handy liest ihn und öffnet direkt deine Seite. Wir sitzen nicht dazwischen. Deshalb können wir deinen Code nicht abschalten, selbst wenn wir wollten.',
            catch: 'Der Haken: Nach dem Druck lässt sich der Link nicht mehr ändern.',
        },
        dynamic: {
            label: 'Änderbar', title: 'Dynamischer Code',
            steps: [
                'Code erstellen und „änderbar“ wählen.',
                'Drucken. Der Code zeigt auf eine feste QRnomad-Adresse.',
                'Ziel ändern, wann immer du willst. Jeder gedruckte Code folgt.',
            ],
        },
        closing: ['Der Druck bleibt. Das Ziel zieht weiter.', 'Daher der Name: QRnomad.'],
    },
    pricing: {
        kicker: 'Preise',
        title: 'Kostenlos bleibt kostenlos. Änderbar kostet einen Preis.',
        free: {
            name: 'Kostenlos', price: '0 €', per: 'für immer',
            items: ['Statische QR-Codes', 'Ohne Anmeldung, ohne Kreditkarte', 'Download als PNG und SVG', 'Laufen nie ab', 'Mit kleinem qrnomad.com-Hinweis unter dem Code'],
            limit: 'Link ist nach dem Druck fest',
            cta: 'QR-Code erstellen',
        },
        paid: {
            tag: 'Änderbar', name: 'Dynamisch', price: '199 €', per: '/ Jahr',
            note: 'Einmal im Jahr im Voraus bezahlt. Das sind rund 16,60 € im Monat.',
            items: [
                'Beliebig viele dynamische Codes (Fair Use)',
                'Ziel jederzeit ändern',
                'Scan-Statistik: Scans im Zeitverlauf, ungefähre Herkunft, Gerätetyp',
                'Download als PNG und SVG, ohne qrnomad.com-Hinweis',
                'Kein Monatsabo, kein Test-Abo, kein automatisches Upgrade',
                'Keine automatische Verlängerung. Wir erinnern dich vor Ablauf per E-Mail, verlängern tust du selbst.',
            ],
            cta: 'Codes änderbar machen',
        },
    },
    faq: {
        kicker: 'FAQ',
        title: 'Gerade heraus gefragt.',
        items: [
            { q: 'Ist der kostenlose QR-Code wirklich kostenlos?', a: ['Ja. Kein Konto, kein Test-Abo, keine Kreditkarte. Du lädst die Datei herunter, und sie gehört dir. Unter dem Code steht klein „qrnomad.com“ – das siehst du schon in der Vorschau. Änderbare Codes kommen ohne diesen Hinweis.'] },
            { q: 'Hört mein kostenloser Code irgendwann auf zu funktionieren?', a: ['Nein. Ein statischer Code trägt deinen Link im Muster selbst. Beim Scannen öffnet das Handy direkt deine Seite. Unsere Server sind nicht beteiligt, also können wir ihn nicht abschalten. Er geht nur dann nicht mehr, wenn die verlinkte Seite offline ist.'] },
            { q: 'Was ist der Unterschied zwischen statisch und dynamisch?', a: [
                'Statisch: Der Link steckt direkt im Code. Kostenlos und unbegrenzt haltbar, aber nach dem Druck fest.',
                'Dynamisch: Der Code enthält eine feste QRnomad-Adresse, die auf deinen Link weiterleitet. Du änderst das Ziel jederzeit und siehst die Scans. Für diese Weiterleitung zahlst du.',
            ] },
            { q: 'Kann ich einen kostenlosen Code später änderbar machen?', a: ['Nein. Beim statischen Code ist der Link fest eingebaut. Wenn sich dein Link ändern könnte, mach den Code vor dem Druck änderbar.'] },
            { q: 'Was passiert mit meinen dynamischen Codes, wenn ich nicht verlängere?', a: [
                'Sie leiten nicht mehr weiter, sobald dein bezahltes Jahr endet. So funktionieren dynamische Codes überall: Der gedruckte Code zeigt auf unsere Adresse, und die Weiterleitung läuft so lange wie dein Plan.',
                'Überraschen werden wir dich nicht. Es gibt keine automatische Verlängerung: Wir schreiben dir 30 und 7 Tage vor Ablauf, und nach Ablauf zeigen deine Codes noch 30 Tage einen Hinweis mit deinem Link. Alle Codes samt Ziel-Links kannst du jederzeit exportieren.',
                'Soll ein Code ohne Plan für immer funktionieren, nimm einen kostenlosen statischen Code, der auf eine Seite zeigt, die dir gehört.',
            ] },
            { q: 'Gibt es ein Monatsabo oder eine Testphase?', a: ['Nein. Es gibt einen Plan: 199 € im Jahr, einmal im Voraus bezahlt. Keine Testphase, die still zum Abo wird. Kein automatisches Upgrade. Du siehst den Preis vor dem Kauf, und genau den zahlst du.'] },
            { q: 'Was heißt „unbegrenzt, Fair Use“?', a: ['Du erstellst so viele dynamische Codes, wie dein Geschäft braucht. Fair Use schließt Missbrauch aus, nicht normale Nutzung.'] },
            { q: 'Was zeigt die Scan-Statistik?', a: ['Wie oft dein Code pro Tag gescannt wird, ungefähr woher und mit welchem Gerätetyp.'] },
            { q: 'Welches Dateiformat brauche ich?', a: ['SVG für den Druck. Es bleibt in jeder Größe scharf. PNG für Website, E-Mail und Office-Dokumente.'] },
            { q: 'Warum heißt es QRnomad?', a: ['Der gedruckte Code bleibt, wo er ist. Sein Ziel zieht mit dir weiter: zur neuen Karte, zur neuen Website, zum nächsten Objekt.'] },
        ],
    },
    final: {
        title: 'Dein QR-Code ist in Sekunden fertig.',
        body: 'Kostenlos, ohne Anmeldung, ohne Ablaufdatum. Kommt er in den Druck? Dann mach ihn vorher änderbar.',
        cta: 'QR-Code erstellen',
    },
    footer: {
        tagline: 'Der gedruckte Code bleibt, wo er ist. Sein Ziel zieht mit dir weiter.',
        product: 'Produkt', legal: 'Rechtliches',
        generator: 'Generator', imprint: 'Impressum', privacy: 'Datenschutz', terms: 'AGB',
        base: 'Statische Codes laufen über keinen Server.',
    },
}
