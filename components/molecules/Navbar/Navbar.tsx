import SignOutButton from "../SignOutButton/SignOutButton";
import CreateButton from "../CreateButton/CreateButton";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-9 p-3">
        <li>
          <SignOutButton />
        </li>
        <li>
          <CreateButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
