import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Type, Date, Result } from "./components";
import { getUniqeCode } from "./utils/index";
import { AnimatePresence } from "framer-motion";
export type couponType = "hamburger" | "cheeseburger" | "lody" | "frytki";

export interface couponProps {
  type: couponType | "";
  date: string;
  code: string;
}

const App = () => {
  const [coupon, setCoupon] = useState<couponProps>({
    type: "",
    date: "",
    code: getUniqeCode(),
  });

  const setCouponType = (type: couponType) => setCoupon(prev => ({ ...prev, type }));
  const setCouponDate = (date: string) => setCoupon(prev => ({ ...prev, date }));

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/step1'>
          <Type type={coupon.type} setCouponType={setCouponType} />
        </Route>
        <Route path='/step2'>
          <Date date={coupon.date} setCouponDate={setCouponDate} />
        </Route>
        <Route path='/result'>
          <Result coupon={coupon} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
