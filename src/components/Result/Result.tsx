import { FC } from "react";
import { imageTypes } from "../../img";
import { couponProps } from "../../App";

interface couponType {
  coupon: couponProps;
}

export const Result: FC<couponType> = ({ coupon: { type, date, code } }) => (
  <div>
    <p>Dzień dobry,</p>
    <p>Przesyłamy kupon McDonald's w podziękowaniu za wzięcie udziału w ankiecie.</p>
    <p>
      <strong>DATA WYDANIA:</strong> <span> {date} </span>
    </p>
    <p>
      <strong>UNIKALNY KOD:</strong> <span> {code} </span>
    </p>
    <img
      // @ts-ignore
      src={imageTypes[type]}
      alt='Wróć na stronę główna i dokonaj ponownego wyboru jeśli problem dalej występuje twoja przeglądarka nie obsługuje JavaScript lub nie masz połączenia z siecią'
      style={{ width: "100%", maxWidth: "580px" }}
    />

    <div
      style={{
        fontSize: "0.7em",
        fontWeight: "normal",
        lineHeight: "1.23em",
        marginBottom: "15px",
      }}
    >
      Kupon ten upoważnia do jednokrotnego odbioru produktu gratis przy kolejnym dowolnym
      zakupie z oferty klasycznej. Kupon ważny jest przez 7 dni od czasu jego
      wygenerowania i może być zrealizowany w dowolnej restauracji McDonald’s w Polsce z
      wyłączeniem restauracji znajdujących się na terenie Portu Lotniczego im. Fryderyka
      Chopina w Warszawie oraz Portu Lotniczego im. Lecha Wałęsy w Gdańsku. Szczegółowy
      regulamin ankiety „Opinia Gości” znajduje się na stronie
      <a
        href='http://62zt.mjt.lu/lnk/AM8AAD6TDwcAAAAAAAAAAI6VDSwAAAAc3d8AAAAAAAwYhQBc9Z51UliYp8_kRviBf-haxGfMRQAHKaM/1/H_gVqGi_Nd7AdmeieWY-iA/aHR0cDovL3d3dy5tY2RvbmFsZHMucGw'
        rel='noreferrer'
        target='_blank'
      >
        www.mcdonalds.pl
      </a>
      w sekcji
      <a
        href='http://62zt.mjt.lu/lnk/AM8AAD6TDwcAAAAAAAAAAI6VDSwAAAAc3d8AAAAAAAwYhQBc9Z51UliYp8_kRviBf-haxGfMRQAHKaM/2/rpoC4TU9YNTKJaBXy3oEZA/aHR0cHM6Ly9tY2RvbmFsZHMucGwvby1tY2RvbmFsZHMvcmVndWxhbWlueQ'
        rel='noreferrer'
        target='_blank'
      >
        Regulaminy
      </a>
    </div>
    <p>Dziękujemy za wzięcie udziału w badaniu!</p>
  </div>
);
