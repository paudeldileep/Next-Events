//to wrap around app.js

import MainHeader from "./MainHeader";


const CustomLayout = (props) => {
  
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default CustomLayout;
