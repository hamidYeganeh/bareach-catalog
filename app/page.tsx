import Image from "next/image";

const slides = [
  "معرفی باریچ",
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
  "مسیرهای همکاری",
  "شروع همکاری و اطلاعات تماس باریچ",
];

const slideHeights = [
  2548, 2532, 2532, 2532, 2532, 2532, 2532,
  2532, 2532, 2532, 2720, 3456, 3236, 3452,
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
            width={5760}
            height={slideHeights[index]}
            sizes={`(max-width: 767px) and (orientation: portrait) 100dvh, (min-aspect-ratio: 5760/${slideHeights[index]}) ${(5760 / slideHeights[index] * 100).toFixed(2)}dvh, 100vw`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </section>
      ))}
    </main>
  );
}
