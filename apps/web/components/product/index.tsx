import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductAction from "./ProductAction";

export default function ProductTemplate({ product }) {
  return (
    <div className="justify-between lg:flex">
      <ProductImages images={product?.images || []} title={product.title} />
      <ProductInfo product={product}>
        <ProductAction product={product} />
      </ProductInfo>
    </div>
  );
}
