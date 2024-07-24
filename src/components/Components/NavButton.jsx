// eslint-disable-next-line react/prop-types
const NavButton = ({icon1, text, icon2, isActive}) => {
  const isActiveColor = isActive ? '#E76936' : '#272733';
  return (
    <button className="pr-[22px] flex justify-between font-medium items-center h2-custom">
      <div className="flex gap-5 items-center">
        <p style={{color: isActiveColor}}>{icon1}</p>
        <p style={{color: isActiveColor}}>{text}</p>
      </div>
      <div>
        <p style={{color: isActiveColor}}>{icon2}</p>
      </div>
    </button>
  );
};

export default NavButton;
