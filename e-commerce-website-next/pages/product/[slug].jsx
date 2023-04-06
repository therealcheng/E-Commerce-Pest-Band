// pages/product/[slug].js
import { useRouter } from "next/router";
import { getAllProductSlugs, getProductBySlug } from "../../lib/dataHelpers";

const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Render other product properties */}
    </div>
  );
};

export async function getStaticPaths() {
  const slugs = getAllProductSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true, // If set to 'false', show a 404 error for non-existing slugs
  };
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
  };
}

export default ProductPage;
