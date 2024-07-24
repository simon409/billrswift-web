const Menu = ({menu}) => {
    return (
      <div>
        {menu.map((item, index) => (
          <button key={index} className={`pl-[35px] pr-[22px] flex justify-between h3-custom items-center w-full py-1 ${item.isActive ? 'bg-isSelected text-isActive rounded-tl-2xl rounded-bl-2xl' : ''}`}>
            <div className="flex gap-2 items-center">
              {item.icon1 ? <p>{item.icon1}</p> : null}
              <p>{item.text}</p>
            </div>
            <div>
              {item.icon2 ? <p>{item.icon2}</p> : null}
            </div>
          </button>
        ))}
      </div>
    );
}

export default Menu;
