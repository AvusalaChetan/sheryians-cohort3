import Icon from "./Icon";
const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-(--secondaryColor) text-white">
        <Icon />
      </span>
      <p className="font-semibold tracking-wider text-xl">
        Sky<span className="text-(--secondaryColor)">Mart</span>
      </p>
    </div>
  );
};

export default Logo;
