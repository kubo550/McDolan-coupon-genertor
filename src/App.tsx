import { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Home, Type, Date, Result } from "./components";
import { getUniqeCode } from "./utils/index";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export type couponType = "hamburger" | "cheeseburger" | "lody" | "frytki";

export interface couponProps {
  type: couponType | "";
  date: string;
  code: string;
}

const App = () => {
  const location = useLocation();
  const [coupon, setCoupon] = useState<couponProps>({
    type: "",
    date: "",
    code: getUniqeCode(),
  });

  const setCouponType = (type: couponType) => setCoupon(prev => ({ ...prev, type }));
  const setCouponDate = (date: string) => setCoupon(prev => ({ ...prev, date }));

  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
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
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
