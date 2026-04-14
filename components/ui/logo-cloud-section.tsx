import { LogoCloud } from "@/components/ui/logo-cloud-2";

export function LogoCloudSection() {
  return (
    <div className="min-h-[400px] w-full place-content-center px-4 py-16">
      <section className="relative mx-auto grid max-w-3xl">
        <h2 className="mb-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
          Trusted by teams at the world&apos;s{" "}
          <span className="font-semibold text-primary">best companies</span>.
        </h2>
        <LogoCloud />
      </section>
    </div>
  );
}
