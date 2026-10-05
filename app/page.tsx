import Image from "next/image";

const slides = [
  "معرفی باریچ و اطلاعات تماس",
  "درباره ما",
  "مسئله بازار",
  "راهکار باریچ",
  "باریچ در یک نگاه",
  "سرویس‌های ما",
  "فرایند برای صاحبان کالا",
  "ارزش‌آفرینی برای صاحبان کالا",
  "ارزش‌آفرینی برای فورواردرها",
  "روش سنتی در برابر باریچ",
  "مخاطبان باریچ",
  "موارد استفاده",
];

export default function Home() {
  return (
    <main className="catalog" aria-label="کاتالوگ باریچ" tabIndex={0}>
      {slides.map((title, index) => (
        <section
          className="catalog-slide"
          key={title}
          aria-label={`${index + 1}. ${title}`}
        >
          <Image
            className="catalog-image"
            src={`/catalog/${String(index + 1).padStart(2, "0")}.png`}
            alt={title}
            width={4763}
            height={3368}
            sizes="(min-aspect-ratio: 4763/3368) 141.42dvh, 100vw"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </section>
      ))}
    </main>
  );
}
