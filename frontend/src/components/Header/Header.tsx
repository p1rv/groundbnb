import { useContext, useState } from "react";
import Button from "../Button";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { UserLogo } from "../../assets/svgs/user.tsx";
import { useRouter } from "../../router/hooks.tsx";

const Header: React.FC = () => {
  const { navigate, query } = useRouter();
  const [search, setSearch] = useState<string>(query.has("search") ? (query.get("search") as string) : "");
  const { user } = useContext(UserContext);

  const redirectToProfile = () => {
    navigate("/profile");
  };

  const onSubmit = () => {
    navigate({ pathname: "/", search: `?search=${search}` });
  };

  return (
    <div className="flex items-center p-4 px-8">
      <div className="flex-[1_1_25%] text-6xl text-blue flex items-center justify-start">groundbnb</div>
      <div className="flex-[2_2_50%] bg-blueLight rounded-full py-2 px-4 group focus-within:shadow-[0_0_60px_-20px_#2E4E6E80] transition-color duration-200">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent w-full h-full outline-none placeholder:text-blue/40 text-xl"
          placeholder="Enter name or address..."
          onKeyDown={(e) => {
            e.key === "Enter" && onSubmit();
          }}
        />
      </div>
      {user ? (
        <div className="flex-[1_1_25%] flex items-center justify-end">
          <Button
            className="w-max flex items-center gap-x-4 pr-2 text-2xl group bg-blue text-blueWhite hover:bg-blueWhite hover:!text-blue"
            onClick={redirectToProfile}
          >
            Hi, {user}!
            <UserLogo className="w-12 h-12 border-[3px] border-blue rounded-full p-1 bg-blueWhite stroke-blue group-hover:bg-blue group-hover:stroke-blueWhite transition-color duration-200" />
          </Button>
        </div>
      ) : (
        <div className="flex-[1_1_25%] flex items-center justify-end gap-x-4">
          <Button onClick={() => navigate("/login")}>Login</Button>
          <Button
            onClick={() => navigate("/register")}
            fill
          >
            Register
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
