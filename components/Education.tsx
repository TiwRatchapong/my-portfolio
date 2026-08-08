import Reveal from "./Reveal";

export default function Education() {
  return (
    <Reveal>
      <section className="pt-6 pb-16">
        <div className="container-custom">

          <h2 className="mb-5 text-[24px] font-semibold">
            Education
          </h2>

          <div className="card p-6">

            <p
              className="text-xs font-medium uppercase tracking-wide"
              style={{ color: "var(--accent)" }}
            >
              2023 — Present
            </p>

            <h3 className="mt-2 text-lg font-semibold text-zinc-100">
              มหาวิทยาลัยราชภัฏพระนคร (PNRU)
            </h3>

            <p className="mt-3 text-sm text-zinc-400">
              คณะวิทยาศาสตร์และเทคโนโลยี
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              สาขาวิทยาการคอมพิวเตอร์
            </p>

            <span className="badge mt-5 inline-flex">
              GPA 3.30
            </span>

          </div>

        </div>
      </section>
    </Reveal>
  );
}