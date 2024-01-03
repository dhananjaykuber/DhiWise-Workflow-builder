import Button from './Button';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 border-b border-navy-500">
      <a
        href="/"
        className="text-white uppercase font-medium text-sm tracking-wider"
      >
        Workflow Builder
      </a>

      <Button className="hover:text-gray-100 hover:bg-navy-400 w-fit rounded-sm">
        Save workflow
      </Button>
    </header>
  );
};

export default Header;
