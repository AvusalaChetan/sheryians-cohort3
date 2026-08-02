import {Copyright} from "lucide-react";

const Fotter = () => {
  return (
    <div className="h-7.5 min-h-7.5 max-h-7.5 overflow-hidden border-t border-zinc-800 px-3 flex items-center justify-center">
      <p className="flex items-center gap-1 justify-center text-zinc-400 text-xs leading-none whitespace-nowrap">
        build by chetan <Copyright size={12} />
      </p>
    </div>
  );
};

export default Fotter;
