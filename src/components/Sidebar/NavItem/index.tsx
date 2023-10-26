import Icon, { IconType } from 'common/Icon';
import { Link } from 'react-router-dom';

export interface LinkDetail {
  label: string;
  to: string;
  icon: IconType;
}
interface NavDetails {
  item: LinkDetail;
  hoverEffect: boolean;
  icon?: IconType;
}

const NavItem: React.FC<NavDetails> = ({
  item: { label, to },
  hoverEffect,
  icon,
}) => {
  return (
    <div className="group uppercase my-5 ">
      <div
        className={`flex space-x-2 cursor-pointer ${
          hoverEffect
            ? 'group-hover:scale-105 group-hover:duration-100 group-hover:underline underline-offset-4'
            : ''
        }`}
      >
        {icon && <Icon name={icon} />}

        <Link className="font-light  text-xl" to={to}>
          {label}
        </Link>
      </div>
    </div>
  );
};

export default NavItem;
