export default function InfoItem({ title, children }) {
  return (
    <div>
      <h3 className="font-body mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#2B170E]">
        {title}
      </h3>

      <div className="font-body text-[16px] leading-8 text-[#8B8B8B]">
        {children}
      </div>
    </div>
  );
}