export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/9dc5de98-f55f-45cf-9cce-d454ca418311/files/b7e3aabd-e434-4f86-9e47-d0ab87d431b9.jpg"
          alt="CS:GO редкий скин"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="cases" className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Честные шансы, мгновенная выдача скинов и сотни кейсов — от классики до эксклюзивных серий с легендарными дропами.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Смотреть кейсы
        </button>
      </div>
    </div>
  );
}