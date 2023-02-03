import { menuItems } from './Navbar/Navbar';

const NavigationDots = ({ active }: { active: string }) => {
  return (
    <div className="app__navigation">
      {menuItems.map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#0097fe' } : {}}
          aria-label={item}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
