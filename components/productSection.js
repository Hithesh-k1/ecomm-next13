import AsideCategories from './asideCategories';
import PromoCard from './promoCard';
import HeaderBarProducts from './headerBarProducts';
import Products from './products';
import style from './productSection.module.css'

export default function ProductSection({ category }) {
  return (
    <section id={style.product}>
      <aside>
        <AsideCategories />
        <PromoCard />
      </aside>
      <div className={style.main}>
        <HeaderBarProducts />
        <Products category={category} />
      </div>

    </section>
  );
}
