function NavBarSearch() {
  return (
    <form action="" role="search" className="w-4/5 flex py-4">
      <input
        type="serach"
        placeholder="Search"
        aria-label="Search"
        className="mr-2 block w-full py-1.5 px-3 text-base font-normal text-[#212529] bg-white bg-clip-padding	border border-solid border-[#ced4da] rounded-md transition-all"
      />
      <i className="mt-1.5 mr-[5px] w-[4%] font-[Telegraf] text-white text-lg before:content-['\f52a'] before:inline-block before:font-[boostrap-icons] before:not-italic before:font-normal before:normal-nums before:normal-case before:leading-none before:align-[-0.125rem]" />
    </form>
  );
}

export default NavBarSearch;
