import { FunctionComponent } from 'react';
import NavigationDots from '../components/NavigationDots';

const AppWrap = (
  Component: FunctionComponent,
  idName: string,
  classNames?: string
) =>
  function HOC() {
    const currentYear = new Date().getFullYear();

    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@{currentYear} Emilie Tønnessen</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
