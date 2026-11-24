import type { Copy } from './types'

// Source: copy/landing-en.md. Left out on purpose: every [TODO] and the
// unverified competitor price comparison (see CLAUDE.md).
export const en: Copy = {
    locale: 'en',
    path: '/',
    seo: {
        title: 'Free QR Code Generator – No Signup, No Expiry | QRnomad',
        description: 'Create a free QR code in seconds. No signup, no trial, no expiry date. Download PNG or SVG. Need to change the link after printing? Go dynamic.',
        ogLocale: 'en_US',
    },
    nav: {
        skip: 'Skip to content', home: 'QRnomad home', label: 'Main navigation',
        pricing: 'Pricing', faq: 'FAQ', cta: 'Create my QR code', language: 'Language',
    },
    hero: {
        eyebrow: 'Free QR code generator',
        headline: 'Create a free QR code that never expires.',
        subline: 'QRnomad turns any link into a QR code for your menus, flyers and packaging. No signup. No trial. Download PNG or SVG.',
        label: 'Your link',
        placeholder: 'https://your-website.com',
        submit: 'Create my QR code',
        help: 'Works with any web address, including links to PDFs.',
        downloadPng: 'Download PNG',
        downloadSvg: 'Download SVG',
        trustLead: 'Why it never expires:',
        trust: 'your link sits inside the code itself. Scans never touch our servers.',
        preview: host => `QR code preview for ${host}`,
        sample: 'your-website.com',
        staticLabel: 'Static',
        created: host => `QR code for ${host} is ready. Download it below.`,
        errors: {
            empty: 'Paste a link first, for example your-website.com.',
            invalid: 'That doesn’t look like a web address. Try something like your-website.com/menu.',
        },
    },
    upsell: {
        title: 'Printing this? Make it editable.',
        body: [
            'Once it’s printed, this link is fixed for good. New menu, new website, one typo: you reprint.',
            'An editable code lets you change where it leads, anytime. Same print. New link. And you see how often it gets scanned.',
        ],
        offer: '$199 a year for unlimited editable codes.',
        offerRest: 'No trial. No monthly plan.',
        primary: 'Make it editable',
        free: 'Download free code (link stays fixed)',
        close: 'Close',
        optin: {
            label: 'Email (optional)',
            consent: 'Add your email to get tips on printing QR codes and offers from QRnomad. You confirm by email and can unsubscribe anytime.',
            privacy: 'Privacy',
            sent: 'Almost done: please confirm the link in your inbox.',
            invalid: 'This address looks incomplete. Your download still works.',
            failed: "Sign-up didn't work. Your download still works.",
        },
    },
    problem: {
        title: 'Making a QR code takes seconds. Changing it after printing is the hard part.',
        cases: [
            { key: '500 menus.', text: 'You print 500 menus. Two weeks later, prices change. The code still opens the old PDF.' },
            { key: 'New address.', text: 'Your website moves. The code on your flyers, your packaging and your shop window now leads to an error page.' },
            { key: '14 days.', text: 'Or you made a “free” code somewhere else. After 14 days it stops working, unless you pay. By then the flyers are already out.' },
        ],
        verdict: ['QRnomad keeps it simple.', 'Free codes stay free. Editable codes cost one clear price.', 'Nothing in between.'],
    },
    how: {
        title: 'Two kinds of codes. You pick before you print.',
        static: {
            label: 'Free', title: 'Free static code',
            steps: ['Paste your link.', 'Create your code.', 'Download PNG or SVG. Done.'],
            body: 'Your link is stored inside the black-and-white pattern. A phone reads it and opens your page directly. We are not in between. So we can’t switch your code off, even if we wanted to.',
            catch: 'The catch: once printed, the link can’t change.',
        },
        dynamic: {
            label: 'Editable', title: 'Editable dynamic code',
            steps: [
                'Create your code and choose “editable”.',
                'Print it. The code points to a fixed QRnomad address.',
                'Change the destination whenever you want. Every printed copy follows.',
            ],
        },
        closing: ['The print stays put. The destination moves.', 'That’s the idea behind the name: QRnomad.'],
    },
    pricing: {
        kicker: 'Pricing',
        title: 'Free stays free. Editable costs one price.',
        free: {
            name: 'Free', price: '$0', per: 'forever',
            items: ['Static QR codes', 'No signup, no credit card', 'PNG and SVG download', 'Never expires', 'Small qrnomad.com caption under the code'],
            limit: 'Link is fixed once printed',
            cta: 'Create my QR code',
        },
        paid: {
            tag: 'Editable', name: 'Dynamic', price: '$199', per: '/ year',
            note: 'Paid once a year. That’s about $16.60 a month.',
            items: [
                'Unlimited dynamic codes (fair use)',
                'Change the destination anytime',
                'Scan stats: scans over time, rough location, device type',
                'PNG and SVG download, no qrnomad.com caption',
                'No monthly plan, no trial, no automatic upgrades',
                'No automatic renewal. We email you before your year ends; you renew yourself.',
            ],
            cta: 'Make my codes editable',
        },
    },
    faq: {
        kicker: 'FAQ',
        title: 'Straight answers.',
        items: [
            { q: 'Is the free QR code really free?', a: ['Yes. No account, no trial, no credit card. You download the file, and it’s yours. A small “qrnomad.com” caption sits under the code; you see it in the preview. Editable codes come without it.'] },
            { q: 'Will my free code ever stop working?', a: ['No. A static code holds your link inside the pattern itself. When someone scans it, their phone opens your link directly. Our servers are not involved, so we can’t switch it off. It only stops working if the page it links to goes offline.'] },
            { q: 'What’s the difference between static and dynamic?', a: [
                'A static code holds your link directly. It’s free and works forever, but the link is fixed once printed.',
                'A dynamic code holds a fixed QRnomad address that forwards to your link. You can change the link anytime and see scan stats. That forwarding is what the plan pays for.',
            ] },
            { q: 'Can I turn a free code into an editable one later?', a: ['No. The link is baked into a static code. If your link might change, make the code editable before you print.'] },
            { q: 'What happens to my dynamic codes if I don’t renew?', a: [
                'They stop forwarding when your paid year ends. That’s how dynamic codes work everywhere: the printed code points to our address, and the forwarding runs as long as your plan does.',
                'We won’t surprise you. There is no automatic renewal: we email you 30 and 7 days before your year ends, and for 30 days after that your codes show a notice with your link. You can export all your codes and their destination links anytime.',
                'If a code must work forever without a plan, use a free static code that points to a page you control.',
            ] },
            { q: 'Is there a monthly plan or a free trial?', a: ['No. There’s one plan: $199, paid once a year. No trial that quietly turns into a subscription. No automatic upgrade to a bigger plan. You see the price before you pay, and that’s the price you pay.'] },
            { q: 'What does “unlimited, fair use” mean?', a: ['Create as many dynamic codes as your business needs. Fair use rules out abuse, not normal business use.'] },
            { q: 'What do the scan stats show?', a: ['How many scans you get per day, roughly where they come from, and which kind of device.'] },
            { q: 'Which file format should I use?', a: ['SVG for print. It stays sharp at any size. PNG for websites, emails and Office documents.'] },
            { q: 'Why the name QRnomad?', a: ['The printed code stays where it is. Its destination travels with you: to the new menu, the new website, the next listing.'] },
        ],
    },
    final: {
        title: 'Your QR code is ready in seconds.',
        body: 'Free. No signup. Never expires. Printing it? Make it editable before it goes to the printer.',
        cta: 'Create my QR code',
    },
    footer: {
        tagline: 'The printed code stays where it is. Its destination travels with you.',
        product: 'Product', legal: 'Legal',
        generator: 'Generator', imprint: 'Imprint (German)', privacy: 'Privacy policy (German)', terms: 'Terms (German)',
        base: 'Scans of static codes never touch our servers.',
    },
}
