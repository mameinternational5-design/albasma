import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Globe, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Send, MessageCircle } from "lucide-react";
import { LANGS, useI18n } from "@/lib/i18n";
import { SITE, waLink } from "@/lib/site";

export function AnimatedName({ className = "" }: { className?: string }) {
  const words = ["AL", "BASMA"];
  let i = 0;
  return (
    <span className={`font-display font-semibold tracking-wide ${className}`} dir="ltr">
      {words.map((w, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {w.split("").map((c) => (
            <span key={i} className="animate-letter text-gold-gradient" style={{ animationDelay: `${0.25 + i++ * 0.07}s` }}>{c}</span>
          ))}
          {wi === 0 && <span className="inline-block w-[0.3em]" />}
        </span>
      ))}
    </span>
  );
}

// Logo is served from Imgur so it works on any host (Vercel, Plesk, etc.)
// without depending on files in the public folder.
export const LOGO_URL = "https://i.imgur.com/WUWWnws.jpeg";

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <span className="relative inline-block overflow-hidden rounded-full ring-1 ring-gold/40" style={{ width: size, height: size }}>
      <img src={LOGO_URL} alt="Al Basma fingerprint logo" className="h-full w-full object-cover" />
    </span>
  );
}

export function LogoHero() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md animate-float">
      <span className="absolute inset-[18%] rounded-full border border-gold/40 animate-ring" />
      <span className="absolute inset-[18%] rounded-full border border-gold/30 animate-ring" style={{ animationDelay: "1.3s" }} />
      <div className="relative h-full w-full overflow-hidden rounded-full shadow-gold ring-1 ring-gold/30">
        <img src={LOGO_URL} alt="Al Basma Recruitment logo" className="h-full w-full object-cover" />
        <span className="absolute inset-x-0 h-px bg-gold-gradient opacity-80 shadow-gold animate-scan" />
      </div>
    </div>
  );
}

function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex items-center gap-1 rounded-full border border-gold/30 p-1 text-xs">
      <Globe className="mx-1 h-3.5 w-3.5 text-gold" />
      {LANGS.map((l) => (
        <button key={l.code} onClick={() => setLang(l.code)}
          className={`rounded-full px-2.5 py-1 transition ${lang === l.code ? "bg-gold text-navy-deep" : "text-ivory/80 hover:text-gold"}`}>
          {l.label}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: t.nav.home }, { to: "/about", label: t.nav.about }, { to: "/services", label: t.nav.services },
    { to: "/jobs", label: t.nav.jobs }, { to: "/blog", label: t.nav.blog }, { to: "/contact", label: t.nav.contact },
  ] as const;
  return (
    <header className="sticky top-0 z-50 surface-dark border-b border-gold/15 backdrop-blur">
      <div className="hidden border-b border-gold/10 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-ivory/70">
          <div className="flex gap-5">
            <a href={`tel:${SITE.phones[0]}`} className="flex items-center gap-1.5 hover:text-gold"><Phone className="h-3 w-3" />{SITE.phones[0]}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1.5 hover:text-gold"><Mail className="h-3 w-3" />{SITE.email}</a>
          </div>
          <LangSwitch />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <LogoMark size={44} />
          <span className="leading-none">
            <AnimatedName className="text-2xl" />
            <span className="block text-[10px] tracking-[0.35em] text-ivory/70">RECRUITMENT</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }} className="text-sm text-ivory/80 transition hover:text-gold" activeProps={{ className: "text-gold" }}>{l.label}</Link>
          ))}
          <Link to="/apply" className="rounded-sm bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-gold">{t.nav.apply}</Link>
        </nav>
        <button className="text-ivory lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="space-y-1 border-t border-gold/10 px-6 pb-5 pt-2 lg:hidden">
          {links.map((l) => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-2 text-ivory/90">{l.label}</Link>)}
          <Link to="/apply" onClick={() => setOpen(false)} className="mt-2 block rounded-sm bg-gold-gradient py-2.5 text-center font-semibold text-navy-deep">{t.nav.apply}</Link>
          <div className="pt-3 overflow-x-auto"><LangSwitch /></div>
        </div>
      )}
    </header>
  );
}

