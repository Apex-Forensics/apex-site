import { colors } from "@/lib/colors";

type Step = {
  step: string;
  title: string;
  desc: string;
};

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <section className="section-padding" style={{ background: colors.soft }}>
      <div className="container-apex">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
            OUR PROCESS
          </h2>
          <div style={{ width: "60px", height: "3px", background: colors.gold, margin: "0 auto" }} />
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}>
          {steps.map((item) => (
            <div key={item.step} style={{
              background: "white",
              borderRadius: "8px",
              padding: "2rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              position: "relative",
            }} className="card-hover">
              <div style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: colors.goldLight,
                lineHeight: 1,
                marginBottom: "1rem",
              }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: "16px", marginBottom: "0.75rem", color: colors.navy }}>
                {item.title}
              </h3>
              <p style={{ color: colors.grey, fontSize: "13px", lineHeight: 1.7 }}>
                {item.desc}
              </p>
              <div style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: "4px",
                height: "40px",
                background: colors.gold,
                borderRadius: "2px",
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}