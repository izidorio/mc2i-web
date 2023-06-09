import { useAuth } from "@/stores";

export function Avatar() {
  const { user } = useAuth((store) => store);

  function handleInitial(): string {
    const _name = user?.name.trim().split(" ");

    if (_name && _name.length > 1) {
      const index = _name.length - 1;
      return `${_name[0].slice(0, 1)}${_name[index].slice(0, 1)}`;
    }

    return `${user?.name.slice(0, 2).toLocaleUpperCase()}`;
  }

  return (
    <div className="flex items-center cursor-pointer">
      <div className="hidden md:block">{user?.name.trim().split(" ")[0]}</div>
      <div className="hidden md:flex divider divider-horizontal" />
      <div className="avatar placeholder">
        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <span className="text-xs">{handleInitial()}</span>
        </div>
      </div>
    </div>
  );
}