const TikTok = (p: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={p.className}><path d="M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.8 5.8 0 1 0 4.9 5.7V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.3-1.6Z" /></svg>
);

export function Socials() {
  const s = SITE.socials;
  const items = [[s.facebook, Facebook, "Facebook"], [s.telegram, Send, "Telegram"], [s.tiktok, TikTok, "TikTok"], [s.instagram, Instagram, "Instagram"], [s.linkedin, Linkedin, "LinkedIn"]] as const;
  return (
    <div className="flex gap-2">
      {items.map(([href, Icon, label]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-navy-deep"><Icon className="h-4 w-4" /></a>
      ))}
    </div>
  );
}

export function SiteFooter() {
  const { t } = useI18n();
  const [done, setDone] = useState(false);
  return (
    <footer className="surface-dark border-t border-gold/15">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3"><LogoMark size={52} /><AnimatedName className="text-3xl" /></div>
          <p className="text-sm text-ivory/70">{t.footer.tagline}</p>
          <p className="text-xs text-ivory/50">Member: {SITE.association}</p>
          <Socials />
        </div>
        <div className="space-y-3 text-sm text-ivory/80">
          <h4 className="text-lg text-gold">{t.nav.contact}</h4>
          <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" />{SITE.address}</p>
          {SITE.phones.map((p) => <a key={p} href={`tel:${p}`} className="flex gap-2 hover:text-gold" dir="ltr"><Phone className="h-4 w-4 text-gold" />{p}</a>)}
          <a href={`mailto:${SITE.email}`} className="flex gap-2 hover:text-gold"><Mail className="h-4 w-4 text-gold" />{SITE.email}</a>
          <p className="flex gap-2"><Clock className="h-4 w-4 text-gold" />{t.footer.hours}</p>
        </div>
        <div className="space-y-2 text-sm text-ivory/80">
          <h4 className="text-lg text-gold">{t.footer.legal}</h4>
          <Link to="/legal/$doc" params={{ doc: "privacy" }} className="block hover:text-gold">Privacy Policy</Link>
          <Link to="/legal/$doc" params={{ doc: "terms" }} className="block hover:text-gold">Terms of Service</Link>
          <Link to="/legal/$doc" params={{ doc: "ethical-recruitment" }} className="block hover:text-gold">Anti-Trafficking & Ethical Recruitment</Link>
          <Link to="/legal/$doc" params={{ doc: "complaints" }} className="block hover:text-gold">Complaints & Grievances</Link>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg text-gold">{t.footer.newsletter}</h4>
          {done ? <p className="text-sm text-gold-soft">✓ Thank you!</p> : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex flex-col gap-2">
              <input required type="tel" placeholder="Phone / Email" className="rounded-sm border border-gold/30 bg-transparent px-3 py-2 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none" />
              <button className="rounded-sm bg-gold-gradient py-2 text-sm font-semibold text-navy-deep">{t.footer.subscribe}</button>
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-gold/10 py-5 text-center text-xs text-ivory/50">© 2026 {SITE.name}. {t.footer.rights}</div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="fixed bottom-6 end-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-ivory shadow-lg">
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ring" />
      <MessageCircle className="relative h-7 w-7" />
    </a>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="surface-dark ridge-bg">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h1 className="animate-rise text-5xl text-gold-gradient md:text-6xl">{title}</h1>
        {sub && <p className="mx-auto mt-4 max-w-2xl animate-rise text-ivory/75" style={{ animationDelay: ".15s" }}>{sub}</p>}
      </div>
    </section>
  );
}

export function SectionTitle({ title, sub, light }: { title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="mx-auto mb-4 flex items-center justify-center gap-3"><span className="h-px w-10 bg-gold" /><span className="h-1.5 w-1.5 rotate-45 bg-gold" /><span className="h-px w-10 bg-gold" /></div>
      <h2 className={`text-4xl md:text-5xl ${light ? "text-ivory" : "text-navy"}`}>{title}</h2>
      {sub && <p className={`mt-3 ${light ? "text-ivory/70" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /><WhatsAppFloat /></>;
}
